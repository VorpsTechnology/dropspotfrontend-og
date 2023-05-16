import React , { useState }from 'react'
import './Signin.css'
import  googleicon from'../../assets/googleicon.png'
import facebookicon from '../../assets/facebookicon.png'
import { Link, useNavigate } from "react-router-dom";
import { login, signUp } from "../../Api/AuthRequest";
import { useEffect } from "react";
import { useHistory } from 'react-router-dom';

import { useGoogleOneTapLogin } from "react-google-one-tap-login";


function Signup() {

  const userInfo = localStorage.getItem("userInfo");
  
  const [user, setData] = useState({
  
    email: "",

    password: "",
  });
  const history = useHistory();
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);
   //one tap google login
   useGoogleOneTapLogin({
    onSuccess: (response) => {
      localStorage.setItem("userInfo", response);
      history.push("/");
    },
    onError: (error) => console.log(error),
    googleAccountConfigs: {
      client_id:
        "820965083830-suli7t5b5bul27109gngq9i9ks8fsv9e.apps.googleusercontent.com",
    },
  });

  const handleChange = (e) => {
    setData({ ...user, [e.target.name]: e.target.value });
  };

  //form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.email === "") {
      setError2(true);
    } else {
      try {
        const { data } = await login(user);
        console.log(data);
        localStorage.setItem("userInfo", data);
        console.log(data.user._id);
        localStorage.setItem("userId", data.user._id);
        resetForm();
        history.push("/");
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }
  };

  useEffect(() => {
    if (userInfo) {
     history.push("/");
    }
  }, [history]);

  const resetForm = () => {
    setConfirmPass(true);
    setData({ email: "",  password: "" });
  };
  const [confirmPass, setConfirmPass] = useState(true);

  return (
   <>
    <section className="login-block">
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12"  >
       
          <form className="md-float-material form-material" onSubmit={handleSubmit} >
         
            <div  className="auth-box card100">
            <button style={{width:"50px"}}  className='submitbtn' onClick={()=>{
                  history.push("/")
                }} > Back</button>
              <div  className="card-block200">
               
                <div className="row">
                  <div className="col-md-12">
                    <h3 className="text-center heading" style={{color:'black',fontSize:'20px',fontWeight:'400px'}}>Login with your account</h3>
                  </div>
                </div>
                <label htmlFor="Email" style={{paddingLeft:'20px',paddingTop:'20px',color:'black',fontSize:'20px'}}>Email</label>
                <div><input className="EmailFeid"  type="Email"
                 name="email"
                 value={user.email}
                 onChange={handleChange}
                /></div>
                {error2 && (
              <span style={{ color: "red" }}>Email is required</span>
            )}
                <label htmlFor="Password" style={{paddingLeft:'20px',paddingTop:'20px',color:'black',fontSize:'20px'}}>Password</label>
                <div ><input className="Password" type="password" 
                
                name="password"
                onChange={handleChange}
                value={user.password}
                /></div>
              {error && <span style={{ color: "red" }}> * Wrong password </span>}
           

                <div  style={{display:'flex'}}> 
                </div>
                 <div align="center" style={{marginTop:'30px'}}><div align="center" className='submitbtn'><button style={{backgroundColor:'transparent',borderColor:'transparent',}}>Submit</button></div></div>
                  <div style={{paddingTop:'20px'}}> <input type="checkbox" className='checkbox-round' name="submit_form" id="submit_form" value="yes" />
                   <label for="send_newsletter" style={{color:'black'}}> Remember Me</label><span style={{float:'right',paddingRight:'20px'}}>Forgot Your Password?</span></div>
               
                </div>
                <div>
                <div align='center' className='Already'><h6 className='Already' >Forget Passowrd</h6></div>
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
    </div>
  </section>
  </>
  )
}

export default Signup
 