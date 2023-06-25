import React from 'react'
import { useHistory} from 'react-router-dom';
import smart from '../../assets/smart.png'
import googleicon from '../../assets/googleicon.png'
import facebookicon from '../../assets/facebookicon.png'
import Navbar from '../../components/Navbar';
import Shopnavbar from '../../components/ShopNavbar/Shopnavbar';
import Footer from '../../components/Footer/Footer';

function SellerSignup() {
    const history = useHistory();
  return (
    <div>
    <Navbar />
    <Shopnavbar />

       <div className='flex-containersign' style={{backgroundColor:'rgba(255, 214, 0, 1)',paddingTop:'40px',borderTopLeftRadius:'20px',borderTopRightRadius:'20px'}}>

              
              <div className='flex-leftsign'>
              <div style={{marginBottom:'40px'}}>
                        <button style={{width:"100px"}}  className='backbtn' onClick={()=>{
                          history.push("/")
                        }} > Back</button>
                        </div>


                <div align='center'>
                <div align="center" className='contsiner' >
                 
                 <form   action="" >
                  
                     <div align='center'  >
                       
                         <div className='formlabel' ><label htmlFor="" style={{marginTop:'20px'}}>Email</label></div>
                         <div><input
                         placeholder="Enter Your Email"
                         type="email"
                         name="email"
                         value='none'
                         
                             className='inputbox20' /></div>
                     </div>
                     <div >
                     <div className='formlabel'><label htmlFor="" style={{marginTop:'20px'}}>Password</label></div>
                     <div><input  type="password "
                     placeholder="Enter Your password"
                     name="password"
                     
                     value='none'
                     className='inputbox20' /></div>
                     </div>
                     <div >
                     <div className='formlabel'><label htmlFor="" style={{marginTop:'20px'}}>Confirm Password</label></div>
                     <div><input type="password " 
                     name="confirmpass"
                     placeholder="Enter Your Confirm Password"
                     
                     value="none"
                     className='inputbox20' /></div>

                     </div>
                     <div >
                     <div className='formlabel'><label htmlFor="" style={{marginTop:'20px'}}>Desciption</label></div>
                     <div>
                     <textarea className='inputbox20' rows="4" cols="50">
                     </textarea>
                     </div>
                     
                     </div>
                     <div >
 
                     <div>
                         {/* <select className='inputbox20' onChange={handleChange} name=" accountType"  id="">
                             <option value="Seller">seller</option>
                             <option value="Dropshoper">Dropshoper</option>
                         </select> */}
                        
                     </div>
                     </div>
                     <div >
               

                     </div>
                     <div style={{marginTop:'20px'}}><p><input type="checkbox"  className='checkbox-roundchecked'   
             name="privacyPolicy"
             id=""
             value={true}
            
             /> <span align="center"> <label htmlFor="">By clicking "Next", you agree to the user <br /> agreement and privacy policy</label> </span> </p> 
          <div align="center" style={{marginTop:'30px'}}><div align="center" className='submitbtn'><button style={{backgroundColor:'transparent',borderColor:'transparent',}}>Submit</button></div></div>
             </div>
             <div align='center' className='Already'><h6 className='Already'>Already have an account?Sign In?</h6></div>
               <div className="or-container">
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
             
              <div className='flex-rightsign'  >
              <div align="center"><h1 style={{paddingTop:'20px',paddingBottom:'40px',fontWeight:'800px',textShadow:"0px 4px 4px rgba(0, 0, 0, 0.15)"}}>Signup As Seller </h1></div> 
              <div align="center"  >
                <div><img  src={smart}  alt="" /></div>
                </div>  
                </div>
          </div>
          <Footer/>
    </div>
  )
}

export default SellerSignup
