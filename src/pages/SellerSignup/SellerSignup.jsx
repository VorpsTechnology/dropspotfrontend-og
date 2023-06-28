import React from 'react'
import { useHistory} from 'react-router-dom';
import smart from '../../assets/smart.png'
import googleicon from '../../assets/googleicon.png'
import facebookicon from '../../assets/facebookicon.png'
import Navbar from '../../components/Navbar';
import Shopnavbar from '../../components/ShopNavbar/Shopnavbar';
import Footer from '../../components/Footer/Footer';
import logo from '../../assets/logo.png'
import './SellerSignup.css'
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar';

function SellerSignup() {
    const history = useHistory();
  return (
    <div>
    <Navbar />
    <Shopnavbar />
    <MediaNavbar />
    <br />
    <br />

       <div className='container-fluid' style={{backgroundColor:'rgba(255, 214, 0, 1)',borderTopLeftRadius:'20px',borderTopRightRadius:'20px'}}>
              <div className='backbbtn'  >
                        <button style={{width:"100px"}}  className='backbtn' onClick={()=>{
                          history.push("/")
                        }} > Back</button>
                        </div>


                <div>
                <div class="text-center">
                                <img src={logo} style={{width: "150px"}} />
                                <h1 class="gl-h1">REGISTER AS SELLER</h1>
                </div>
                
                <div   className='Signcontainer' >
                 
               <div className='container-fluid' style={{justifyContent:'center'}}>
               <form  action="" >
               
               <div   >
               <div className='col-12 col-lg-3 u-s-m-b-30'   >
              
                    <div ><label htmlFor="" style={{marginTop:'20px'}}>First Name</label></div>
                    <div><input
                    placeholder="Enter Your Name"
                    type="Name"
                    name="email"
                    value='none'
                    
                        className='Signinputbox20' /></div>
                </div>
           
               <div>
               <div className='col-12 col-lg-3 u-s-m-b-30' >
                    
                    <div ><label htmlFor="" style={{marginTop:'20px'}}>Last Name</label></div>
                    <div><input
                    placeholder="Enter Your Name"
                    type="Name"
                    name="email"
                    value='none'
                    
                        className='Signinputbox20' /></div>
                </div>
               </div>
              </div>
              <div className='col-12 col-lg-3 u-s-m-b-30'  >
                    <div style={{display:'inline'}}>
                    <div  ><label htmlFor="" style={{marginTop:'20px'}}>Phone</label></div>
                    
                    <div>
                    <input
                    placeholder="Enter Your Email"
                    type="text"
                    name="text"
                    value='none'
                    
                        className='Signinputboxemail' />
                    </div>
                    </div>
                   
                    
                   
                </div>
                <div className='col-12 col-lg-3 u-s-m-b-30'  >
                    <div style={{display:'inline'}}>
                    <div  ><label htmlFor="" style={{marginTop:'20px'}}>Email</label></div>
                    
                    <div>
                    <input
                    placeholder="Enter Your Email"
                    type="text"
                    name="text"
                    value='none'
                    
                        className='Signinputboxemail' />
                    </div>
                    </div>
                   
                    
                   
                </div>
              <div  >
                </div>
               
                  <div >
               <div>
               <div className='col-12 col-lg-6 u-s-m-b-30' >
                    
                    <div  ><label htmlFor="" style={{marginTop:'20px'}}> Password</label></div>
                    <div><input
                    placeholder="Enter Your Name"
                    type="Name"
                    name="email"
                    value='none'
                    
                        className='Signinputbox20' /></div>
                </div>
               </div>
               <div>
               <div className='col-12 col-lg-6 u-s-m-b-30'  >
                    
                    <div ><label htmlFor="" style={{marginTop:'20px'}}>Confirm Password </label></div>
                    <div><input
                    placeholder="Enter Your Name"
                    type="Name"
                    name="email"
                    value='none'
                    
                        className='Signinputbox20' /></div>
                </div>
               </div>
              </div>
              
               
                 
                  <div >

                  <div>
                  <hr />
                  <div >
               <div>
               <div className='col-12 u-s-m-b-30' >
                    
                    <div ><label htmlFor="" style={{marginTop:'20px'}}>Company Name</label></div>
                    <div><input
                    placeholder="Enter Your Name"
                    type="Name"
                    name="email"
                    value='none'
                    
                        className='Signinputbox20' /></div>
                </div>
               </div>
               <div>
               <div className='col-12  u-s-m-b-30'  >
                    
                    <div ><label htmlFor="" style={{marginTop:'20px'}}>Company Address </label></div>
                    <div><input
                    placeholder="Enter Your Name"
                    type="Name"
                    name="email"
                    value='none'
                    
                        className='Signinputbox20' /></div>
                </div>
               </div>
              </div>
              <div className='col-12 col-lg-4 u-s-m-b-30'  >
                    <div style={{display:'inline'}}>
                    <div  ><label htmlFor="" style={{marginTop:'20px'}}>Pin Code</label></div>
                    
                    <div>
                    <input
                    placeholder="Enter Your Email"
                    type="text"
                    name="text"
                    value='none'
                    
                        className='Signinputboxemail' />
                    </div>
                    </div>
                   
                    
                   
                </div>
              <div >
              <div  className='col-12 col-lg-4 u-s-m-b-30' >
                <div ><label htmlFor="" style={{marginTop:'20px'}}>State</label></div>
                <div>
                <select className='Signinputbox20'>
                 <option>
                   State
                 </option>
                </select>
               </div>
                </div>
             
                <div  className='col-12 col-lg-4 u-s-m-b-30' >
                  <div ><label htmlFor="" style={{marginTop:'20px'}}>Country</label></div>
                  <div>
                  <select className='Signinputbox20'>
                 <option>
                   Country
                 </option>
                </select>
                  </div>

                  </div>
           
              </div>
                     
                  </div>
                  </div>
                  <div  >
                  
                  <div  className='col-12 u-s-m-b-30'  >
                  <input style={{marginTop:'20px'}} type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <label style={{marginTop:'20px'}} for="vehicle1"> By clicking "checkbox", you agree to the user agreement and privacy policy</label><br />
                  
       <div align="center" style={{marginTop:'30px'}}><div align="center" className='submitbtn'><button style={{backgroundColor:'transparent',borderColor:'transparent',}}>Submit</button></div></div>
          </div>

                  </div>
              
          <div align='center' className='Already'><h6 className='Already'> <a href='/SellerLogin' style={{color:"black",poiner:"cursor",fontWeight:'650',fontSize:'15px'}}>Already have an account?Sign In?</a> </h6></div>
            <div align='center' className="or-container">
              <div className="line-separator" />
              <div className="or-label">or</div>
              <div className="line-separator" />
            </div>
            <div  className="flex-container" style={{display:'flex',justifyContent:'center',paddingBottom:'20px'}}>
              <div  className="flex-left"><button style={{backgroundColor:'transparent',borderColor:'transparent'}}><img align="center" src={googleicon} alt="" /></button></div>
              <div  className="flex-right"><button style={{backgroundColor:'transparent',borderColor:'transparent'}}><img  align="center" src={facebookicon} alt="" /></button></div>
            </div>
            
                  
              </form>
               </div>
             </div>
                </div>
              </div>
             
            
        
          <Footer/>
    </div>
  )
}

export default SellerSignup
