import React from 'react';
import './Card.css'
const bottombtn={
    width:'250px',
    backgroundColor:'rgba(255, 214, 0, 1)',
    textAlign:'center',
    padding:'10px',
    borderRadius:'20px',
    color:'black',
    fontSize:'18px',
    font:'Poppins',
    fontWeight:'400',
    lineHeight:'27px',
    marginBottom:'10px',
    
   
}

function Card() {
  return (
    <div>
      

      <div  id="carditemcontainer" style={{width:'100%'}} >
       <div className='container' id="cardcontent" >
               
       <div className="row">
          <div className="col-md-4" >
            <figure className="card card-product" style={{width:'250px',height:'400px'}}>
              <div className="img-wrap"><img src="https://s9.postimg.org/tupxkvfj3/image.jpg" /></div>
              <figcaption className="info-wrap">
                <h4 className="title">Another name of item</h4>
                <p className="desc">Some small description goes here</p>
               
              </figcaption>
            <div className="bottombtn" style={bottombtn}>Global Warehouse</div>
            </figure>
          </div> {/* col // */}
          <div className="col-md-4">
            <figure className="card card-product" style={{width:'250px',height:'400px'}}>
              <div className="img-wrap"><img src="https://s9.postimg.org/ojb106167/image.jpg" /> </div>
              <figcaption className="info-wrap">
                <h4 className="title">Good product</h4>
                <p className="desc">Some small description goes here</p>
              {/* rating-wrap.// */}
              </figcaption>
              <div className="bottombtn" style={bottombtn}>Global Warehouse</div>
               
            </figure>
          </div> {/* col // */}
          <div className="col-md-4">
            <figure className="card card-product" style={{width:'250px',height:'400px'}}>
              <div className="img-wrap"><img src="https://s9.postimg.org/4ooze1tof/image.jpg" /></div>
              <figcaption className="info-wrap">
                <h4 className="title">Product name goes here</h4>
                <p className="desc">Some small description goes here</p>
                
              </figcaption>
              <div className="bottombtn" style={bottombtn}>Global Warehouse</div>
            </figure>
          </div> {/* col // */}
        </div> {/* row.// */}
      </div>
       </div>


    </div>
  )
}

export default Card
