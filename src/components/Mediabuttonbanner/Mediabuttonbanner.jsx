import Slider from "react-slick";
import { useState, useEffect, useRef } from "react";
import './Mediabuttonbanner.css'
import { useHistory } from "react-router-dom";
import computer from "../../assets/computer.png";
import purse from "../../assets/purse.png";
import ring from "../../assets/ring.png";
import tablet from "../../assets/tablet.png";
import dress from "../../assets/dress.png";
import sticks from "../../assets/sticks.png";
import hat from "../../assets/hat.png";
import home from "../../assets/home.png";
import renovation from "../../assets/renovation.png";
import bike from "../../assets/bike.png";
import teddy from "../../assets/teddy.png";
import shirt from "../../assets/shirt.png";
import cirle from "../../assets/cirle.png";


import toy from '../../assets/toy.png'
import circuit from '../../assets/circuit.png'



export const Mediabuttonbanner = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);



  return (
    <>
   
    <div className="container-fluid"  id="headerMedia"  >
          <div style={{ width: "auto" }}>
      <div>
     

        <Slider
          asNavFor={nav1}
          ref={slider2}
          slidesToShow={2}
          swipeToSlide={true}
          focusOnSelect={true}
          dots={false}
          infinite={false}
          speed={500}
          slidesToScroll={4}
          initialSlide={0}
         
        
        >
       <div><button  className="catogrybtn">  <span>computer & Office</span> </button></div>
       <div><button className="catogrybtn"> Phones & Accessories</button></div>
       <div><button className="catogrybtn"> Bags And shoes</button></div>
       <div><button className="catogrybtn">  Home, Garden & Furniture</button></div>
       <div><button className="catogrybtn"> Jewelry & Watches</button></div>
       <div><button className="catogrybtn">  Home Improvement</button></div>
       <div><button className="catogrybtn"> Health, Beauty & Hair</button></div>
       <div><button className="catogrybtn"> Automobiles & Motorcycles</button></div>
       <div><button className="catogrybtn"> Women's Clothing</button></div>
       <div><button className="catogrybtn"> Toys, Kids & Babies</button></div>
       <div><button className="catogrybtn">Sports & Outdoors</button></div>
       <div><button className="catogrybtn"> Men's Clothing</button></div>
       <div><button className="catogrybtn"> Consumer Electronics</button></div>
        </Slider>
      </div>
    </div>
    </div>
    </>

  );
};
export default Mediabuttonbanner