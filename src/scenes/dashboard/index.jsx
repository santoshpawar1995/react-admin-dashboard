import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import {  Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import ProgressCircle from "../../components/ProgressCircle";
import StatBox from "../../components/StatBox";
import EmailIcon from "@mui/icons-material/Email";
import EnhancedTable from './Table';
import Table from './Table';
import BasicExample from './Table';
import ResponsiveExample from './Table';
import PersonIcon from '@mui/icons-material/Person';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
// import CreateData from "./Table";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Dashboard() {
  const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (

    <Box sx={{ width: '100%' }}>
    <div className='container'>
        <Grid xs={3}>
       
          <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
          <Box>
          
</Box>
</Box>
           
           
        </Grid>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm:2, md:5}}>
        <Grid item xs={12} sm={6} md={3}>
          <Box
          gridRow="span 1"
          // backgroundColor={colors.primary[400]}
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
             ACTIVE CUSTOMERS
             
           </Typography>
           <Typography
            variant="h5"
             fontWeight="600"
             color={colors.grey[100]}
             >
             30
             
           </Typography>
           <Typography
            variant="h5"
             fontWeight="600"
             color={colors.grey[100]}
             >
             {<PersonIcon style={{color:'green',fontSize:'2rem'}}/>}
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
             BLOCKED CUSTOMERS
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
             {<PersonIcon style={{color:'RED',fontSize:'2rem'}}/>}
           </Typography>
            
        
        </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
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
             TOTAL BLOGS
             
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
             {<NewspaperIcon style={{color:'green',fontSize:'2rem'}}/>}
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
             TOTAL DEPOSITES
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
             {<AttachMoneyIcon style={{color:'green',fontSize:'2rem'}}/>}
           </Typography>
            
        
        </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
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
             TOTAL LOAN
             
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
             {<CreditScoreIcon style={{color:'green',fontSize:'2rem'}}/>}
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
             TOTAL PENDING LOAN
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
             {<CreditScoreIcon style={{color:'green',fontSize:'2rem'}}/>}
           </Typography>
            
        
        </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
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
             TOTAL RUNNING LOAN
             
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
             {<CreditScoreIcon style={{color:'green',fontSize:'2rem'}}/>}
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
             TOTAL PAID LOAN
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
             {<CreditScoreIcon style={{color:'GREEN',fontSize:'2rem'}}/>}
           </Typography>
            
        
        </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
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
             TOTAL REJECTED LOAN
             
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
             {<CreditScoreIcon style={{color:'red',fontSize:'2rem'}}/>}
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
             TOTAL DPS
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
             {<WarehouseIcon style={{color:'green',fontSize:'2rem'}}/>}
           </Typography>
            
        
        </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
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
             TOTAL RUNNING DPS
             
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
             {<WarehouseIcon style={{color:'green',fontSize:'2rem'}}/>}
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
             TOTAL MATURED DPS
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
             TOTAL FDR
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
             {<AdminPanelSettingsIcon style={{color:'GREEN',fontSize:'2rem'}}/>}
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
             TOTAL RUNNING FDR
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
             {<AdminPanelSettingsIcon style={{color:'GREEN',fontSize:'2rem'}}/>}
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
             TOTAL CLOSED FDR
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
             {<AdminPanelSettingsIcon style={{color:'RED',fontSize:'2rem'}}/>}
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
             TOTAL TRANSACTIONS
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
             {<AttachMoneyIcon style={{color:'GREEN',fontSize:'2rem'}}/>}
           </Typography>
            
        
        </Box>
        </Grid>
        <Grid  item xs={12} sm={6} md={4}>
          <Box
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          height="4rem"
        >
          <Box>
           <Typography
            variant="h6"
            marginBottom="5px"
             color={colors.grey[100]}
             >
             TOTAL DEPOSITE AMMOUNT
           </Typography>
           <Typography
            variant="h4"
             fontWeight="200"
             color={colors.greenAccent[50]}
             >
             0.00INR
             
           </Typography>
           </Box>
           <Box>
           <Typography
            variant="h5"
             fontWeight="600"
             color={colors.grey[100]}
             >
             {<AttachMoneyIcon style={{color:'GREEN',fontSize:'3rem'}}/>}
           </Typography>
           </Box>
            
        
        </Box>
        </Grid>
        <Grid  item xs={12} sm={6} md={4}>
          <Box
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          height="4rem"
        >
          <Box>
           <Typography
            variant="h6"
            marginBottom="5px"
             color={colors.grey[100]}
             >
             TOTAL WITHDRAW AMMOUNT
           </Typography>
           <Typography
            variant="h4"
             fontWeight="200"
             color={colors.greenAccent[50]}
             >
             0.00INR
             
           </Typography>
           </Box>
           <Box>
           <Typography
            variant="h5"
             fontWeight="600"
             color={colors.grey[100]}
             >
             {<AttachMoneyIcon style={{color:'GREEN',fontSize:'3rem'}}/>}
           </Typography>
           </Box>
            
        
        </Box>
        </Grid>
        <Grid  item xs={12} sm={6} md={4}>
          <Box
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          height="4rem"
        >
          <Box>
           <Typography
            variant="h6"
            marginBottom="5px"
             color={colors.grey[100]}
             >
             TOTAL WITHDRAW CHARGE AMOUNT
           </Typography>
           <Typography
            variant="h4"
             fontWeight="200"
             color={colors.greenAccent[50]}
             >
             0.00INR
             
           </Typography>
           </Box>
           <Box>
           <Typography
            variant="h5"
             fontWeight="600"
             color={colors.grey[100]}
             >
             {<AttachMoneyIcon style={{color:'GREEN',fontSize:'3rem'}}/>}
           </Typography>
           </Box>
            
        
        </Box>

        </Grid>
        
      </Grid>
      <Box marginTop="2.4rem">
      <Table/>
      </Box>
      </div>
    </Box>
    
  );
}


