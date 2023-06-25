import React from 'react'
import './ShopnavbarElements.css'
import service from '../../assets/service.png'
import './Shopnavbar'
import logo from '../../assets/logo.png'
import sorce from '../../assets/sorce.png'
import { useHistory } from 'react-router-dom'

function Shopnavbar() {
const history=useHistory()
  return (

    <div className="navbarContainer">
    <ul>
      <li className='listitemone'><img style={{height:'60px'}} src={logo} alt="" /></li>
      <li style={{listStyle:'none',paddingTop:'12px'}}>  
        <div className="input-group">
          <div className="form-outline" style={{display:'flex',height:'10px',listStyle:'none'}}>
          <form action="">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for products" onClick={()=>{
                          history.push("/Productlisting")
                        }} style={{width:'800px',borderRadius:'20px',outlineColor:'transparent'}} />
                        <div className="input-group-append">
                            <span >
                            <button style={{width:'70px',backgroundColor:'white',borderRadius:'20px',borderColor:'transparent',margin:'5px'}}><i className="fa fa-search" aria-hidden="true"></i></button>
                            </span>
                        </div>
                    </div>
          </form>
          
          </div>
        </div>
      </li>
      <li className='listitem'> <span><i data-count="3" className="fa fa-shopping-cart " /></span><a onClick={()=>{
        history.push("/SellerCart")
      }}><span classname="glyphicon glyphicon-shopping-cart"> Cart<span classname="badge" /></span></a>
      </li>
      
        {/* <li className='listitem' > Source more<span classname="badge" />
        </li> */}

      <li className='listitem'><span><img src={service}  style={{width:'auto',height:'auto',borderRadius:'20px',borderColor:'transparent'}} /></span><div className="dropdown">
          <button className="dropbtn">Tools</button>
          <div className="dropdown-content">
            <a href="#">Shipping Calculator</a>
            <a href="#">Track Order</a>
           
          </div>
          <span><i className='fas fa-chevron-circle-down'></i></span>
        </div>
        
        </li>
      
    </ul>
  </div>
  )
}

export default Shopnavbar
