
import React, { useReducer, useState } from 'react';
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
   <div className='DesktopNavbar'>
   <Nav>
        <Bars />
        <NavMenu>
        
     {
      seller==true?<></>:   <div>
      <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown09" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false " style={{backgroundColor:'white',textDecoration:'none'}}>
       <span style={{paddingRight:'10px',textDecoration:'none'}}><i class="fa fa-check-circle"></i></span>Autherization</a>
      <div className="dropdown-menu" aria-labelledby="dropdown09" style={{backgroundColor:'#f9f9f9',width:'150px',boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2);",borderRadius:'5px'}} >
        <a className="dropdown-item" href="#fr"><img src={droptik} alt="" /></a>
        <a className="dropdown-item" href="#it"><img src={dropship} alt="" /></a>
        <a className="dropdown-item" href="#it"><img src={dropwelmart} alt="" /></a>
        <a className="dropdown-item" href="#it"><img src={dropcomerce} alt="" /></a>
        <a className="dropdown-item" href="#it"><img src={dropamazon} alt="" /></a>
      </div>
      </div>
     }
        
        
          <NavLink to='/wishlist' activeStyle  style={{textDecoration:'none',color:'black'}}>
           <span style={{paddingRight:'10px',textDecoration:'none'}}><i class="fa fa-heart"></i></span>Wishlist
          </NavLink>
          <div>
      
        </div>
          <NavLink to='/HelpCenter' activeStyle style={{textDecoration:'none',color:'black'}}>
          <span style={{paddingRight:'10px',textDecoration:'none'}}><i class="fa fa-handshake-o"></i></span> Help Center
          </NavLink>
          <NavLink to='/SellerSourchingForm' activeStyle style={{textDecoration:'none',color:'black'}}>
           <span style={{paddingRight:'10px',textDecoration:'none'}}><i class="fa fa-group"></i></span>Sourcing
          </NavLink>
          <NavLink to={accountType==="Seller"? "/SellerDashboard":'/MyDropspot'} activeStyle style={{textDecoration:'none',color:'black'}}>
          My Dropspot
          </NavLink>
          {userInfo? <button style={{backgroundColor:'#FDE31A',borderRadius:'50px',padding:'10px',borderColor:'transparent',textDecoration:'none',color:'black'}} 
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
          
          >Log out</button>: <NavLink to='/signin' activeStyle style={{color:'black',textDecoration:'transparent'}}>
           <span><i style={{paddingRight:'10px'}} class="fa fa-user-plus"></i></span> Log in
          </NavLink>}
       {
        userInfo?"":   <NavLink style={{backgroundColor:'#FDE31A',borderColor:'transparent',borderRadius:'50px',height:'40px'}} to='/NewSignup/Dropshipper' activeStyle>
        SignUp
        </NavLink>
       }
          
        
        {userInfo?    <div>

             <div className="dropdownuser">
        <button className="dropbtnuser2" >{userEmail ||userName ||userId}</button>
          <div className="dropdown-contentuser">
          <a href="/UserProfile" style={{textDecoration:'none'}}> <span><i class="fa fa-user-circle-o" style={{fontSize:'15px'}}></i></span> Profile</a>
          <a href="/Wallet" style={{textDecoration:'none'}}> <span><i class='fas fa-wallet' style={{fontSize:'15px'}} ></i></span> Wallet</a>
          <a href="/Calculation" style={{textDecoration:'none'}}> <span> <i class="fa fa-calculator" aria-hidden="true" style={{fontSize:'15px'}}></i></span> Shipping Calculation</a>
          <a  onClick={(e) => {
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
          }} href="#" style={{textDecoration:'none'}}> <span><i class="fa fa-sign-out" aria-hidden="true" style={{fontSize:'15px'}}></i></span>  Logout</a>
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