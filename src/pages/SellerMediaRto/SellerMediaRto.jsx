import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import MediaNavbar from '../../components/MediaNavbar/MediaNavbar';
import leftarrow from '../../assets/leftarrow.png'

const serchbtn={
    backgroundColor:'#FDE31A',
    borderColor:'transparent',
    borderRadius:'10px',
    
    padding:'10px',
    outlineColor:'#FDE31A',
    marginRight:'10px',
    fontSize:'12px',
    width:'150px',
    fontWeight:'650',
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
      
      
       }

       const paybtn={
        backgroundColor:'#FDE31A',
        borderColor:'transparent',
        borderRadius:'10px',
        
        padding:'10px',
        outlineColor:'#FDE31A',
        marginRight:'10px',
        fontSize:'15px',
        width:'150px',
        fontWeight:'650',
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
       }
      
       const Clearbtn={
        backgroundColor:'black',
        borderColor:'transparent',
        borderRadius:'10px',
        color:'white',
        padding:'10px',
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
        
    
        width:'150px',
        fontWeight:'650', 
       }
      
       const Order={
          backgroundColor:'#FDE31A',
          borderColor:'transparent',
          borderRadius:'10px',
          fontWeight:'400',
          fontSize:'15px',
         
        
       }
      
  
       const Pickbtn={
        backgroundColor:'#FDE31A',
        borderColor:'transparent',
        borderRadius:'10px',
        
        padding:'10px',
        outlineColor:'#FDE31A',
        marginRight:'10px',
        fontSize:'15px',
        width:'200',
        fontWeight:'650',
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
           
       }
       const skubnt={
        width:'230px',
   
        height:'35px',
        borderColor:'transparent',
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
        borderRadius: '10px',
       
        backgroundColor:'rgba(231, 231, 231, 1)',
        color: 'rgba(50, 51, 58, 1)',
        fontSize: '13px',
       
        outlineColor:'rgba(0, 0, 0, 0.15)',  
      }
     const skubntdate={
      width:'250px',
   
      height:'35px',
      borderColor:'transparent',
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
      borderRadius: '10px',
     
      backgroundColor:'rgba(231, 231, 231, 1)',
      color: 'rgba(50, 51, 58, 1)',
      fontSize: '13px',
     
      outlineColor:'rgba(0, 0, 0, 0.15)',  
     }

const buttonheader={
  backgroundColor:'#FDE31A',
  borderRadius:'15px',
  width:'auto',
  alignItems:'center',
  height:'80px',
  alignSelf:'center'
  
}




function TabPanel(props) {

  
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
<div>
  <MediaNavbar />
<Box sx={{ width: '100%',paddingBottom:'100px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
         value={value}
         onChange={handleChange}
         variant="scrollable"
         scrollButtons
         allowScrollButtonsMobile
         aria-label="scrollable force tabs example"
         >
          <Tab label="Awaiting Pickup" {...a11yProps(0)} />
          <Tab label="Processed" {...a11yProps(1)} />
          <Tab label="Awaiting Payments" {...a11yProps(2)} />
          <Tab label="Paid" {...a11yProps(3)} />
          <Tab label="Closed" {...a11yProps(4)} />
          <Tab label="Expired" {...a11yProps(5)} />
          <Tab label="Abnormal Return" {...a11yProps(6)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <div className='container-fluid' id='tabcontainer' style={{width:'auto' ,overflowX:'scroll'}}>
      <button className='Buttonstik' data-toggle="collapse" data-target="#demo1">Awaiting Pickup<span style={{float:'right'}}><img src={leftarrow} alt="" /></span> </button>

      <div id="demo1" className="collapse">
     
     <div className='container' style={{ display: 'block',color:'black',borderRadius:'30px',}}>
          <div className="container" style={{ display: 'block',color:'black',padding:'20px',borderRadius:'30px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)"}} >
          <div align='center' className='row' style={{marginTop:'20px'}}>
            
            
            <div className='col'><input style={skubnt} placeholder='please enter order number' type="text" />
            </div>
            

      </div>
        
      <div align='center' className='row' style={{marginTop:'20px'}}>
        <div ><button style={serchbtn}>submit</button></div>
        <div style={{marginTop:'20px'}}><button style={Pickbtn}> Send Pickup Notification</button></div>
      </div>
          </div>
          
          

          </div>

          
         
      </div>
      <div style={{borderRadius:'30px',marginTop:'10px',width:'auto',overflow:'scroll'}}>
      <div style={{ display: 'block',color:'black',padding:'7px',borderRadius:'30px', }}  >
      <div className='row'   style={{backgroundColor:'#FDE31A',width:'1700px',color:'black',borderRadius:'20px',margin:'20px 20px 20px 0px',padding:'7px'}}>
      <div className='col'><button style={Order}>Your Order Number</button></div>
                <div className='col'><button style={Order}>Order Source</button></div>
                <div className='col'><button style={Order}>Quanitity</button></div>
                <div className='col'><button style={Order}>Paid Time</button></div>
                <div className='col'><button style={Order}>Status</button></div>
                <div className='col'><button style={Order}>Address</button></div>
                <div className='col'><button style={Order}>Shipping Info</button></div>
                <div className='col'><button style={Order}>Shipping Method</button></div>
                <div className='col'><button style={Order}>Tracking Number</button></div>
                <div className='col'><button style={Order}>Amount</button></div>
                <div className='col'><button style={Order}>Action</button></div>
                </div>
      </div>
        
     
      </div>
     </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className='container-fluid' id='tabcontainer' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',width:'auto',overflowX:'scroll'}}>
      <button className='Buttonstik' data-toggle="collapse" data-target="#demo2">Processed <span style={{float:'right'}}><img src={leftarrow} alt="" /></span></button>

      <div id="demo2" className="collapse">

      <div  className='container' style={{ display: 'block',color:'black',borderRadius:'30px',}}>
           <div className="container" style={{ display: 'block',color:'black',padding:'20px',borderRadius:'30px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)"}} >
           <div align='center' className='row' style={{marginTop:'20px'}}>
            <div><input style={skubnt} placeholder='please enter order number' type="text" /></div>

            </div>
        
            <div align='center' style={{marginTop:'20px'}}><button style={serchbtn}>Search</button></div>
          </div>
           </div>
          
      </div>
      <div style={{borderRadius:'30px',marginTop:'10px',width:'auto',overflow:'scroll'}}>
           <div  style={{ display: 'block',color:'black',padding:'7px',borderRadius:'30px', }}>
           <div  className='row'   style={{backgroundColor:'#FDE31A',width:'1700px',color:'black',borderRadius:'20px',margin:'20px 20px 20px 0px',padding:'7px'}}>
              
                <div className='col'><button style={Order}>Your Order Number</button></div>
                <div className='col'><button style={Order}>Order Source</button></div>
                <div className='col'><button style={Order}>Quanitity</button></div>
                <div className='col'><button style={Order}>Paid Time</button></div>
                <div className='col'><button style={Order}>Status</button></div>
                <div className='col'><button style={Order}>Address</button></div>
                <div className='col'><button style={Order}>Shipping Info</button></div>
                <div className='col'><button style={Order}>Shipping Method</button></div>
                <div className='col'><button style={Order}>Tracking Number</button></div>
                <div className='col'><button style={Order}>Amount</button></div>
                <div className='col'><button style={Order}>Action</button></div>



                </div>
           </div>
            </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className='container-fluid' id='tabcontainer' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',width:'auto',overflowX:'scroll'}}>
      <button className='Buttonstik' data-toggle="collapse" data-target="#demo3">Awaiting Payments <span style={{float:'right'}}><img src={leftarrow} alt="" /></span></button>

      <div id="demo3" className="collapse">
 
      <div className='continer' style={{ display: 'block',color:'black',borderRadius:'30px'}}>
            
            <div className="container" style={{ display: 'block',color:'black',padding:'20px',borderRadius:'30px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)"}} >
            <div className='row' style={{marginTop:'20px'}}>
            <div align='center' ><input style={skubnt} type="text"  placeholder='please enter order number' /></div>
         
            
           

          </div>
         
          <div align='center' className='row' style={{marginTop:'20px'}}>
            <div style={{marginTop:'20px'}} ><button style={serchbtn}>Search</button></div>
          
            <div style={{marginTop:'20px'}} ><button style={serchbtn}>Upload Excel</button></div>
            <div  style={{marginTop:'20px'}}><button style={serchbtn}>Download Excel</button></div>
          </div>
            </div>

         
          
            </div>
           
          
          
          
      </div>
      <div style={{borderRadius:'30px',marginTop:'10px',width:'auto',overflow:'scroll'}}>
           <div  style={{ display: 'block',color:'black',padding:'7px',borderRadius:'30px', }}>
           <div  className='row'   style={{backgroundColor:'#FDE31A',width:'1700px',color:'black',borderRadius:'20px',margin:'20px 20px 20px 0px',padding:'7px'}}>
              
               <div className='col'><button style={Order}> Order number</button></div>
            <div className='col'><button style={Order}> Store Order Number</button></div>
            <div className='col'><button style={Order}> Order Source</button></div>

            <div className='col'><button style={Order}>Tracking Number</button></div>
            <div className='col'><button style={Order}>Pick Up Carrier Contact Info</button></div>
            <div className='col'><button style={Order}>Resending Fee</button></div>
            <div className='col'><button style={Order}>Deadline</button></div>
            <div className='col'><button style={Order}>Note</button></div>
            <div className='col'><button style={Order}>Shipping Info</button></div>
            <div className='col'><button style={Order}>Action</button></div>



                </div>
           </div>
            </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div className='container-fluid' id='tabcontainer' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',width:'auto',overflowX:'scroll'}}>
      <button className='Buttonstik' data-toggle="collapse" data-target="#demo4">Paid <span style={{float:'right'}}><img src={leftarrow} alt="" /></span></button>

      <div id="demo4" className="collapse">

      <div style={{ display: 'block',color:'black',borderRadius:'30px'}}>
                <div className="container" style={{ display: 'block',color:'black',padding:'20px',borderRadius:'30px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)"}} >
                <div align='center' className='row' style={{marginTop:'20px'}}>

                  <div ><input style={skubnt} placeholder='please enter order number' type="text" /></div>
                  <div  align='center' style={{marginTop:'20px'}}><button style={serchbtn}>Search</button></div>



                  </div>
                </div>

               

              </div>
          
      </div>

      <div style={{borderRadius:'30px',marginTop:'10px',width:'auto',overflow:'scroll'}}>
           <div  style={{ display: 'block',color:'black',padding:'7px',borderRadius:'30px', }}>
           <div  className='row'   style={{backgroundColor:'#FDE31A',width:'1700px',color:'black',borderRadius:'20px',margin:'20px 20px 20px 0px',padding:'7px'}}>
              
           <div className='col'><button style={Order}>Your Order Number</button></div>
                <div className='col'><button style={Order}>Tracking Number</button></div>
                <div className='col'><button style={Order}>Pick up carrier contact info</button></div>
                <div className='col'><button style={Order}>Resending Fee</button></div>
    
        <div className='col'><button style={Order}>Deadline</button></div>
       
       <div className='col'><button style={Order}>Note</button></div>
       <div className='col'><button style={Order}>Action</button></div>



                </div>
           </div>
            </div>
      
      </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div className='container-fluid' id='tabcontainer' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',width:'auto',overflowX:'scroll'}}>
      <button className='Buttonstik' data-toggle="collapse" data-target="#demo5">Closed <span style={{float:'right'}}><img src={leftarrow} alt="" /></span></button>

      <div id="demo5" className="collapse">

      <div style={{ display: 'block',color:'black',borderRadius:'30px'}}>
                <div  className="container" style={{ display: 'block',color:'black',padding:'20px',borderRadius:'30px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)"}}>
                <div align='center' className='row' style={{marginTop:'20px'}}>
     
            
                <div align='center'  ><input style={skubnt} placeholder='please enter order number' type="text" /><span></span></div>
                

            </div>
            <div align='center' style={{marginTop:'20px'}}><button style={serchbtn}>submit</button></div>
                </div>
                
              </div>
             
          
      </div>
      <div style={{borderRadius:'30px',marginTop:'10px',width:'auto',overflow:'scroll'}}>
           <div  style={{ display: 'block',color:'black',padding:'7px',borderRadius:'30px', }}>
           <div  className='row'   style={{backgroundColor:'#FDE31A',width:'1700px',color:'black',borderRadius:'20px',margin:'20px 20px 20px 0px',padding:'7px'}}>
              
           <div className='col'><button style={Order}>Your Order Number</button></div>
        <div className='col'><button style={Order}>Store Order Number</button></div>
        <div className='col'><button style={Order}>Order Source</button></div>
        <div className='col'><button style={Order}>Tracking Number</button></div>
        <div className='col'><button style={Order}>Pick up carrier contact info</button></div>
        <div className='col'><button style={Order}>Resending Fee</button></div>
        <div className='col'><button style={Order}>Deadline</button></div>
       
        <div className='col'><button style={Order}>Note</button></div>
        <div className='col'><button style={Order}>Action</button></div>



                </div>
           </div>
            </div>

      </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <div className='container-fluid' id='tabcontainer' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',width:'auto',overflowX:'scroll'}}>
      <button className='Buttonstik' data-toggle="collapse" data-target="#demo6">Expired <span style={{float:'right'}}><img src={leftarrow} alt="" /></span></button>

      <div id="demo6" className="collapse">

      <div className='container' style={{ display: 'block',color:'black',borderRadius:'30px',}}>
                <div className='container' style={{ display: 'block',color:'black',padding:'20px',borderRadius:'30px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)"}}>
                <div className='row' style={{marginTop:'20px'}}>
            <div ><input style={skubntdate} type="date" /></div>
            <div  style={{marginTop:'20px'}} ><input style={skubnt} placeholder='please enter order number' type="text" /></div>
            <div  style={{marginTop:'20px'}} >
                <select  style={skubnt} name="All" id="">
                    <option value="">All</option>
                    <option value=""></option>
                </select>
                </div>
   

          </div>
          <div style={{marginTop:'20px'}} ><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>
                </div>

              </div>
           
      
          
      </div>
      <div style={{borderRadius:'30px',marginTop:'10px',width:'auto',overflow:'scroll'}}>
           <div  style={{ display: 'block',color:'black',padding:'7px',borderRadius:'30px', }}>
           <div  className='row'   style={{backgroundColor:'#FDE31A',width:'1700px',color:'black',borderRadius:'20px',margin:'20px 20px 20px 0px',padding:'7px'}}>
              
           <div className='col'><button style={Order}>Your Order Number</button></div>
           
            <div className='col'><button style={Order}>Store Order Number</button></div>
            <div className='col'><button style={Order}>Order Source</button></div>
            
            <div className='col'><button style={Order}>Tracking Number</button></div>
            <div className='col'><button style={Order}>Re-sending fee</button></div>
            <div className='col'><button style={Order}>Action</button></div>



                </div>
           </div>
            </div>
      
      </div>
      </TabPanel>
    
    </Box>

</div>
  );
}