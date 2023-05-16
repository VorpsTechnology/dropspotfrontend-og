import React ,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Tab } from '@headlessui/react';
import './MyPhotography.css'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import Sidebar from '../Sidebar/Sidebar'

function MyPhotography() {
  const [tabSelected, setTabSelected] = useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const tabheader={
    backgroundColor:'#FFE51A',
    borderColor:'transparent',
    border:' 0.5px solid rgba(0, 0, 0, 0.25)',
    width:'auto',
    padding:'10px',
    fontWeight:'800',
    height:'50px',
    alignItems:'center',
    borderRadius:"10px",
    margin:'15px 5px 15px 5px'  
  }

  const buttonheader={
    backgroundColor:'#FDE31A',
    borderRadius:'15px',
    width:'auto',
    alignItems:'center',
    height:'80px',
    alignSelf:'center'
    
  }

  const tabpanls={
    padding:'30px',

  }
  const handelTabCLick = (e) => {
    setTabSelected(e);
  };

  const serchbtn={
    backgroundColor:'#FDE31A',
    borderColor:'transparent',
    borderRadius:'10px',
    width:'150px',
    padding:'5px',
    outlineColor:'#FDE31A',
    fontWeight:'650',
    
    color:'black'
    
    
     }
    
     const Clearbtn={
        backgroundColor:'black',
        borderColor:'transparent',
        borderRadius:'10px',
        width:'150px',
        padding:'5px',
        marginLeft:'1px',
        fontWeight:'650',
        color:'white',
        
       
     }


  
  return (
    <div style={{backgroundColor:'#31343A',padding:'0px 0px 0px 0px'}}>
      <Adminnavbar />
      <div className='row'>
        <div className='col-2' style={{backgroundColor:'#31343A'}}><Sidebar /></div>
        <div className='col-10' style={{height:'800px'}}>
       
      <div className='container' id="tabcontainer" style={{margin:'20px 0px 20px 10px',width:'1100px', padding:'20px',}}>
      <div className='headingAll'><h2>Photography Request</h2></div>
      <Tab.Group>
      <div className='conatiner' style={buttonheader}>
      <Tab.List id='tablist' className="flex space-x-1 rounded-xl  p-1" >
                
                <Tab  className={ `tabbtn3 ${tabSelected === 1 ? "selected-tab2" : ""}`}
                    onClick={() => handelTabCLick(1)}>Existing Product In Your Store</Tab>
                <Tab className={`tabbtn3 ${tabSelected === 2 ? "selected-tab2" : ""}`}
                    onClick={() => handelTabCLick(2)}>Individual Product</Tab>
                
              </Tab.List>
         </div>
             
         
          
          <Tab.Panels style={tabpanls}>
            <Tab.Panel>
             {/* <div align='left'>
             <form action="">
             <div align='left' className='container' style={{width:'800px'}}>
                <div className='flexcontainer'>
                  <div className='flexleft'>
                   <h4 style={{fontSize:'18px'}}>Select Store</h4>
                  </div>
                  <div className='flexright'>
                    <input style={{width:'300px'}} type="text" />
                    
                  </div>
                </div>
               
                <div className='flexcontainer'>
                  <div className='flexleft'>
                  <h4  style={{fontSize:'18px'}}>Accept Similar Products</h4>
                  </div>
                  <div className='flexright' style={{marginRight:'210px'}}>
                  <h5><input type="checkbox" style={{width:'30px'}} /> <span style={{fontWeight:'650',fontSize:'18px'}} >Yes</span><input style={{width:'30px'}} type="checkbox" />No</h5>
                    
                  </div>
                </div>
                <div className='flexcontainer'>
                  <div className='flexleft'>
                  <h4  style={{fontSize:'18px'}}>Shooting</h4>
                  </div>
                  <div className='flexright' style={{marginRight:'160px'}}>
                  <h5><input style={{width:'30px'}} type="checkbox" /> <span style={{fontWeight:'650',fontSize:'18px'}} >Video</span><input style={{width:'30px'}} type="checkbox" />Photo</h5>
                  </div>
                </div>
                <div className='flexcontainer'>
                  <div className='flexleft'><h4  style={{fontSize:'18px'}}>Requirement</h4></div>
                  <div className='flexright'>
                    <textarea className='textares'  name="" id="" cols="40" rows="10"></textarea>
                  </div>
                </div>
              </div>
               <div style={{display:'flex',marginLeft:'47%'}}>
                <div><button style={serchbtn}>Submit</button></div>
                <div style={{marginLeft:'2px'}}><button style={Clearbtn}>Clear</button></div>
              </div>
             </form>
             </div> */}
             <div >
             <div align='center' className='row' style={{backgroundColor:'#FDE31A',padding:'10px',borderRadius:'20px'}}>
           
           <div className='col'><p> Product Title</p></div>
          
           <div className='col'><p>Product URL</p></div>
           <div className='col-3'><p>Accept Similar Products</p></div>
           <div className='col'>
           <p>Shooting Type</p>
           </div>
           <div className='col'>
           <p>Requirement</p>
           </div>
          
           <div className='col'>
            <p>Action</p>
           </div>
          
          
         </div> 
             </div>
            </Tab.Panel>
            <Tab.Panel>

            <Button className='headerbtn'
            style={{    borderColor: "transparent",
              backgroundColor: "#FDE31A",
              borderRadius: "20px",
            color: 'black',
            fontWeight: '650',
            fontSize:'15px',
            padding:'7px',
            width:'300px'
          }}
            
            onClick={handleClickOpen}>
        + Photography Request Form
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle align='center'> Photography Request Form</DialogTitle>
        <DialogContent>
      <div >
        <form action="">
        <div style={{width:'500px'}}  >
                <div className='fler'  style={{}}>
                  <div   className='flerleft'   style={{justifyContent:'left'}}>
                   <h4 style={{fontSize:'18px'}}>Product Title</h4>
                  </div>
                  <div   className='flerRight'  style={{justifyContent:'right'}}>
                    <input  className='texttype' style={{width:'300px'}} type="text" />
                    
                  </div>
                </div>
               
                <div className='fler'>
                  <div className='flerleft'>
                  <h4 style={{fontSize:'18px'}}>Product URL</h4>
                  </div>
                  <div className='flerRight'>
                   <div><input  className='texttype' style={{width:'300px'}} type="text" required /></div>

                    
                  </div>
                </div>
                <div className='fler'>
                  <div className='flerleft'>
                  <h4 style={{fontSize:'18px'}}>Accept Similar Products</h4>
                  </div>
                  <div className='flerRight'>
                  <h5><input style={{width:'30px'}} type="checkbox" /> <span style={{fontWeight:'650',fontSize:'18px'}} >Yes</span><input style={{width:'30px'}} type="checkbox" />No</h5>
                  </div>
                </div>
                  <div className='fler'>
                  <div className='flerleft'>
                  <h4 style={{fontSize:'18px'}}>Shooting Type</h4>
                  </div>
                  <div className='flerRight'  >
                  <h5><input style={{width:'30px'}} type="checkbox" /> <span style={{fontWeight:'650',fontSize:'18px'}}>Video</span><input style={{width:'30px'}} type="checkbox" />Photo</h5>
                  </div>
                </div>
                <div className='fler'>
                  <div className='flerleft'><h4 style={{fontSize:'18px'}}>Requirement</h4></div>
                  <div className='flerRight'>
                    <textarea className='textares'  name="" id="" cols="40" rows="5"></textarea>
                  </div>
                </div>
              </div>
              
        </form>
      </div>
        </DialogContent>
        <DialogActions align='center'>
          <Button style={Clearbtn} onClick={handleClose}>Cancel</Button>
          <Button style={serchbtn}  onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>

             
            </Tab.Panel>
            
          </Tab.Panels>
    </Tab.Group>
      </div>
        </div>
      </div>
    </div>
  )
}

export default MyPhotography
