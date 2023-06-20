import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import Disputeslist from '../Disputeslist/Disputeslist';
import Myinventry from '../myinventry/Myinventry';
import MyPhotography from '../MyPhotography/MyPhotography';
import OrderTracking from '../OrdersTracking/OrderTracking';
import './Sidebar.css'
import MyDropspot from '../MyDropspot';



function Sidebar() {
const history = useHistory();
const Sourcingpage= () => {
    history.push("/Sourcingpage");
        } 
  



 const Myinventry= () => {
          history.push("/Myinventry");
} 
const Wishlist= () => {
  history.push("/Wishlist");
} 

const MyPhotography= () => {
  history.push("/MyPhotography");
} 

const ImportedOrder=()=>{
  history.push('/ImportedOrder')
}

const Connection=()=>{
  history.push('/Connection')
}

const Listed =()=>{
  history.push('/Listed')
}

const OrderFullfillment=()=>{
  history.push('/OrderFullfillment')
}

const Dropshiporder=()=>{
  history.push('/Dropshiporder')
}
const Disputes=()=>{
  history.push('/Disputes')
}


const UndeleviredOrder=()=>{
  history.push('/UndeleviredOrder')
}
const OrderTracking=()=>{
  history.push('/OrderTracking')
}
const PurchaseCart=()=>{
  history.push('/PurchaseCart')
}
const SkuList=()=>{
  history.push('/SkuList')
}
const ServiceProduct=()=>{
  history.push('ServiceProduct')
}

const Authentication=()=>{
  history.push('/Authentication')
}
const MyDropspot =()=>{
  history.push('/MyDropspot')
}
const Diaries =()=>{
  history.push('/CreatePage')
}



const [openProduct,setOpenoProduct]=useState(false)
console.log("open",openProduct);

const [openOrder,setOpenoOrder]=useState(false)
console.log("open",openProduct);

const [openCart,setOpenoCart]=useState(false)
console.log("open",openProduct);


const [openAuth,setOpenoAuth]=useState(false)
console.log("open",openProduct);

const [connnected,setConnected]=useState(false)
const [listed,setListed]=useState(false)
const [wishlist,setwishlist]=useState(false)
const [sku,setsku]=useState(false)
const [photograophy,setPhotography]=useState(false)
const [orderimport,setorderimport]=useState(false)
const [disputes,setdisputes]=useState(false)
const [rto,setrto]=useState(false)
const [tracking,settracking]=useState(false)
const [cartpre,setcartpre]=useState(false)
const [cartpur,setcartpur]=useState(false)


useEffect(()=>{
  if(window.location.pathname=="/Connection"){
   setOpenoProduct(true)
   setConnected(true)
  }else if(window.location.pathname=="/Listed"){
   setOpenoProduct(true)
   setListed(true)
  }else if(window.location.pathname=="/Wishlist"){
  
   setOpenoProduct(true)
   setwishlist(true)
  }
  else if(window.location.pathname=="/MyPhotography"){
   setOpenoProduct(true)
   setPhotography(true)
  }
  else if(window.location.pathname=="/SkuList"){
    setOpenoProduct(true)
    setsku(true)
   }
  else if(window.location.pathname=="/ImportedOrder"){
   setOpenoOrder(true)
   setorderimport(true)
  }
  else if(window.location.pathname=="/Disputes"){
   setOpenoOrder(true)
   setdisputes(true)
  }
  else if(window.location.pathname=="/UndeleviredOrder"){
   setOpenoOrder(true)
   setrto(true)
  }
  else if(window.location.pathname=="/OrderTracking"){
   setOpenoOrder(true)
   settracking(true)
  }
  else if(window.location.pathname=="/Dropshiporder"){
   setOpenoCart(true)
   setcartpre(true)
  }
  else if(window.location.pathname=="/PurchaseCart"){
    setOpenoCart(true)
    setcartpur(true)
   }
   

},[])
  return (
    <div className='container-fluid table-bordered'  id="main" style={{height:'100%',width:'230px'}} >
    
         
          <div align='center' className="row " >  
            <div className="sidebar-offcanvas" id="sidebar" role="navigation">  
              <ul className="flex-column pl-0 mt-4">
              <li  >  
                  <a> <button  onClick={MyDropspot} className='dropbtnsubmenu'> Dashboard</button></a>  
                 
                </li>  
                {/* <li className="nav-item">  
                  <a className="nav-link" href="#submenu1" data-toggle="collapse" data-target="#submenu1"> <button className='dropbtnsubmenu' >Manage Product</button></a>  
                  <ul className="list-unstyled flex-column pl-0 collapse" id="submenu1" aria-expanded="false">  
                    {/* <li className="nav-item pl-3"> <a className="nav-link" href> <button onClick={Sourcingpage} className='dropbtnsubmenu'> Sourcing </button></a> </li>   

                     <li className="nav-item pl-3"> <a className="nav-link" href> <button  onClick={Myinventry} className='dropbtnsubmenu'>My inventory</button>  </a> </li>  

                  </ul>  
                </li>   */}
                <li className="nav-item">  
                  <a > <button className='dropbtnsubmenu' onClick={()=>{
                    setOpenoOrder(!openOrder)
                  }}> Order</button></a>  
                  <ul>  
                 {
                  openOrder && <>
                  
                  <div>
                 
                 <div>
                 <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={ImportedOrder} style={{color: orderimport ? "grey" : "black" }}>Imported Orders </button> </a> </li>  
                   
                  </div> {/* <li className="nav-item pl-3"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={OrderFullfillment}> Order Fullfillment</button> </a> </li>   */}
                    <div>
                    <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={Disputes}  style={{color: disputes ? "grey" : "black" }}>Disputes </button> </a> </li> 
        
                    </div>
                   <div>
                   <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={UndeleviredOrder} style={{color: rto ? "grey" : "black" }}> RTO / cancellation</button> </a> </li> 
                   </div> 
                   <div>
                    
                   <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={OrderTracking} style={{color: tracking ? "grey" : "black" }}>Orders Tracking</button>  </a> </li> 
                    
                   </div>
                  </div>
                  </>
                 }
                  </ul>  
                </li>   
                <li className="nav-item">  
                  <a  > <button className='dropbtnsubmenu' onClick={()=>{
                    setOpenoCart(!openCart)
                  }}>Cart</button> </a>  
                  <ul >  
                 {
                  openCart  && <>
                   <div>
                 <div>
                 <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={Dropshiporder} style={{color: cartpre ? "grey" : "black" }}> Pre-Inventory Orders</button></a> </li>  
                  
                  </div> <div>
                  <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={PurchaseCart} style={{color: cartpur ? "grey" : "black" }}>Purchase Cart</button>  </a> </li>  
                
                  </div>
                  </div>
                  </>
                 }
                  </ul>  
                </li>  
                <li className="nav-item">  
                  <a  > <button className='dropbtnsubmenu'  onClick={()=>{
                    setOpenoProduct(!openProduct)
                  }}>Products</button> </a>  
                  <ul >  
                 {
                  openProduct && <>
                   <div>
                  
                  <div>
                  <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={Connection} style={{color: connnected ? "grey" : "black" }} >Connection</button>  </a> </li>  
                   
                  </div>
                  
                  <div>
                  <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={Listed} style={{color: listed ? "grey" : "black" }}>Listed </button> </a> </li>  
                   
                  </div>
                  <div>
                  <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={SkuList} style={{color: sku ? "grey" : "black" }}>SKU List</button>  </a> </li> 
                    
                  </div>
                  {/* <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={ServiceProduct} > Service Product</button></a> </li>                    */}
                   <div>
                   <li className="nav-item pl-2"> <a className="nav-link" href> <button onClick={Wishlist} className='dropbtnsubmenu' style={{color: wishlist ? "grey" : "black" }}>Wishlist</button>  </a> </li> 
                    
                   </div>
                    <div>
                      
                    <li className="nav-item pl-2"> <a className="nav-link" href>  <button onClick={MyPhotography} className='dropbtnsubmenu' style={{color: photograophy ? "grey" : "black" }}>  Photography Request</button> </a> </li> 
                    
                    </div>
                  </div>
                  </>
                 }
                  </ul>  
                </li> 
                <li className="nav-item">  
                  <a  href="#submenu4" data-toggle="collapse" data-target="#submenu5"><button className='dropbtnsubmenu' onClick={Authentication}> Authentication</button></a>  
                  {/* <ul className="list-unstyled flex-column pl-0 collapse" id="submenu5" aria-expanded="false">  
                    <li className="nav-item pl-3"> <a className="nav-link " href> <button  className='dropbtnsubmenu'>Shopify</button> </a> </li>  
                    <li className="nav-item pl-3"> <a className="nav-link " href> <button  className='dropbtnsubmenu'> Ebay </button></a> </li>  
                    <li className="nav-item pl-3"> <a className="nav-link " href> <button  className='dropbtnsubmenu'> Etsy</button></a> </li>  
                    <li className="nav-item pl-3"> <a className="nav-link " href> <button  className='dropbtnsubmenu'> Api</button> </a> </li> 
                    <li className="nav-item pl-3"> <a className="nav-link " href> <button  className='dropbtnsubmenu'>dsfsdffsf</button> </a> </li>  
                    <li className="nav-item pl-3"> <a className="nav-link " href> <button  className='dropbtnsubmenu'>sfdfsfsdf</button>  </a> </li> 
                  </ul>   */}
                </li>  
                {/* <li className='pl-3' >  
                  <a> <button  onClick={Diaries} className='dropbtnsubmenu'>CreatePage</button></a>  
                 
                </li>  */}
              </ul>  
            </div>  
          </div>  
        </div>
    

    

  )
}

export default Sidebar

