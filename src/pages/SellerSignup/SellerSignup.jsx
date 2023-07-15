import React, { useState } from 'react'
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
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { signUp } from '../../Api/AuthRequest';
import { toast } from 'react-toastify';

function SellerSignup() {
  
    const params=useParams()
  
  const [user, setData] = useState({
    
    email:"",
     firstName:"",
     lastName:"",
    password: "",
    confirmpass: "",
    worksAt:"",
    accountType:"Seller",
    country:"",
    state:"",
    companyAddress:"",
    zip:"",
    phone:""
  });
  const [confirmPass, setConfirmPass] = useState(true);

  //handle input change
  const handleChange = (e) => {
 
    setData({ ...user, [e.target.name]: e.target.value });
  };
  const history = useHistory();
  console.log(user);
  //form sunmit to server
  const handleSubmit = async (e) => {
   alert("")
    e.preventDefault();
    if (user.username === "" || user.email === "" || user.phone === "") {
      toast.error("Fields can't be empty");
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)
    ) {
      toast.error("Enter valid email id");
    } else if (user.password !== user.confirmpass) {
      toast.error("Password dosen't match");
    } else {
      try {
        const { data } = await signUp(user);
        console.log(data);
        localStorage.setItem("userInfo", data.user);
        localStorage.setItem("userEmail", data.user.email);
        localStorage.setItem("userName", data.user.username);
        localStorage.setItem("name", data.user.name);
        localStorage.setItem("accountType", data.user.accountType);
        resetForm();
        history.push("/");
      } catch (error) {
        console.log(error);
      }
    }
  };
  //resetting form
  const resetForm = () => {
    setConfirmPass(true);
    setData({   email: "",
    firstName:"",
    lastName:"",
   password: "",
   confirmpass: "",
   worksAt:"",

   accountType:"Seller",
   country:"",
   state:"",
   companyAddress:"",
   zip:"",
   phone:""});
  };

  return (
    <div>
    <Navbar />
    <Shopnavbar />
    <MediaNavbar />
  

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
                
                <div   className='Signcontainer' style={{width:"50%",marginLeft:"24rem"    }} >
                 
               <div className='container-fluid' style={{justifyContent:'center',}}>
               <form  action="" onSubmit={handleSubmit}>
               
               <div   >
               <div  className='col-12 u-s-m-b-30' >
              
                    <div ><label htmlFor="" style={{marginTop:'20px'}}>First Name</label></div>
                    <div ><input
                    placeholder="Enter Your Name"
                   
                    type="text"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleChange}
                        className='Signinputbox20' /></div>
                </div>
           
               <div>
               <div  className='col-12 u-s-m-b-30'>
                    
                    <div ><label htmlFor="" style={{marginTop:'20px'}}>Last Name</label></div>
                    <div><input
                     placeholder="Enter Your Last name"
                     type="text"
                     name="lastName"
                     value={user.lastName}
                     onChange={handleChange}
                        className='Signinputbox20' /></div>
                </div>
               </div>
              </div>
              <div  className='col-12 u-s-m-b-30' >
                    <div style={{display:'inline'}}>
                    <div  ><label htmlFor="" style={{marginTop:'20px'}}>Phone</label></div>
                    
                    <div>
                    <input
                    placeholder="Enter Your Phone"
                    type="number"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                   className='Signinputboxemail' />
                    </div>
                    </div>
                   
                    
                   
                </div>
                <div className='col-12 u-s-m-b-30' >
                    <div style={{display:'inline'}}>
                    <div  ><label htmlFor="" style={{marginTop:'20px'}}>Email</label></div>
                    
                    <div>
                    <input
                    placeholder="Enter Your Email"
                    type='email'
                    name="email"
                           value={user.email}
                           onChange={handleChange}
                    
                    className='Signinputboxemail' />
                    </div>
                    </div>
                   
                    
                   
                </div>
              <div  >
                </div>
               
                  <div >
               <div>
               <div className='col-12 u-s-m-b-30' >
                    
                    <div  ><label htmlFor="" style={{marginTop:'20px'}}> Password</label></div>
                    <div><input
                    placeholder="Enter Your Name"
                    type="text"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    className='Signinputbox20' 
                    
                    /></div>
                </div>
               </div>
               <div>
               <div className='col-12 u-s-m-b-30' >
                    
                    <div ><label htmlFor="" style={{marginTop:'20px'}}>Confirm Password </label></div>
                    <div><input
                    placeholder="Enter Your Confirm pass "
                    type="text"
                    name="confirmpass"
                    value={user.confirmpass}
                    onChange={handleChange}
                    
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
                    placeholder="Enter Your Company Name"
                    type="text"
                    name="worksAt"
                    value={user.worksAt}
                    onChange={handleChange}
                    
                        className='Signinputbox20'
                        
                        /></div>
                </div>
               </div>
               <div>
               <div className='col-12  u-s-m-b-30'  >
                    
                    <div ><label htmlFor="" style={{marginTop:'20px'}}>Company Address</label></div>
                    <div><input
                    placeholder="Enter Your Company Address"
                    type="text"
                    name="companyAddress"
                           value={user.companyAddress}
                           onChange={handleChange}
                    
                        className='Signinputbox20' /></div>
                </div>
               </div>
              </div>
              <div className='col-12 u-s-m-b-30'>
                    <div style={{display:'inline'}}>
                    <div  ><label htmlFor="" style={{marginTop:'20px'}}>Pin Code</label></div>
                    
                    <div>
                    <input
                    placeholder="Enter Your Email"
                    type="number"
                    name="zip"
                    value={user.zip}
                    onChange={handleChange}
                    
                        className='Signinputboxemail' />
                    </div>
                    </div>
                   
                    
                   
                </div>
              <div >
              <div  className='col-12 u-s-m-b-30'>
                <div ><label htmlFor="" style={{marginTop:'20px'}}>State</label></div>
                <div>
                <input
                    placeholder="Enter Your State"
                    type="text"
                    name="state"
                    value={user.state}
                    onChange={handleChange}
                    className='Signinputboxemail' />
               </div>
                </div>
             
                <div className='col-12 u-s-m-b-30' >
                  <div ><label htmlFor="" style={{marginTop:'20px'}}>Country</label></div>
                  <div>
                  <input
                    placeholder="Enter Your Country"
                    type="text"
                    name="country"
                    value={user.country}
                    onChange={handleChange}
                    className='Signinputboxemail'
                    />
                  </div>

                  </div>
           
              </div>
                     
                  </div>
                  </div>
                  <div  >
                  
                  <div  className='col-12 u-s-m-b-30'  >
                  <input style={{marginTop:'20px'}} type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <label style={{marginTop:'20px'}} for="vehicle1"> By clicking "checkbox", you agree to the user agreement and privacy policy</label><br />
                  
       <div align="center" style={{marginTop:'30px'}}><div align="center" className='submitbtn'><button style={{backgroundColor:'transparent',borderColor:'transparent',}} type='submit'>Submit</button></div></div>
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
            </div></form>
               </div>
             </div>
                </div>
              </div>
             
            
        
          <Footer/>
    </div>
  )
}

export default SellerSignup
