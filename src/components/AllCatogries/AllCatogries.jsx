import React from "react";
import './AllCatogries.css'



import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import purse from '../../assets/purse.png'
import ring from '../../assets/ring.png'
import tablet from '../../assets/tablet.png'
import dress from '../../assets/dress.png'
import sticks from '../../assets/sticks.png'
import hat from '../../assets/hat.png'
import home from '../../assets/home.png'
import bike from '../../assets/bike.png'
import toy from '../../assets/toy.png'
import shirt from '../../assets/shirt.png'
import circuit from '../../assets/circuit.png'

const AllCatogries = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef();
  const slider2 = useRef();
  
  const catogrybtn={
    backgroundColor:'white',
    fontWeight:'400',
    fontSize:'15.15px',
    lineHeight:'19.33px',
   color:'rgba(0,0,1)',
    height:'45px',
    borderColor:'transparent',
    borderRadius:'20px',
    width:'200px',
    boxShadow:'2px 3px 5px dimgrey',
    border:'1',
    margin:'2px',
    marginTop:'20px'
  }

 

  const Allcat={
    fontWeight:'500',
    fontsize:'12.88px',
    lineHeight:'19.33px',
    color:'rgba(0,0,0,1)',
    paddingTop:'40px',
    paddingBottom:'20px',
    fontStyle:'Poppins'


}
const header={
  justifyContent:'center',

}

  // i dont seem to need this
  //useEffect(() => {
  //    setNav1(sliderEl1);
  //    setNav2(sliderEl2);
  //  }, []);

  return (

   
    <>
    <div style={header}>
    <h3 align='center' style={Allcat} >All Catogries</h3>
    </div>
 
    <div style={{textAlign:'center'}}>
 
      <Slider
        asNavFor={nav1}
        ref={slider2 => setNav2(slider2)}
        slidesToShow={6}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        <div>
        <button  className="catogrybtns" style={catogrybtn}>Computer & Office</button>

        </div>
        <div>
        <button className="catogrybtns"  style={catogrybtn} > 
          <div className="flexContainer" style={{display:'flex'}}>
            <div className="flexutemleft" style={{marginLeft:'10px'}}><img src={purse} alt="" /></div>
            <div className="flexutemright" style={{marginLeft:'40px'}}>Bags and shoes</div>
          </div>
         </button>
        </div>
        <div>
        <button  className="catogrybtns"  style={catogrybtn} > 
          <div className="flexContainer" style={{display:'flex'}}>
            <div className="flexutemleft"  style={{marginLeft:'10px'}}><img src={ring} alt="" /></div>
            <div  className="flexutemright" style={{marginLeft:'10px'}}>Jewelory & Watches</div>
          </div>
         </button>
        </div>
        <div>
        <button  className="catogrybtns"  style={catogrybtn} > 
          <div className="flexContainer" style={{display:'flex'}}>
            <div className="flexutemleft" style={{marginLeft:'10px'}}><img src={tablet} alt="" /></div>
            <div className="flexutemright" style={{marginLeft:'10px'}}>Hair,Beauty & Hair</div>
          </div>
         </button>

        </div>
        <div>
        <button  className="catogrybtns"  style={catogrybtn} > 
          <div className="flexContainer" style={{display:'flex'}}>
            <div className="flexutemleft" style={{marginLeft:'10px'}}><img src={dress} alt="" /></div>
            <div className="flexutemright" style={{marginLeft:'10px'}}>Women's Clothing</div>
          </div>
         </button>
        </div>
        <div>
        <button   className="catogrybtns" style={catogrybtn} > 
          <div className="flexContainer" style={{display:'flex'}}>
            <div className="flexutemleft" style={{marginLeft:'10px'}}><img src={home} alt="" /></div>
            <div className="flexutemright" style={{marginLeft:'1px'}}> Home,Garden & Furtinure</div>
          </div>
         </button>
      
        </div>
        <div>
        <button   className="catogrybtns" style={catogrybtn} > 
          <div className="flexContainer" style={{display:'flex'}}>
            <div className="flexutemleft" style={{marginLeft:'10px'}}><img src={hat} alt="" /></div>
            <div className="flexutemright" style={{marginLeft:'1px'}}>Phone and Accessories</div>
          </div>
         </button>
        

        </div>
        <div>
        
        </div>
        <div>
        <button  className="catogrybtns"  style={catogrybtn} > 
          <div className="flexContainer" style={{display:'flex'}}>
            <div className="flexutemleft" style={{marginLeft:'10px'}}><img  src={sticks}alt="" /></div>
            <div className="flexutemright" style={{marginLeft:'10px'}}>Sports & Outdoors</div>
          </div>
         </button>
         </div>
      
        <div>
        <button  className="catogrybtns"  style={catogrybtn} > 
          <div className="flexContainer" style={{display:'flex'}}>
            <div className="flexutemleft" style={{marginLeft:'10px'}}><img  src={bike} alt="" /></div>
            <div className="flexutemright" style={{marginLeft:'4px'}}>Automobiles & Motorcycle</div>
          </div>
         </button>

        </div>
        <div>
        <button  className="catogrybtns"  style={catogrybtn} > 
          <div className="flexContainer" style={{display:'flex'}}>
            <div className="flexutemleft" style={{marginLeft:'10px'}}><img  src={tablet} alt="" /></div>
            <div className="flexutemright" style={{marginLeft:'10px'}}>Health,Beauty & Hair</div>
          </div>
         </button>


        </div>
        <div>
        <button  className="catogrybtns"  style={catogrybtn} > 
          <div className="flexContainer" style={{display:'flex'}}>
            <div className="flexutemleft" style={{marginLeft:'10px'}}><img  src={toy} alt="" /></div>
            <div className="flexutemright" style={{marginLeft:'30px'}}>Toys, Kids & Babies</div>
          </div>
         </button>

        </div>
        <div>
        <button  className="catogrybtns"  style={catogrybtn} > 
          <div className="flexContainer" style={{display:'flex'}}>
            <div className="flexutemleft" style={{marginLeft:'10px'}}><img  src={shirt} alt="" /></div>
            <div className="flexutemright" style={{marginLeft:'30px'}}> Men's Clothing</div>
          </div>
         </button>

        </div>
        <div>
        <button  className="catogrybtns"  style={catogrybtn} > 
          <div className="flexContainer" style={{display:'flex'}}>
            <div className="flexutemleft" style={{marginLeft:'10px'}}><img  src={circuit} alt="" /></div>
            <div className="flexutemright" style={{marginLeft:'10px'}}> Consumer Electronics</div>
          </div>
         </button>
       
        </div>
      </Slider>
      </div>
      </>

  );
};

export default AllCatogries;
