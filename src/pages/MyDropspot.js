import React, { useEffect } from 'react'
import Adminnavbar from './Adminnavbar/Adminnavbar'
import Sidebar from './Sidebar/Sidebar'
import pad from '.././assets/pad.png'
import shopbanner from '.././assets/shopbanner.png'
import parcel from '.././assets/parcel.png'
import timer from '.././assets/timer.png'
import order from '.././assets/order.png'
import credit from '.././assets/credit.png'
import avatar from '.././assets/avatar.png'
import { useHistory } from 'react-router-dom'

function MyDropspot() {

  const btn={
    backgroundColor:'rgba(253, 227, 26, 1)',
    borderColor:'transparent',
    width:'100px',
    padding:'5px',
    borderRadius:'20px'
  }

  const inventbtn={
    backgroundColor:'rgba(253, 227, 26, 1)',
    borderColor:'transparent',
    width:'170px',
    padding:'5px',
    borderRadius:'20px' ,
    marginTop:'20px'
  }
  const amountbtn={
    backgroundColor:'rgba(253, 227, 26, 1)',
    borderColor:'transparent',
    width:'170px',
    padding:'5px',
    borderRadius:'20px' ,
   
  }

  const history=useHistory()
  useEffect(() => {
  const userInfo = localStorage.getItem("userInfo");
   
    if (userInfo) {
   
      history.push("/MyDropspot");
     
    } else {
      history.push("/signin");
    }
  }, []);

 
  return (
    <div>
      <Adminnavbar />
      <div style={{backgroundColor:'#32333A'}}>
        <div className='row'>
          <div className='col-2' >
            <Sidebar />
          </div>
          <div className='col-10'>
            <div  id="tabcontainer"  style={{ display: 'block',color:'black',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',padding:'40px',width:'auto',margin:'20px 20px 20px 20px'}}>
            <div align="center" className='row' style={{paddingTop:'20px'}}>
              <div className='col'><span><img src={avatar} style={{width:'50px'}} alt="" /><h6>Name</h6></span></div>
              <div className='col'> <button style={btn}>Points</button> </div>
              <div className='col'> <button style={btn}> Wallet</button></div>
              <div className='col'> <button style={amountbtn}>Sales Amount:₹42</button> </div>
            </div>
            <div align="center" className='row' style={{paddingTop:'20px'}}>
              <div className='col'>
                <div><img src={pad} alt="" /></div>
                <div><button style={inventbtn} >Inventory Alert : 0</button></div>
              </div>
              <div className='col'>
              <div><img src={parcel} alt="" /> </div>
              <div><button style={inventbtn}>Sourced Products: 0</button></div>
              </div>
              <div className='col'>
              <div><img src={timer} alt="" /></div>
              <div> <button style={inventbtn}>Pending Payment : 0</button> </div>
              </div>
              <div className='col'>
              <div><img src={order} alt="" /></div>
              <div> <button style={inventbtn}>Pending Orders : 0</button> </div>
              </div>
              <div className='col'>
              <div><img src={credit} alt="" /></div>
              <div>
                <button style={inventbtn}>Coupan & Cards : 0</button>
              </div>
              </div>
            </div>
            <div align='center' style={{paddingTop:'40px',paddingBottom:'40px'}}><h5 style={{fontSize:'25px',fontWeight:'900px',fontStyle:'bold'}}>Activated Stores</h5></div>
            <div align='center' className='row'  style={{marginTop:'20px'}}>
               <div className='col-6'>
                <div className='card' style={{width:'300px',padding:'25px',borderRadius:'20px'}}>
                  <div align="center"><img src={shopbanner} alt="" /></div>
                  <div style={{paddingLeft:'20px',paddingTop:'20px'}}><h6>Store Name:</h6></div>
                  <div style={{paddingLeft:'20px'}}><h6>24 Orders:</h6></div>
                  <div style={{paddingLeft:'20px'}}><h6>24 Revenue:</h6></div>
                </div>
               </div>
               <div className='col-6'>
               <div className='card' style={{width:'300px',padding:'25px',borderRadius:'20px'}}>
                <div><img src={shopbanner} alt="" /></div>
                <div style={{paddingLeft:'20px',paddingTop:'20px',float:'left'}}><h6>Store Name:</h6></div>
                  <div style={{paddingLeft:'20px',float:'left'}}><h6>24 Orders:</h6></div>
                  <div style={{paddingLeft:'20px',float:'left'}}><h6>24 Revenue:</h6></div>
                </div>
               </div>
            </div>
              </div>
       
           
          </div>
        </div>

      </div>
   
    </div>
  )
}

export default MyDropspot

