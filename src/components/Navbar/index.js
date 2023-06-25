
import React, { useReducer, useState } from 'react';
import dashboard from '../../assets/dashboard.png'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  
} from './NavbarElements';
import './Navbar.css'


import swal from "sweetalert";
import lang from '../../assets/lang.png'
import MyDropspot from '../../pages/MyDropspot';

import droptik from '../../assets/droptik.png'
import dropship from '../../assets/dropship.png'
import dropwelmart from '../../assets/dropwalmart.png'
import dropcomerce from '../../assets/dropcomerce.png'
import dropamazon from '../../assets/dropamazon.png'
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

const Navbar = () => {

  const userInfo = localStorage.getItem("userInfo");
  const userId=localStorage.getItem("userId")
  const userEmaill=localStorage.getItem("userEmail")
  const userEmail= userEmaill?.split('@')[0];
  const userName=localStorage.getItem("userName")
  const accountType=localStorage.getItem("accountType")

  const [seller,setSeller]=useState(true)
  console.log(accountType);
  const history=useHistory()
  console.log("userinfor",userInfo);
 useEffect(()=>{
  if(accountType!=="Seller"){
    setSeller(false)
  }
 },[])

  return (
    <>
   <div className='DesktopNavbar' style={{backgroundColor:'rgba(255, 255, 255, 1)'}}>
   <Nav>
        <Bars />
        <NavMenu>
        
     {
      seller==true?<></>:   <div>
      <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown09" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false " style={{backgroundColor:'white',textDecoration:'none'}}>
       <span style={{paddingRight:'10px',textDecoration:'none'}}><i className="fa fa-check-circle"></i></span>Autherization</a>
      <div className="dropdown-menu" aria-labelledby="dropdown09" style={{backgroundColor:'#f9f9f9',width:'150px',boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2);",borderRadius:'5px'}} >
        {/* <a className="dropdown-item" href="#fr"><img src={droptik} alt="" /></a> */}
        <a className="dropdown-item" href="#it"><img src={dropship} alt="" /></a>
        {/* <a className="dropdown-item" href="#it"><img src={dropwelmart} alt="" /></a>
        <a className="dropdown-item" href="#it"><img src={dropcomerce} alt="" /></a>
        <a className="dropdown-item" href="#it"><img src={dropamazon} alt="" /></a> */}
      </div>
      </div>
     }
        
        
          <NavLink to='/wishlist' activeStyle  style={{textDecoration:'none',color:'black'}}>
           <span style={{paddingRight:'10px',textDecoration:'none'}}><i className="fa fa-heart"></i></span>Wishlist
          </NavLink>
          <div>
      
        </div>
          <NavLink to='/HelpCenter' activeStyle style={{textDecoration:'none',color:'black'}}>
          <span style={{paddingRight:'10px',textDecoration:'none'}}><i className="fa fa-handshake-o"></i></span> Help Center
          </NavLink>
          <NavLink to='/SellerSourchingForm' activeStyle style={{textDecoration:'none',color:'black'}}>
           <span style={{paddingRight:'10px',textDecoration:'none'}}><i className="fa fa-group"></i></span>Sourcing
          </NavLink>
          <NavLink to={accountType==="Seller"? "/SellerDashboard":'/MyDropspot'} activeStyle style={{textDecoration:'none',color:'black'}}>
          <span><img src={dashboard} style={{height:'15px',margin:'0px 5px 0px 0px'}} /></span> My Dropspot
          </NavLink>
          {userInfo? <button className='bttun' style={{borderRadius:'50px',padding:'10px',borderColor:'transparent',textDecoration:'none',color:'black',backgroundColor:'rgba(255, 255, 255, 1)'}} 
          onClick={(e) => {
            e.preventDefault();
            swal({
              title: "Are you sure?",
              text: "Do yo want to logout!",
              icon: "warning",
              buttons: true,
              dangerMode: true,
            }).then((willDelete) => {
              if (willDelete) {
                localStorage.removeItem("userInfo");
                localStorage.removeItem("userId");
                localStorage.removeItem("userName");
                localStorage.removeItem("name");
                localStorage.removeItem("accountType");
                localStorage.removeItem("userEmail");

                history.push("/");
              } else {
                swal("Welcome back");
              }
            });
          }}
          
          ><span><i className="fa fa-sign-out" aria-hidden="true" style={{fontSize:'15px',margin:'0px 5px 0px 0px'}}></i></span>Log out</button>: <NavLink to='/signin' activeStyle style={{color:'black',textDecoration:'transparent'}}>
           <span><i style={{fontSize:'15px',margin:'0px 5px 0px 0px'}} className="fa fa-user-plus"></i></span> Log in
          </NavLink>}
       {
        userInfo?"":   <NavLink to='/NewSignup/Dropshipper' activeStyle>
        <span><i class="fa fa-sign-in" aria-hidden="true" style={{fontSize:'15px',margin:'0px 5px 0px 0px'}}></i></span> SignUp
        </NavLink>
       }
          
        
        {userInfo?    <div>

       
         <div className="dropdownuser" >
        <button className='dropbtnuser6' style={{backgroundColor:'rgba(255, 255, 255, 1)',width:'0px'}} > <span><i className="fa fa-user-circle-o" style={{fontSize:'15px',margin:'0px 5px 0px 0px'}}></i></span>{userEmail ||userName ||userId}</button>
          <div className="dropdown-contentuser">
          <a href="/UserProfile" style={{textDecoration:'none'}}> <span><i className="fa fa-user-circle-o" style={{fontSize:'15px'}}></i></span> Profile</a>
          <a href="/Wallet" style={{textDecoration:'none'}}> <span><i className='fas fa-wallet' style={{fontSize:'15px'}} ></i></span> Wallet</a>
          <a href="/Calculation" style={{textDecoration:'none'}}> <span> <i className="fa fa-calculator" aria-hidden="true" style={{fontSize:'15px'}}></i></span> Shipping Calculation</a>
          <a  style={{textDecoration:'none'}} onClick={(e) => {
            e.preventDefault();
            swal({
              title: "Are you sure?",
              text: "Do yo want to logout!",
              icon: "warning",
              buttons: true,
              dangerMode: true,
            }).then((willDelete) => {
              if (willDelete) {
                localStorage.removeItem("userInfo");

                history.push("/");
              } else {
                swal("Welcome back");
              }
            });
          }} href="#"><span><i className="fa fa-sign-out" aria-hidden="true" style={{fontSize:'15px'}}></i></span> Logout </a>
          </div>
        </div>
            </div>:""}
  
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
   </div>

    </>
  );
};
  
export default Navbar;