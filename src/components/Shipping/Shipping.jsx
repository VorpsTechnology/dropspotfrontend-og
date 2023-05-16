import React from 'react';
import shipping from '../../assets/shipping.png';
import track from '../../assets/track.png'
import './Shipping.css'
const container={
    position: 'relative',
    fontFamily: 'Poppins',
    paddingTop:'100px' 
}
const textBlock={
    position: 'absolute',
    bottom: '250px',
    right: '200px',
    backgroundColor:'transparent',
    color:'black',
    paddingLeft:'20px',
    paddingRight: '20px',
}
 const textBlock_second={
    position: 'absolute',
    bottom: '180px',
    right: '250px',
    backgroundColor: 'transparent',
    color:'black',
    paddingLeft: '20px',
    paddingRight: '20px',
   
   
 }
 const buttondiv={
  width:'300px',
  fontSize: '15px',
  fontWeight: '800',
  lineHeight: '27px',
  letterSpacing: '0em',
  textAlign: 'left',
    background: 'rgba(231, 231, 231, 1)',
    borderRadius: '20px',
    outlineColor:'rgb(255, 214, 0);',
    height:'40px',
    paddingLeft: '20px',
    border: '0.5px solid rgba(0, 0, 0, 0.25)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
    color:'rgba(159, 159, 159, 1)',

 }
 const buttoncss={
    position: 'absolute',
    top: '0',
    borderBottomRightRadius:'10px',
   borderTopRightRadius:'10px',
    right: '5px',
    zIndex: '1',
    border: 'none',
    top: '1.5px',
    height: '50px',
    cursor: 'pointer',
    color: 'black',
    backgroundColor: '#FFD600',
    transform: 'translateX(2px)',
   
    fontSize: '15px',
    lineHeight: '27px',
    width: '160px',
    borderTopLeftRadius: '15px',
     borderBottomLeftRadius: '15px',
      fontweight: '800',
    
    border: '0.5px solid rgba(0, 0, 0, 0.25)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
  
 }

function Shipping() {
  return (
    <div id="shippingcontainer">
    <div  className="container-fluid" style={container}>
        <img    src={shipping} alt="Nature" style={{width: '100%'}} />
        <div   className="text-block" style={textBlock}>
          <h3 data-aos="fade-left" data-aos-duration="3000" style={{paddingBottom:'20px'}}>You sell-We source and ship for you!</h3>
          <h5 data-aos-duration="3000" style={{paddingBottom:'20px'}}>We will source for you with lower price and higher quality.</h5>
          <div className="buttonIn"> 
            <input id="divbutton" type="text" placeholder="please enter the tracking number" />
            <span><button className='buttoncss' style={buttoncss}>Track Pakage</button></span>
          </div>
        </div>
        <div className="input-group" style={{display:'flex'}}>
        <div className="text-block-2" style={textBlock_second}>
          <button style={buttondiv} >Shipping Cost And Time</button>
         
          <span style={{marginLeft:'2px'}} ><img src={track} style={{width:'auto',  border: '0.5px solid rgba(0, 0, 0, 0.25)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',height:'auto',padding:'10px',backgroundColor:'rgba(255, 214, 0, 1)',borderRadius:'25px',borderColor:'transparent',}} /></span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Shipping
