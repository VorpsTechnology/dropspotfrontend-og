import React from 'react'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import SellerSidebar from '../SellerDashboard/SellerSidebar'

function SellerOrderTracking() {
    const serchbtn={
      backgroundColor:'#FDE31A',
      borderColor:'transparent',
      borderRadius:'10px',
      
      padding:'7px',
      outlineColor:'#FDE31A',
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
      width:'150px',
      fontWeight:'650'
        
        
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
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
        
        
        
          outlineColor:'transparent', 
        }
        
         const Clearbtn={
          backgroundColor:'black',
          borderColor:'transparent',
          borderRadius:'10px',
          color:'white',
         
          padding:'7px',
          marginLeft:'1px',
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)"  ,
          width:'150px',
          fontWeight:'650'
         }
        
         const Order={
            backgroundColor:'#FDE31A',
            borderColor:'transparent',
            borderRadius:'10px',
            fontWeight:'400',
            fontSize:'15px',
           
          
         }
         const Pickbtn={
          backgroundColor:'black',
          borderColor:'transparent',
          borderRadius:'10px',
          color:'white',
          padding:'10px',
          outlineColor:'#FDE31A',
          marginRight:'10px',
          fontSize:'15px',
          width:'130px',
          fontWeight:'650',
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
             
         }
        
   
  return (
    <>
    <Adminnavbar />
    <div className='row' style={{backgroundColor:'#31343A',padding:'0px 0px 0px',height:'800px'}}>
        <div className='col-2' >
            <SellerSidebar />
        </div>
        <div className='col-10'>
          

          <div className='container' id="tabcontainer"  style={{ display: 'block',color:'black',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',padding:'40px',width:'auto',margin:'20px 20px 20px 20px' }}>
           <div><h2>Order Tracking</h2></div>
          <div className='row'>
               <div className='col' style={{marginTop:'20px'}}>
               <div ><input style={skubnt} type="date" /></div>
               <div>
               <div className='row' >
               <div className='row' style={{marginTop:'20px'}}>
       <div className='col-2'><button style={serchbtn}>Search</button></div>
       <div className='col-2'><button style={Pickbtn}> Clear</button></div>
     </div>


         </div>
         <div className='container' style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1000px' ,overflowX:'scroll'}}>
           <div style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1000px' }}>
             <div >
             <div className='row' style={{padding:'7px',backgroundColor:'#FDE31A',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px',width:'2000px',marginRight:'100px' }}>
             <div className='col'><button style={Order}>	Date</button></div>
           <div className='col'><button style={Order}>	Order</button></div>
           <div className='col-md-auto'><button style={Order}>Shipping<br /> Label Quantity</button></div>
           <div className='col-md-auto'><button style={Order}>Dispatched <br /> (Normal/Abnormal)</button></div>
           <div className='col-md-auto'><button style={Order}>En Route <br />(Normal/Abnormal)Shipping Method</button></div>
           <div className='col-md-auto'><button style={Order}>Arrived <br />(Normal/Abnormal)</button></div>
           <div className='col'><button style={Order}>Out for <br /> Delivery(Normal/Abnormal)</button></div>
           <div className='col'><button style={Order}>Available for Pickup<br />(Normal/Abnormal)</button></div>
           <div className='col'><button style={Order}>Delivered</button></div>
           <div className='col'><button style={Order}>Action</button></div>
               </div>
           
             </div>
           </div>

         </div>
         
               </div>
               
               </div>
           </div>
          </div>
           </div>
    </div>
    </>
  )
}

export default SellerOrderTracking