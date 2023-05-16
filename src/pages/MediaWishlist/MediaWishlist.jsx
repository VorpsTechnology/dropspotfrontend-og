import React from 'react'
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar'
import avatar from '../.././assets/avatar.png'
import './MediaWishlist.css'

import { useHistory } from "react-router-dom";
import leftarrow from '../../assets/leftarrow.png'




function MediaWishlist() {
    let history = useHistory();
  
    function handleClickCart() {
      history.push("/MediaWallet");
    }
    function handleClickOrder() {
        history.push("/MediaMyOrder");
      }
      function handleClickInventory() {
        history.push("/MyInventoryMedia");
      }
      function handleClickWishlist(){
        history.push('/MediaWishlistDashboard')
      }
 
      function handleConnection(){
        history.push('/MediaConnection')
      }
      function handleAuthentication(){
        history.push('/MediaAuthentication')
      }

      function handleDispute(){
        history.push('/MediaDispute')
      }
      function handleRto(){
        history.push('/MediaRto')
      }
      function handleOrderTracking(){
        history.push('/MediaOrderTracking')
      }
      function handleSellerDashboard(){
        history.push('/MediaSellerDashboard')
      }
  return (
    <div>
      <MediaNavbar />
    <div>
    <div className='container'>
       <div className='Walletupper'>
       <div style={{display:'flex',margin:'20px'}}>
        <div><img style={{height:'50px'}} src={avatar} alt="" /></div>
        <div><h6  style={{color:'white',margin:'15px 10px 5px 10px'}}>User Name</h6></div>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',margin:'20px'}}>
        <div align='center'>
            <div style={{color:'white'}}>-</div>
            <div><h6 style={{color:'white'}}>Sourching</h6></div>
        </div>
        <div  align='center'>
        <div style={{color:'white'}}>$</div>
        <div><h6 style={{color:'white'}}>Sales Amount</h6></div>
        </div>
        <div  align='center'>
        <div style={{color:'white'}}>0</div>
        <div><h6 style={{color:'white'}}>Points</h6></div>
        </div>
        </div>
       </div>
      </div>
 <div className='container' style={{backgroundColor:'#FFFEFA',marginBottom:'100px'}}>
 <div className='card' onClick={handleClickCart} id='cardblockk'>
        <h6>Wallet<span style={{float:'right'}}><img src={leftarrow} alt="" /></span></h6>
      </div>
      

     
      <div   >
      <div  className='card' id='cardblockk'>
      <button style={{background:'transparent',borderColor:'transparent'}}  data-toggle="collapse" data-target="#demo">Order <span style={{float:'right'}}><img src={leftarrow} alt="" /></span></button>
      <div id="demo" class="collapse">
 
 <div  className='card' id='cardblockkSublnk'>
      <button style={{background:'transparent',borderColor:'transparent'}} onClick={handleClickOrder}>Imported Orders</button>
      </div>
      <div  className='card' id='cardblockkSublnk'>
      <button style={{background:'transparent',borderColor:'transparent'}} onClick={handleDispute}>Disputes</button>
      </div>
      <div  className='card' id='cardblockkSublnk'>
      <button style={{background:'transparent',borderColor:'transparent'}} onClick={handleRto}>RTO</button>
      </div>
      <div  className='card' id='cardblockkSublnk'>
      <button style={{background:'transparent',borderColor:'transparent'}} onClick={handleOrderTracking}>Order Tracking</button>
      </div>
 </div>
      </div>
   
    
      </div>
      <div className='card' id='cardblockk'>
        <h6>Activated Stores<span style={{float:'right'}}><img src={leftarrow} alt="" /></span></h6>
      </div>
      <div onClick={handleClickInventory} className='card' id='cardblockk'>
        <h6>My Inventory<span style={{float:'right'}}><img src={leftarrow} alt="" /></span></h6>
      </div>
      <div  className='card' onClick={handleClickWishlist} id='cardblockk'>
      <h6>Wishlist<span style={{float:'right'}}><img src={leftarrow} alt="" /></span></h6>
       </div>
      

     
      <div className='card' onClick={handleAuthentication} id='cardblockk'>
        <h6>Authorization<span style={{float:'right'}}><img src={leftarrow} alt="" /></span></h6>
      </div>
      <div className='card' id='cardblockk'>
        <h6>Help Center<span style={{float:'right'}}><img src={leftarrow} alt="" /></span></h6>
      </div>
      <div className='card' onClick={handleConnection} id='cardblockk'>
        <h6>Connection<span style={{float:'right'}}><img src={leftarrow} alt="" /></span></h6>
      </div>
      <div className='card' onClick={handleSellerDashboard} id='cardblockk'>
        <h6>Seller Dashboard<span style={{float:'right'}}><img src={leftarrow} alt="" /></span></h6>
      </div>
 </div>
    </div>
   
    </div>
  )
}

export default MediaWishlist
