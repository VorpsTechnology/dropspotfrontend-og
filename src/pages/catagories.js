import React from 'react'
import '../components/Cards/Card.css'
const bottombtn={
    width:'230px',
    backgroundColor:'yellow',
    textAlign:'center',
    padding:'10px',
    borderRadius:'20px',
    color:'black',
    fontSize:'18px',
    fontFamily:'Poppins',
    fontWeight:'400',
    lineHeight:'27px'
}

function catagories() {
  return (
    <div>
          <div>
      

      <div className="container">

       
        <div className="row">
          <div className="col-md-4">
            <figure className="card card-product">
              <div className="img-wrap"><img src="https://s9.postimg.org/tupxkvfj3/image.jpg" alt='' /></div>
              <figcaption className="info-wrap">
                <h4 className="title">Another name of item</h4>
                <p className="desc">Some small description goes here</p>
               
              </figcaption>
            <div className="bottombtn" style={bottombtn}>Global Warehouse</div>
            </figure>
          </div> {/* col // */}
          <div className="col-md-4">
            <figure className="card card-product">
              <div className="img-wrap"><img src="https://s9.postimg.org/ojb106167/image.jpg" alt='' /> </div>
              <figcaption className="info-wrap">
                <h4 className="title">Good product</h4>
                <p className="desc">Some small description goes here</p>
              {/* rating-wrap.// */}
              </figcaption>
              <div className="bottombtn" style={bottombtn}>Global Warehouse</div>
               
            </figure>
          </div> {/* col // */}
          <div className="col-md-4">
            <figure className="card card-product">
              <div className="img-wrap"><img src="https://s9.postimg.org/4ooze1tof/image.jpg" alt='' /></div>
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

export default catagories

