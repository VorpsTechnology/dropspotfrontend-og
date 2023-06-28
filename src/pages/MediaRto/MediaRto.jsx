
import  React , {useState} from 'react';
import '../MediaMyOrder/MediaMyOrder.css'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useHistory} from 'react-router-dom';

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
      <Box sx={{ maxWidth: { xs: 'auto', sm: 'auto' }, bgcolor: 'background.paper' }}>
        <Tabs
         value={value}
         onChange={handleChange}
         variant="scrollable"
         scrollButtons="auto"
         aria-label="scrollable auto tabs example"
         TabIndicatorProps={{
            style: {
              backgroundColor: "#FDE31A",
              color: "#FDE31A",
            }
          }} 
          
          
        >
          <Tab 
           className={`tabbtnmedia ${tabSelected === 1 ? "selected-tabmedia" : ""}`}
            label="Awaiting Pickup" {...a11yProps(0)} />
          <Tab
          className={`tabbtnmedia ${tabSelected === 2 ? "selected-tabmedia" : ""}`}
           label="Processed"
           {...a11yProps(1)} />
          <Tab 
          className={`tabbtnmedia ${tabSelected === 3 ? "selected-tabmedia" : ""}`}
          label="Awaiting Payments" {...a11yProps(2)} />
          <Tab
          className={`tabbtnmedia ${tabSelected === 4 ? "selected-tabmedia" : ""}`}
           label="Paid" {...a11yProps(3)} />
          <Tab 
          className={`tabbtnmedia ${tabSelected === 5 ? "selected-tabmedia" : ""}`}
          label="Closed" {...a11yProps(4)} />
          <Tab
          className={`tabbtnmedia ${tabSelected === 6 ? "selected-tabmedia" : ""}`}
           label="Expired" {...a11yProps(5)} />
          <Tab
          className={`tabbtnmedia ${tabSelected === 7 ? "selected-tabmedia" : ""}`}
           label="Abnormal Order"
           {...a11yProps(6)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
    

      
     <div className='container-fluid' id='tabcontainer' style={{width:'auto' ,overflowX:'scroll'}}>
     <button className='Buttonstik' data-toggle="collapse" data-target="#demo1">Awaiting Pickup<span style={{float:'right'}}><img src={leftarrow} alt="" /></span> </button>
     <div id="demo1" className="collapse">
     <div className='container' style={{ display: 'block',color:'black',borderRadius:'30px',}}>
          <div className="container" style={{ display: 'block',color:'black',padding:'20px',borderRadius:'30px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)"}} >
          <div align='left' className='row' style={{marginTop:'20px'}}>
            
            
            <div className='col'><input style={skubnt} placeholder='please enter order number' type="text" />
            </div>
            

      </div>
        
      <div align='left' className='row' style={{marginTop:'20px'}}>
        <div ><button style={serchbtn}>submit</button></div>
        <div style={{marginTop:'20px'}}><button style={Pickbtn}> Send Pickup Notification</button></div>
      </div>
          </div>
         
          

          </div>
      </div>
      <div style={{borderRadius:'30px',marginTop:'10px',width:'auto',overflow:'scroll'}}>
            <div style={{ display: 'block',color:'black',padding:'7px',borderRadius:'30px', }}>
            <div className='row'  style={{backgroundColor:'#FDE31A',color:'black',width:'1400px',borderRadius:'20px',margin:'20px 20px 20px 0px',padding:'7px'}}>
            <div className='col'><button style={Order}>Your Order Number</button></div>
           
            <div className='col'><button style={Order}>Order Source</button></div>
            
            <div className='col'><button style={Order}>Quantity</button></div>
          
           
            <div className='col'><button style={Order}>Paid Time</button></div>
            <div className='col'><button style={Order}>Status</button></div>
            <div className='col'><button style={Order}>Address</button></div>
            <div className='col'><button style={Order}>Shipping Info</button></div>
            <div className='col'><button style={Order}>Shipping Method</button></div>
            <div className='col'><button style={Order}>Tracking Number </button></div>
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
           <div align='left' className='row' style={{marginTop:'20px'}}>
            <div><input style={skubnt} placeholder='please enter order number' type="text" /></div>

            </div>
        
            <div align='left' style={{marginTop:'20px'}}><button style={serchbtn}>Search</button></div>
          </div>
           </div>
        
      </div>
      <div  style={{borderRadius:'30px',marginTop:'10px',width:'auto',overflow:'scroll'}}>
           <div  style={{ display: 'block',color:'black',padding:'7px',borderRadius:'30px', }}>
           <div className='row'  style={{backgroundColor:'#FDE31A',color:'black',width:'1600px',borderRadius:'20px',margin:'20px 20px 20px 0px',padding:'7px'}}>
                <div className='col'><button style={Order}> Order Number</button></div>
                <div className='col'><button style={Order}>Store Order Number</button></div>
                <div className='col'><button style={Order}>Order Source</button></div>
                <div className='col'><button style={Order}>Tracking Number</button></div>
                <div className='col'><button style={Order}>Pickup Carrier Contact Info</button></div>
                <div className='col'><button style={Order}>Resending Fee (INR)</button></div>
                <div className='col'><button style={Order}>Deadline</button></div>
                <div className='col'><button style={Order}>Note</button></div>
                <div className='col'><button style={Order}>Shipping Info</button></div>
                <div className='col'><button style={Order}>Date Processed</button></div>



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
            <div align='left' ><input style={skubnt} type="text"  placeholder='please enter order number' /></div>
         
            
           

          </div>
         
          <div align='left' className='row' style={{marginTop:'20px'}}>
            <div style={{marginTop:'20px'}} ><button style={serchbtn}>Search</button></div>
          
            <div style={{marginTop:'20px'}} ><button style={serchbtn}>Upload Excel</button></div>
            <div  style={{marginTop:'20px'}}><button style={serchbtn}>Download Excel</button></div>
          </div>
            </div>

           
        
          
            </div>
           
      </div>
      <div style={{borderRadius:'30px',marginTop:'10px',width:'auto',overflow:'scroll'}}>
            <div style={{ display: 'block',color:'black',padding:'7px',borderRadius:'30px', }}>
          <div className='row'  style={{backgroundColor:'#FDE31A',color:'black',width:'1600px',borderRadius:'20px',margin:'20px 20px 20px 0px',padding:'7px'}}>

           
            <div className='col'><button style={Order}>Store Order number</button></div>
            <div className='col'><button style={Order}>Order Source</button></div>

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
                <div align='left' className='row' style={{marginTop:'20px'}}>

                  <div ><input style={skubnt} placeholder='please enter order number' type="text" /></div>
                  <div  align='left' style={{marginTop:'20px'}}><button style={serchbtn}>Search</button></div>



                  </div>
                </div>
                

              </div>
          
      </div>
      <div style={{borderRadius:'30px',marginTop:'10px',width:'auto',overflow:'scroll'}}>
                <div  style={{ display: 'block',color:'black',padding:'7px',borderRadius:'30px', }}>
                <div className='row'   style={{backgroundColor:'#FDE31A',color:'black',width:'1600px',borderRadius:'20px',margin:'20px 20px 20px 0px',padding:'7px'}}>
                <div className='col'><button style={Order}> Order Number</button></div>
                <div className='col'><button style={Order}>Store Order Number</button></div>
                <div className='col'><button style={Order}>Order Source</button></div>
                <div className='col'><button style={Order}>Tracking Number</button></div>
                <div className='col'><button style={Order}>Pick Up Carrier Contact Info</button></div>
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
                <div align='left' className='row' style={{marginTop:'20px'}}>
     
            
                <div align='left'  ><input style={skubnt} placeholder='please enter order number' type="text" /><span></span></div>
                

            </div>
            <div align='left' style={{marginTop:'20px'}}><button style={serchbtn}>submit</button></div>
                </div>
                
              </div>
             
          
      </div>
      <div style={{borderRadius:'30px',marginTop:'10px',width:'auto',overflow:'scroll'}}>
              <div  style={{ display: 'block',color:'black',padding:'7px',borderRadius:'30px', }}>
    <div className='row'  style={{backgroundColor:'#FDE31A',color:'black',width:'1600px',borderRadius:'20px',margin:'20px 20px 20px 0px',padding:'7px'}}>
        <div className='col'><button style={Order}>Your Order Number</button></div>
        <div className='col'><button style={Order}>Store Order Number</button></div>
        <div className='col'><button style={Order}>Order Source</button></div>
        <div className='col'><button style={Order}>Tracking Number</button></div>
       
        <div className='col'><button style={Order}>Resending Fee</button></div>
       
      
       
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
        <div className='row' style={{backgroundColor:'#FDE31A',color:'black',width:'1600px',borderRadius:'20px',margin:'20px 20px 20px 0px',padding:'7px'}}>
            <div className='col'><button style={Order}>Your Order Number</button></div>
           
            <div className='col'><button style={Order}>Order Source</button></div>
            <div className='col'><button style={Order}>Quantity</button></div>
            <div className='col'><button style={Order}>Paid Time Dispatch time</button></div>
            <div className='col'><button style={Order}>Status</button></div>
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
      <TabPanel value={value} index={6}>
      <div className='container-fluid' id='tabcontainer' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',width:'auto',overflowX:'scroll'}}>
      <button className='Buttonstik' data-toggle="collapse" data-target="#demo7">Abnormal Order <span style={{float:'right'}}><img src={leftarrow} alt="" /></span></button>

      <div id="demo7" className="collapse">

      <div className='container' style={{ display: 'block',color:'black',borderRadius:'30px',}} >
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
                <div style={{ display: 'block',color:'black',padding:'7px',borderRadius:'30px', }}>
                <div className='row'  style={{backgroundColor:'#FDE31A',color:'black',width:'1600px',borderRadius:'20px',margin:'20px 20px 20px 0px',padding:'7px'}}>
            <div className='col'><button style={Order}>Your Order Number</button></div>
           
            <div className='col'><button style={Order}>Order Source</button></div>
            <div className='col'><button style={Order}>Quantity</button></div>
            <div className='col'><button style={Order}>Paid Time Dispatch time</button></div>
            <div className='col'><button style={Order}>Status</button></div>
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
     
    </Box>

</div>
  );
}