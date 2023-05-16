import React from 'react'
import './WithDraw.css'
import MediaNavbar from '../../../components/MediaNavbar/MediaNavbar'
import coin from '../../../assets/coin.png'

function WithDraw() {
  return (
   <div>
    <MediaNavbar />
    <div className='Walletupper'>
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <div style={{justifyContent:'center',margin:'20px'}} align='center'>
            <div><h4 style={{color:'white'}}>Withdrawable</h4></div>
            <div><h5 style={{color:'white'}}>$</h5></div>
        </div>
        <div style={{justifyContent:'right'}}>
            <img src={coin} alt="" />
        </div>
       </div>
      </div>

       <div className='container' style={{marginTop:'70px',height:'200px'}}>
       <div style={{display:'flex',justifyContent:'space-evenly'}}>
       <div><h6>Withdrawal Methods</h6></div>
       <div><input className='textin' type="text" /></div>
       <div><input className='textin' type="text" /></div>
       </div>
       <div style={{display:'flex' ,justifyContent:'space-between',marginTop:'20px'}}>
       <div><h6>Withdrawal Methods</h6></div>
       <div><input className='inpuji' type="text" /></div>
       
       </div>
       <div style={{display:'flex',justifyContent:'space-between',marginTop:'20px'}}>
       <div><h6>Withdrawal Methods</h6></div>
       <div><input className='inpuji' type="text" /></div>
      
       </div>
       </div>

       <div align='center' className='container'>
        <button className='buttonconf'>Conferm</button>
       </div>
   </div>
  )
}

export default WithDraw