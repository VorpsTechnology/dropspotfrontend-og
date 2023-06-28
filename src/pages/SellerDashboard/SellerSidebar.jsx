import React, { useEffect, useState } from 'react'

import { useHistory } from "react-router-dom";
import cancel from '../../assets/cancel.png'
import trip from '../../assets/trip.png'
import spe from '../../assets/spe.png'
import newpro from '../../assets/newpro.png'
import love from '../../assets/love.png'
import cartsim from '../../assets/cartsim.png'
import  camera from '../../assets/camera.png'
import dashboard from '../../assets/dashboard.png'
import sor from '../../assets/sor.png'
import adds from '../../assets/adds.png'



function SellerSidebar() {
const history = useHistory();
const SellerPhotographyRequest= () => {
    history.push("/SellerPhotographyRequest");
} 

const SellerWishlist= () => {
    history.push("/SellerWishlist");
} 

const SellerSourchingForm= () => {
  history.push("/SellerSourchingForm");
} 

const SellerInventory= () => {
    history.push("/SellerInventory");
} 

const SellerCart=()=>{
  history.push('/SellerCart')
}


const SellerOrderFullfillment= () => {
  history.push("/SellerOrderFullfillment");
} 
const SellerDispute= () => {
  history.push("/SellerDispute");
} 


const SellerOrderTracking=()=> {
  history.push('/SellerOrderTracking')
}

const SellerDashboard =() =>{
  history.push('/SellerDashboard')
}
const SellerUndeleviredOrder =()=>{
  history.push('/SellerUndeleviredOrder')
}

const [openProduct,setOpenoProduct]=useState(false)
console.log("open",openProduct);

const [openOrder,setOpenoOrder]=useState(false)
console.log("open",openProduct);

const [openCart,setOpenoCart]=useState(false)
console.log("open",openProduct);

console.log("url",window.location.pathname);
const [inventoryButton,setInventoryButton]=useState(false)
const [sourcing,setSourcing]=useState(false)
const [wishlist,setwishlist]=useState(false)
const [photograophy,setPhotography]=useState(false)
const [orderfullfulfmt,setorderfulfilmnt]=useState(false)
const [disputes,setdisputes]=useState(false)
const [rto,setrto]=useState(false)
const [tracking,settracking]=useState(false)
const [cart,setcart]=useState(false)

useEffect(()=>{
   if(window.location.pathname=="/SellerInventory"){
    setOpenoProduct(true)
    setInventoryButton(true)
   }else if(window.location.pathname=="/SellerSourchingForm"){
    setOpenoProduct(true)
    setSourcing(true)
   }else if(window.location.pathname=="/SellerWishlist"){
    setOpenoProduct(true)
    setwishlist(true)
   }
   else if(window.location.pathname=="/SellerPhotographyRequest"){
    setOpenoProduct(true)
    setPhotography(true)
   }
   else if(window.location.pathname=="/SellerOrderFullfillment"){
    setOpenoOrder(true)
    setorderfulfilmnt(true)
   }
   else if(window.location.pathname=="/SellerDispute"){
    setOpenoOrder(true)
    setdisputes(true)
   }
   else if(window.location.pathname=="/SellerUndeleviredOrder"){
    setOpenoOrder(true)
    setrto(true)
   }
   else if(window.location.pathname=="/SellerOrderTracking"){
    setOpenoOrder(true)
    settracking(true)
   }
   else if(window.location.pathname=="/SellerCart"){
    setOpenoCart(true)
    setcart(true)
   }
},[])
const productOptions=[]
const orderOptions=[]
const cartOptions=[]
return (

<div  className='container-fluid'  id="main" style={{height:'100%',width:'230px'}}  >

<div align='center' className="row " style={{marginBottom:'30px'}}>  
            <div className="sidebar-offcanvas" id="sidebar" role="navigation"  >  
              <ul  className="flex-column pl-0 mt-4">
              <li >  
                  <a> <button   className='dropbtnsubmenu' onClick={SellerDashboard}>
                  <div align='left' style={{display:'flex',textAlign:"left"}}>
                  <div ><img src={dashboard} alt='dashboard'/></div>
                  <div style={{margin:'0px 0px 0px 5px'}}> Dashboard</div>
                 </div>
                   </button></a>  
                 
                </li>  
                <li className="nav-item">  
                  <a  > <button className='dropbtnsubmenu' onClick={()=>{
                    setOpenoProduct(!openProduct)
                  }} >
                    <div style={{display:'flex',textAlign:'left'}}>
                   <div ><img src={newpro} alt='authentication'/></div>
                  <div style={{margin:'0px 0px 0px 5px'}}>  Manage Product</div>
                  </div>
                 </button></a>  
                  <ul  >  
                    
                    
                    {
                      openProduct && <>
                <div>
                <div>
                     <li className="nav-item pl-2"> <a className="nav-link" href> <button  className='dropbtnsubmenu' onClick={SellerSourchingForm} style={{color: sourcing ? "black" : "grey" }}> 
                     <div style={{display:'flex',textAlign:'left'}}>
                   <div ><img src={sor} alt='authentication'/></div>
                  <div style={{margin:'0px 0px 0px 5px'}}> Sourcing </div>
                   </div> 
                     </button></a> </li>  

                     </div>
                     <div>
                     <li className="nav-item pl-2"> <a className="nav-link" href> <button  onClick={SellerInventory} className='dropbtnsubmenu' style={{color: inventoryButton ? "black" : "grey" }}>
                     <div style={{display:'flex',textAlign:'left'}}>
                   <div ><img src={cartsim} alt='authentication'/></div>
                  <div style={{margin:'0px 0px 0px 5px'}}> My inventory</div>
                   </div> 
                     </button>  </a> </li> 

                     </div>
                     <div>
                     <li className="nav-item pl-2"> <a className="nav-link" href> <button  onClick={SellerWishlist} className='dropbtnsubmenu' style={{color: wishlist ? "black" : "grey" }}>
                     <div style={{display:'flex',textAlign:'left'}}>
                   <div ><img src={love} alt='authentication'/></div>
                  <div style={{margin:'0px 0px 0px 5px'}}>    Wishlist</div>
                   </div>
                    </button>  </a> </li> 

                     </div>
                     <div>
                     <li className="nav-item pl-2"> <a className="nav-link" href>  <button onClick={SellerPhotographyRequest} className='dropbtnsubmenu'style={{color: photograophy ? "black" : "grey" }}>
                     <div style={{display:'flex',textAlign:'left'}}>
                  <div ><img src={camera} alt='authentication'/></div>
                  <div style={{margin:'0px 0px 0px 5px'}}>    My Photography</div>
                  </div>
                    </button> </a> </li> 

                     </div>
                </div>
</>
                    } </ul>  
                </li>  
                <li className="nav-item">  
                  <a > <button className='dropbtnsubmenu'  onClick={()=>{
                    setOpenoOrder(!openOrder)
                  }}><span><i className="fa-solid fa-truck-fast" style={{color: "#0f0f10"}}></i></span> Order</button></a>  
                  <ul >  

{
  openOrder &&   <div>
  
  <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu'  onClick={SellerOrderFullfillment} style={{color: orderfullfulfmt ? "black" : "grey" }} > Order Fullfillment</button> </a> </li>  
                      <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={SellerDispute} style={{color: disputes ? "black" : "grey" }}>
                      <div style={{display:'flex',justifyContent:'space-evenly'}}>
                  <div ><i className="fa-solid fa-messages-question" style={{color: "#0f0f10"}}></i></div>
                  <div> Disputes</div>
                 </div>
                      </button> </a> </li> 
  
                      <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu'  onClick={SellerUndeleviredOrder} style={{color: rto ? "black" : "grey" }}>
                      <div style={{display:'flex',justifyContent:'space-evenly'}}>
                  <div style={{padding:'10px 0px 0px 5px'}} ><img style={{height:'24px',width:'24px'}} src={cancel} alt='authentication'/> </div>
                  <div> RTO / cancellation</div>
                 </div>
                  </button> </a> </li>  
                      <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={SellerOrderTracking} style={{color: tracking ? "black" : "grey" }}>
                      <div style={{display:'flex',justifyContent:'space-evenly'}}>
                   <div style={{padding:'10px 0px 0px 5px'}} ><img src={trip} alt='authentication'/></div>
                  <div> Orders Tracking</div>
                   </div>
                     </button>  </a> </li> 
                      
  </div>
}
                  </ul>  
                </li>   
                <li className="nav-item">  
                  <a > <button className='dropbtnsubmenu' onClick={()=>{
                    setOpenoCart(!openCart)
                  }} >
                  <div style={{display:'flex',textAlign:'left'}}>
                   <div ><img src={spe} alt='authentication'/></div>
                  <div style={{margin:'0px 0px 0px 5px'}}>  Add To Cart</div>
                   </div>
                   </button> </a>  
                  <ul >  
                    {
                      openCart && <>
                      <div>
                        
                    <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={SellerCart} style={{color: cart ? "black" : "grey" }} >Purchase Cart</button>  </a> </li>  
                
                      </div>
                      </>
                    }
                  </ul>  
                </li>  
               
               
              </ul>  
            </div>  
            <div className='row'>
            <div className='sidenav-footer mx-3'>
          <div className="card " id="sidenavCard">
<div className="full-background" ></div>
<div className="card-body text-start p-2 w-100">
<div className="icon   text-center mb-2 d-flex align-items-center justify-content-center border-radius-md">
<img src={adds}/>
</div>
<div className="docs-info">
<h6 align='center' className="text-white up mb-0">Need help?</h6>
<p align='center' className="text-xs font-weight-bold">Please check our docs</p>

<div align='center' style={{margin:'0px 0px 10px 0px'}}><a  target="_blank" className="dobtn btn-white btn-sm w-100 mb-0 " >Documentation</a></div>
</div>
</div>
</div>
          </div>
            </div>
          </div>  
          
</div>
   
  )
}

export default SellerSidebar