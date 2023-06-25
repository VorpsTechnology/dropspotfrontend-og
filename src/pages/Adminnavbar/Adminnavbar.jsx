import React from 'react'
import './Adminnavbar.css'
import avatar from '../../assets/avatar.png'
import bell from '../../assets/bell.png'
import logo from '../../assets/logo.png'
import { useHistory } from 'react-router-dom'

import swal from "sweetalert";
function Adminnavbar() {
  const history=useHistory()
  const userId=localStorage.getItem("userId")
  const userName=localStorage.getItem("userName")

  const userEmaill=localStorage.getItem("userEmail")

  const userEmail= userEmaill.split('@')[0];

  return (
    <div className='container-fluid ' id="Admindashboard"  >
      
      <div className='flex-container120' >
        <div className='flex-item-left120' > <h4><img onClick={()=>{
          history.push("/")
        }} style={{width:"70px",boxShadow:'grey 0px 48px 100px 0px',borderRadius:'50px'}} src={logo} alt="" />
         <span style={{color:'#FDE31A',fontSize:'18px'}} > <b>DropSpot </b> </span>
         </h4>
         </div>
        <div className='flex-item-right120'> 
       
        <span style={{margin:'10px'}}>
        <div className="dropdownuser">
       
        <button className="btn-sm mb-0 dropbtnuser" style={{boxShadow:"grey 0px 48px 100px 0px;"}}  >{userEmail ||userName ||userId}</button>
          <div className="dropdown-contentuser">
          <a href="/UserProfile" style={{textDecoration:'none'}}> <span><i className="fa fa-user-circle-o" style={{fontSize:'15px'}}></i></span> Profile</a>
          <a href="/Wallet" style={{textDecoration:'none'}}> <span><i className='fas fa-wallet' style={{fontSize:'15px'}} ></i></span> Wallet</a>
          <a href="/Calculation" style={{textDecoration:'none'}}> <span> <i className="fa fa-calculator" aria-hidden="true" style={{fontSize:'15px'}}></i></span> Shipping Calculation</a>
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
          }} href="#" style={{textDecoration:'none'}}> <span><i className="fa fa-sign-out" aria-hidden="true" style={{fontSize:'15px'}}></i></span>  Logout</a>
          </div>
          <span style={{marginRight:'10px'}}> <img  style={{width:'15px',height:'15px'}} src={bell} alt="" /></span>
        </div>
        </span>
   </div>
      </div>
     
      
    </div>
  )
}

export default Adminnavbar
