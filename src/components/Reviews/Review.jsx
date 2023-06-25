import React, { Component } from "react";
import Slider from "react-slick";
import logo from '../../assets/logo.png'
import './Review.css'
import Review from '../../assets/Review.png'
const gridcontainer={
  display:'grid',
  gridTemplateColumns:'auto auto',
  height:'100px',
  marginTop:'50px',

 
  
}
const container={

  height:'200px',
  marginTop:'20px',
  paddingBottom:'40px',
  width:'100%',
 
  
}


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    
    };
    return (
      <>
       <div id="reviewcontainer" style={{ width:'100%',marginBottom:'300px'}}>
       <div  className="container" style={container} >
     
     <Slider {...settings}>
       <div >
         <div align="center" className="gridcontainer" style={gridcontainer}>
         <div align="center" className="grid-item"><img  src={Review} alt="" /></div>
           <div className="grid-item" >                           
            <div className="review-box"   >
                 <img id="carasouelsection" className="cli-img" src={logo} alt="" />
                   <span className="review-info"></span>
                   <span > <button className="review-date">18 December 2018</button> </span>
                     <div className="review-rating" >
                             
                               <span  className="fa fa-star checked"></span>
                               <span  className="fa fa-star checked"></span>
                               <span  className="fa fa-star checked"></span>
                               <span  className="fa fa-star"></span>
                               <span  className="fa fa-star"></span>
                     </div>
                       <p className="review-text fs-5" style={{width:'500px'}}>Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>

                     </div>
             </div>
         </div>
       </div>
       <div>
       <div className="gridcontainer" style={gridcontainer}>
         <div className="grid-item"><img  src={Review} alt="" /></div>
           <div className="grid-item">                            <div className="review-box">
                           <img id="carasouelsection" className="cli-img" src={logo} alt="" />
                           <span className="review-info"></span>
                           <span > <button className="review-date">18 December 2018</button> </span>
                           <div className="review-rating">
                             
                               <span className="fa fa-star checked"></span>
                               <span className="fa fa-star checked"></span>
                               <span className="fa fa-star checked"></span>
                               <span className="fa fa-star"></span>
                               <span className="fa fa-star"></span>
                           </div>
                           <p className="review-text fs-5" style={{width:'500px'}}>Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                           
                         </div>
                       </div>
         </div>
       </div>
       <div>
       <div className="gridcontainer" style={gridcontainer}>
         <div className="grid-item"><img  src={Review} alt="" /></div>
           <div className="grid-item">                            <div className="review-box">
                           <img id="carasouelsection" className="cli-img" src={logo} alt="" />
                           <span className="review-info"></span>
                         <span > <button className="review-date">18 December 2018</button> </span>
                           <div className="review-rating">
                             
                               <span className="fa fa-star checked"></span>
                               <span className="fa fa-star checked"></span>
                               <span className="fa fa-star checked"></span>
                               <span className="fa fa-star"></span>
                               <span className="fa fa-star"></span>
                           </div>
                           <p className="review-text fs-5" style={{width:'500px'}}>Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                          
                         </div>
                       </div>
         </div>
       </div>
       <div>
       <div className="gridcontainer" style={gridcontainer}>
         <div className="grid-item"><img  src={Review} alt="" /></div>
           <div className="grid-item">                            <div className="review-box">
                           <img id="carasouelsection" className="cli-img" src={logo} alt="" />
                           <span className="review-info"></span>
                         <span > <button className="review-date">18 December 2018</button> </span>
                           <div className="review-rating">
                             
                               <span className="fa fa-star checked"></span>
                               <span className="fa fa-star checked"></span>
                               <span className="fa fa-star checked"></span>
                               <span className="fa fa-star"></span>
                               <span className="fa fa-star"></span>
                           </div>
                           <p className="review-text fs-5" style={{width:'500px'}}>Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                          
                         </div>
                       </div>
         </div>
       </div>
       <div>
       <div className="gridcontainer" style={gridcontainer}>
         <div className="grid-item"><img  src={Review} alt="" /></div>
           <div className="grid-item">                            <div className="review-box">
                           <img id="carasouelsection" className="cli-img" src={logo} alt="" />
                           <span className="review-info"></span>
                         <span > <button className="review-date">18 December 2018</button> </span>
                           <div className="review-rating">
                             
                               <span className="fa fa-star checked"></span>
                               <span className="fa fa-star checked"></span>
                               <span className="fa fa-star checked"></span>
                               <span className="fa fa-star"></span>
                               <span className="fa fa-star"></span>
                           </div>
                           <p className="review-text fs-5" style={{width:'500px'}}>Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                          
                         </div>
                       </div>
         </div>
       </div>
       <div>
       <div className="gridcontainer" style={gridcontainer}>
         <div className="grid-item"><img  src={Review} alt="" /></div>
           <div className="grid-item">                            <div className="review-box">
                           <img id="carasouelsection" className="cli-img" src={logo} alt="" />
                           <span className="review-info"></span>
                           <span > <button className="review-date">18 December 2018</button> </span>
                           <div className="review-rating">
                             
                               <span className="fa fa-star checked"></span>
                               <span className="fa fa-star checked"></span>
                               <span className="fa fa-star checked"></span>
                               <span className="fa fa-star"></span>
                               <span className="fa fa-star"></span>
                           </div>
                           <p className="review-text fs-5" style={{width:'500px'}}>Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                          
                         </div>
                       </div>
         </div>
       </div>
     </Slider>
   </div>
  </div>
      </>
    );
  }
}
