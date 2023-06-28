import  React ,{useState} from 'react';
import './MyInventoryMedia.css'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar';

import { useHistory} from 'react-router-dom';
import leftarrow from '../../assets/leftarrow.png'


const btnrow={
  backgroundColor:'transparent',
  borderColor:'transparent',
  padding:'10px',
  fontWeight:'400',
  fontSize:'15px',
  color:'black'
}

const skubnt={
  width:'250px',
  height:'35px',
  borderColor:'transparent',

  borderRadius: '20px',
  backgroundColor:'rgba(231, 231, 231, 1)',
  color: 'rgba(50, 51, 58, 1)',
  fontSize: '15px',
  paddingLeft: '20px',
  outlineColor:'transparent', 
  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',
}



const Clearbtn={
  backgroundColor:'black',
  borderColor:'transparent',
  borderRadius:'10px',
  color:'white',
  padding:'10px',
  

  width:'150px',
  fontWeight:'650',
  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',
}
const serchbtn={
  backgroundColor:'#FDE31A',
  borderColor:'transparent',
  borderRadius:'10px',
  
  padding:'10px',
  outlineColor:'#FDE31A',
  marginRight:'10px',
  fontSize:'15px',
  width:'150px',
  fontWeight:'650',
  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',
  
  
   }



const tranferbtn={
  backgroundColor:'#FFE51A',
  borderColor:'transparent',
  padding:'5px',
  borderRadius:'10px',
  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',
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
  <>
    <MediaNavbar />
    <div  className='backbtnmedia'  >
                        <button style={{width:"100px"}}   onClick={()=>{
                          history.push("/")
                        }} > Back</button>
      </div>


   
    <Box sx={{ width: '100%',paddingBottom:'60px' }}>
      <Box sx={{ maxWidth: { xs: 'auto', sm: 'auto' }, bgcolor: 'background.paper' }}>
        <Tabs 
         value={value}
         onChange={handleChange}
         variant="scrollable"
         scrollButtons="auto"
         aria-label="scrollable auto tabs example"
        >
          <Tab
           className={`tabbtnmedia ${tabSelected === 1 ? "selected-tabmedia" : ""}`}
           onClick={() => handelTabCLick(1)} 
           label="Product Inventory" {...a11yProps(0)} />
          <Tab
          className={`tabbtnmedia ${tabSelected === 2 ? "selected-tabmedia" : ""}`}
           onClick={() => handelTabCLick(1)} 
           label="Connecting Packaging Inventory" {...a11yProps(1)} />
          <Tab 
          className={`tabbtnmedia ${tabSelected === 3 ? "selected-tabmedia" : ""}`}
           onClick={() => handelTabCLick(1)} 
          label="Deposit Inventory" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      
<div className='container-fluid' id='tabcontainer' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',width:'auto',overflowX:'scroll'}}>  
      <button className='Buttonstik' data-toggle="collapse" data-target="#demo2">Product Inventory <span style={{float:'right'}}><img src={leftarrow} alt="" /></span></button>
      <div id="demo2" className="collapse">

      <div className='container' >
            <div className='Dashboardheading'><h3>Product Inventory</h3></div>
            <div  >
           
                  <div className='row' style={{marginTop:'20px'}}>
                    <div >
                    <div className='buttonIn'></div><input style={skubnt}  placeholder='Enter Product SKU'  type="text" name="" id="" />
                     
                    </div>
                    <div style={{marginTop:'20px'}} align='left'><button style={serchbtn}  >Search</button></div>
                    <div align='left' style={{marginTop:'20px'}}  >
                    <p> Total Value:<span style={{margin:'10px'}} ><input type="checkbox" name="" id="" /></span> Product In Stock .</p>
                    
                    </div>
                    <div align='left'>
                  <button style= {tranferbtn}>Transfer record</button>
                    
                    </div>
                  
                  </div>
                  </div>
        
          
         </div>
          
      </div>
     
      
      <div style={{borderRadius:'30px',marginTop:'10px',width:'auto',overflow:'scroll'}} >
        <div style={{ display: 'block',color:'black',padding:'7px',borderRadius:'30px', }}>
        <div className='row' style={{backgroundColor:'#FDE31A',width:'500px',color:'black',borderRadius:'20px',margin:'20px 20px 20px 0px',padding:'7px'}}>
               <div className='col'><button style={btnrow}>Name</button></div>
                      <div className='col'><button style={btnrow}>Id</button></div>
                      <div className='col'><button style={btnrow}>Price</button></div>
                      <div className='col'><button style={btnrow}>Quantity</button></div>
                      <div className='col'><button style={btnrow}>Action</button></div>
                 
                </div>
        </div>
               
               </div>
 </div>
   
      </TabPanel>
      <TabPanel value={value} index={1}>

      <div className='container-fluid' id='tabcontainer' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',width:'auto',overflowX:'scroll'}}>  
      <button className='Buttonstik' data-toggle="collapse" data-target="#demo3">Connecting Pacakaging Inventory <span style={{float:'right'}}><img src={leftarrow} alt="" /></span></button>
      <div id="demo3" className="collapse">

      <div className='container' >
            <div className='Dashboardheading'><h3>Connecting Pacakaging Inventory</h3></div>
            <div >
                    <div align='left'  className='buttonIn'></div><input style={skubnt} placeholder='Enter Product SKU'  type="text" name="" id="" />
                    <div align='left' style={{marginTop:'20px'}}><button  style={serchbtn} >Search</button></div> 
                    </div>
        
          
         </div>
          
      </div>
     
      
      <div style={{borderRadius:'30px',marginTop:'10px',width:'auto',overflow:'scroll'}} >
        <div style={{ display: 'block',color:'black',padding:'7px',borderRadius:'30px', }}>
        <div className='row' style={{backgroundColor:'#FDE31A',width:'1500px',color:'black',borderRadius:'20px',margin:'20px 20px 20px 0px',padding:'7px'}}>
            <div className='col'><button style={btnrow}>Product Name</button></div>
                    <div className='col'><button style={btnrow}> Sku Id</button></div>
                    <div className='col'><button style={btnrow}>Varient</button></div>
                    <div className='col'><button style={btnrow}>Dropship UserId</button></div>
                    <div className='col'><button style={btnrow}>Connected Store Domain</button></div>
                    <div className='col'><button style={btnrow}>Connected Product link</button></div>
                 
                </div>
        </div>
               
               </div>
 </div>
    
      </TabPanel>
      <TabPanel value={value} index={2}>

        
      <div className='container-fluid' id='tabcontainer' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',width:'auto',overflowX:'scroll'}}>  
      <button className='Buttonstik' data-toggle="collapse" data-target="#demo3">Pre-Sold Inventory <span style={{float:'right'}}><img src={leftarrow} alt="" /></span></button>
      <div id="demo3" className="collapse">

      <div className='container' >
      <div className='Dashboardheading'><h3>Pre-Sold Inventory</h3></div>
      <div className='row' style={{marginTop:'20px'}}>
                <div ><input style={skubnt} placeholder='Please enter the order number' type="text" /></div>
                <div style={{marginTop:'20px'}}> <input style={skubnt} placeholder='Please enter SKU' type="text" /> </div>

              </div>
              <div align='left' style={{marginTop:'20px'}} >
                <div align='left'><button style={serchbtn} >Search</button></div>
                <div align='left' style={{marginTop:'20px'}}><button style={Clearbtn} >Clear</button></div>
</div>
        
          
         </div>
          
      </div>
     
      
      <div style={{borderRadius:'30px',marginTop:'10px',width:'auto',overflow:'scroll'}} >
        <div style={{ display: 'block',color:'black',padding:'7px',borderRadius:'30px', }}>
        <div className='row' style={{backgroundColor:'#FDE31A',width:'1500px',color:'black',borderRadius:'20px',margin:'20px 20px 20px 0px',padding:'7px'}}>
        <div className='col'><button style={btnrow}>Product Name</button></div>
                    <div className='col'><button style={btnrow}>Sku Id</button></div>
                    <div className='col'><button style={btnrow}>Varient</button></div>
                    <div className='col'><button style={btnrow}>Dropship UserId </button></div>
                    <div className='col'><button style={btnrow}>Quantity</button></div>
                    <div className='col'><button style={btnrow}>Action</button></div>
                 
                </div>
        </div>
               
               </div>
 </div>
   
      </TabPanel>
    </Box>
   
  </>
  );
}