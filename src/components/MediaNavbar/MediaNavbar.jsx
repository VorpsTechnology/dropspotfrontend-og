import React  from 'react'
import './MediaNavbar.css'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'
import { useState } from 'react'
import { useHistory } from "react-router-dom";



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

  return (
    <div id="medianavbar" >
     <div className='flexcon' style={{display:'flex',justifyContent:'space-between'}}>
      <div className='flexlef' style={{justifyContent:'left'}}> <img style={{height:'50px',width:'50px'}} src={logo} alt="" /> </div>
      <div className='flexcenter'  style={{justifyContent:'center'}}><input type="text" placeholder='search..' /><button style={{backgroundColor:'transparent',borderColor:'transparent'}}><i   className='fa fa-search'></i></button></div>
      <div className='flexrigh' style={{justifyContent:'right'}}>
   </div>
   <div style={{justifyContent:'right'}}>
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
 <li className={isMobile?'nav-links-mobile':'nav-links'}  onClick={()=> setIsMobile(false)}>
       
  
 <li style={{ margin: '20px 10px'}}><button className="btnFooterteo" onClick={handleHome}>HOME</button></li>
       <li style={{ margin: '20px 10px'}}><button className="btnFooterteo" onClick={handleMediaWishlist} >WISHLIST</button> </li>
      
        
       <li style={{ margin: '20px 10px'}}>
       <button className="btnFooterteo" onClick={handleSouching}>SOURCHING</button>
       </li>
       <li style={{ margin: '20px 10px'}}><button className="btnFooterteo" onClick={handleCheck} >CART</button></li>
         <li style={{ margin: '20px 10px'}}> <button className="btnFooterteo" onClick={handleClick}>ACCOUNT</button></li>

        
         
        
 </li>
   </div>
   </div>
      </div>
      


  )
}

export default MediaNavbar
