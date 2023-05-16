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
  fontSize:'15px',
  width:'100px',
  fontWeight:'650'
  
  
   }
  
   const Clearbtn={
      backgroundColor:'black',
      borderColor:'transparent',
      borderRadius:'10px',
      color:'white',
      padding:'10px',
      
  
      width:'100px',
      fontWeight:'650',
   }
const skubnt={
width:'280px',
height:'35px',
borderColor:'transparent',

borderRadius: '86px',

backgroundColor:'rgba(231, 231, 231, 1)',
color: 'rgba(50, 51, 58, 1)',
fontSize: '15px',
paddingLeft: '20px',
boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",




outlineColor:'transparent', 
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
<Box sx={{ maxWidth: { xs: 'auto', sm: 'auto' }, bgcolor: 'background.paper' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
           value={value}
           onChange={handleChange}
           variant="scrollable"
           scrollButtons
           allowScrollButtonsMobile
           aria-label="scrollable force tabs example"
         >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Awaiting Payments" {...a11yProps(1)} />
          <Tab label="Pending" {...a11yProps(2)} />
          <Tab label="Processing" {...a11yProps(3)} />
          <Tab label="Dispatched" {...a11yProps(4)} />
          <Tab label="Completed" {...a11yProps(5)} />
          <Tab label="Closed" {...a11yProps(6)} />
          <Tab label="Return" {...a11yProps(7)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <div className='container-fluid' id='tabcontainer' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',width:'auto',overflowX:'scroll'}}>
      <button className='Buttonstik' data-toggle="collapse" data-target="#demo1">All<span style={{float:'right'}}><img src={leftarrow} alt="" /></span> </button>

      <div id="demo1" class="collapse">

      <div className='container' >
            <div className='Dashboardheading'><h3>All</h3></div>
         <div align='center' className='row' style={{marginTop:'20px'}}>
         <div style={{marginTop:'20px'}} ><input  style={skubnt} type="date" /></div>
            <div style={{marginTop:'20px'}} >
            <div style={{marginTop:'20px'}} ><input  placeholder='please enter order number' style={skubnt} type="text" /></div>
              </div>
            
            <div style={{marginTop:'20px'}} >
              <select  style={skubnt}  placeholder='Return order' name="name" id="value">
                <option value="">Select a Shipping method</option>
                <option value="">#method</option>
                <option value="">#method</option>
              </select>
            </div>
          </div>
          
                <div className='row'  style={{marginTop:'20px'}}>

                  <div align='center' style={{marginTop:'20px'}} >
                    <div><button style={serchbtn}>Search</button></div>
                    <div style={{marginTop:'20px'}}><button style={Clearbtn}>Clear</button></div>
                </div>
                </div>
         </div>
         
      </div>
      <div style={{borderRadius:'30px',marginTop:'10px',width:'auto',overflow:'scroll'}}>
      <div style={{ display: 'block',color:'black',padding:'7px',borderRadius:'30px', }}  >
               <div className='row'  style={{backgroundColor:'#FDE31A',width:'1000px',color:'black',borderRadius:'20px',margin:'20px 20px 20px 0px',padding:'7px'}}>
                  <div className='col-2'> 
                  <p >Your Order Number.</p>
                 </div>
                  <div className='col-2'><p >Status</p></div>
                  <div className='col'>
                  <p>Cost 
                  
                    </p>
                  </div>
                
                 
                  <div className='col'>
                  <p>Quantity</p>
                  </div>
                  <div className='col'>
                  <p>Shipping Method</p>
                  </div>
                  <div className='col'>
                  <p>Tracking Number</p>
                  </div>
                  <div className='col'>
                  <p>Amount</p>
                  </div>
                  <div className='col'>
                  <p>Action</p>
                  </div>

                </div>
               </div>
      </div>
    
      </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className='container-fluid' id='tabcontainer' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',width:'auto',overflowX:'scroll'}}>
      <button className='Buttonstik' data-toggle="collapse" data-target="#demo2">Invalid Order <span style={{float:'right'}}><img src={leftarrow} alt="" /></span></button>

      <div id="demo2" class="collapse">

      <div className='container' >
            <div className='Dashboardheading'><h3>Invalid Order</h3></div>
         <div align='center' className='row' style={{marginTop:'20px'}}>
            <div style={{marginTop:'20px'}} >
              <select style={skubnt} name="name" id="value">
                <option value="">Your Order Time</option>
                <option value="">Your Order Time</option>
                <option value="">CJ Time</option>
              </select>
              </div>
            <div style={{marginTop:'20px'}} ><input  style={skubnt} type="date" /></div>
            <div style={{marginTop:'20px'}} >
              <select  style={skubnt}  name="name" id="value">
                <option value="">Select a Shipping method</option>
                <option value="">#method</option>
                <option value="">#method</option>
              </select>
            </div>
          </div>
          <div align='center' className='row'  style={{marginTop:'20px'}} >
                  <div style={{marginTop:'20px'}}><input   style={skubnt} type="date"  /></div>
                  <div style={{marginTop:'20px'}} >
                 
              <select  style={skubnt}  name="name" id="value">
                <option value="">Awaiting Payments</option>
                <option value="">#method</option>
                <option value="">#method</option>
              </select>

                  </div>
                  <div style={{marginTop:'20px'}} ><input  style={skubnt} type="text" placeholder='Please enter order number' /></div>
                </div>
                <div className='row'  style={{marginTop:'20px'}}>
                <div  >
                 
                 <select  style={skubnt}  name="name" id="value">
                   <option value="">Awaiting Payments</option>
                   <option value="">#method</option>
                   <option value="">#method</option>
                 </select>
   
                     </div>
 
                  <div align='center' style={{marginTop:'20px'}} >
                    <div><button style={serchbtn}>Search</button></div>
                    <div style={{marginTop:'20px'}}><button  style={Clearbtn}>Clear</button></div>
                   </div>
                </div>
         </div>
        
      
      </div>
       <div style={{borderRadius:'30px',marginTop:'10px',width:'auto',overflow:'scroll'}}>
      <div style={{ display: 'block',color:'black',padding:'7px',borderRadius:'30px', }}  >
               <div className='row'  style={{backgroundColor:'#FDE31A',width:'1000px',color:'black',borderRadius:'20px',margin:'20px 20px 20px 0px',padding:'7px'}}>
               <div className='col-2'> 
                  <p >Your Order Number.</p>
                 </div>
                  <div className='col-2'><p >Status</p></div>
                  <div className='col'>
                  <p> Quantity
                 
                    </p>
                  </div>
                  <div className='col'>
                  <p>Amount</p>
                  </div>
                  <div className='col'>
                  <p>Action</p>
                  </div>

                </div>
               </div>
      </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className='container-fluid' id='tabcontainer' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',width:'auto',overflowX:'scroll'}}>
        <button className='Buttonstik' data-toggle="collapse" data-target="#demo3">Declined <span style={{float:'right'}}><img src={leftarrow} alt="" /></span></button>

            <div id="demo3" class="collapse">

            <div className='container' >
                  <div className='Dashboardheading'><h3>Declined </h3></div>
              <div align='center' className='row' style={{marginTop:'20px'}}>
              <div style={{marginTop:'20px'}} ><input  style={skubnt} type="date" /></div>
              <div style={{marginTop:'20px'}}><input   style={skubnt} type="text" placeholder='Please enter order number' /></div>
                  <div style={{marginTop:'20px'}} >
                    <select style={skubnt} name="name" id="value">
                      <option value="">All</option>
                      <option value="">Your Order Time</option>
                      <option value="">CJ Time</option>
                    </select>
                    </div>
                    <div style={{marginTop:'20px'}}><input   style={skubnt} type="text" placeholder='Please enter order number' /></div>
                
                  <div style={{marginTop:'20px'}} >
                    <select  style={skubnt}  name="name" id="value">
                      <option value="">Return orders</option>
                      <option value="">#method</option>
                      <option value="">#method</option>
                    </select>
                  </div>
                </div>
                
              </div>
                
            </div>

        <div style={{borderRadius:'30px',marginTop:'10px',width:'auto',overflow:'scroll'}}>
      <div style={{ display: 'block',color:'black',padding:'7px',borderRadius:'30px', }}  >
               <div className='row'  style={{backgroundColor:'#FDE31A',width:'1400px',color:'black',borderRadius:'20px',margin:'20px 20px 20px 0px',padding:'7px'}}>
               <div className='col-2'> 
                    <p >Your Order Number.</p>
                  </div>
                    <div className='col-2'><p > Order Source</p></div>
                    <div className='col'>
                    <p>Quantity
                    
                      </p>
                    </div>
                    <div className='col'>
                    <p>Paid Time</p>
                    </div>
                    <div className='col'>
                    <p>Status</p>
                    </div>
                    <div className='col'>
                    <p>Shipping Info</p>
                    </div>
                    <div className='col'>
                    <p>Shipping Method</p>
                    </div>
                    <div className='col'>
                    <p>Tracking number</p>
                    </div>
                    <div className='col'>
                    <p>Amount </p>
                    </div>
                    <div className='col'>
                    <p>Action </p>
                    </div>
               </div>
      </div>
        
     
      </div>
    </div>
  
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div className='container-fluid' id='tabcontainer' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',width:'auto',overflowX:'scroll'}}>
      <button className='Buttonstik' data-toggle="collapse" data-target="#demo4">Processing <span style={{float:'right'}}><img src={leftarrow} alt="" /></span></button>

      <div id="demo4" class="collapse">

      <div className='container' >
            <div className='Dashboardheading'><h3>Processed </h3></div>
         <div align='center' className='row' style={{marginTop:'20px'}}>
         <div style={{marginTop:'20px'}} ><input  style={skubnt} type="date" /></div>
         <div style={{marginTop:'20px'}}><input   style={skubnt} type="text" placeholder='Please enter order number' /></div>
            <div style={{marginTop:'20px'}} >
              <select style={skubnt} name="name" id="value">
                <option value="">All</option>
                <option value="">Your Order Time</option>
                <option value="">CJ Time</option>
              </select>
              </div>
              <div style={{marginTop:'20px'}}>
             
              <select style={skubnt} name="name" id="value">
                <option value="">All</option>
                <option value="">Your Order Time</option>
                <option value="">CJ Time</option>
              </select>
              </div>
             
           
            
          </div>
          
          <div align='center' style={{marginTop:'20px'}} >
                    <div><button style={serchbtn}>Search</button></div>
                    <div style={{marginTop:'20px'}}><button  style={Clearbtn}>Clear</button></div>
                   </div>
          
         </div>
          
      </div>
      <div style={{borderRadius:'30px',marginTop:'10px',width:'auto',overflow:'scroll'}}>
      <div style={{ display: 'block',color:'black',padding:'7px',borderRadius:'30px', }}  >
               <div className='row'  style={{backgroundColor:'#FDE31A',width:'1400px',color:'black',borderRadius:'20px',margin:'20px 20px 20px 0px',padding:'7px'}}>
               <div className='col-2'> 
                  <p >Your Order Number.</p>
                 </div>
                  <div className='col-2'><p > Order Source</p></div>
                  <div className='col'>
                  <p>Quantity
                  
                    </p>
                  </div>
                  <div className='col'>
                  <p>Paid Time</p>
                  </div>
                  <div className='col'>
                  <p>Status</p>
                  </div>
                  <div className='col'>
                  <p>Shipping Info</p>
                  </div>
                  <div className='col'>
                  <p>Shipping Method</p>
                  </div>
                  <div className='col'>
                  <p>Tracking number</p>
                  </div>
                  <div className='col'>
                  <p>Amount </p>
                  </div>
                  <div className='col'>
                  <p>Action </p>
                  </div>
               </div>
      </div>
        
     
      </div>
      
      </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div className='container-fluid' id='tabcontainer' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',width:'auto',overflowX:'scroll'}}>
      <button className='Buttonstik' data-toggle="collapse" data-target="#demo5">Dispateched <span style={{float:'right'}}><img src={leftarrow} alt="" /></span></button>

      <div id="demo5" class="collapse">

      <div className='container' >
            <div className='Dashboardheading'><h3>Dispateched</h3></div>
         <div align='center' className='row' style={{marginTop:'20px'}}>
         <div style={{marginTop:'20px'}} ><input  style={skubnt} type="date" /></div>
         <div style={{marginTop:'20px'}}><input   style={skubnt} type="text" placeholder='Please enter order number' /></div>
            <div style={{marginTop:'20px'}} >
              <select style={skubnt} name="name" id="value">
                <option value="">All</option>
                <option value="">Your Order Time</option>
                <option value="">CJ Time</option>
              </select>
              </div>
              
             
           
            
          </div>
          
          <div align='center' style={{marginTop:'20px'}} >
                    <div><button style={serchbtn}>Search</button></div>
                    <div style={{marginTop:'20px'}}><button  style={Clearbtn}>Clear</button></div>
                   </div>
          
         </div>
          
      </div>
      <div style={{borderRadius:'30px',marginTop:'10px',width:'auto',overflow:'scroll'}}>
      <div style={{ display: 'block',color:'black',padding:'7px',borderRadius:'30px', }}  >
               <div className='row'  style={{backgroundColor:'#FDE31A',width:'1400px',color:'black',borderRadius:'20px',margin:'20px 20px 20px 0px',padding:'7px'}}>
               <div className='col-2'> 
                  <p >Your Order Number.</p>
                 </div>
                  <div className='col-2'><p > Order Source</p></div>
                  <div className='col'>
                  <p>Quantity
                  
                    </p>
                  </div>
                  <div className='col'>
                  <p>Paid Time</p>
                  </div>
                  <div className='col'>
                  <p>Status</p>
                  </div>
                  <div className='col'>
                  <p>Shipping Info</p>
                  </div>
                  <div className='col'>
                  <p>Shipping Method</p>
                  </div>
                  <div className='col'>
                  <p>Tracking number</p>
                  </div>
                  <div className='col'>
                  <p>Amount </p>
                  </div>
                  <div className='col'>
                  <p>Action </p>
                  </div>
               </div>
      </div>
        
     
      </div>
     
      </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <div className='container-fluid' id='tabcontainer' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',width:'auto',overflowX:'scroll'}}>
      <button className='Buttonstik' data-toggle="collapse" data-target="#demo6">Completed <span style={{float:'right'}}><img src={leftarrow} alt="" /></span></button>

      <div id="demo6" class="collapse">

      <div className='container' >
            <div className='Dashboardheading'><h3>Dispateched</h3></div>
         <div align='center' className='row' style={{marginTop:'20px'}}>
         <div style={{marginTop:'20px'}} ><input  style={skubnt} type="date" /></div>
         <div style={{marginTop:'20px'}}><input   style={skubnt} type="text" placeholder='Please enter order number' /></div>
            <div style={{marginTop:'20px'}} >
              <select style={skubnt} name="name" id="value">
                <option value="">All</option>
                <option value="">Your Order Time</option>
                <option value="">CJ Time</option>
              </select>
              </div>
              
             
           
            
          </div>
          
          <div align='center' style={{marginTop:'20px'}} >
                    <div><button style={serchbtn}>Search</button></div>
                    <div style={{marginTop:'20px'}}><button  style={Clearbtn}>Clear</button></div>
                   </div>
          
         </div>
          
      </div>
      <div style={{borderRadius:'30px',marginTop:'10px',width:'auto',overflow:'scroll'}}>
      <div style={{ display: 'block',color:'black',padding:'7px',borderRadius:'30px', }}  >
      <div className='row' style={{backgroundColor:'#FDE31A',width:'1400px',color:'black',borderRadius:'20px',margin:'20px 20px 20px 0px',padding:'7px'}}>
                  <div className='col-2'> 
                  <p >Your Order Number.</p>
                 </div>
                  <div className='col-2'><p > Order Source</p></div>
                  <div className='col'>
                  <p>Quantity
                  
                    </p>
                  </div>
                  <div className='col'>
                  <p>Paid Time Dispatched time</p>
                  </div>
                  <div className='col'>
                  <p>Status</p>
                  </div>
                  <div className='col'>
                  <p>Shipping Info</p>
                  </div>
                  <div className='col'>
                  <p>Shipping Method</p>
                  </div>
                  <div className='col'>
                  <p>Tracking number</p>
                  </div>
                  <div className='col'>
                  <p>Amount </p>
                  </div>
                  <div className='col'>
                  <p>Action </p>
                  </div>
                </div>
      </div>
        
     
      </div>
      
      </div>
      </TabPanel>
      <TabPanel value={value} index={6}>
    <div className='container-fluid' id='tabcontainer' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',width:'auto',overflowX:'scroll'}}>
      <button className='Buttonstik' data-toggle="collapse" data-target="#demo7">Closed<span style={{float:'right'}}><img src={leftarrow} alt="" /></span></button>

      <div id="demo7" class="collapse">

      <div className='container' >
            <div className='Dashboardheading'><h3>Closed</h3></div>
         <div align='center' className='row' style={{marginTop:'20px'}}>
         <div style={{marginTop:'20px'}} ><input  style={skubnt} type="date" /></div>
         <div style={{marginTop:'20px'}}><input   style={skubnt} type="text" placeholder='Please enter order number' /></div>
            <div style={{marginTop:'20px'}} >
              <select style={skubnt} name="name" id="value">
                <option value="">All</option>
                <option value="">Your Order Time</option>
                <option value="">CJ Time</option>
              </select>
              </div>
              
             
           
            
          </div>
          
          <div align='center' style={{marginTop:'20px'}} >
                    <div><button style={serchbtn}>Search</button></div>
                    <div style={{marginTop:'20px'}}><button  style={Clearbtn}>Clear</button></div>
                   </div>
          
         </div>
      
      </div>
      <div style={{borderRadius:'30px',marginTop:'10px',width:'auto',overflow:'scroll'}}>
      <div style={{ display: 'block',color:'black',padding:'7px',borderRadius:'30px', }}  >
      <div className='row' style={{backgroundColor:'#FDE31A',width:'1400px',color:'black',borderRadius:'20px',margin:'20px 20px 20px 0px',padding:'7px'}}>
                  <div className='col-2'> 
                  <p >Your Order Number.</p>
                 </div>
                  <div className='col-2'><p > Order Source</p></div>
                  <div className='col'>
                  <p>Quantity
                  
                    </p>
                  </div>
                  <div className='col'>
                  <p>Paid Time Dispatched time</p>
                  </div>
                  <div className='col'>
                  <p>Status</p>
                  </div>
                  <div className='col'>
                  <p>Shipping Info</p>
                  </div>
                  <div className='col'>
                  <p>Shipping Method</p>
                  </div>
                  <div className='col'>
                  <p>Tracking number</p>
                  </div>
                  <div className='col'>
                  <p>Amount </p>
                  </div>
                  <div className='col'>
                  <p>Action </p>
                  </div>
                </div>
      </div>
        
     
      </div>
      
      </div>
      </TabPanel>
      <TabPanel value={value} index={7}>
      <div className='container-fluid' id='tabcontainer' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',width:'auto',overflowX:'scroll'}}>
      <button className='Buttonstik' data-toggle="collapse" data-target="#demo7">Return<span style={{float:'right'}}><img src={leftarrow} alt="" /></span></button>

      <div id="demo7" class="collapse">

      <div className='container' >
            <div className='Dashboardheading'><h3>Return</h3></div>
         <div align='center' className='row' style={{marginTop:'20px'}}>
         
         <div style={{marginTop:'20px'}}><input   style={skubnt} type="text" placeholder='Please enter order number' /></div>
         
              
             
           
            
          </div>
          
          <div align='center' style={{marginTop:'20px'}} >
                    <div><button style={serchbtn}>Search</button></div>
                    <div style={{marginTop:'20px'}}><button  style={Clearbtn}>Clear</button></div>
                   </div>
          
         </div>
      
      </div>
      <div style={{borderRadius:'30px',marginTop:'10px',width:'auto',overflow:'scroll'}}>
      <div style={{ display: 'block',color:'black',padding:'7px',borderRadius:'30px', }}  >
      <div className='row'   style={{backgroundColor:'#FDE31A',width:'1700px',color:'black',borderRadius:'20px',margin:'20px 20px 20px 0px',padding:'7px'}}>
                  <div className='col-2'> 
                  <p >Your Order Number.</p>
                 </div>
                  <div className='col-2'><p > Order Source</p></div>
                  <div className='col'>
                  <p>Quantity
                  
                    </p>
                  </div>
                  <div className='col'>
                  <p>Paid Time Dispatched time</p>
                  </div>
                  <div className='col'>
                  <p>Status</p>
                  </div>
                  <div className='col'>
                  <p>Shipping Info</p>
                  </div>
                  <div className='col'>
                  <p>Shipping Method</p>
                  </div>
                  <div className='col'>
                  <p>Tracking number</p>
                  </div>
                  <div className='col'>
                  <p>Reasons </p>
                  </div>
                  <div className='col'>
                  <p>Action </p>
                  </div>
                </div>
      </div>
        
     
      </div>
      
      </div>
      </TabPanel>
    </Box>

</div>
  );
}