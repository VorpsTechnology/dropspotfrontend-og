import React from 'react'
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import './MediaNavabarbutton.css'
import media from '../../assets/media.png'
const responsive = {


  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    zIndex:100,
    arrows: false,
  }
};
function MediaNavabarbutton() {
  return (
    <div id="MediaSection">
      <div className='container-fluid'>
      <Carousel align="center" responsive={responsive} arrows={false}>
        <div><img src={media} alt="" /></div>
        <div><img src={media} alt="" /></div>
        <div><img src={media} alt="" /></div>
        <div><img src={media} alt="" /></div>
      </Carousel>     
     </div>
    </div>
  )
}

export default MediaNavabarbutton
