import React from 'react'
import partner from '../../assets/partner.png'

import './Partner.css'




function Partner() {
  return (
<>
<div id="partnercontainer">
      <div className="container" style={{boxShadow:'4px 5px 6px whitesmoke',width:'100%'}}>
        <div className="row" style={{width:'100%',}}>
            <div className="col-7" style={{marginTop:'100px',width:'50%',marginLeft:'30px'}}>
            <h3 className='Heading' data-aos="zoom-in-right"   data-aos-duration="3000">Join dropshipping Partnership</h3>
            <p className='Heading_two' data-aos="zoom-in-right" data-aos-duration="3000">We will Help you with your problems Through the partnership and Affiliate program. 
            </p>
            {/* <div  style={{display:'flex',paddingTop:'20px'}}>
            <button className='partner_btn1' data-aos="zoom-in-up" data-aos-duration="3000">Partner Network</button>
            <button className='partner_btn2' data-aos="zoom-in-up" data-aos-duration="3000">Affiliate Program</button>
            </div> */}
            
            </div>
          <div className="col-4"  style={{float:'right'}}  ><img   src={partner}  data-aos-duration="3000" alt="" /></div>
        </div>
     
      </div>


    </div>
    </>
  )
}

export default Partner
