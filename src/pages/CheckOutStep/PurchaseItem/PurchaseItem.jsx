import React from 'react'
import shopingcard from '../../../assets/shopingcard.png'
import Navbar from '../../../components/Navbar'
import Shopnavbar from '../../../components/ShopNavbar/Shopnavbar'
import Footer from '../../../components/Footer/Footer'
import MediaFooter from '../../../components/MediaFooter/MediaFooter'
import MediaNavbar from '../../../components/MediaNavbar/MediaNavbar'
import './PurchaseItem.css'

function PurchaseItem() {
  return (
 <>
    <MediaNavbar />
    <Navbar />
    <Shopnavbar />
    <div style={{marginBottom:'100px'}}>
     
      <div align='center' className='flexh' >
        <div className='MediaCard'>
        <div className='card' id='MediaCard'>
            <div className='imagecontainer'><img src={shopingcard} alt="" /></div>
           <div className='containerMAx'>
           <div className='flexitem'>
              <div className='flexleft'>
                <h5>Price </h5>
              </div>
              <div className='flexright'>
                number
              </div>
            </div>
              <div className='flexitem'>
              <div className='flexleft'>
                <h5>Tax </h5>
              </div>
              <div className='flexright'>
                number
              </div>
            </div>
            <div className='flexitem'>
              <div className='flexleft'>
                <h5>Shipping</h5>
              </div>
              <div className='flexright'>
                number
              </div>
            </div>
            <div >
              <button className='totabtn'>
             <div style={{display:'flex',justifyContent:'space-between',padding:'15px'}}>
             <div>
                <h5>Total Price</h5>
              </div>
              <div>
              total
              </div>
             </div>
              </button>
              
            </div>
           </div>
          </div>
        </div>
        <div className='flexl'>
        <div>
      <div className='card' id='codcard'>COD</div>
          <div className='card' id='codcard'>Paytm</div>
          <div className='card' id='codcard'>NetBanking</div>
          <div className='card' id='codcard'>Debit Card/Ceadit card</div>
      </div>
        </div>
        <div className='flexr'>
        <div className='card' id='cardComponet'>
            <div className='imagecontainer'><img  src={shopingcard} alt="" /></div>
           <div className='containerMAx'>
           <div className='flexitem'>
              <div className='flexleft'>
                <h5>Price </h5>
              </div>
              <div className='flexright'>
                number
              </div>
            </div>
              <div className='flexitem'>
              <div className='flexleft'>
                <h5>Tax </h5>
              </div>
              <div className='flexright'>
                number
              </div>
            </div>
            <div className='flexitem'>
              <div className='flexleft'>
                <h5>Shipping</h5>
              </div>
              <div className='flexright'>
                number
              </div>
            </div>
            <div >
              <button className='totabtn'>
             <div style={{display:'flex',justifyContent:'space-between',padding:'15px'}}>
             <div>
                <h5>Total Price</h5>
              </div>
              <div>
              total
              </div>
             </div>
              </button>
              
            </div>
           </div>
          </div>
        </div>
     
       
          

     
        </div>
        <div align='center'><button className='submitbutton' >Pay now</button></div>  
    </div>
    
    <Footer />
    <MediaFooter />
 </>
  )
}

export default PurchaseItem
