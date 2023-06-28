import React from 'react'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import Sidebar from '../Sidebar/Sidebar'
import './Authentication.css'
import iconone from '../../assets/iconone.png'
import ebay from '../../assets/ebay.png'
import wcom from '../../assets/wcom.png'
import etc from '../../assets/etc.png'
import Dashboardfooter from '../../components/Dashboardfooter/Dashboardfooter'

function Authentication() {
    document.body.style.backgroundColor = "#32333A"
  return (
    <div  style={{backgroundColor:'#31343A',padding:'0px 0px 0px 0px',height:'800px'}} >
        <Adminnavbar />
        <div className='row' style={{marginTop:'100px',marginBottom:'100px'}}>
            <div className='col-2' style={{borderColor:"10px solid yellow;"}} >
                <Sidebar />
            </div>
            <div className='col-10'  >
                <div className='container' id="tabcontainer" style={{margin:'10px 20px 10px 10px',width:'auto', padding:'30px'}}>
                    <div className='flexlcontainr'>
                        <div className='flexk'> <img src={iconone} alt="" /> Connect With Shopify</div>
                        <div className='fln'><button>Connect</button></div>
                    </div>
                    {/* <hr /> */}
                    {/* <div className='flexlcontainr'>
                        <div className='flexk'><img src={etc} style={{height:'50px'}}   alt="" />  Connect with Etsy</div>
                        <div className='fln'><button>Connect</button></div>
                    </div>
                     <hr /> */}
                    {/* <div className='flexlcontainr'>
                        <div className='flexk'><img style={{height:'50px'}} src={wcom} alt="" />Connect with Woo Commerce</div>
                        <div className='fln'><button>Connect </button></div>
                    </div>
                     <hr />
                    <div className='flexlcontainr'>
                        <div className='flexk'> <img style={{height:'50px'}} src={ebay} alt="" />Connect with Ebay</div>
                        <div className='fln'><button>Connect </button></div>
                    </div> */}
                  
                </div>
               
            </div>
        </div>
        <Dashboardfooter />
    </div>
  )
}

export default Authentication
