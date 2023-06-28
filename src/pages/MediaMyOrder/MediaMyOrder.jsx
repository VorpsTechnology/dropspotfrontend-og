import  React ,{useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import MediaNavbar from '../../components/MediaNavbar/MediaNavbar';
import leftarrow from '../../assets/leftarrow.png'
import { useHistory} from 'react-router-dom';

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
  const handelTabCLick = (e) => {
    setTabSelected(e);
  };
  const [tabSelected, setTabSelected] = useState(null);
  const history = useHistory();

  return (
<div>
  <MediaNavbar />
  <div className='btnbtnbtn' style={{margin:'20px 0px 20px 20px'}}  >
    <button className='backbtnmedia'  style={{width:"100px"}}   onClick={()=>{
      history.push("/")
    }} > Back</button>
</div>
<Box sx={{ width: '100%',paddingBottom:'100px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
         
         
          TabIndicatorProps={{
            style: {
              backgroundColor: "#FDE31A",
              color: "#FDE31A",
            }
          }} 
         value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab 
           className={`tabbtnmedia ${tabSelected === 1 ? "selected-tabmedia" : ""}`}
           onClick={() => handelTabCLick(1)} 
          label="Order" {...a11yProps(0)} />
          <Tab label="Invalid Order"
           className={`tabbtnmedia ${tabSelected === 2 ? "selected-tabmedia" : ""}`}
           onClick={() => handelTabCLick(1)} 
           {...a11yProps(1)} />
          <Tab label="Declined"
           className={`tabbtnmedia ${tabSelected === 3 ? "selected-tabmedia" : ""}`}
           onClick={() => handelTabCLick(2)} 
           {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <div className='container-fluid' id='tabcontainer' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',width:'auto'}}>
      <button className='Buttonstik' data-toggle="collapse" data-target="#demo1">Order <span style={{float:'right'}}><img src={leftarrow} alt="" /></span> </button>

      <div id="demo1" className="collapse">

      <div className='container' >
            <div className='Dashboardheading'><h3>Orders</h3></div>
         <div align='left' className='row' style={{marginTop:'20px'}}>
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
          <div align='left' className='row'  style={{marginTop:'20px'}} >
                  <div style={{marginTop:'20px'}}><input   style={skubnt} type="text" placeholder='Please enter the name' /></div>
                  <div style={{marginTop:'20px'}} ><input style={skubnt}  type="text" placeholder='Please enter the product title' /></div>
                  <div style={{marginTop:'20px'}} ><input  style={skubnt} type="text" placeholder='Please enter SKU' /></div>
                </div>
                <div align='left'  className='row'  style={{marginTop:'20px'}}>
                  <div style={{marginTop:'20px'}} ><input  style={skubnt} type="text" placeholder='Please enter order number' /></div>
                  <div  style={{marginTop:'20px'}}><input style={skubnt} type="text"  placeholder='Abnormal Orders' /></div>
                  <div align='left' style={{marginTop:'20px'}} ><p><span style={{margin:'10px'}}><button style={serchbtn}>Search</button></span><button style={Clearbtn}>Clear</button></p></div>
                </div>
         </div>
         
      </div>
      <div  style={{borderRadius:'30px',marginTop:'10px',width:'auto',overflow:'scroll'}}  >
               <div className='row'  style={{backgroundColor:'#FDE31A',width:'1300px',color:'black',borderRadius:'20px',margin:'20px 20px 20px 0px',padding:'7px'}}>
                  <div className='col-2'> 
                  <p >Your Order ID.</p>
                 </div>
                  <div className='col-2'><p >Your Order Time</p></div>
                  <div className='col'>
                  <p>Cost 
                  <span style={{margin:'1px'}}>
                   
                  </span> 
                    </p>
                  </div>
                
                 
                  <div className='col'>
                  <p>Address</p>
                  </div>
                  <div className='col'>
                  <p>SKU ID</p>
                  </div>
                  <div className='col'>
                  <p>Status</p>
                  </div>
                  <div className='col'>
                  <p>Action</p>
                  </div>
                </div>
               </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className='container-fluid' id='tabcontainer' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',width:'auto',overflowX:'scroll'}}>
      <button className='Buttonstik' data-toggle="collapse" data-target="#demo2">Invalid Order <span style={{float:'right'}}><img src={leftarrow} alt="" /></span></button>

      <div id="demo2" className="collapse">

      <div className='container' >
            <div className='Dashboardheading'><h3>Invalid Order</h3></div>
         <div align='left' className='row' style={{marginTop:'20px'}}>
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
          <div align='left' className='row'  style={{marginTop:'20px'}} >
                  <div style={{marginTop:'20px'}}><input   style={skubnt} type="text" placeholder='Please enter the name' /></div>
                  <div style={{marginTop:'20px'}} ><input style={skubnt}  type="text" placeholder='Please enter the product title' /></div>
                  <div style={{marginTop:'20px'}} ><input  style={skubnt} type="text" placeholder='Please enter SKU' /></div>
                </div>
                <div className='row'  style={{marginTop:'20px'}}>
                  <div style={{marginTop:'20px'}} ><input  style={skubnt} type="text" placeholder='Please enter order number' /></div>
                  <div  style={{marginTop:'20px'}}><input style={skubnt} type="text"  placeholder='Abnormal Orders' /></div>
                  <div align='left' style={{marginTop:'20px'}} ><p><span style={{margin:'10px'}}><button style={serchbtn}>Search</button></span><button style={Clearbtn}>Clear</button></p></div>
                </div>
         </div>
          
      </div>
      <div  style={{borderRadius:'30px',marginTop:'10px',width:'auto',overflow:'scroll'}}  >
               <div className='row'  style={{backgroundColor:'#FDE31A',width:'1300px',color:'black',borderRadius:'20px',margin:'20px 20px 20px 0px',padding:'7px'}}>
                  <div className='col-2'> 
                  <p >Your Order ID.</p>
                 </div>
                  <div className='col-2'><p >Your Order Time</p></div>
                  <div className='col'>
                  <p>Cost 
                  <span style={{margin:'1px'}}>
                   
                  </span> 
                    </p>
                  </div>
                  <div className='col'>
                  <p>Address</p>
                  </div>
                  <div className='col'>
                  <p>SKU ID</p>
                  </div>
                  <div className='col'>
                  <p>Status</p>
                  </div>
                  <div className='col'>
                  <p>Action</p>
                  </div>
                </div>
               </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className='container-fluid' id='tabcontainer' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',width:'auto',overflowX:'scroll'}}>
      <button className='Buttonstik' data-toggle="collapse" data-target="#demo3">Declined <span style={{float:'right'}}><img src={leftarrow} alt="" /></span></button>

      <div id="demo3" className="collapse">

      <div className='container' >
            <div className='Dashboardheading'><h3>Declined </h3></div>
         <div align='left' className='row' style={{marginTop:'20px'}}>
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
          <div align='left' className='row'  style={{marginTop:'20px'}} >
                  <div style={{marginTop:'20px'}}><input   style={skubnt} type="text" placeholder='Please enter the name' /></div>
                  <div style={{marginTop:'20px'}} ><input style={skubnt}  type="text" placeholder='Please enter the product title' /></div>
                  <div style={{marginTop:'20px'}} ><input  style={skubnt} type="text" placeholder='Please enter SKU' /></div>
                </div>
                <div className='row'  style={{marginTop:'20px'}}>
                  <div style={{marginTop:'20px'}} ><input  style={skubnt} type="text" placeholder='Please enter order number' /></div>
                  <div  style={{marginTop:'20px'}}><input style={skubnt} type="text"  placeholder='Abnormal Orders' /></div>
                  <div align='left' style={{marginTop:'20px'}} ><p><span style={{margin:'10px'}}><button style={serchbtn}>Search</button></span><button style={Clearbtn}>Clear</button></p></div>
                </div>
         </div>
          
      </div>
      <div style={{borderRadius:'30px',marginTop:'10px',width:'auto',overflow:'scroll'}} >
               <div className='row'  style={{backgroundColor:'#FDE31A',width:'1300px',color:'black',borderRadius:'20px',margin:'20px 20px 20px 0px',padding:'7px'}}>
                  <div className='col-2'> 
                  <p >Your Order ID.</p>
                 </div>
                  <div className='col-2'><p >Your Order Time</p></div>
                  <div className='col'>
                  <p>Cost 
                  <span style={{margin:'1px'}}>
                   
                  </span> 
                    </p>
                  </div>
                  <div className='col'>
                  <p>Address</p>
                  </div>
                  <div className='col'>
                  <p>SKU ID</p>
                  </div>
                  <div className='col'>
                  <p>Status</p>
                  </div>
                  <div className='col'>
                  <p>Action</p>
                  </div>
                </div>
               </div>
      </div>
      </TabPanel>
    </Box>

</div>
  );
}