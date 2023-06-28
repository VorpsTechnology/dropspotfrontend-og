import React  from 'react'
import './MediaNavbar.css'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'
import { useState } from 'react'
import { useHistory } from "react-router-dom";
import conn from '../../assets/conn.png'
import adds from '../../assets/adds.png'




function MediaNavbar() {
  const  [isMobile,setIsMobile] = useState(false);
  let history = useHistory();
  
    function handleClick() {
      history.push("/signup");
    }
    function handleHome(){
      history.push('/')
    }

   
    function handleSouching(){
      history.push('/MediaSourching')
    }

    function handleMediaWishlist(){
      history.push('/MediaWishlist')
    }

   
    const handleCheck= () => {
        history.push("/Checkout");
        } 
  
    const handleSeller=()=> {
      history.push('/SellerSignup')
    }

  return (
    <div id="medianavbar" >
     <div className='flexcon' style={{display:'flex',justifyContent:'space-between'}}>
      <div className='flexlef' style={{justifyContent:'left'}}><a href='/MediaAuthentication'><img style={{width:'30px'}} src={conn} alt="" /></a>  </div>
      <div className='flexcenter'  style={{justifyContent:'center'}}> <img  style={{width:'70px'}} src={logo}/></div>
      <div style={{justifyContent:'right',float:'right',backgroundColor:'white',padding:'2px',borderRadius:'10px'}}>
          <button className='mobile-menu-icon' 
    onClick={()=>setIsMobile(!isMobile)}
    >
      {
        isMobile ? (
          <i className="fa fa-close"></i>
        ):(
          <i className="fa fa-bars"></i>
        )
      }
        </button>
      </div>


   
   </div>
   <li className={isMobile?'nav-links-mobile':'nav-links'}  onClick={()=> setIsMobile(false)}>
       
  
       <li style={{ margin: '20px 10px'}}><button className="btnFooterteo" onClick={handleHome}>HOME</button></li>
             <li style={{ margin: '20px 10px'}}><button className="btnFooterteo" onClick={handleMediaWishlist} >WISHLIST</button> </li>
            
              
             <li style={{ margin: '20px 10px'}}>
             <button className="btnFooterteo" onClick={handleSouching}>SOURCHING</button>
             </li>
             <li style={{ margin: '20px 10px'}}><button className="btnFooterteo" onClick={handleCheck} >CART</button></li>
               <li style={{ margin: '20px 10px'}}> <button className="btnFooterteo" onClick={handleClick}>ACCOUNT</button></li>
               <li style={{ margin: '20px 10px'}}> <button className="btnFooterteoseller" onClick={handleSeller}>Join Us As Seller</button></li>
               <li style={{margin:'20px 10px'}}>
               <div >
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
      
      <div align='center' style={{margin:'0px 0px 10px 0px'}}><a  target="_blank" className="dobtn btn-white btn-sm w-100 mb-0 " style={{color:'black'}} >Documentation</a></div>
      </div>
      </div>
      </div>
                </div>
                  </div>
               </li>
      
              
               
              
       </li>
   <div align='center'  style={{justifyContent:'center'}}><input className='boxinputbox' type="text" placeholder='search..' /><button style={{backgroundColor:'transparent',borderColor:'transparent'}}><i   className='fa fa-search'></i></button></div>

      </div>
      


  )
}

export default MediaNavbar
