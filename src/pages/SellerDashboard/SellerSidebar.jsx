import React, { useEffect, useState } from 'react'

import { useHistory } from "react-router-dom";


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

<div  className='container-fluid table-bordered'  id="main" style={{height:'100%',width:'230px'}}  >

<div align='center' className="row " >  
            <div className="sidebar-offcanvas" id="sidebar" role="navigation"  >  
              <ul  className="flex-column pl-0 mt-4">
              <li >  
                  <a> <button   className='dropbtnsubmenu' onClick={SellerDashboard}> Dashboard</button></a>  
                 
                </li>  
                <li className="nav-item">  
                  <a  > <button className='dropbtnsubmenu' onClick={()=>{
                    setOpenoProduct(!openProduct)
                  }} >Manage Product</button></a>  
                  <ul  >  
                    
                    
                    {
                      openProduct && <>
                <div>
                <div>
                     <li className="nav-item pl-2"> <a className="nav-link" href> <button  className='dropbtnsubmenu' onClick={SellerSourchingForm} style={{color: sourcing ? "grey" : "black" }}> Sourcing </button></a> </li>  

                     </div>
                     <div>
                     <li className="nav-item pl-2"> <a className="nav-link" href> <button  onClick={SellerInventory} className='dropbtnsubmenu' style={{color: inventoryButton ? "grey" : "black" }}>My inventory</button>  </a> </li> 

                     </div>
                     <div>
                     <li className="nav-item pl-2"> <a className="nav-link" href> <button  onClick={SellerWishlist} className='dropbtnsubmenu' style={{color: wishlist ? "grey" : "black" }}>Wishlist</button>  </a> </li> 

                     </div>
                     <div>
                     <li className="nav-item pl-2"> <a className="nav-link" href>  <button onClick={SellerPhotographyRequest} className='dropbtnsubmenu'style={{color: photograophy ? "grey" : "black" }}> My Photography</button> </a> </li> 

                     </div>
                </div>
</>
                    } </ul>  
                </li>  
                <li className="nav-item">  
                  <a > <button className='dropbtnsubmenu'  onClick={()=>{
                    setOpenoOrder(!openOrder)
                  }}> Order</button></a>  
                  <ul >  

{
  openOrder &&   <div>
  
  <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu'  onClick={SellerOrderFullfillment} style={{color: orderfullfulfmt ? "grey" : "black" }} > Order Fullfillment</button> </a> </li>  
                      <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={SellerDispute} style={{color: disputes ? "grey" : "black" }}>Disputes </button> </a> </li> 
  
                      <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu'  onClick={SellerUndeleviredOrder} style={{color: rto ? "grey" : "black" }}>RTO / Cancellation</button> </a> </li>  
                      <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={SellerOrderTracking} style={{color: tracking ? "grey" : "black" }}>Orders Tracking</button>  </a> </li> 
                      
  </div>
}
                  </ul>  
                </li>   
                <li className="nav-item">  
                  <a > <button className='dropbtnsubmenu' onClick={()=>{
                    setOpenoCart(!openCart)
                  }} >  Add To Cart</button> </a>  
                  <ul >  
                    {
                      openCart && <>
                      <div>
                        
                    <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={SellerCart} style={{color: cart ? "grey" : "black" }} >Purchase Cart</button>  </a> </li>  
                
                      </div>
                      </>
                    }
                  </ul>  
                </li>  
                {/* <li className="nav-item">  
                  <a className="nav-link" href="#submenu3" data-toggle="collapse" data-target="#submenu4"> <button className='dropbtnsubmenu'>Products</button> </a>  
                  <ul className="list-unstyled flex-column pl-0 collapse" id="submenu4" aria-expanded="false">  
                  <li className="nav-item pl-3"> <a className="nav-link" href> <button className='dropbtnsubmenu'  >Connection</button>  </a> </li>  
                    <li className="nav-item pl-3"> <a className="nav-link" href> <button className='dropbtnsubmenu' >Listed </button> </a> </li>  
                    <li className="nav-item pl-3"> <a className="nav-link" href> <button className='dropbtnsubmenu'  >SKU List</button>  </a> </li> 
                    <li className="nav-item pl-3"> <a className="nav-link" href> <button className='dropbtnsubmenu'  > Service Product</button></a> </li> 
                    
                  </ul>  
                </li>  */}
                {/* <li className="nav-item">  
                  <a className="nav-link" href="#submenu4" data-toggle="collapse" data-target="#submenu5"><button className='dropbtnsubmenu'> Authentication</button></a>  
                  <ul className="list-unstyled flex-column pl-0 collapse" id="submenu5" aria-expanded="false">  
                    <li className="nav-item pl-3"> <a className="nav-link " href> <button  className='dropbtnsubmenu'>Shopify</button> </a> </li>  
                    <li className="nav-item pl-3"> <a className="nav-link " href> <button  className='dropbtnsubmenu'> Ebay </button></a> </li>  
                    <li className="nav-item pl-3"> <a className="nav-link " href> <button  className='dropbtnsubmenu'> Etsy</button></a> </li>  
                    <li className="nav-item pl-3"> <a className="nav-link " href> <button  className='dropbtnsubmenu'> Api</button> </a> </li> 
                    <li className="nav-item pl-3"> <a className="nav-link " href> <button  className='dropbtnsubmenu'>dsfsdffsf</button> </a> </li>  
                    <li className="nav-item pl-3"> <a className="nav-link " href> <button  className='dropbtnsubmenu'>sfdfsfsdf</button>  </a> </li> 
                  </ul>  
                </li>   */}
               
              </ul>  
            </div>  
          </div>  
</div>
   
  )
}

export default SellerSidebar