import React from 'react';
import freeshipping from '../../assets/free-shipping.png'

import freestore from "../../assets/free-store.png";
import acadamy from '../../assets/acadamy.png'
import fullfillment from '../../assets/fullfillment.png'
import odm from '../../assets/odm.png'
import video from '../../assets/video.png'
import './HowWeWork.css'

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
function HowWeWork() {
  return (
    <div className='container-fluid' id="secondcomtainercard"  style={secondcontainer}>
     <div align="center" className='container' style={conatiner}><h3 style={{color:'rgba(0, 0, 0, 1)',FontFamily:'Poppins',fontSize:'20.31px',lineHeight:'22.39px'}}>How we work</h3></div>

      <div className='row' style={row}>
      
        <div className='col-2'>
        <div align="center" className='Inter'>
              <div><img src={freestore} alt="" /></div>
              <div className="store"> <h4>Find  store</h4></div>
              </div>
        </div>
        <div className='col-2'>
        <div align="center" className='Inter'>
              <div><img src={freeshipping} alt="" /></div>
              <div className="store"> <h4>Fast Shipping</h4> </div>
            </div>
        </div>
        <div className='col-2'>
        <div align="center" className='Inter'>
              <div> <img src={acadamy} alt="" /></div>
              <div className="store">  <h4> Order Tracking</h4></div>
              </div>
        </div>
        <div className='col-2'>
        <div align="center" className='Inter'>
              <div><img src={fullfillment} alt="" /></div>
              <div className="store"> <h4>24hrs Fullfillment </h4> </div>
            </div>
        </div>
        <div className='col-2'>
        <div align="center" className='Inter'>
              <div><img src={odm} alt="" /></div>
              <div className="store">  <h4>Manage Order</h4> </div>
            </div>
        </div>
        <div className='col-2'>
        <div align="center" className='Inter'>
              <div><img src={video} alt="" /></div>
              <div className="store"> <h4>Request  Material</h4></div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default HowWeWork;
