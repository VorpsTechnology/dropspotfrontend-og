import React,{useState}  from 'react'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import SellerSidebar from '../SellerDashboard/SellerSidebar'
import 'bootstrap/dist/css/bootstrap.css';
import { Tab } from '@headlessui/react';
const SourchingImportedOrder = () => {

    const [tabSelected, setTabSelected] = useState(null);

    const serachbtn={
      backgroundColor:'#FDE31A',
      borderColor:'transparent',
      padding:'5px',
      width:'100px',
      borderRadius:'5px',
      fontSize:'15px',
      fontWeight:'400'
    }
    const skubnt={
      width:'300px',
      height:'35px',
      borderColor:'transparent',
    
      borderRadius: '86px',
     
      backgroundColor:'rgba(231, 231, 231, 1)',
      color: 'rgba(50, 51, 58, 1)',
      fontSize: '15px',
      paddingLeft: '20px',
    
    
    
      outlineColor:'transparent', 
    }
    // const box={
    //   width:'300px',
    //   borderColor:'#FDE31A',
    //   outline:'#FDE31A',
    //   borderRadius:'20px'
    // }
    
    
    
    const buttonheader={
      backgroundColor:'#FDE31A',
      borderRadius:'15px',
      width:'auto',
      alignItems:'center',
      height:'80px',
      alignSelf:'center',
      borderColor:'transparent',
      
    }
    
    const tabpanls={
      padding:'30px',
    
    }
    const handelTabCLick = (e) => {
      setTabSelected(e);
    };
  return (
    <>
    <div>
     <Adminnavbar />
     <div className='row'>
        <div className='col-2'>
            <SellerSidebar />
        </div>
        <div className='col-10'>
       
       <div className='container' id="tabcontainer" style={{margin:'20px 0px 20px 10px',width:'1100px', padding:'20px',}}>
       <div className='headingAll'><h2>Imported Order</h2></div>
     <Tab.Group>
     <div className='conatiner' style={buttonheader}>
     <Tab.List className='tablist' >
               
               <Tab
                className={`tabbtn ${tabSelected === 1 ? "selected-tab" : ""}`}
                onClick={() => handelTabCLick(1)}  >Orders(0)</Tab>
               <Tab  className={`tabbtn ${tabSelected === 2 ? "selected-tab" : ""}`}
                onClick={() => handelTabCLick(2)} >Invalid Orders(1)</Tab>
               <Tab  className={`tabbtn ${tabSelected === 3 ? "selected-tab" : ""}`}
                onClick={() => handelTabCLick(3)}>Declined</Tab>
             </Tab.List>
        </div>
      <Tab.Panels style={tabpanls}>
           <Tab.Panel>
           <div className='Dashboardheading'><h3>Orders</h3></div>
           <div className='container' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px'}} >
        <div className='row' style={{marginTop:'20px'}}>
           <div className='col'>
             <select style={skubnt} name="name" id="value">
               <option value="">Your Order Time</option>
               <option value="">Your Order Time</option>
               <option value="">CJ Time</option>
             </select>
             </div>
           <div className='col'><input  style={skubnt} type="date" /></div>
           <div className='col'>
             <select  style={skubnt}  name="name" id="value">
               <option value="">Select a Shipping method</option>
               <option value="">#method</option>
               <option value="">#method</option>
             </select>
           </div>
         </div>
         <div className='row'  style={{marginTop:'20px'}} >
                 <div className='col'><input   style={skubnt} type="text" placeholder='Please enter the name' /></div>
                 <div className='col'><input style={skubnt}  type="text" placeholder='Please enter the product title' /></div>
                 <div className='col'><input  style={skubnt} type="text" placeholder='Please enter SKU' /></div>
               </div>
               <div className='row'  style={{marginTop:'20px'}}>
                 <div className='col'><input  style={skubnt} type="text" placeholder='Please enter order number' /></div>
                 <div className='col'><input style={skubnt} type="text"  placeholder='Abnormal Orders' /></div>
                 <div className='col'><p><span style={{margin:'10px'}}><button style={serachbtn}>Search</button></span><button style={serachbtn}>Clear</button></p></div>
               </div>
        </div>
         <div className='container' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px'}}  >
              <div className='row' style={{marginTop:'20px',backgroundColor:'#FDE31A',padding:'15px 2px 5px 2px',color:'black',borderRadius:'20px'}}>
                 <div className='col'> 
                 <p ><input type="checkbox"/><span style={{marginLeft:'10px'}} >Your Order ID.</span></p>
                </div>
                 <div className='col'><p >Your Order Time</p></div>
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
                 <p>Status</p>
                 </div>
                 <div className='col'>
                 <p>Action</p>
                 </div>
               </div>
              </div>
           </Tab.Panel>
           <Tab.Panel>
           <div className='container' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px'}} >
           <div className='Dashboardheading'><h3>Invalid Orders</h3></div>
        <div className='row' style={{marginTop:'20px'}}>
           <div className='col'>
             <select style={skubnt} name="name" id="value">
               <option value="">Your Order Time</option>
               <option value="">Your Order Time</option>
               <option value="">CJ Time</option>
             </select>
             </div>
           <div className='col'><input  style={skubnt} type="date" /></div>
           <div className='col'>
             <select  style={skubnt}  name="name" id="value">
               <option value="">Select a Shipping method</option>
               <option value="">#method</option>
               <option value="">#method</option>
             </select>
           </div>
         </div>
         <div className='row'  style={{marginTop:'20px'}} >
                 <div className='col'><input   style={skubnt} type="text" placeholder='Please enter the name' /></div>
                 <div className='col'><input style={skubnt}  type="text" placeholder='Please enter the product title' /></div>
                 <div className='col'><input  style={skubnt} type="text" placeholder='Please enter SKU' /></div>
               </div>
               <div className='row'  style={{marginTop:'20px'}}>
                 <div className='col'><input  style={skubnt} type="text" placeholder='Please enter order number' /></div>
                 <div className='col'><input style={skubnt} type="text"  placeholder='Abnormal Orders' /></div>
                 <div className='col'><p><span style={{margin:'10px'}}><button style={serachbtn}>Search</button></span><button style={serachbtn}>Clear</button></p></div>
               </div>
        </div>

      
            
              <div className='container' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px'}}  >
              <div className='row' style={{marginTop:'20px',backgroundColor:'#FDE31A',padding:'15px 2px 5px 2px',color:'black',borderRadius:'20px'}}>
                 <div className='col'> 
                 <p ><input type="checkbox"/><span style={{marginLeft:'10px'}} >Your Order ID.</span></p>
                </div>
                 <div className='col'><p >Your Order Time</p></div>
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
                 <p>Status</p>
                 </div>
                 <div className='col'>
                 <p>Action</p>
                 </div>
               </div>
              </div>
           </Tab.Panel>
           
           <Tab.Panel>
           <div className='Dashboardheading'><h3>Declined Order</h3></div>
        <div className='flexck' style={{display:'flex',justifyContent:'space-evenly'}}>
             <div className='flg' style={{justifyContent:'left'}}>
                <button>Delete The Order</button>
             </div>
             <div className='dim'  style={{justifyContent:'left'}}>
               <button>Raise a dispute</button>
             </div>
        </div>
             </Tab.Panel>
         </Tab.Panels>
   </Tab.Group>
     </div>
     
       </div>
     </div>
        
        
    </div>
</>
  )
}

export default SourchingImportedOrder