import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import './Sidebar.css'
import authentication from '../../assets/authentication.png'
import trip from '../../assets/trip.png'
import todo from '../../assets/todo.png'

import love from '../../assets/love.png'
import newpro from '../../assets/newpro.png'

import spe from '../../assets/spe.png'
import cartsim from '../../assets/cartsim.png'
import cancel from '../../assets/cancel.png'
import dashboard from '../../assets/dashboard.png'
import adds from '../../assets/adds.png'
import dispute from '../../assets/dispute.png'


function Sidebar() {
const history = useHistory();

const Wishlist= () => {
  history.push("/Wishlist");
} 


const ImportedOrder=()=>{
  history.push('/ImportedOrder')
}



const Listed =()=>{
  history.push('/Listed')
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
     <>
    <div className='container-fluid '  id="main"  >
    
         
          <div align='center' className="row " >  
            <div className="sidebar-offcanvas" id="sidebar" role="navigation">  
              <ul className="flex-column pl-0 mt-4">
              <li  >  
                  <a > 
                  <button  onClick={MyDropspot} className='dropbtnsubmenu'>
                  <div align='left' style={{display:'flex',textAlign:"left"}}>
                  <div ><img src={dashboard} alt='dashboard'/></div>
                  <div style={{margin:'0px 0px 0px 5px'}}> Dashboard</div>
                 </div>
                  </button></a>  
                 
                </li>  
                {/* <li className="nav-item">  
                  <a className="nav-link" href="#submenu1" data-toggle="collapse" data-target="#submenu1"> <button className='dropbtnsubmenu' >Manage Product</button></a>  
                  <ul className="list-unstyled flex-column pl-0 collapse" id="submenu1" aria-expanded="false">  
                    {/* <li className="nav-item pl-3"> <a className="nav-link" href> <button onClick={Sourcingpage} className='dropbtnsubmenu'> Sourcing </button></a> </li>   

                     <li className="nav-item pl-3"> <a className="nav-link" href> <button  onClick={Myinventry} className='dropbtnsubmenu'>My inventory</button>  </a> </li>  

                  </ul>  
                </li>   */}
                <li className="nav-item">  
                  <a  > <button className='dropbtnsubmenu' onClick={()=>{
                    setOpenoOrder(!openOrder)
                  }}> 
                   <div  align='left' style={{display:'flex',textAlign:'left'}}>
                  <div ><i className="fa-solid fa-truck-fast" style={{color: "#0f0f10"}}></i></div>
                  <div style={{margin:'0px 0px 0px 5px'}}>  Order</div>
                 </div>
                  </button></a>  
                  <ul>  
                 {
                  openOrder && <>
                  
                  <div>
                 
                 <div>
                 <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={ImportedOrder} style={{color: orderimport ? "black" : "grey" }}>
                 <div  style={{display:'flex',textAlign:'left'}}>
                  <div style={{padding:'10px 5px 0px 10px'}}><i className="fa-solid fa-network-wired" style={{color: "#0f0f10"}}></i></div>
                  <div style={{margin:'0px 0px 0px 5px'}}>Imported Orders</div>
                 </div>
                  </button> </a> </li>  
                   
                  </div> {/* <li className="nav-item pl-3"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={OrderFullfillment}> Order Fullfillment</button> </a> </li>   */}
                    <div>
                    <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={Disputes}  style={{color: disputes ? "black" : "grey" }}>
                    <div style={{display:'flex',textAlign:'left'}}>
                  <div style={{padding:'10px 5px 0px 5px'}} ><img style={{height:'24px',width:'24px'}} src={dispute} alt='authentication'/> </div>
                  <div style={{margin:'0px 0px 0px 5px'}}> Disputes</div>
                 </div>
                    </button> </a> </li> 
        
                    </div>
                   <div>
                   <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={UndeleviredOrder} style={{color: rto ? "black" : "grey" }}>
                   <div style={{display:'flex',textAlign:'left'}}>
                  <div style={{padding:'10px 5px 0px 5px'}} ><img style={{height:'24px',width:'24px'}} src={cancel} alt='authentication'/> </div>
                  <div style={{margin:'0px 0px 0px 5px'}}> RTO / cancellation</div>
                 </div>
                    </button> </a> </li> 
                   </div> 
                   <div>
                    
                   <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={OrderTracking} style={{color: tracking ? "black" : "grey" }}>
                   <div style={{display:'flex',textAlign:'left'}}>
                   <div style={{padding:'10px 5px 0px 5px'}} ><img src={trip} alt='authentication'/></div>
                  <div style={{margin:'0px 0px 0px 5px'}}> Orders Tracking</div>
                   </div>
                   </button>  </a> </li> 
                    
                   </div>
                  </div>
                  </>
                 }
                  </ul>  
                </li>   
                <li className="nav-item">  
                  <a  > <button className='dropbtnsubmenu' onClick={()=>{
                    setOpenoCart(!openCart)
                  }}>
                   <div style={{display:'flex',textAlign:'left'}}>
                   <div ><img src={spe} alt='authentication'/></div>
                  <div style={{margin:'0px 0px 0px 5px'}}>   Cart</div>
                   </div>
                 </button> </a>  
                  <ul >  
                 {
                  openCart  && <>
                   <div>
                 <div>
                 <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={Dropshiporder} style={{color: cartpre ? "black" : "grey" }}>
                 <div style={{display:'flex',textAlign:'left'}}>
                   <div style={{padding:'10px 0px 0px 5px'}} ><img src={cartsim} alt='authentication'/></div>
                  <div >  Pre-Inventory Orders</div>
                   </div> 
                </button></a> </li>  
                  
                  </div> <div>
                  <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={PurchaseCart} style={{color: cartpur ? "black" : "grey" }}>
                  <div style={{display:'flex',textAlign:'left'}}>
                   <div style={{padding:'10px 5px 0px 10px'}} ><img src={spe} alt='authentication'/></div>
                  <div style={{margin:'0px 0px 0px 5px'}}>  Purchase Cart</div>
                   </div>
                 </button>  </a> </li>  
                
                  </div>
                  </div>
                  </>
                 }
                  </ul>  
                </li>  
                <li className="nav-item">  
                  <a >
                   <button className='dropbtnsubmenu'  onClick={()=>{
                    setOpenoProduct(!openProduct)
                  }}>
                  <div style={{display:'flex',textAlign:'left'}}>
                   <div ><img src={newpro} alt='authentication'/></div>
                  <div style={{margin:'0px 0px 0px 5px'}}>    Products </div>
                  </div>
                 </button> </a>  
                  <ul >  
                 {
                  openProduct && <>
                   <div>
                  
                  <div>
                  {/* <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={Connection} style={{color: connnected ? "black" : "grey" }} >
                  <div style={{display:'flex',justifyContent:'space-evenly'}}>
                   <div ><img src={conn} alt='authentication'/></div>
                  <div>    Connection</div>
                  </div>
                 </button>  </a> </li>   */}
                   
                  </div>
                  
                  <div>
                  <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={Listed} style={{color: listed ? "black" : "grey" }}>
                  <div style={{display:'flex',textAlign:'left'}}>
                   <div ><img src={todo} alt='authentication'/></div>
                  <div style={{margin:'0px 0px 0px 5px'}}>    Listed </div>
                  </div>
                 </button> </a> </li>  
                   
                  </div>
                  <div>
                  <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={SkuList} style={{color: sku ? "black" : "grey" }}>
                  <div style={{display:'flex',textAlign:'left'}}>
                   <div ><img src={todo} alt='authentication'/></div>
                  <div style={{margin:'0px 0px 0px 5px'}}>    SKU List </div>
                  </div>
                  </button>  </a> </li> 
                    
                  </div>
                  {/* <li className="nav-item pl-2"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={ServiceProduct} > Service Product</button></a> </li>                    */}
                   <div>
                   <li className="nav-item pl-2"> <a className="nav-link" href> <button onClick={Wishlist} className='dropbtnsubmenu' style={{color: wishlist ? "black" : "grey" }}>
                   <div style={{display:'flex',textAlign:'left'}}>
                   <div ><img src={love} alt='authentication'/></div>
                  <div style={{margin:'0px 0px 0px 5px'}}>    Wishlist</div>
                   </div>
                 </button>  </a> </li> 
                    
                   </div>
                    <div>
                      
                    {/* <li className="nav-item pl-2"> <a className="nav-link" href>  <button onClick={MyPhotography} className='dropbtnsubmenu' style={{color: photograophy ? "black" : "grey" }}>
                    <div style={{display:'flex',justifyContent:'space-evenly'}}>
                  <div ><img src={camera} alt='authentication'/></div>
                  <div>  Photography Request</div>
                  </div>
                   
                    </button> </a> </li>  */}
                    
                    </div>
                  </div>
                  </>
                 }
                  </ul>  
                </li> 
                <li className="nav-item">  
                  <a  href="#submenu4" data-toggle="collapse" data-target="#submenu5"><button className='dropbtnsubmenu' onClick={Authentication}>
                  <div style={{display:'flex',textAlign:'left'}}>
                  <div ><img src={authentication} alt='authentication'/></div>
                  <div style={{margin:'0px 0px 0px 5px'}}> Authentication</div>
                  </div>
                  
                   </button></a>  
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

<div align='center'><a  target="_blank" className="dobtn btn-white btn-sm w-100 mb-0 " >Documentation</a></div>
</div>
</div>
</div>
          </div>
         
        
        </div>
        
         </>
    

    

  )
}

export default Sidebar

