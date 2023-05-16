
import React from 'react'
import './Link.css'
import shopify from "../../assets/shopify.png";
import tiktok from "../../assets/tiktok.png";
import walmart from "../../assets/walmart.png";
import commerce from "../../assets/commerce.png";
import ebay from "../../assets/ebay.png";
import etsy from "../../assets/etsy.png";

const conatiner={
  backgroundColor:'#FFFFFF',
    width:'560px',
    color:'white',
    borderRadius:'20px',
    boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.15)" ,
    padding:'10px',
    
    
} 

const secondcontainer={
    background:'#FFD600',
    paddingTop:'30px'
}
const row={
    paddingTop:'40px',
    paddingBottom:'40px'
}
function Link() {
  return (
    <>
    <div id="secondcomtainercard">
    <div  className='conatiner-fluid' style={secondcontainer}>
    <div align="center" className='container' style={conatiner}><h3 style={{color:'rgba(0, 0, 0, 1)',FontFamily:'Poppins',fontSize:'20.31px',lineHeight:'22.39px'}}>Recommended Products For E-commerce Platform</h3></div>
    <div>
    <div align="center"  className="container">
    <div align="center" className="row" style={row}>
    <div className="col-3"><a href=""><img src={shopify} alt="" /></a></div>

    <div className="col-3"><a href=""><img src={commerce} alt="" /></a></div>
    <div className="col-3"><a href=""><img src={ebay} alt="" /></a></div>
    <div className="col-3"><a href=""><img src={etsy} alt="" /></a></div>
    
  </div>
</div>
</div>
    </div>
    </div>
   

</>
  )
}

export default Link
