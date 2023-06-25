import React, { Component } from "react";
import Slider from "react-slick";
import shopingcard from "../../assets/shopingcard.png";
import './MediaProductComponent.css'

export default class Responsive extends Component {

  state = {
    products: [1, 2, 3, 4, 5, 6],
  };
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
    
    
      <div className="container">
      
      
        <div align="center" id="MediaProduct">
          <Slider {...settings}>
         
            {this.state.products.map((ele, i) => (
              <div key={i}>
                <div className="card" id='cardsize'>

<div align='center' ><img  src={shopingcard}  alt="" />{" "}</div>
<div className="row " style={{marginTop:'20px'}}>
          <div className="col">
          <div className="first">
          <div className="d-flex justify-content-between align-items-center">
            <span className="wishlist">
            
            <i className= " fa fa-heart-o"></i>
            </span>{" "}
            
          </div>
        </div>  {" "}   <button  className="super_btnMedia" > ₹ </button>
          </div>
        </div>
        <div><span > <button className="discount01" > + Buy Now </button> </span>{" "} </div>
        <div className="row" >
            {" "}

            <div align="center" >  <button  className="listbtnlist01"  >  List</button>
</div>

           
          </div>

 
 
</div> 
               
              </div>
            ))}
          </Slider>
        </div>
      </div>
      </>
    );
  }
}
