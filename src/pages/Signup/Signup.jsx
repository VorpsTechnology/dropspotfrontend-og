import React from 'react'
import './Signup.css'
import  googleicon from'../../assets/googleicon.png'
import facebookicon from '../../assets/facebookicon.png'
// import Navbar from '../../components/Navbar'
// import Shopnavbar from '../../components/ShopNavbar/Shopnavbar'
import  { useState } from "react";
import { signUp } from "../../Api/AuthRequest.js";
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function  Signup() {

  //user state
  const [user, setData] = useState({
    
    email: "",

    password: "",
    confirmpass: "",
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

    e.preventDefault();
    if (user.username === "" || user.email === "" || user.phone === "") {
      toast.error("Fields can't be empty");
    } else if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(user.email)
    ) {
      toast.error("Enter valid email id");
    } else if (user.password !== user.confirmpass) {
      toast.error("Password dosen't match");
    } else {
      try {
        const { data } = await signUp(user);
        console.log(data);
        localStorage.setItem("userInfo", data);
        resetForm();
        history.push("/");
      } catch (error) {
        console.log(error);
      }
    }
  };
  //resetting form
  const resetForm = () => {
    console.log(confirmPass);
    if(confirmPass!==""){
      setConfirmPass(true);      
    }
    
    setData({
     
      email: "",
     
      password: "",
      confirmpass: "",
    });
  };

  return (
 <>

    <section className="login-block">
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <form className="md-float-material form-material" onSubmit={handleSubmit}>
            <div className="auth-box card170">
              <div className="card-block170">
                <div className="row">
                  <div className="col-md-12">
                    <h3 className="text-center heading" style={{color:'black',fontSize:'20px',fontWeight:'400px'}}>Welcome To Dropspot</h3>
                  </div>
                </div>
                <label style={{marginTop:'8px'}} htmlFor="Email">Email</label>
                <div><input className='inputbox'  type="Email"  
                
                placeholder="Enter Your Email"
                name="email"
                value={user.email}
                onChange={handleChange}
                /></div>
                <label style={{marginTop:'8px'}} htmlFor="Email">Password</label>
                <div ><input className='inputbox'   type="password "  placeholder='Enter the password' 
                 name="password"
                 onChange={handleChange}
                 value={user.password}
                
                /></div>
                <label style={{marginTop:'8px'}} htmlFor="Email">Confirm Password</label>
                <div ><input className='inputbox'  type="password "  placeholder='Confirm password'
                 name="confirmpass"
                 onChange={handleChange}
                 value={user.confirmpass}
                /></div>
                <div  style={{display:'flex',margin:'20px'}}> 
                  <div><label style={{marginTop:'8px'}} htmlFor="Account_type">Account Type</label> </div>
                  <div >
                  
                      <label  className="checkbox-inline" style={{paddingLeft:'30px',marginTop:'8px'}}  >
                        <input className='checkbox-round' type="checkbox"  />Seller
                      </label>
                      <label className="checkbox-inline" style={{paddingLeft:'30px'}} >
                        <input className='checkbox-round' type="checkbox" value="" />Vendor
                      </label>
                  
                  
                  </div>

                </div>
                  <div><label htmlFor="Invitation code" >Invitation code</label>
                  <div ><input className='inputbox'  type="text" placeholder='Enter Invitation code' required /></div>
                  </div>
                  <div style={{marginTop:'20px'}}><p><input type="checkbox" className='checkbox-round'   
                  name="privacyPolicy"
                  id=""
                  value={true}
                  onChange={handleChange}
                  /> <span align="center">By clicking "Next", you agree to the user agreement and privacy policy</span> </p> 
                 <div align="center" style={{marginTop:'30px'}}><div align="center" className='submitbtn'><button style={{backgroundColor:'transparent',borderColor:'transparent',}}>Submit</button></div></div>
                </div>
                <div align='center' className='Already'><h6 className='Already'> <a href='Signin'>Already have an account?Sign In?</a> </h6></div>
                <div className="or-container">
                  <div className="line-separator" />
                  <div className="or-label">or</div>
                  <div className="line-separator" />
                </div>
                 
              </div>
              <div  className="flex-container">
                <div  className="flex-left"><button style={{backgroundColor:'transparent',borderColor:'transparent'}}><img align="center" src={googleicon} alt="" /></button></div>
                <div  className="flex-right"><button style={{backgroundColor:'transparent',borderColor:'transparent'}}><img  align="center" src={facebookicon} alt="" /></button></div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  </section>
  </>
  )
}

export default Signup
