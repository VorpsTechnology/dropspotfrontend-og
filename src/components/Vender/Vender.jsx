import React from 'react'

import './Vender.css'
import tik from '../../assets/tik.png'

import etc from '../../assets/etc.png'
import WIX from '../../assets/WIX.png'
import ish from '../../assets/ish.png'
import wcom from '../../assets/wcom.png'


import d2c from '../../assets/d2c.png'
import shop from '../../assets/shop.png'
import magento from '../../assets/magento.png'
import bigcomerce from '../../assets/bigecomerce.png'

import  { Component } from "react";
import Slider from "react-slick";

export default class Vender extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 4,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
    <> 
    <div id='vendercards'>
    <br />
    <br />
    <div  className="container-fluid"  >
      <div className='container-fluid'  style={{marginTop:'300px'}}>
      
        <Slider {...settings}>

          <div>
          <div className='imgwidth'> <img  src={tik} alt="" /> </div>
          </div>
          <div>
          <div className='imgwidth'> <img  src={etc} alt="" /> </div>
          </div>
          <div>
          <div className='imgwidth'> <img   src={WIX} alt="" /> </div>
          </div>

          <div>
          <div className='imgwidth'> <img  src={shop} alt="" /> </div>
          </div>
          <div>
          <div className='imgwidth'><img  src={magento} alt="" /> </div>
          </div>
          <div>
          <div className='imgwidth'> <img  src={d2c} alt="" /> </div>
          </div>
          <div>
          <div  className='imgwidth'> <img src={wcom} alt="" /> </div>
          </div>
          <div>
          <div  className='imgwidth'> <img  src={ish} alt="" /> </div>
          </div>
          <div>
          <div className='imgwidth'> <img  src={bigcomerce} alt="" /> </div>
          </div>
        </Slider>
      </div>
      </div>
    </div>
   
      </>
    );
  }
}


