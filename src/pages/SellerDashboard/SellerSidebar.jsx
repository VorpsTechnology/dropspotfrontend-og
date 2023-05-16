import React from 'react'

import { useHistory } from "react-router-dom";


function SellerSidebar() {
const history = useHistory();
const SellerPhotographyRequest= () => {
    history.push("SellerPhotographyRequest");
} 

const SellerWishlist= () => {
    history.push("SellerWishlist");
} 

const SellerSourchingForm= () => {
  history.push("SellerSourchingForm");
} 

const SellerInventory= () => {
    history.push("SellerInventory");
} 

const SellerCart=()=>{
  history.push('SellerCart')
}


const SellerOrderFullfillment= () => {
  history.push("SellerOrderFullfillment");
} 
const SellerDispute= () => {
  history.push("SellerDispute");
} 


const SellerOrderTracking=()=> {
  history.push('SellerOrderTracking')
}

const SellerDashboard =() =>{
  history.push('SellerDashboard')
}
const SellerUndeleviredOrder =()=>{
  history.push('SellerUndeleviredOrder')
}



return (

<div  className='container-fluid table-bordered'  id="main" style={{height:'100%',width:'230px'}}  >
<div align='center' className="row " >  
            <div className="sidebar-offcanvas" id="sidebar" role="navigation"  >  
              <ul  className="flex-column pl-0 mt-4">
              <li >  
                  <a> <button   className='dropbtnsubmenu' onClick={SellerDashboard}> Dashboard</button></a>  
                 
                </li>  
                <li className="nav-item">  
                  <a  href="#submenu1" data-toggle="collapse" data-target="#submenu1"> <button className='dropbtnsubmenu' >Manage Product</button></a>  
                  <ul className="list-unstyled flex-column pl-0 collapse" id="submenu1" aria-expanded="false">  
                    <li className="nav-item pl-2"> <a className="nav-link" href> <button  className='dropbtnsubmenu' onClick={SellerSourchingForm}> Sourcing </button></a> </li>  

                    <li className="nav-item pl-2"> <a className="nav-link" href> <button  onClick={SellerInventory} className='dropbtnsubmenu'>My inventory</button>  </a> </li> 
                    <li className="nav-item pl-2"> <a className="nav-link" href> <button  onClick={SellerWishlist} className='dropbtnsubmenu'>Wishlist</button>  </a> </li> 
                    <li className="nav-item pl-2"> <a className="nav-link" href>  <button onClick={SellerPhotographyRequest} className='dropbtnsubmenu'> My Photography</button> </a> </li> 
                  </ul>  
                </li>  
                <li className="nav-item">  
                  <a  href="#submenu2" data-toggle="collapse" data-target="#submenu2"> <button className='dropbtnsubmenu'> Order</button></a>  
                  <ul className="list-unstyled flex-column pl-0 collapse" id="submenu2" aria-expanded="false">  


                    <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu'  onClick={SellerOrderFullfillment}  > Order Fullfillment</button> </a> </li>  
                    <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={SellerDispute}>Disputes </button> </a> </li> 
    
                    <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu'  onClick={SellerUndeleviredOrder} > Undeliverable Orders</button> </a> </li>  
                    <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={SellerOrderTracking} >Orders Tracking</button>  </a> </li> 
                    
                  </ul>  
                </li>   
                <li className="nav-item">  
                  <a  href="#submenu3" data-toggle="collapse" data-target="#submenu3"> <button className='dropbtnsubmenu'  >  Add To Cart</button> </a>  
                  <ul className="list-unstyled flex-column pl-0 collapse" id="submenu3" aria-expanded="false">  
 
                    <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={SellerCart}  >Purchase Cart</button>  </a> </li>  
                
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