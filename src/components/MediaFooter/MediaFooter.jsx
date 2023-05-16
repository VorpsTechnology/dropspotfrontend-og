import React from 'react'
import './MediaFooter.css'
import mediahome from '../../assets/mediahome.png'
import mediaheart from '../../assets/mediaheart.png'
import mediapackage from '../../assets/mediapackage.png'
import mediacart from '../../assets/mediacart.png'
import mediaacount from '../../assets/mediaacount.png'
import { useHistory } from "react-router-dom";


function MediaFooter() {
let history = useHistory();
  
    function handleClick() {
      history.push("/signup");
    }
    function handleHome(){
      history.push('/')
    }

   
    function handleSouching(){
      history.push('/MediaSourching')
    }

    function handleMediaWishlist(){
      history.push('/MediaWishlist')
    }

   
    const handleCheck= () => {
        history.push("/Checkout");
            } 

  return (
    <div align='center' id="MediaFooterconteriner">
      
      <nav className="mobile-nav">
        <a href="#" className="bloc-icon">
          <div align="center"><img src={mediahome} alt="" />
          <div align="center"><button className="btnFooter" onClick={handleHome}>HOME</button> </div></div>
        </a>
        <a href="#" className="bloc-icon">
         <div align="center"> <img src={mediaheart} alt="" />
         <div align="center"><button className="btnFooter" onClick={handleMediaWishlist} >WISHLIST</button> </div></div>
        </a>
        <a href="#" className="bloc-icon">
         <div align="center"><img src={mediapackage}alt="" />
         <div align="center"><button className="btnFooter" onClick={handleSouching}>SOURCHING</button></div></div> 
        </a>
        <a href="#" className="bloc-icon">
        <div align="center"><img src={mediacart}alt="" />
        <div align="center"><button className="btnFooter" onClick={handleCheck} >CART</button></div></div> 
        </a>
        <a href="#" className="bloc-icon">
        <div align="center"><img src={mediaacount}alt="" />
        <div align="center"> <button className="btnFooter" onClick={handleClick}>ACCOUNT</button></div></div>
        </a>
      </nav>
    </div>
  )
}

export default MediaFooter
