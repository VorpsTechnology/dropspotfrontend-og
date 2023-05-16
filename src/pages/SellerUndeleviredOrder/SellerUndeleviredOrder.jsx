import React,{useState} from 'react'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import SellerSidebar from '../SellerDashboard/SellerSidebar'
import 'bootstrap/dist/css/bootstrap.css';
import { Tab } from '@headlessui/react';

function SellerUndeleviredOrder() {
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
        width:'240px',
        fontWeight:'650',
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
           
       }
       const skubnt={
        width:'300px',
   
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
      width:'300px',
   
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
   <div className='row'  style={{backgroundColor:'#31343A'}}>
    <div className='col-2'>
        <SellerSidebar />
    </div>
    <div className='col-10'>
    <div className='container' id="tabcontainer" style={{margin:'10px 20px 20px 10px',width:'auto', padding:'20px',overflowX:'scroll'}}>
      <div className='headingAll'><h2>RTO</h2></div>
      <Tab.Group>
      <div className='conatiner' style={buttonheader}>
      <Tab.List className="flex space-x-1 rounded-xl  p-1"  >
      <Tab  className={`tabbtn3 ${tabSelected === 1 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(1)}>Awaiting Pickup </Tab>
                    <Tab  className={`tabbtn3 ${tabSelected === 2 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(2)}>Processed</Tab>
               <Tab   className={`tabbtn3 ${tabSelected === 3 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(3)}>Awaiting Payments</Tab>
                <Tab   className={`tabbtn3 ${tabSelected === 4 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(4)}>Paid</Tab>
               
               <Tab  className={`tabbtn3 ${tabSelected === 5 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(5)}>Closed</Tab>
                <Tab  className={`tabbtn3 ${tabSelected === 6 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(6)}>Expired</Tab>
               
                <Tab  className={`tabbtn3 ${tabSelected === 7 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(7)}>Abnormal Return</Tab>
              </Tab.List>
         </div>
             
         
          
          <Tab.Panels style={tabpanls}>
          <Tab.Panel>
          <div className='container' style={{ display: 'block',color:'black',borderRadius:'30px',}}>
          <div className="container" style={{ display: 'block',color:'black',padding:'20px',borderRadius:'30px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)"}} >
          <div className='row' style={{marginTop:'20px'}}>
            
            
            <div className='col'><input style={skubnt} placeholder='please enter order number' type="text" />
            </div>
            

      </div>
        
      <div className='row' style={{marginTop:'20px'}}>
        <div className='col-2'><button style={serchbtn}>submit</button></div>
        <div className='col-2'><button style={Pickbtn}> Send Pickup Notification</button></div>
      </div>
          </div>
          <div className='container' style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1000px' ,overflowX:'scroll'}}>
            <div style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1000px' }}>
            <div className='row' style={{padding:'7px',backgroundColor:'#FDE31A',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px',width:'1500px',marginRight:'100px' }}>
            <div className='col-md-auto'><button style={Order}>Your Order Number</button></div>
           
            <div className='col-md-auto'><button style={Order}>Order Source</button></div>
            
            <div className='col-md-auto'><button style={Order}>Quantity</button></div>
          
           
            <div className='col-md-auto'><button style={Order}>Paid Time</button></div>
            <div className='col'><button style={Order}>Status</button></div>
            <div className='col'><button style={Order}>Address</button></div>
            <div className='col-md-auto'><button style={Order}>Shipping Info</button></div>
            <div className='col-md-auto'><button style={Order}>Shipping Method</button></div>
            <div className='col-md-auto'><button style={Order}>Tracking Number </button></div>
            <div className='col'><button style={Order}>Amount</button></div>
            <div className='col'><button style={Order}>Action</button></div>


          </div>
            </div>
          
          </div>
          

          </div>
      
            </Tab.Panel>
            <Tab.Panel>
           <div  className='container' style={{ display: 'block',color:'black',borderRadius:'30px',}}>
           <div className="container" style={{ display: 'block',color:'black',padding:'20px',borderRadius:'30px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)"}} >
           <div className='row' style={{marginTop:'20px'}}>
            <div className='col'><input style={skubnt} placeholder='please enter order number' type="text" /></div>

            </div>
        
            <div style={{marginTop:'20px'}}><button style={serchbtn}>Search</button></div>
          </div>
           </div>
           <div className='container'  style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1000px' ,overflowX:'scroll'}}>
           <div  style={{ display: 'block',color:'black',padding:'7px',borderRadius:'30px',width:'1000px' }}>
           <div className='row' style={{padding:'7px',backgroundColor:'#FDE31A',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px',width:'1700px',marginRight:'100px' }}>
                <div className='col-md-auto'><button style={Order}> Order Number</button></div>
                <div className='col-md-auto'><button style={Order}>Store Order Number</button></div>
                <div className='col-md-auto'><button style={Order}>Order Source</button></div>
                <div className='col-md-auto'><button style={Order}>Tracking Number</button></div>
                <div className='col-md-auto'><button style={Order}>Pickup Carrier Contact Info</button></div>
                <div className='col-md-auto'><button style={Order}>Resending Fee (INR)</button></div>
                <div className='col-md-auto'><button style={Order}>Deadline</button></div>
                <div className='col-md-auto'><button style={Order}>Note</button></div>
                <div className='col-md-auto'><button style={Order}>Shipping Info</button></div>
                <div className='col-md-auto'><button style={Order}>Date Processed</button></div>



                </div>
           </div>
            </div>

           
            
              
                
            </Tab.Panel>
            <Tab.Panel>
            <div className='continer' style={{ display: 'block',color:'black',borderRadius:'30px'}}>
            
            <div className="container" style={{ display: 'block',color:'black',padding:'20px',borderRadius:'30px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)"}} >
            <div className='row' style={{marginTop:'20px'}}>
            <div className='col'><input style={skubnt} type="text"  placeholder='please enter order number' /></div>
         
            
           

          </div>
         
          <div className='row' style={{marginTop:'20px'}}>
            <div className='col-2'><button style={serchbtn}>Search</button></div>
          
            <div className='col-2'><button style={serchbtn}>Upload Excel</button></div>
            <div className='col-2'><button style={serchbtn}>Download Excel</button></div>
          </div>
            </div>

            <div className='container'  style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1000px' ,overflowX:'scroll'}}>
            <div style={{ display: 'block',color:'black',padding:'7px',borderRadius:'30px',width:'1000px',marginRight:'100px' }}>
          <div className='row' style={{padding:'5px',marginTop:'20px',backgroundColor:'#FDE31A',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',width:'1390px'}}>

           
            <div className='col-md-auto'><button style={Order}>Store Order number</button></div>
            <div className='col-md-auto'><button style={Order}>Order Source</button></div>

            <div className='col-md-auto'><button style={Order}>Tracking Number</button></div>
            <div className='col-md-auto'><button style={Order}>Pick Up Carrier Contact Info</button></div>
            <div className='col-md-auto'><button style={Order}>Resending Fee</button></div>
            <div className='col-md-auto'><button style={Order}>Deadline</button></div>
            <div className='col-md-auto'><button style={Order}>Note</button></div>
            <div className='col-md-auto'><button style={Order}>Shipping Info</button></div>
            <div className='col-md-auto'><button style={Order}>Action</button></div>


            </div>
          </div>
            </div>
        
          
            </div>
          
            </Tab.Panel>
            <Tab.Panel>
              <div style={{ display: 'block',color:'black',borderRadius:'30px'}}>
                <div className="container" style={{ display: 'block',color:'black',padding:'20px',borderRadius:'30px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)"}} >
                <div className='row' style={{marginTop:'20px'}}>

                  <div className='col'><input style={skubnt} placeholder='please enter order number' type="text" /></div>
                  <div style={{marginTop:'20px'}}><button style={serchbtn}>Search</button></div>



                  </div>
                </div>
                <div className='container'  style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1000px' ,overflowX:'scroll'}}>
                <div style={{ display: 'block',color:'black',padding:'7px',borderRadius:'30px',width:'1000px' }}>
                <div className='row'  style={{padding:'7px',backgroundColor:'#FDE31A',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px',width:'1400px',marginRight:'100px' }}>
                <div className='col-md-auto'><button style={Order}> Order Number</button></div>
                <div className='col-md-auto'><button style={Order}>Store Order Number</button></div>
                <div className='col-md-auto'><button style={Order}>Order Source</button></div>
                <div className='col-md-auto'><button style={Order}>Tracking Number</button></div>
                <div className='col-md-auto'><button style={Order}>Pick Up Carrier Contact Info</button></div>
                <div className='col-md-auto'><button style={Order}>Resending Fee</button></div>
                <div className='col-md-auto'><button style={Order}>Deadline</button></div>
                <div className='col-md-auto'><button style={Order}>Note</button></div>
                <div className='col-md-auto'><button style={Order}>Action</button></div>



                </div>
                </div>
                </div>

              </div>
           
             
            </Tab.Panel>
            <Tab.Panel>
              <div style={{ display: 'block',color:'black',borderRadius:'30px'}}>
                <div  className="container" style={{ display: 'block',color:'black',padding:'20px',borderRadius:'30px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)"}}>
                <div className='row' style={{marginTop:'20px'}}>
     
            
                <div className='col'><input style={skubnt} placeholder='please enter order number' type="text" /><span></span></div>
                

            </div>
            <div style={{marginTop:'20px'}}><button style={serchbtn}>submit</button></div>
                </div>
                
              </div>
              <div className='container'  style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1000px' ,overflowX:'scroll'}}>
              <div style={{ display: 'block',color:'black',padding:'7px',borderRadius:'30px',width:'1000px' }}>
    <div className='row' style={{padding:'7px',backgroundColor:'#FDE31A',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px',width:'1400px',marginRight:'100px' }}>
        <div className='col'><button style={Order}>Your Order Number</button></div>
        <div className='col'><button style={Order}>Store Order Number</button></div>
        <div className='col'><button style={Order}>Order Source</button></div>
        <div className='col'><button style={Order}>Tracking Number</button></div>
       
        <div className='col'><button style={Order}>Resending Fee</button></div>
       
      
       
        <div className='col'><button style={Order}>Action</button></div>
  


      </div>
    </div>
                </div> 
    
      
            </Tab.Panel>
          
           
          
            <Tab.Panel>
              <div className='container' style={{ display: 'block',color:'black',borderRadius:'30px',}}>
                <div className='container' style={{ display: 'block',color:'black',padding:'20px',borderRadius:'30px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)"}}>
                <div className='row' style={{marginTop:'20px'}}>
            <div className='col-4'><input style={skubntdate} type="date" /></div>
            <div className='col-4'><input style={skubnt} placeholder='please enter order number' type="text" /></div>
            <div className='col-4'>
                <select  style={skubnt} name="All" id="">
                    <option value="">All</option>
                    <option value=""></option>
                </select>
                </div>
   

          </div>
          <div style={{marginTop:'20px'}} ><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>
                </div>

              </div>
           
        <div className='container'  style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1000px' ,overflowX:'scroll'}}>
        <div style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1000px' }}>
        <div className='row' style={{padding:'7px',backgroundColor:'#FDE31A',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px',width:'1490px',marginRight:'100px' }}>
            <div className='col-md-auto'><button style={Order}>Your Order Number</button></div>
           
            <div className='col-md-auto'><button style={Order}>Order Source</button></div>
            <div className='col-md-auto'><button style={Order}>Quantity</button></div>
            <div className='col-md-auto'><button style={Order}>Paid Time Dispatch time</button></div>
            <div className='col-md-auto'><button style={Order}>Status</button></div>
            <div className='col-md-auto'><button style={Order}>Shipping Info</button></div>
            <div className='col-md-auto'><button style={Order}>Shipping Method</button></div>
            <div className='col-md-auto'><button style={Order}>Tracking Number</button></div>
            <div className='col-md-auto'><button style={Order}>Amount</button></div>
            <div className='col-md-auto'><button style={Order}>Action</button></div>


          </div>
        </div>
        </div>
          
            </Tab.Panel>
            <Tab.Panel>
              <div className='container' style={{ display: 'block',color:'black',borderRadius:'30px',}} >
                <div className='container' style={{ display: 'block',color:'black',padding:'20px',borderRadius:'30px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)"}}>
                <div className='row' style={{marginTop:'20px'}}>
            <div className='col-4'><input style={skubntdate} type="date" /></div>
            <div className='col-4'><input style={skubnt} placeholder='please enter order number' type="text" /></div>
            <div className='col-4'>
                <select  style={skubnt} name="All" id="">
                    <option value="">All</option>
                    <option value=""></option>
                </select>
                </div>
   
           
          </div>
          <div style={{marginTop:'20px'}} ><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>

                </div>

              </div>
              <div className='container'   style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1000px' ,overflowX:'scroll'}}>
                <div style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1000px' }}>
                <div className='row' style={{padding:'7px',backgroundColor:'#FDE31A',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px',width:'1500px',marginRight:'100px' }}>
            <div className='col-md-auto'><button style={Order}>Your Order Number</button></div>
           
            <div className='col-md-auto'><button style={Order}>Order Source</button></div>
            <div className='col-md-auto'><button style={Order}>Quantity</button></div>
            <div className='col-md-auto'><button style={Order}>Paid Time Dispatch time</button></div>
            <div className='col-md-auto'><button style={Order}>Status</button></div>
            <div className='col-md-auto'><button style={Order}>Shipping Info</button></div>
            <div className='col-md-auto'><button style={Order}>Shipping Method</button></div>
            <div className='col-md-auto'><button style={Order}>Tracking Number</button></div>
            <div className='col-md-auto'><button style={Order}>Amount</button></div>
            <div className='col-md-auto'><button style={Order}>Action</button></div>


          </div>
                </div>
              </div>
          
          
         
            </Tab.Panel>
            <Tab.Panel>
            <div><p>1. Additional information required to be filled in. Otherwise, delivery time will be affected.</p></div>
        <div><p>2. Once you fill in the additional information, order information will be updated and your orders will be dispatched soon!</p></div>
        <div className='row' style={{marginTop:'20px'}}>
          
            <div className='col'><input style={skubnt} placeholder='please enter order number' type="text" /></div>
           
            <div className='col'><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>
          </div>
          <div className='row' style={{padding:'5px',marginTop:'20px',backgroundColor:'#FDE31A'}}>
            <div className='col'><button style={Order}>Your Order Number</button></div>
           
            <div className='col'><button style={Order}>Order Source</button></div>
            <div className='col'><button style={Order}>Quantity</button></div>
            <div className='col'><button style={Order}>Amount</button></div>
            <div className='col'><button style={Order}>Paid Time</button></div>
            <div className='col'><button style={Order}>Shipping Method</button></div>
            <div className='col'><button style={Order}>Reasons</button></div>
            <div className='col'><button style={Order}>Actions</button></div>


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

export default SellerUndeleviredOrder