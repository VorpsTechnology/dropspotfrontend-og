import React, { useEffect } from 'react'
import Adminnavbar from './Adminnavbar/Adminnavbar'
import Sidebar from './Sidebar/Sidebar'
import pad from '.././assets/pad.png'
import parcel from '.././assets/parcel.png'
import timer from '.././assets/timer.png'
import { useHistory } from 'react-router-dom'
import revenue from '.././assets/revenue.png'
import Dashboardfooter from '../components/Dashboardfooter/Dashboardfooter'
import sales from '.././assets/sales.png'
import pending from '.././assets/pending.png'
import pro from '.././assets/pro.png'
import shop from '.././assets/shop.png'
function MyDropspot() {



  document.body.style.backgroundColor = "#32333A"
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
        <div className='row' style={{marginTop:'100px',marginBottom:'100px'}}>
          <div className='col-2' >
            <Sidebar />
          </div>
          <div className='col-10'>
            <div  id="tabcontainer"  style={{ display: 'block',color:'black',boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',borderRadius:'30px',padding:'40px',width:'auto',margin:'20px 20px 20px 20px'}}>
            <div className='row'>
              <div className='col-xl-4 col-sm-6 mb-xl-0 mb-4'>
                <div className='card'  style={{borderRadius:"20px"}}>
                  <div className='card-body p-3'>
                  
              <div  style={{display:'flex'}}> 
                    <div >
                    <img src={revenue} alt='wallet'/>
                    </div>
                    <div className='text-end' style={{padding:'3px 0px 0px 20px'}}>
                   <b>Revenue Generated : 0 </b> 
                    </div>
              </div>
              
            </div>
                  
                </div>
              </div>
              <div className='col-xl-4 col-sm-6 mb-xl-0 mb-4'>
                <div className='card'  style={{borderRadius:"20px"}}>
                  <div className='card-body p-3'>
                       
              <div  style={{display:'flex'}}> 
               
               <div >
               <img src={sales} alt='wallet'/>
               </div>
               <div className='text-end' style={{padding:'3px 0px 0px 20px'}}>
               <b>Sold Amount : ₹42</b>
               </div>
           
           
        
         </div>
                  
             
                  </div>
                </div>
              </div>
              
              <div className='col-xl-4 col-sm-6 mb-xl-0 mb-4'>
                <div className='card'  style={{borderRadius:"20px"}}>
                  <div className='card-body p-3'>
                       
              <div  style={{display:'flex'}}> 
               
               <div >
               <img src={pending} alt='wallet'/>
               </div>
               <div className='text-end' style={{padding:'3px 0px 0px 20px'}}>
               <b>Pending Payment : 0</b>
               </div>
           
           
        
         </div>
                  
             
                  </div>
                </div>
              </div>
            </div>
             <div className='row' style={{marginTop:'20px'}}>
              <div className='col-xl-4 col-sm-6 mb-xl-0 mb-4'>
              
                <div className='card'  style={{borderRadius:"20px"}}>
                  <div className='card-body p-3'>
                  
              <div  style={{display:'flex'}}>
              
                    <div >
                    <img src={pad} alt='wallet'/>
                    </div>
                    <div className='text-bold' style={{padding:'3px 0px 0px 20px'}}>
                    <b>Inventory Alert : 0 </b>
                    </div>
              </div>
              
            </div>
                  
                </div>
              </div>
              <div className='col-xl-4 col-sm-6 mb-xl-0 mb-4'>
              
                <div className='card' style={{borderRadius:"20px"}}>
                  <div className='card-body p-3'>
                       
              <div  style={{display:'flex'}}> 
               
               <div >
               <img src={parcel} alt='wallet'/>
               </div>
               <div className='text-end' style={{padding:'3px 0px 0px 20px'}}>
              <b>Sourced Products : 0</b>
               </div>
           
           
        
         </div>
                  
             
                  </div>
                </div>
              </div>
              
              <div className='col-xl-4 col-sm-6 mb-xl-0 mb-4'>
              
                <div className='card'  style={{borderRadius:"20px"}}>
                  <div className='card-body p-3'>
                       
              <div  style={{display:'flex'}}> 
               
               <div >
               <img src={timer} alt='wallet'/>
               </div>
               <div className='text-end' style={{padding:'3px 0px 0px 20px'}}>
              <b>Pending Orders : 0</b>
               </div>
           
           
        
         </div>
                  
             
                  </div>
                </div>
              </div>
            </div>
            
            {/* <div align="center" className='row' style={{paddingTop:'20px'}}>
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
             
            </div> */}
            <div align='center' style={{paddingTop:'40px',paddingBottom:'40px'}}><h5 style={{fontSize:'25px',fontWeight:'900px',fontStyle:'bold'}}>Activated Stores</h5></div>
            <div className='row' style={{margin:'20px'}}>
              <div className='col-xl-6 col-sm-6 mb-xl-0 mb-4'>
                <div className='card'  style={{borderRadius:"20px"}}>
                  <div align='center' className='card-body ' >
                  
              
                    <div >
                    <img src={pro} alt='wallet'/>
                    </div>
                    <div align='center'>
                   <b>profile</b>
                    </div>
         
             <div align='center'>
             <div style={{justifyContent:'center',margin:'10px 5px 5px 5px'}}  className='row'>
                <div className='col-4'> <b> Name</b></div>
                <div className='col-6'> <b> Customer Name</b></div>
              </div>
              <div style={{justifyContent:'center',margin:'0px 5px 5px 5px'}}  className='row'>
                <div className='col-4'><b> Email</b> </div>
                <div className='col-6'> <b>Customer Email </b> </div>
              </div>
              <div style={{justifyContent:'center',margin:'0px 5px 5px 5px'}}  className='row'>
                <div className='col-4'> <b>Activated Store</b> </div>
                <div className='col-6'><b>Store Status </b> </div>
              </div>
             </div>
              
            </div>
                  
                </div>
              </div>
              <div className='col-xl-6 col-sm-6 mb-xl-0 mb-4'>
                <div className='card'  style={{borderRadius:"20px"}}>
                  <div className='card-body p-3'>
                       
              <div align='center'  > 
               
                <div >
                <img src={shop} alt='wallet'/>
                </div>
                <div className='text-center'>
                <button className='storebtn'>Connect with store</button>
                </div>
              </div>
                  
             
                  </div>
                </div>
              </div>
              
            </div>
            {/* <div align='center' className='row'  style={{marginTop:'20px'}}>
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
            </div> */}
              </div>
    
          </div>
          
        </div>
      
      </div>
   
      <Dashboardfooter/>
   
    </div>
  )
}

export default MyDropspot

