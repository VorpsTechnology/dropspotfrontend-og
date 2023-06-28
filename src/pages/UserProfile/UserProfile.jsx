import React from 'react'
import Navbar from '../../components/Navbar'
import Shopnavbar from '../../components/ShopNavbar/Shopnavbar'
import { Tab } from '@headlessui/react'
import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Footer from '../../components/Footer/Footer'
import './UserProfile.css'

function UserProfile() {
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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenButton = () => {
    setOpen(true);
  };

  const handleCloseButton = () => {
    setOpen(false);
  };

  const subbtn={
    backgroundColor:'rgba(253, 227, 26, 1)',padding:'5px',color:'black',width:'100px',borderColor:'transparent', boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",marginLeft:'20px',borderRadius:'5px'
  }


  return (
    <div>
     <Navbar />
     <br />
     <Shopnavbar />
     <br />
   <div className='container'>
   <Tab.Group>
    <div className='container' style={buttonheader}>
    <Tab.List>
        <Tab className='tabbtn'>Resigtration Info</Tab>
        <Tab className='tabbtn'>Address Management</Tab>
        <Tab className='tabbtn'>Account Security</Tab>
      </Tab.List>
    </div>
     
      <Tab.Panels style={tabpanls}>
        <Tab.Panel>
          <div className='container' id="carasouelsection" style={{padding:'40px'}}>
    <div className='container' style={{margin:'20px'}}>
     <div className='row'>
              <div className='col'>
                <div >
                <div className='labelcil'>First Name</div>
                <div><input className='nputboxfirt' type="text" required /></div>
                </div>
                
              </div>
              <div className='col'>
              <div >
                <div className='labelcil'>Last Name</div>
                <div><input className='nputboxfirt' type="text"  required/></div>
                </div>
              </div>
              <div className='col'>
              <div>
                <div className='labelcil'>Email </div>
                <div><input className='nputboxfirt' type="text" required /></div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-4'>
                <div >
                <div className='labelcil'>Mobile</div>
                <div><input className='nputboxfirt' type="text" required /></div>
                </div>
                
              </div>
              <div className='col-4'>
              <div >
                <div className='labelcil'>Country</div>
                <div><input className='nputboxfirt' type="text" required /></div>
                </div>
              </div>
              
            </div>
            <div className='row'>
              <div >
              <div >
                <div className='labelcil'>Address</div>
                <div><input className='nputboxfirtaddress' type="text" required /></div>
                </div>
              </div>
              
            </div>
       </div>
          </div>
          <div className='container'id="carasouelsection" style={{padding:'40px',marginTop:'40px'}} >
          
            <div className='flexcontainer'>
              
              <div className='flexleft'>
              <div  ><h4 style={{marginLeft:'10px'}}>Whatsup</h4></div>
                <p className='labelcil' style={{marginTop:'20px'}}>To directly communicate with your agent via WhatsAPP</p></div>
              <div className='flexright'><button className='contactbtn'>Contact us</button></div>
            </div>
          </div>
          <div className='container' id="carasouelsection" style={{padding:'40px',marginTop:'40px'}}>
    <div className='container' style={{margin:'20px'}}>
     <div className='row'>
              <div className='col-3'>
                <div >
                <div className='labelcil'>Facebook</div>
                <div><input className='nputboxface' type="text" required /></div>
                </div>
                
              </div>
              <div className='col-3'>
              <div >
                <div className='labelcil'>Instagram</div>
                <div><input className='nputboxface' type="text"  required/></div>
              </div>
              </div>
              <div className='col-3'>
              <div>
                <div className='labelcil'>Line</div>
                <div><input className='nputboxface' type="text" required /></div>
                </div>
              </div>
              <div className='col-3'>
              <div>
                <div className='labelcil'>Linkdin</div>
                <div><input className='nputboxface' type="text" required /></div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-3'>
                <div >
                <div className='labelcil'>Skype</div>
                <div><input className='nputboxface' type="text" required /></div>
                </div>
                
              </div>
              <div className='col-3'>
              <div >
                <div className='labelcil'>Twitter</div>
                <div><input className='nputboxface' type="text" required /></div>
                </div>
              </div>
              <div className='col-3'>
              <div >
                <div className='labelcil'>WeChat</div>
                <div><input className='nputboxface' type="text" required /></div>
                </div>
              </div>
              
            </div>
            
       </div>
          </div>
        
          
        </Tab.Panel>
        <Tab.Panel>   
      <Button style={{backgroundColor:'rgba(253, 227, 26, 1)',padding:'10px',color:'black',width:'200px',borderColor:'transparent', boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",marginLeft:'20px',borderRadius:'5px'}} variant="outlined" onClick={handleClickOpen}>
        Add New Address +
      </Button>
      <Dialog  style={{width:'100%'}}  open={open} onClose={handleClose}>
        <DialogTitle align="center" style={{fontSize:'15px',fontWeight:'500'}}> <div style={{padding:'10px',fontWeight:'800px',fontSize:'15px'}}>  <h4>Add Address</h4> </div> </DialogTitle>
        <DialogContent>
          <DialogContentText>
     <form action="">
     <div className='flexcontainerform' >
        <div className='flexleft'><h5>First name</h5></div>
        <div className='flexright'><input type="text" required /></div> 
       </div>
       <div className='flexcontainerform'>
        <div className='flexleft'><h5>Last name</h5></div>
        <div className='flexright'><input type="text" required /></div> 
       </div>
       <div className='flexcontainerform'>
        <div className='flexleft'><h5>Address 1:</h5></div>
        <div className='flexright'><input type="text" required /></div> 
       </div>
       <div className='flexcontainerform'>
        <div className='flexleft'><h5>Address</h5></div>
        <div className='flexright'><input type="text" /></div> 
       </div>
       <div className='flexcontainerform'>
        <div className='flexleft'><h5>Province</h5></div>
        <div className='flexright'><input type="text" required /></div> 
       </div>
       <div className='flexcontainerform'>
        <div className='flexleft'><h5>City</h5></div>
        <div className='flexright'><input type="text" required /></div> 
       </div>
       <div className='flexcontainerform'>
        <div className='flexleft'><h5>Country</h5></div>
        <div className='flexright'><input type="text" /></div> 
       </div>
       <div className='flexcontainerform'>
        <div className='flexleft'><h5>Phone</h5></div>
        <div className='flexright'><input type="text" /></div> 
       </div>
     </form>
          </DialogContentText>
          
        </DialogContent>
        <DialogActions >
            <div align="center" style={{marginRight:'25%',display:'flex',marginBottom:'10px'}}>
            <div ><button style={{backgroundColor:'black',padding:'5px',color:'yellow',width:'100px',borderColor:'transparent', boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'5px' }} onClick={handleClose}>Cancel</button></div>
            <div ><button style={subbtn} onClick={handleClose}>Submit</button></div>
            </div>
        </DialogActions>
      </Dialog> 
    </Tab.Panel>
        <Tab.Panel>
         
          <div className='container'  id="carasouelsection" style={{padding:'40px',marginTop:'40px'}} >
          <div className='flexconatinerpanel'>
            <div className='flexleft'>
             <h4>Reset Password</h4>
            </div>
            <div className='flexright'>
       <Button style={{backgroundColor:'rgba(253, 227, 26, 1)',padding:'10px',color:'black',width:'200px',borderColor:'transparent', boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",marginLeft:'20px',borderRadius:'5px'}} variant="outlined"  onClick={handleClickOpenButton }>
        Edit
      </Button>
      <Dialog open={open} onClose={handleCloseButton}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            2nd cont
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseButton}>Cancel</Button>
          <Button onClick={handleCloseButton}>Subscribe</Button>
        </DialogActions>
      </Dialog>
            </div>
          </div>
          </div>
          
        <div className='container' id="carasouelsection" style={{padding:'40px',marginTop:'40px'}}  >
            
        <div className='flexconatinerpanel'>
            <div className='flexleft'>
              <h4>Delete Account</h4>
            </div>
            <div className='flexright'>
        <Button  style={{backgroundColor:'rgba(253, 227, 26, 1)',padding:'10px',color:'black',width:'200px',borderColor:'transparent', boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",marginLeft:'20px',borderRadius:'5px'}} variant="outlined"  onClick={handleClickOpenButton}>
        Delete <account>                                        </account>
      </Button>
      <Dialog open={open} onClose={handleCloseButton}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
           3rd cont
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseButton}>Cancel</Button>
          <Button onClick={handleCloseButton}>Subscribe</Button>
        </DialogActions>
      </Dialog>
            </div>
          </div>
        </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
   </div>
   <Footer/>
    </div>
  )
}

export default UserProfile
