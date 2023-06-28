import React from 'react'
import NewSignup from '../../pages/NewSignup/NewSignup'
import './Footer.css'
import { useHistory } from "react-router-dom";





    

function Footer() {
  const history = useHistory();
  const Checkout= () => {
      history.push("Checkout");
  } 
  return (
     
    <>
    <div className='footercontainer' >
        <div >

        {/* Footer Start */}
        <div className="container-fluid bg-black ">
          <div className="row px-xl-5 pt-5">
            <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
              <a href className="text-decoration-none">
                <h1 className="mb-4 display-5 font-weight-semi-bold"><span className=" font-weight-bold   px-3 mr-1"  style={{color:'rgba(253,231,54,1'}}>DropSpot</span></h1>
              </a>
              <p style={{color:'white'}}>Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no sit erat lorem et magna ipsum dolore amet erat.</p>
              <p className="mb-2"   style={{color:'white'}}><i className="fa fa-map-marker-alt text-white mr-3" />123 Street, New York, USA</p>
              <p className="mb-2"  style={{color:'white'}}><i className="fa fa-envelope text-white mr-3" />info@example.com</p>
              <p className="mb-0"  style={{color:'white'}}><i className="fa fa-phone-alt text-white mr-3" />+012 345 67890</p>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="row">
                <div className="col-md-4 mb-5">
                  <h5 className="font-weight-bold  mb-4" style={{color:'rgba(253,231,54,1'}}>Quick Links</h5>
                  <div className="d-flex flex-column justify-content-start">
                    <a className="text-white mb-2" href="/AboutUS"><i className="fa fa-angle-right mr-2" />About us</a>
                    <a className="text-white mb-2" href="/ContactUS"><i className="fa fa-angle-right mr-2" />Contact us</a>
                    <a className="text-white mb-2" href="/UserAgreement"><i className="fa fa-angle-right mr-2" />User Agreement</a>
                    <a className="text-white mb-2" href="/RefundResend"><i className="fa fa-angle-right mr-2" />Refund , Resend ,Returns</a>
                    <a className="text-white mb-2" href="/IntegrityConcerns"><i className="fa fa-angle-right mr-2" />Raising Integrity Concerns</a>
                    <a className="text-white mb-2" href="/PrivacyPolicy"><i className="fa fa-angle-right mr-2" />Privacy Policy</a>
                    <a className="text-white mb-2" href="/PaymentMethods"><i className="fa fa-angle-right mr-2" />Payment methods</a>

                    <a className="text-white mb-2" href="/StoreAutherizationAgreement"><i className="fa fa-angle-right mr-2" />Store Autherization Agreement</a>
                  </div>
                </div>
                <div className="col-md-4 mb-5">
                  <h5 className="font-weight-bold  mb-4"  style={{color:'rgba(253,231,54,1'}}>Quick Links</h5>
                  <div className="d-flex flex-column justify-content-start">
                    <a className="text-white mb-2" href="TrackingOrder"><i className="fa fa-angle-right mr-2" />Tracking Orders</a>
                    <a className="text-white mb-2" href="/Calculation"><i className="fa fa-angle-right mr-2" />Shipping Cost and Delivery time</a>
                    <a className="text-white mb-2" href="/SellerSignup"><i className="fa fa-angle-right mr-2" />SellerSignup</a>
                    <a className="text-white mb-2" href="/BulkPurchase"><i className="fa fa-angle-right mr-2" />Bulk Purchase</a>

                    <a className="text-white mb-2" href="/SellerLogin"><i className="fa fa-angle-right mr-2" />SellerLogin</a>
                  </div>
                </div>
                <div className="col-md-4 mb-5">
                  <h5 className="font-weight-bold  mb-4"  style={{color:'rgba(253,231,54,1'}}>Quick Links</h5>
                  <div className="d-flex flex-column justify-content-start">

                  <a className="text-white mb-2" href="/SellerDashboard"><i className="fa fa-angle-right mr-2" />Seller Dashboard</a>
                    <a className="text-white mb-2" href="/Helpcenter"><i className="fa fa-angle-right mr-2" />Help Center</a>

                       

                    
                   
                   

                  </div>
                </div>
               
              </div>
            </div>
          </div>
          <div className="row border-top border-white mx-xl-5 py-4">
            <div className="col-md-6 px-xl-0">
              <p   style={{color:'white'}} className="mb-md-0 text-center text-md-left ">
              Copyright © 2023 <a className=" font-weight-semi-bold" href="#"  style={{color:'rgba(253,231,54,1)'}}> </a> <a style={{textDecoration:'none',color:'rgba(253,231,54,1)'}} href="dropspot.in"> Dropspot.com.</a> All Rights Reserved.

              </p>
            
            </div>
            <div className="col-md-6 px-xl-0">
              <p   style={{color:'white'}} className="mb-md-0 text-center text-md-right ">
              Developed by <a className=" font-weight-semi-bold" href="#"  style={{color:'rgba(253,231,54,1)'}}>  </a><a style={{textDecoration:'none',color:'rgba(253,231,54,1)'}} href="vorpstech.com/"> VorpsTechnologies</a>

              </p>
            
            </div>
           
            <div className="col-md-6 px-xl-0 text-center text-md-right">
              <img className="img-fluid" src="img/payments.png" alt="" />
            </div>
          </div>
        </div>
        </div>
    </div>


    </>
  )
}

export default Footer
