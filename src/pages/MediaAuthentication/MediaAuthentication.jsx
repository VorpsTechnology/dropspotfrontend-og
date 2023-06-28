import React from 'react'
import shopify from '../../assets/shopify.png'
import ebay from '../../assets/ebay.png'
import wcom from '../../assets/wcom.png'
import etc from '../../assets/etc.png'
import './MediaAuthentication.css'
import { useHistory} from 'react-router-dom';

import MediaNavbar from '../../components/MediaNavbar/MediaNavbar'


function MediaAuthentication() {
    const history = useHistory();
  return (
   <>
    <MediaNavbar />
    <div className='btnbtnbtn' style={{margin:'20px 0px 20px 20px'}}  >
    <button className='backbtnmedia'  style={{width:"100px"}}   onClick={()=>{
      history.push("/")
    }} > Back</button>
</div>
    <div>
              <div className='container' id="tabcontainer" style={{margin:'10px 20px 10px 10px',width:'auto', padding:'30px'}}>
                    <div className='flexlmedia'>
                        <div className='flexkmedia'> 
                        <div align='center'>
                        <div><img style={{height:'50px'}} src={shopify} alt="" /></div>
                        
                        </div>
                        </div>
                        <div className='flnmedia'><button>Connect with shopify</button></div>
                    </div>
                    {/* <hr />
                    <div className='flexlmedia'>
                        <div className='flexkmedia'>
                        <div align='center'>
                        <div><img src={etc} style={{height:'50px'}}   alt="" /></div>
                        
                        </div>
                              </div>
                        <div className='flnmedia'><button>Connect with Etsy</button></div>
                    </div>
                     <hr />
                    <div className='flexlmedia'>
                        <div className='flexkmedia'>
                            <div align='center'>
                                <div><img style={{height:'50px'}} src={wcom} alt="" /></div>
                             
                            </div>
                        </div>
                        <div className='flnmedia'><button>Connect with W.Comerce </button></div>
                    </div>
                     <hr />
                    <div className='flexlmedia'>
                        <div className='flexkmedia'>
                            <div align='center'>
                                <div> <img style={{height:'50px'}} src={ebay} alt="" /></div>
                                
                            </div>
                           </div>
                        <div className='flnmedia'><button>Connect with ebay </button></div>
                    </div> */}
                  
                </div>
    </div>

   </>
  )
}

export default MediaAuthentication