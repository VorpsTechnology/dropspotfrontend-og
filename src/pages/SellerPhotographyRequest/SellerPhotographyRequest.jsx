import React from 'react'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import SellerSidebar from '../SellerDashboard/SellerSidebar'

import './SellerPhotographyRequest.css'

function SellerPhotographyRequest() {

     
  const Order={
    backgroundColor:'#FDE31A',
    borderColor:'transparent',
    borderRadius:'10px',
    fontWeight:'400',
    fontSize:'15px',
   
  
 }

  return (
  <>
  <Adminnavbar />
  <div className='row' style={{backgroundColor:'#32333A',padding:'0px 0px 0px 0px'}}>
    <div className='col-2' >
        <SellerSidebar />
    </div>
   <div className='col-10' style={{height:'800px'}}>
    <div  className='container' id='tabcontainer' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',padding:'40px',width:'auto',margin:'10px 20px 10px 20px',}}>
 <div><h2>Photography Request</h2></div>
 <div className='container' style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'auto',overflowX:'scroll' }}>
           <div style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1000px'}}>
             <div >
             <div className='row' style={{padding:'7px',backgroundColor:'#FDE31A',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px' }}>
             <div className='col'><button style={Order}>	Product Name</button></div>
            <div  className='col'><button style={Order}>	Sku Id</button></div>
            <div className='col'><button style={Order}>Varient</button></div>
            <div  className='col-md-auto'><button style={Order}>Dropshiper User ID</button></div>
            <div className='col'><button style={Order}>Status</button></div>
            <div className='col'><button style={Order}>Action</button></div>
         
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

export default SellerPhotographyRequest
