import React , {useState} from 'react'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import SellerSidebar from '../SellerDashboard/SellerSidebar'
import 'bootstrap/dist/css/bootstrap.css';
import { Tab } from '@headlessui/react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import './SellerDispute.css'
function SellerDispute() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    

    const serachbtn={
      backgroundColor:'#FDE31A',
      borderColor:'transparent',
      borderRadius:'10px',
      
      padding:'10px',
      outlineColor:'#FDE31A',
      marginRight:'10px',
      fontSize:'15px',
      width:'150px',
      fontWeight:'650'
      }
          

    


      const skubnt={
        width:'250px',
        height:'35px',
        borderColor:'transparent',
      
        borderRadius: '86px',
       
        backgroundColor:'rgba(231, 231, 231, 1)',
        color: 'rgba(50, 51, 58, 1)',
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
        fontSize: '15px',
        paddingLeft: '20px',
      marginTop:'20px',
      
      
        outlineColor:'transparent',  
      }
      

      const skubntsel={
        width:'250px',
        height:'35px',
        borderColor:'transparent',
      
        borderRadius: '86px',
       
        backgroundColor:'rgba(231, 231, 231, 1)',
        color: 'rgba(50, 51, 58, 1)',
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
        fontSize: '15px',
        paddingLeft: '20px',
      marginTop:'20px',
      
      
        outlineColor:'transparent', 
       
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
  const [tabSelected, setTabSelected] = useState(null);

  return (
   <>
   <Adminnavbar />
   <div className='row'  style={{backgroundColor:'#31343A',marginTop:'100px'}}>
        <div className='col-2' ><SellerSidebar /></div>
        <div className='col-10'>
       
        <div className='container' id="tabcontainer" style={{margin:'10px 20px 20px 10px',width:'auto', padding:'20px',}}>
        <div className='headingAll'><h2>Disputes</h2></div>
      <Tab.Group>
      <div className='conatiner' style={buttonheader}>
      <Tab.List className="flex space-x-1 rounded-xl  p-1"  defaultChecked="white" >
      <Tab    className={`tabbtn3 ${tabSelected === 1 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(1)}>Awaiting Responses</Tab>
                    <Tab    className={`tabbtn3 ${tabSelected === 2 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(2)}>Completed</Tab>
                    <Tab    className={`tabbtn3 ${tabSelected === 3 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(3)}>Closed</Tab>
                <Button className='tabbtn' style={{color:'black',marginLeft:'10px',fontWeight:'600'}} onClick={handleClickOpen}>
                  Raise Dispute
               </Button>
              
              </Tab.List>
     
              
         </div>
         <div>
     
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle align='center'> <h4 style={{fontSize:'18px',fontWeight:'650'}}>Raise Dispute</h4> </DialogTitle>
        <DialogContent>
      <form action="">
      <div className='fleg' style={{display:'flex'}}>
          <div className='flo' style={{justifyContent:'left'}}>
           <h6>Add Title</h6>
          </div>
          <div className='flh' style={{justifyContent:'right',marginLeft:'92px'}}>
           <input className='inputb' style={{backgroundColor:'#E7E7E7',borderColor:'transparent',width:'230px',padding:'7px',borderRadius:'10px',outline:'transparent'}} type="text" />
          </div>
        </div>
        <div className='fleg' style={{display:'flex',justifyContent:'space-between',marginTop:'20px'}}>
          <div className='flo' style={{justifyContent:'left'}}>
           <h6>Add a Screen Shot</h6>
          </div>
          <div className='flh' style={{float:'right',marginLeft:'30px'}}>
           <input type="File" />
          </div>
        </div>
        <div className='fleg' style={{display:'flex',justifyContent:'space-between',marginTop:'20px'}}>
          <div className='flo' style={{justifyContent:'left'}}>
           <h6>Message</h6>
          </div>
          <div className='flh' style={{float:'right'}}>
           <textarea className='textarea' name="" id="" cols="35" rows="10"></textarea>
          </div>
        </div>
      </form>
        </DialogContent>
        <div align='center' style={{marginBottom:'20px'}}>
          <Button className='clear' style={{backgroundColor:'black',color:'white'}} onClick={handleClose}>Cancel</Button>
          <Button className='product' style={{backgroundColor:'rgba(253, 227, 26, 1)',color:'black',marginLeft:'20px'}} onClick={handleClose}>Submit</Button>
        </div>
      </Dialog>
    </div>
             
         
          
          <Tab.Panels style={tabpanls}>
            <Tab.Panel>
          <div>
          <div className='container' style={{ display: 'block',color:'black',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px',padding:'20px' }}>
           
           <div className='row' >
           <div className='Dashboardheading'><h3>Awaited Responses</h3></div>
            <div className='col'><input type="date" style={skubnt}  placeholder='Please enter order number' /></div>
           
            <div className='col'><input type="text" style={skubnt}  placeholder='Abnormal Orders' /></div>
            <div className='col'><select  name="name" id="value" style={skubnt}>
                <option value="">All</option>
                <option value="">#method</option>
                <option value="">#method</option>
              </select>
            </div>

          </div>
          <div style={{marginTop:'20px'}}><button style={serachbtn}>Search</button></div>
        
         
        </div>
        <div className='container' style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'auto' ,overflowX:'scroll'}}>
           <div  style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1100px' }}>
            <div className='row' style={{padding:'7px',backgroundColor:'#FDE31A',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px',width:'1300px',marginRight:'100px'}}>
            <div className='col'><p> Order Number</p></div>
          
          <div className='col'><p>Tracking Number</p></div>
          <div className='col'><p>Dispute Reason</p></div>
          <div className='col'>
          <p>Expected Solution</p>
          </div>
          <div className='col'>
          <p>Created Date</p>
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
          </div>
            </Tab.Panel>
            <Tab.Panel>
            <div className='container' style={{ display: 'block',color:'black',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px',padding:'20px' }} >
            <div className='Dashboardheading'><h3>Completed</h3></div>
      <div className='row' >
            <div className='col'><input type="date" style={skubnt}  placeholder='Please enter order number' /></div>

            <div className='col'><input type="text"  style={skubnt}   placeholder='Abnormal Orders' /></div>
            <div className='col'><select  name="name" id="value" style={skubntsel}>
                <option value="">All</option>
                <option value="">#method</option>
                <option value="">#method</option>
              </select>
            </div>

          </div>
          <div style={{marginTop:'20px'}}><button style={serachbtn}>Search</button></div>
          
      </div>
      <div className='container' style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'auto' ,overflowX:'scroll'}}>
           <div  style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'auto' }}>
            <div className='row' style={{padding:'7px',backgroundColor:'#FDE31A',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px',width:'1500px',marginRight:'100px'}}>
            <div className='col'><p> Order Number</p></div>
            <div className='col'><p> Order Number</p></div>
            <div className='col'>
            <p>Tracking Number</p>
            </div>
            <div className='col'><p>Tracking Number</p></div>
            <div className='col'><p>Dispute Reason</p></div>
            <div className='col'>
            <p>Expected Solution</p>
            </div>
            <div className='col'>
            <p>Created Date</p>
            </div>
            <div className='col'><p>Status</p></div>
            <div className='col'><p>Action</p></div>


            </div>
           </div>
           </div>
            </Tab.Panel>
            <Tab.Panel>
                                
       <div className='container' style={{ display: 'block',color:'black',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px',padding:'20px' }} >
       <div className='Dashboardheading'><h3>Closed</h3></div>
       <div className='row'  style={{marginTop:'20px'}}>
            <div className='col'><input type="date" style={skubnt}  placeholder='Please enter order number' /></div>

            <div className='col'><input type="text" style={skubnt}   placeholder='Abnormal Orders' /></div>
            <div className='col'><select  name="name" id="value" style={skubntsel}>
                <option value="">All</option>
                <option value="">#method</option>
                <option value="">#method</option>
              </select>
            </div>

          </div>
          <div style={{marginTop:'20px'}}><button style={serachbtn}>Search</button></div>
         
       </div>
       <div className='container' style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'auto' ,overflowX:'scroll'}}>
           <div  style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'auto' }}>
            <div className='row' style={{padding:'7px',backgroundColor:'#FDE31A',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px',width:'1500px',marginRight:'100px'}}>
            <div className='col'><p> Order Number</p></div>
          
            <div className='col'>
            <p>Tracking Number</p>
            </div>
            <div className='col'><p>Tracking Number</p></div>
            <div className='col'><p>Dispute Reason</p></div>
            <div className='col'>
            <p>Expected Solution</p>
            </div>
            <div className='col'>
            <p>Created Date</p>
            </div>
           <div className='col'><p>Status</p></div>
           <div className='col'><p>Action</p></div>


            </div>
           </div>
           </div>
            </Tab.Panel>
          </Tab.Panels>
    </Tab.Group>
      </div>
        </div>
      </div>
   </>
  )
}

export default SellerDispute