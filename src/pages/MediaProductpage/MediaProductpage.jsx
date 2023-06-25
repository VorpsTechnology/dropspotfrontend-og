import React from 'react'
import './MediaProductpage.css'
import shoppingcard from '../../assets/shopingcard.png' 
import share from '../../assets/share.png';
import heart from '../../assets/heart.png';
import rebort from '../../assets/rebort.png'

import avatar from '../../assets/avatar.png'
import MediaFooter from '../../components/MediaFooter/MediaFooter';


const listings={
    display: 'flex',
    listStyleType:'none',
    justifyContent:'space-between',
    
}
const inputtext={
  backgroundColor:'rgba(239, 239, 239, 1)',
  width:'180px',
  height:'32px',
  top:'223px',
  borderRadius:'27.51px',
  borderColor:'transparent',

}
const btn={
  color:'rgba(70, 70, 70, 1)',
  backgroundColor:'rgba(253, 227, 26, 1)',
  borderRadius:'18px',
  borderColor:'transparent',
  marginTop:'20px'

 
}
const heading={
  fontSize:'24px',
  lineHeight:'36px',
  fontWeight:'400',
  color:'rgba(129, 129, 129, 1)',
  fontStyle:'Poppins'
}
const inventerybtn={
  color:'rgba(70, 70, 70, 1)',
  backgroundColor:'rgba(180, 180, 180, 1)',
  borderRadius:'18px',
  borderColor:'transparent',
  marginTop:'20px',
  width:'100px' 
}
const displaybtn={
  color:'rgba(70, 70, 70, 1)',
  backgroundColor:'rgba(253, 227, 26, 1)',
  borderRadius:'18px',
  borderColor:'transparent',
  marginTop:'20px',
  width:'100px' 
}
const btnbuy={
  backgroundColor:'#FDE31A',padding:'7px',borderRadius:'20px',fontStyle:'Poppins',borderColor:'transparent',width:'100px',height:'40px',borderWidth:'0.5px'
}
const label={
  color:'rgb(0,0,0,1)',
  fontSize:'15px',
  fontWeight:'400',
  fontStyle:'Poppins'

}
const vickybtn={
  color:'rgba(70, 70, 70, 1)',
  backgroundColor:'rgba(253, 227, 26, 1)',
  borderRadius:'18px',
 
  width:'100px',
  borderWidth:'0.5px'
 
}
function MediaProductpage() {
  return (
    <>
   
    <div id="MediaProductlisting">
        <div>
        <div className="col-lg-10 border p-3 main-section bg-white" style={{width:''}}>
        <h5 align="center" style={heading}>Women ‘s Clothing / Tops & Sets / Women hods  </h5> 
          <div className="row m-0">
            <div className="col-lg-4 left-side-product-box pb-3">
            <div align="center" className='row'>
              <div className='col'><button  style={displaybtn}> Display</button></div>
             
              <div className='col'> <button style={inventerybtn}>Inventory</button> </div>
            </div>
            <div className="first">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="wishlist">
                          <i className="fa fa-heart-o" />
                        </span>{" "}
                        <span className="discount">Queue</span>{" "}
                      </div>
                    </div>
              <img src={shoppingcard }/>
              <span className="sub-img">
                <img src={shoppingcard } />
                <img src={shoppingcard } />
               
              </span>
            
               
              <div className="row ">
                <div className="col">
                  <div align="center"><img style={{width:'20px',height:'20px'}} src={share} alt="" /></div>
                   <div align="center"> <button  style={btn}>Share</button> </div>
                </div>
                
                <div className="col">
                <div align="center"><img style={{width:'20px',height:'20px'}} src={heart} alt="" /></div>
                 
                <div align="center"> <button  style={btn}>Wishlist</button></div></div>
                <div className="col">
                  <div align="center"><img style={{width:'20px',height:'20px'}} src={rebort} alt="" /></div>
                
                <div align="center"><button style={btn}>Report</button></div></div>
              </div>
          
            </div>
           

            <div className="col-lg-8">
              <div className="right-side-pro-detail border p-3 m-0">
                <div className="row">
                  <div className="col-lg-12 pt-2">
                  
                    <span style={{fontWeight:'400',fontSize:'22px',lineHeight:'40px',fontStyle:'Poppins',color:'rgba(0,0,0,1)'}}>Christmas Ornament Ball Outdoor Pvc 60CM Inflatable Decorated Ball PVC Giant Big Large Balls Xmas Tree Decorations Toy Ball</span>
                    <div className="col-lg-12" style={{marginTop:'20px',paddingBottom:'20px'}} >
                    <div className="colors" ><h6>Color</h6>
                        <div className="color" style={{backgroundColor: 'rgba(219, 30, 30, 1)'}} data-hex="#e1e851" />
                        <div className="color" style={{backgroundColor: 'rgba(255, 101, 166, 1)'}} data-hex="#8cd147" />
                        <div className="color" style={{backgroundColor: 'rgba(33, 33, 33, 1)'}} data-hex="#4a9ccf" />
                        <div className="color" style={{backgroundColor: 'rgba(16, 11, 255, 1)'}} data-hex="#661f45" />
                        
                    </div>
                  </div>
                    <hr className="m-0 pt-2 mt-2" />
                  </div>
                  <div className="row">
                    <div className="col"> 
                    <li style={{fontSize:'20px',lineHeight:'43.94px',fontWeight:'400',fontStyle:'Poppins',listStyle:'inherit'}}>Shipping Fee:</li>
                    <li style={{fontSize:'20px',lineHeight:'43.94px',fontWeight:'400',fontStyle:'Poppins',listStyle:'inherit'}}>Service Fee</li>
                    <li style={{fontSize:'20px',lineHeight:'43.94px',fontWeight:'400',fontStyle:'Poppins',listStyle:'inherit'}}>Quantity:<span><input type="number" className="form-control text-center " defaultValue={1} style={{width: '30px',height:'10px'}} /></span></li>
                    <li style={{fontSize:'20px',lineHeight:'43.94px',fontWeight:'400',fontStyle:'Poppins',listStyle:'inherit'}}>SKU:</li></div>
                    <div className="row">
                    <div className="row">
                  
                        <div className="w-100 d-none d-md-block"></div>

                       
                       
                      </div>
                      <div className="container" style={{width:'350px',paddingRight:'20px'}}>
                        <div className='row'>
                          <div className='col'><img style={{height:'100px',width:'100px'}} src={avatar} alt="" /></div>
                          <div className='col'></div>
                          </div>
                      <form action="">
                        <label htmlFor="" style={label} >Shipping from <span style={{marginLeft:'20px'}} ><input style={inputtext} type="text" /></span></label>
                        <label htmlFor="" style={label} >Inventory<span style={{marginLeft:'60px'}}><input  style={inputtext}type="text" /></span></label>
                        <label htmlFor="" style={label} >Plateform <span style={{marginLeft:'50px'}}><input style={inputtext} type="text" /></span></label>
                        <label htmlFor="" style={label} >Shipping to <span style={{marginLeft:'40px'}}><input style={inputtext} type="text" /></span></label>
                        <label htmlFor="" style={label} >Shipping Method <span style={{marginLeft:'10px'}}><input style={inputtext} type="text" /></span></label>
                        <label htmlFor="" style={label} >Estimated Delivery Time : kmlkm</label>
                        <label htmlFor="" style={label} >Tracking Information :kjknkn</label>
                      </form>
                      </div>

                      </div>
                  </div>
               
                  
                  <div className="col-lg-12">
                    <button style={{backgroundColor:'#000000',borderRadius:'30px',color:'white',width:'250px',height:'50px'}}>Product Price:$5.42-8.39</button>
                    <div className="col-lg-12 mt-3">
                      <div className="col-lg-12" style={listings} >
                        <button style={btnbuy}>Buy Now</button>
                        <button style={btnbuy}>Connect</button>
                        <button style={btnbuy}>List</button>
                        <button style={btnbuy}>Queue</button>
                        <button style={btnbuy}>Add to sku</button>
                      </div>
                    </div>
                  </div>
                
                  
                </div>
              
              </div>
              
            </div>

            {/*<div className="row mt-3 p-0 text-center pro-box-section">
              <div className="col-lg-3 pb-2">
                <div className="pro-box border p-0 m-0">
                  <img src="http://nicesnippets.com/demo/pd-b-image1.jpg" />
                </div>
              </div>
              <div className="col-lg-3 pb-2">
                <div className="pro-box border p-0 m-0">
                  <img src="http://nicesnippets.com/demo/pd-b-images2.jpg" />
                </div>
              </div>
              <div className="col-lg-3 pb-2">
                <div className="pro-box border p-0 m-0">
                  <img src="http://nicesnippets.com/demo/pd-b-images3.jpg" />
                </div>
              </div>
              <div className="col-lg-3 pb-2">
                <div className="pro-box border p-0 m-0">
                  <img src="http://nicesnippets.com/demo/pd-b-images4.jpg" />
                </div>
              </div>
  </div>*/}
          </div>
        </div>
      </div>
      
    </div>
   <br />
   <br />
   <br />
   <br />
   <br />
   <MediaFooter />
    </>
  )
}

export default MediaProductpage
