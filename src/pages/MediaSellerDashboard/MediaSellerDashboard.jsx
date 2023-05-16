import React from 'react'
import avatar from '../../assets/avatar.png'
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar'
import leftarrow from '../../assets/leftarrow.png'


import {useHistory} from 'react-router-dom'

function MediaSellerDashboard() {
  let history = useHistory();
  
  function MediaSourching() {
    history.push("/MediaSourching");
  }

  function SellerMediaWishlist(){
    history.push('/SellerMediaWishlist')
  }
  function sellerOrderMediaFullfillment(){
    history.push('/MediaSellerOrderFullfillment')
  }
  function sellerMediaDispute(){
    history.push('/SellerMediaDispute')
  }

  function sellerMediaRto(){
    history.push('/SellerMediaRto')
  }
  function sellerOrderMediaTracking(){
    history.push('/SellerMediaOrderTracking')
  }
  function sellerMediaInventory(){
    history.push('/SellerMediaInventory')
  }
  function sellerMediaPhotography(){
    history.push('/SellerMediaPhotography')
  }
  return (
  <>
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

    

   
    <div   className='card' id='cardblockk'>
    <button style={{background:'transparent',borderColor:'transparent'}}  data-toggle="collapse" data-target="#demo">Manage Product<span style={{float:'right'}}><img src={leftarrow} alt="" /></span></button>
    </div>
    <div id="demo" class="collapse">
    <div  className='card' id='cardblockk'>
    <button style={{background:'transparent',borderColor:'transparent'}} onClick={MediaSourching}>Sourching</button>
    </div>
    <div  className='card' id='cardblockk'>
    <button style={{background:'transparent',borderColor:'transparent'}} onClick={sellerMediaInventory}>My Inventory</button>
    </div>
    <div  className='card' id='cardblockk'>
    <button style={{background:'transparent',borderColor:'transparent'}} onClick={SellerMediaWishlist}>Wishlist</button>
    </div>
    <div  className='card' id='cardblockk'>
    <button style={{background:'transparent',borderColor:'transparent'}} onClick={sellerMediaPhotography}>My Photography</button>
    </div>
  
    </div>
    <div   className='card' id='cardblockk'>
    <button style={{background:'transparent',borderColor:'transparent'}}  data-toggle="collapse" data-target="#demo2">Order<span style={{float:'right'}}><img src={leftarrow} alt="" /></span></button>
    </div>
    <div id="demo2" class="collapse">
    <div  className='card' id='cardblockk'>
    <button style={{background:'transparent',borderColor:'transparent'}} onClick={sellerOrderMediaFullfillment}>Order Fullfillment</button>
    </div>
    <div  className='card' id='cardblockk'>
    <button style={{background:'transparent',borderColor:'transparent'}} onClick={sellerMediaDispute}>Dispute</button>
    </div>
    <div  className='card' id='cardblockk'>
    <button style={{background:'transparent',borderColor:'transparent'}} onClick={sellerMediaRto}>Rto</button>
    </div>
    <div  className='card' id='cardblockk'>
    <button style={{background:'transparent',borderColor:'transparent'}} onClick={sellerOrderMediaTracking}>Order Tracking</button>
    </div>
  
    </div>
    <div   className='card' id='cardblockk'>
    <button style={{background:'transparent',borderColor:'transparent'}}  data-toggle="collapse" data-target="#demo3">Add To Cart<span style={{float:'right'}}><img src={leftarrow} alt="" /></span></button>
    </div>
    <div id="demo3" class="collapse">
    <div  className='card' id='cardblockk'>
    <button style={{background:'transparent',borderColor:'transparent'}}>Purchase Cart</button>
    </div>
 
  
    </div>
    
    

  
</div>
  </div>

  </div>
  </>
  )
}

export default MediaSellerDashboard