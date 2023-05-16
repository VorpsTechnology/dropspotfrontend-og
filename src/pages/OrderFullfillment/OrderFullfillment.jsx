import React, { useEffect, useState } from "react";
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import Sidebar from '../Sidebar/Sidebar'


import 'bootstrap/dist/css/bootstrap.css';
import { Tab } from '@headlessui/react'


function OrderFullfillment() {
  const serchbtn={
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
    
     const Clearbtn={
        backgroundColor:'black',
        borderColor:'transparent',
        borderRadius:'10px',
        color:'white',
        padding:'10px',
        
    
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
    
     const skubnt={
      width:'300px',
      height:'35px',
      borderColor:'transparent',
    
      borderRadius: '10px',
     
      backgroundColor:'rgba(231, 231, 231, 1)',
      color: 'rgba(50, 51, 58, 1)',
      fontSize: '13px',
      padding: '10px',
      outlineColor:'rgba(0, 0, 0, 0.15)',
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)" 
    }
    
  
    
    const tabpanls={
      padding:'30px',
    
    }
    const skubntselect ={
      width:'150px',
   
      height:'35px',
      borderColor:'transparent',
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
      borderRadius: '10px',
     
      backgroundColor:'rgba(231, 231, 231, 1)',
      color: 'rgba(50, 51, 58, 1)',
      fontSize: '13px',
     
      outlineColor:'rgba(0, 0, 0, 0.15)', 
    }
    const handelTabCLick = (e) => {
      setTabSelected(e);
    };

  const [tabSelected, setTabSelected] = useState(null);
  return (
    <div>
      <div>
        <Adminnavbar />
      </div>
      <div className='row'>
      <div className='col-2'  style={{backgroundColor:'#31343A'}}><Sidebar /></div>
      <div className='col-10'>
     
     <div className='container' id="tabcontainer" style={{margin:'10px 20px 10px 20px', padding:'20px',width:'auto'}}>
     <div className='headingAll'><h2>Order Fullfillment</h2></div>
     <Tab.Group>
     <div className='conatiner' id="buttonheader" style={{ display: 'block',color:'black',borderRadius:'30px'}}  >
     <Tab.List className="flex space-x-1 rounded-xl  p-1" >
               
               <Tab  className={`tabbtn3 ${tabSelected === 1 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(1)}>All</Tab>
               <Tab className={`tabbtn3 ${tabSelected === 2 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(2)}>
               Awaiting Payments
               </Tab>
               <Tab className={`tabbtn3 ${tabSelected === 3 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(3)}>Pending</Tab>
               <Tab className={`tabbtn3 ${tabSelected === 4 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(4)}>Processing</Tab>
               <Tab className={`tabbtn3 ${tabSelected === 5 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(5)}>Dispatched</Tab>
               <Tab className={`tabbtn3 ${tabSelected === 6 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(6)}>Completed</Tab>
               <Tab className={`tabbtn3 ${tabSelected === 7 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(7)}>Closed</Tab>
               <Tab className={`tabbtn3 ${tabSelected === 8 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(8)}>Return </Tab>
     </Tab.List>
        </div>
            
        
         
         <Tab.Panels style={tabpanls}>
           <Tab.Panel> 
            
            <div className='continer' style={{ display: 'block',color:'black',borderRadius:'30px',}}>
          
          <div className="container" style={{ display: 'block',color:'black',padding:'20px',borderRadius:'30px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)"}} >
          <div className='Dashboardheading'><h3>All</h3></div>
           <div className='row' style={{marginTop:'20px'}}>
             <div className='col'><input style={skubnt} type="date" /></div>
             <div className='col'><input style={skubnt} placeholder='please enter order number' type="text" /></div>
             <div className='col'>
                 <select  style={skubntselect} name="Return order" id="">
                     <option value="">Return order</option>
                     <option value="">incomplete Order Information</option>
                 </select>
                 </div>
             <div style={{marginTop:'20px'}} ><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>
          </div>
        </div>
       
        <div className='container' style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1000px' ,overflowX:'scroll'}}>

           
          <div style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1000px' }}>
          <div className='row' style={{padding:'7px',backgroundColor:'#FDE31A',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px',width:'1100px',marginRight:'100px' }}>
                 <div className='col-md-auto'><button style={Order}>Your Order Number</button></div>
                 <div className='col-md-auto'><button style={Order}>Order Source</button></div>

                 <div className='col-md-auto'><button style={Order}>Status</button></div>
                 <div className='col-md-auto'><button style={Order}>Quantity</button></div>
                 <div className='col-md-auto'><button style={Order}>Shipping Method</button></div>
                 <div className='col-md-auto'><button style={Order}>Tracking Number</button></div>
                 <div className='col-md-auto'><button style={Order}>Amount</button></div>
                 <div className='col-md-auto'><button style={Order}>Action</button></div>


               </div>
          </div>
           </div>

             
          </div>
          </Tab.Panel>
           <Tab.Panel>
            
           <div className='container'  style={{ display: 'block',color:'black',borderRadius:'30px',overflowX:'scroll' }}>
            <div style={{ display: 'block',color:'black',padding:'20px',borderRadius:'30px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)"}}>
            <div className='Dashboardheading'><h3>Awaiting Payments</h3></div>
           <div className='row' style={{marginTop:'20px'}}>
             <div className='col'><input style={skubnt} type="date" /></div>

             <div className='col'>
                 <select  style={skubntselect} name="Order Status" id="">
                     <option value="">Awaiting Payments</option>
                     <option value="">Waiting for receive</option>
                     <option value="">Waiting for pay again</option>
                 </select>
                 </div>
                 <div className='col'><input style={skubntselect} placeholder='please enter order number' type="text" /></div>
                 <div className='col'>
                 <select  style={skubntselect} name="Order Status" id="">
                     <option value="">Return Orders</option>
                     <option value="">Incomplete Order information</option>
                   
                 </select>
                 </div>
             <div style={{marginTop:'20px'}}><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>
           </div>
            </div>
         

           
           <div  style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1100px' }}>
            <div className='row' style={{padding:'7px',backgroundColor:'#FDE31A',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px',width:'1100px',marginRight:'100px'}}>

              <div className='col-md-auto'><button style={Order}>Your Order Number</button></div>
              <div className='col'><button style={Order}>Order Source</button></div>
              
              <div className='col'><button style={Order}>Status</button></div>
              <div className='col'><button style={Order}>Quantity</button></div>
            
            
              <div className='col'><button style={Order}>Amount</button></div>
              <div className='col'><button style={Order}>Action</button></div>


            </div>
           </div>
           </div> 
           </Tab.Panel>
           <Tab.Panel>
           <div className='container' style={{ display: 'block',color:'black',borderRadius:'30px',overflowX:'scroll'  }}>
           <div style={{ display: 'block',color:'black',padding:'20px',borderRadius:'30px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)"}}>
           <div className='Dashboardheading'><h3>Pending</h3></div>

           <div className="row">
            <div className="col"><input style={skubnt} type="date" /></div>
            <div className="col"><input style={skubnt} placeholder='please enter order number' type="text" /></div>
            <div className="col">
            <select  style={skubntselect}  name="Order Status" id="">
                     <option value="">All</option>
                     <option value="">Changeable or Refuldable Orders</option>
                     <option value="">Full Payment Orders </option>
                 </select>
            </div>
           </div>
        <div className='row' style={{marginTop:'20px'}}>
   
                 <div className='col'><input style={skubnt} placeholder='please enter order number' type="text" /></div>
                 <div className='col'>
                 <select  style={skubntselect}  name="Order Status" id="">
                     <option value="">Return Orders</option>
                     <option value="">Incomplete Order information</option>
                   
                 </select>
                 </div>
             <div style={{marginTop:'20px'}} ><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>
           </div>
            </div>

            <div >
              
           <div   style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1500px',marginRight:'100px' }}>
           <div className='row' style={{padding:'7px',backgroundColor:'#FDE31A',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px',width:'1500px',marginRight:'100px'}}>
             <div className='col-md-auto'><button style={Order}>Your Order Number</button></div>
             
             <div className='col-md-auto'><button style={Order}>Order Source</button></div>
             
             <div className='col-md-auto'><button style={Order}>Quantity</button></div>
           
           
             <div className='col-md-auto'><button style={Order}>Paid Time</button></div>
             <div className='col-md-auto'><button style={Order}>Status</button></div>
             <div className='col-md-auto'><button style={Order}>Shipping Info</button></div>
             <div className='col-md-auto'><button style={Order}>Shipping Info</button></div>
             <div className='col-md-auto'><button style={Order}>Shipping Method</button></div>
             <div className='col-md-auto'><button style={Order}>Tracking Number </button></div>
             <div className='col-md-auto'><button style={Order}>Amount</button></div>
             <div className='col-md-auto'><button style={Order}>Action</button></div>


           </div>
           </div>
            </div>

          
        </div>
           </Tab.Panel>
           <Tab.Panel>
           <div className='container' style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'auto',overflowX:'scroll'  }}>
           <div style={{ display: 'block',color:'black',padding:'20px',borderRadius:'30px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)"}}>
           <div className='Dashboardheading'><h3>Processing</h3></div>
           <div className="row">
            <div className="col"><input style={skubnt} type="date" /></div>
            <div className="col"><input style={skubnt} placeholder='please enter order number' type="text" /></div>
            <div className="col">
            <select  style={skubntselect} name="All" id="">
                     <option value="">All</option>
                     <option value=""></option>
                 </select>
            </div>
           </div>
         <div className='row' style={{marginTop:'20px'}}>


             <div className='col'>
                 <select  style={skubntselect} name="Return order" id="">
                     <option value="">Return order</option>
                     <option value="">incomplete Order Information</option>
                 </select>
                 </div>
             <div style={{marginTop:'20px'}}><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>
           </div>
           </div>
          
           <div   style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1500px'}}>
           <div className='row' style={{padding:'7px',marginTop:'20px',backgroundColor:'#FDE31A',borderRadius:'20px',marginRight:'100px'}}>
             <div className='col-md-auto'><button style={Order}>Your Order Number</button></div>
             
             <div className='col-md-auto'><button style={Order}>Order Source</button></div>
             <div className='col-md-auto'><button style={Order}>Quantity</button></div>
             <div className='col-md-auto'><button style={Order}>Paid Time</button></div>
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
           <div className='container'  style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'auto',overflowX:'scroll'  }}>
            <div style={{ display: 'block',color:'black',padding:'20px',borderRadius:'30px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)"}}>
            <div className='Dashboardheading'><h3>Dispatched</h3></div>
        <div className='row' style={{marginTop:'20px'}}>
             <div className='col'><input style={skubnt} type="date" /></div>
             <div className='col'><input style={skubnt} placeholder='please enter order number' type="text" /></div>
             <div className='col'>
                 <select  style={skubntselect} name="All" id="">
                     <option value="">All</option>
                     <option value=""></option>
                 </select>
                 </div>
   
             <div style={{marginTop:'20px'}} ><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>
           </div>
            </div>
         
           <div  style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1600px' }}>
           <div className='row' style={{padding:'7px',marginTop:'20px',backgroundColor:'#FDE31A',borderRadius:'20px',marginRight:'100px'}}>
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
           <div className='container'  style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',overflowX:'scroll' }}>
           <div style={{ display: 'block',color:'black',padding:'20px',borderRadius:'30px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)"}}>
           <div className='Dashboardheading'><h3>Completed</h3></div>
           <div className='row' >
             <div className='col'><input style={skubnt} type="date" /></div>
             <div className='col'><input style={skubnt} placeholder='please enter order number' type="text" /></div>
             <div className='col'>
                 <select  style={skubntselect} name="All" id="">
                     <option value="">All</option>
                     <option value=""></option>
                 </select>
                 </div>
   
             <div style={{marginTop:'20px'}}><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>
           </div>
           </div>
           
           <div  style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1600px' }}>
           <div className='row' style={{padding:'5px',marginTop:'20px',backgroundColor:'#FDE31A',borderRadius:'20px',width:'1500px',marginRight:'100px'}}>
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
           <div className='container'  style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'auto',overflowX:'scroll'  }}>
           <div style={{ display: 'block',color:'black',padding:'20px',borderRadius:'30px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)"}}>
           <div className='Dashboardheading'><h3>Closed</h3></div>
           <div className='row' style={{marginTop:'20px'}}>
             <div className='col'><input style={skubnt} type="date" /></div>
             <div className='col'><input style={skubnt} placeholder='please enter order number' type="text" /></div>
             <div className='col'>
                 <select  style={skubntselect} name="All" id="">
                     <option value="">All</option>
                     <option value=""></option>
                 </select>
                 </div>
   
             <div style={{marginTop:'20px'}}><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>
           </div>
           </div>
         
           <div className='row' style={{padding:'5px',marginTop:'20px',backgroundColor:'#FDE31A',borderRadius:'20px',width:'1500px',marginRight:'100px'}}>
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
        
           </Tab.Panel>
           <Tab.Panel>
           <div className='container'  style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'auto',overflowX:'scroll'  }}>
           <div style={{ display: 'block',color:'black',padding:'20px',borderRadius:'30px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)"}}>
           <div className='Dashboardheading'><h3>Return Orders</h3></div>
           <div><p>1. Additional information required to be filled in. Otherwise, delivery time will be affected.</p></div>
         <div><p>2. Once you fill in the additional information, order information will be updated and your orders will be dispatched soon!</p></div>
         <div className='row' style={{marginTop:'20px'}}>
           
             <div className='col'><input style={skubnt} placeholder='please enter order number' type="text" /></div>
           
             <div style={{marginTop:'20px'}}><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>
           </div>
           </div>
          
           <div   style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1200px'  }}>
           <div className='row' style={{padding:'5px',marginTop:'20px',backgroundColor:'#FDE31A',borderRadius:'20px',width:'1200px',marginRight:'100px'}}>
             <div className='col-md-auto'><button style={Order}>Your Order Number</button></div>
             
             <div className='col-md-auto'><button style={Order}>Order Source</button></div>
             <div className='col-md-auto'><button style={Order}>Quantity</button></div>
             <div className='col-md-auto'><button style={Order}>Amount</button></div>
             <div className='col-md-auto'><button style={Order}>Paid Time</button></div>
             <div className='col-md-auto'><button style={Order}>Shipping Method</button></div>
             <div className='col-md-auto'><button style={Order}>Reasons</button></div>
             <div className='col-md-auto'><button style={Order}>Actions</button></div>


           </div>
           </div>
          
            </div>
         
           </Tab.Panel>

         </Tab.Panels>
   </Tab.Group>
     </div>
     </div>
      </div>

     

     
    </div>
  )
}

export default OrderFullfillment
