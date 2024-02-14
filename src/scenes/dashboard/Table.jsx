import React, { useState,useEffect } from 'react'
import  { Link,useNavigate} from 'react-router-dom';
function Table() {
  const [empdata,empchange] = useState(null);
  const navigation = useNavigate();
  const loadcontent = (id)=>{
     navigation('/details/'+id);
  }
  const deletecontent = (id)=>{
     if(window.confirm("Do you want to delete")){
         fetch('http://localhost:8000/users/'+id,{
         method:"DELETE"
         }).then((res)=>{
             alert('Record Deleted');
             navigation('/');
             window.location.reload(false)
         }).catch((err)=>{
             console.log(err);
         })
        }
     }
  useEffect(()=>{
     fetch(' http://localhost:8000/users').then((res)=>{
     return res.json(); 
     })
     .then((res)=>{
         empchange(res);
         console.log(empdata);
     }).catch((err)=>{
         console.log(err);
     })

 },[])
  return (
    <div>
      <div className='row'>
        <div className='container'>
       
            <div className='card'>
                <div className='card-title'>
                 
                </div>
                
                <div className='card-body'>
                <Link to="/empadd" className='btn btn-success mb-3'>Add New</Link>
                <table className='table table-bordered bd-dark'>
                    <thead className='bg-dark
                     text-white'>
                        <tr>
                            <td>Serial No</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Status</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                    {empdata &&
                        empdata.map(item=>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td className='text-success'>Active</td>
                                <td>
                                  
                                <button onClick={()=>loadcontent(item.id)} className='btn btn-danger m-1'>Detail</button>
                                {/* <button onClick={()=>deletecontent(item.id)} className='btn btn-danger'>Detail</button> */}
                                </td>
                            </tr>
                        )) 
                    }
                    </tbody>
                </table>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Table
