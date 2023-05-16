import React from 'react'
import MediaProductComponent from '.././MediaProductComponent/MediaProductComponent'
import './MediaSuperDeals.css'


function MediaSuperDeals() {
  return (
    <div>
        <>
        <div align="center" id="headerMedia"  ><h3  className="headerproduuct"> 
    <button  style={{backgroundColor:'transparent',borderColor:'transparent'}} >Super Deals</button> </h3>
    
  
  </div>
  <div className="container">
        <MediaProductComponent />
      </div>
  
        </>
      
    </div>
  )
}

export default MediaSuperDeals








