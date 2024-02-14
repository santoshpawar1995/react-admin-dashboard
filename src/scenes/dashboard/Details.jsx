import { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";


import PersonIcon from '@mui/icons-material/Person';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function Details() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
    const [number, setNumber] = useState(null);
  const [operation, setOperation] = useState('add');

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setNumber(Number(e.target.value));
  };

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  const handleCalculate = () => {
    if (operation === 'add') {
      setResult(result+number);
    } else if (operation === 'subtract') {
      setResult(result-number);
    }
  };
  
    const { empid } = useParams();

    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/users/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
  return (
   
    <div className="container">
      {empdata &&   
              
    <div className="" style={{ "textAlign": "left" }}>
       
        <div className="card-body"></div>
        <Card >
            <Card.Body >
            
        <div className="d-flex" style={{justifyContent:'space-between'}}>
        <div style={{fontSize:'1.5rem',fontWeight:'700'}}>{empdata.name}</div>
        <Link className="mt-2" to="/">Dashboard</Link>
        </div>
        </Card.Body>
    </Card>  
    <Card  className="mt-3">
      <div className="row"  >
        <div className=" col-md-8 col-sm-12 ">
        <Card className="" >
      <ListGroup variant="flush">
        <ListGroup.Item className="d-flex" style={{justifyContent:'space-around'}}><h6  style={{fontWeight:'600'}}>ID#</h6> <span style={{fontSize:'1rem'}}>{empdata.id}</span></ListGroup.Item>
        <ListGroup.Item className="d-flex" style={{justifyContent:'space-around'}}><h6  style={{fontWeight:'600'}}>Username</h6> <span style={{fontSize:'1rem'}}>{empdata.name}</span></ListGroup.Item>
        <ListGroup.Item className="d-flex" style={{justifyContent:'space-around'}}><h6  style={{fontWeight:'600'}}>Email</h6> <span style={{fontSize:'1rem'}}>{empdata.email}</span></ListGroup.Item>
        <ListGroup.Item className="d-flex" style={{justifyContent:'space-around'}}><h6  style={{fontWeight:'600'}}>Address</h6> <span style={{fontSize:'1rem'}}></span></ListGroup.Item>
        <ListGroup.Item className="d-flex" style={{justifyContent:'space-around'}}><h6  style={{fontWeight:'600'}}>City</h6> <span style={{fontSize:'1rem'}}></span></ListGroup.Item>
        <ListGroup.Item className="d-flex" style={{justifyContent:'space-around'}}><h6  style={{fontWeight:'600'}}>Zip Code</h6> <span style={{fontSize:'1rem'}}>{}</span></ListGroup.Item>
        <ListGroup.Item className="d-flex" style={{justifyContent:'space-around'}}><h6  style={{fontWeight:'600'}}>Joined</h6> <span style={{fontSize:'1rem'}}>{}</span></ListGroup.Item>
     
      </ListGroup>
    </Card>
      
      </div>
      <div className=" col-md-4 col-sm-12">
      <div style={{display:'flex',justifyContent:'center'}}>
        <h3 style={{fontWeight:'600'}}>Available Balance:</h3>
       
       </div>
       <div style={{display:'flex',justifyContent:'center'}}>
        <h4  style={{fontWeight:'600'}}>{result}.00INR</h4>
       </div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:'1rem',fontWeight:'500'}}>Amount</Form.Label>
        <Form.Control type="number" placeholder="Enter Amount" value={number} onChange={handleChange} />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{fontSize:'1rem',fontWeight:'500'}}>Select Method</Form.Label>
         <Form.Select aria-label="Default select example" value={operation} onChange={handleOperationChange}>
      <option value="add">Add Amount</option>
     
      <option value="subtract">subtract amount</option>
     
    </Form.Select>
      </Form.Group>
     
      <Button style={{width:'100%'}} variant="dark" onClick={handleCalculate}>
        Submit
      </Button>
    </Form>
    
   
    </div>
    </div>
    </Card>

       
          
        
    </div>
}
<Box marginTop='4rem' sx={{ width: '100%' }}>
   
    <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm:2, md:5}}>    
<Grid  item xs={12} sm={6} md={3}>
          <Box
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          height="4rem"
        >
           <Typography
            variant="h5"
             fontWeight="600"
             color={colors.grey[100]}
             >
             LOAN
           </Typography>
           <Typography
            variant="h5"
             fontWeight="600"
             color={colors.grey[100]}
             >
             0
             
           </Typography>
           <Typography
            variant="h5"
             fontWeight="600"
             color={colors.grey[100]}
             >
             {< NewspaperIcon style={{color:'RED',fontSize:'2rem'}}/>}
           </Typography>
            
        
        </Box>
        </Grid>
        <Grid  item xs={12} sm={6} md={3}>
          <Box
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          height="4rem"
        >
           <Typography
            variant="h5"
             fontWeight="600"
             color={colors.grey[100]}
             >
             DPS
           </Typography>
           <Typography
            variant="h5"
             fontWeight="600"
             color={colors.grey[100]}
             >
             0
             
           </Typography>
           <Typography
            variant="h5"
             fontWeight="600"
             color={colors.grey[100]}
             >
             {<WarehouseIcon style={{color:'GREEN',fontSize:'2rem'}}/>}
           </Typography>
            
        
        </Box>
        </Grid>
        <Grid  item xs={12} sm={6} md={3}>
          <Box
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          height="4rem"
        >
           <Typography
            variant="h5"
             fontWeight="600"
             color={colors.grey[100]}
             >
             FDR
           </Typography>
           <Typography
            variant="h5"
             fontWeight="600"
             color={colors.grey[100]}
             >
             0
             
           </Typography>
           <Typography
            variant="h5"
             fontWeight="600"
             color={colors.grey[100]}
             >
             {< AdminPanelSettingsIcon style={{color:'GREEN',fontSize:'2rem'}}/>}
           </Typography>
            
        
        </Box>
        </Grid>
        <Grid  item xs={12} sm={6} md={3}>
          <Box
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          height="4rem"
        >
           <Typography
            variant="h5"
             fontWeight="600"
             color={colors.grey[100]}
             >
             WITHDRAW
           </Typography>
           <Typography
            variant="h5"
             fontWeight="600"
             color={colors.grey[100]}
             >
             123
             
           </Typography>
           <Typography
            variant="h5"
             fontWeight="600"
             color={colors.grey[100]}
             >
             {<CreditScoreIcon style={{color:'RED',fontSize:'2rem'}}/>}
           </Typography>
            
        
        </Box>
        </Grid>
        </Grid>
        
      
      </Box>
    </div>
  
  )
}

export default Details
