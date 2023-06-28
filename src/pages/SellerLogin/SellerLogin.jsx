import React from 'react'
import Navbar from '../../components/Navbar'
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar'
import Footer from '../../components/Footer/Footer'
import smart from '../../assets/smart.png'
import { useHistory} from 'react-router-dom';

function SellerLogin() {
    const history = useHistory();
  return (
    <div>
    <Navbar />
    <MediaNavbar />

   
    <div className='flex-conatiner00' style={{backgroundColor:'rgba(255, 214, 0, 1)',borderTopLeftRadius:'20px',borderTopRightRadius:'20px'}}  >
    <div style={{paddingTop:'40px'}}>
                          <button style={{width:"100px"}}  className='backbtn' onClick={()=>{
                            history.push("/")
                          }} > Back</button>
                          </div>
  
     <div align='center' className='flex-item-left00' >
      
        <div align="center" style={{paddingTop:'40px',paddingBottom:'40px',textShadow:"0px 4px 4px rgba(0, 0, 0, 0.15)"}}>
          <h1>Login</h1></div>
        
            <div  className='containerform' style={{boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.15)"}}>
           
            <form align='center'  action=""   >
                <div  >
               
                    <div style={{textAlign:'left',paddingLeft:'70px'}} ><label htmlFor="" style={{marginTop:'20px'}}>Email</label></div>
                                        <div>
                                          <input
                                        placeholder="Enter Your Email"
                                       
                                        name="email"
                                        className='inputbox' 
                                        type="Email"
                 value='email'
                                        />

               </div>
                                        
                    </div>
                    <div >
                                    <div style={{textAlign:'left',paddingLeft:'70px'}}><label htmlFor="" style={{marginTop:'20px'}}>Password</label></div>
                                    <div><input  type="password "
                                    placeholder="Enter Your password"
                                    name="password"
                                
                                    className='inputbox'
                                    value='passworfvalue'
                                  
                                    /></div>
           
                    </div>
                    <div style={{marginTop:'20px'}}> 
                            <div align="center" style={{marginTop:'30px'}}><div align="center" className='submitbtn'><button style={{backgroundColor:'transparent',borderColor:'transparent',}}>Login</button></div></div>
                    </div>
                            <div style={{paddingTop:'20px'}}> <input type="checkbox"  name="submit_form" id="submit_form" value="yes" />
                        <label for="send_newsletter" style={{color:'black'}}> Remember Me</label><span style={{float:'right',paddingRight:'70px'}}>Forgot Your Password?</span></div>
                        
                        <div className="or-container">
                           
                           <div className="line-separator" />
                          
                           <div className="or-label">or</div>
                           <div className="line-separator" />
                       </div>
                         <div  style={{paddingTop:'20px'}}><a style={{color:"orange",poiner:"cursor",fontWeight:'650',fontSize:'15px'}} href='/SellerSignup'>signUp</a></div>
                            
                            <div  className="flex-container" style={{paddingBottom:'20px'}}>
                                {/* <div  className="flex-left"><button style={{backgroundColor:'transparent',borderColor:'transparent'}}><img align="center" src={googleicon} alt="" /></button></div> */}
                                {/* <div  className="flex-right"><button style={{backgroundColor:'transparent',borderColor:'transparent'}}><img  align="center" src={facebookicon} alt="" /></button></div> */}
                                {/* <GoogleOAuthProvider clientId="397098408171-8daq8ieu0khjtikordcufnv7r4cessvb.apps.googleusercontent.com">
                                  
                                    <GoogleLogin 
                                      onSuccess={credentialResponse => {
                                        console.log(credentialResponse);
                                        if(credentialResponse){
                                          history.push("/")
                                        }
                                      }}
                                      onError={() => {
                                        console.log('Login Failed');
                                      }}
                                    />
                                  </GoogleOAuthProvider>
                               <LoginSocialFacebook
                               appId='771535241046319'
                               onResolve={(response)=>{
                                console.log(response)
                                if(response){
                                  history.push("/")
                                }
                               }}

                               onReject={(error)=>{
                                console.log(error);
                               }}
                               >


                               <FacebookLoginButton  style={{height:"36px"}}/>
                               </LoginSocialFacebook> */}
                            
                            </div>
             </form> 
            </div>
       </div>
     <div className='flex-item-right00'>
     <div className='flex-rightsign' style={{paddingTop:'50px'}} ><img src={smart} alt="" /></div>
     

         
     </div>
  
    </div>
    <br />
    <br />
    <Footer />
 
  </div>
  )
}

export default SellerLogin
