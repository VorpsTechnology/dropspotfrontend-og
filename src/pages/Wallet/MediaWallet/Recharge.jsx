import React from 'react'
import './Recharge.css'
import MediaNavbar from '../../../components/MediaNavbar/MediaNavbar'


function Recharge() {
  return (
    <div>
       <MediaNavbar />
      <div>
        <div  align='center' style={{margin:'40px 40px 40px 40px'}}><h6>Recharge</h6></div> 
      <div  className='container'  >
      <div style={{display:'flex',justifyContent:'space-between',marginTop:'20px'}}>
            <div><h6>Amount Charging</h6></div>
            <div> <input className='inpuji' type="text" /> </div>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',marginTop:'20px'}}>
            <div><h6>Amount Received</h6></div>
            <div> <input className='inpuji' type="text" /> </div>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',marginTop:'20px'}}>
            <div><h6>Charging Method</h6></div>
            <div> <input className='textin4'  type="text" /> </div>
            <div> <input className='textin4' type="text" /> </div>
        </div>
      </div>
      <div style={{marginTop:'20px'}} align='center' className='container'>
        <button className='buttonconf'>Conferm</button>
       </div>
      </div>
       
    </div>
  )
}

export default Recharge