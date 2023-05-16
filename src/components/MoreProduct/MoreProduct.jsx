import React from "react";
import "./MoreProduct.css";
import MediaProductComponent from '.././MediaProductComponent/MediaProductComponent'

function MoreProduct() {
  return (
    <>
       <div align="center" id="headerMediayo"  ><h3  className="headerproduuctrecomand"> 
    <button  style={{backgroundColor:'transparent',borderColor:'transparent'}} >Recomended Products</button> </h3>
  </div>
    
  <div className="container">
        <MediaProductComponent />
      </div>
    </>
  )
}

export default MoreProduct
