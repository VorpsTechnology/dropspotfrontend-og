import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Shopnavbar from '../../components/ShopNavbar/Shopnavbar'

import share from '../../assets/share.png';
import heart from '../../assets/heart.png'
import rebort from '../../assets/rebort.png'
import './ProductPage.css'
import swal from 'sweetalert'
import '../../components/Footer/Footer'

import { getProduct } from '../../Api/ProductRequest'
import Footer from '../../components/Footer/Footer'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import Tab from 'react-bootstrap/Tab';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import { useHistory } from "react-router-dom";



import Trending from '../../components/Trending/Trending'

const listings={
    display: 'flex',
    listStyleType:'none',
   justifyContent:'space-evenly'
    
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
  marginTop:'20px',
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)", 
  padding:'5px',
  width:'80px',

 
}
const selectbox={
  backgroundColor:'rgba(239, 239, 239, 1)',
  width:'180px',
  height:'32px',
  top:'223px',
  borderRadius:'27.51px',
  borderColor:'transparent', 
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
  backgroundColor:'white',
  borderRadius:'18px',
  borderColor:'rgba(253, 227, 26, 1)',
  marginTop:'20px',
  width:'130px',
  height:'45px' ,
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)", 
}
const displaybtn={
  color:'rgba(70, 70, 70, 1)',
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
  backgroundColor:'rgba(253, 227, 26, 1)',
  borderRadius:'18px',
  borderColor:'transparent',
  marginTop:'20px',
  width:'130px',
  height:'45px' 
}
const btnbuy={
  backgroundColor:'#FDE31A',
  padding:'5px',
  borderRadius:'20px',
  borderColor:'transparent'
  ,width:'130px',
  margin:'10px',
 
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)", 
}
const label={
  color:'rgb(0,0,0,1)',
  fontSize:'15px',
  fontWeight:'400',
  fontStyle:'Poppins'

}







function ProductPage() {


  const [seller,setSeller]=useState(true)
useEffect(()=>{
  const accountType=localStorage.getItem("accountType")
  if(accountType!=="Seller"){
    setSeller(false)
  }
},[])



  const history = useHistory();
  const Checkout= () => {
      history.push("/Checkout");
  } 

  const value = 3.5;
  const [post ,setPost]=useState({})
  const params =useParams()

  const [quantity,setQuantity]=useState(1)
  // useEffect(async()=>{
  //     const {data}=await getProduct(params.id)
 
  //     setPost(data)
  // })
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const {data}=await getProduct(params.id)
 
      setPost(data)
      // ...
    }
    fetchData();
  }, []); 
  // Or [] if effect doesn't need props or state
  const [open, setOpen] = React.useState(false);
  const [preview,setPreview]=useState("")


  useEffect(()=>{
        setPreview(post.image1)
  },[post])
  console.log(preview);
const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};
const subbtn={
  backgroundColor:'rgba(253, 227, 26, 1)',fontWeight:'800',padding:'5px',color:'black',width:'200px',borderColor:'transparent', boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",marginLeft:'20px',borderRadius:'5px'
}
const subbtnlist={
  backgroundColor:'rgba(253, 227, 26, 1)',fontWeight:'800',padding:'5px',color:'black',width:'100px',borderColor:'transparent', boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",marginLeft:'20px',borderRadius:'5px'
}
  return (
    <>
    <Navbar />
  
    <Shopnavbar />
    <div>
      
      <div className="container-fluid" style={{marginBottom:'50px'}}>
        <div className="col-lg-11 p-3 main-section shadow-lg mt-n9" id="carasouelsection">
        <h5 style={heading}>Women ‘s Clothing / Tops & Sets / {post.name}  </h5> 
          <div className="row m-0">

           
            <div className="col-lg-4 left-side-product-box pb-3">
            
              <img src={preview ?"http://localhost:5007/images/"+ preview:""} style={{marginTop:"20px"}}/>
              <span className="sub-img">
              <img src={post.image2?"http://localhost:5007/images/"+ post.image1:""} style={{width:"3rem",height:"3rem"}}  onClick={()=>{
                setPreview(post.image1)
              }}/>
                <img src={post.image2?"http://localhost:5007/images/"+post.image2:""} style={{width:"3rem",height:"3rem"}}  onClick={()=>{
                setPreview(post.image2)
              }}/>
                <img src={post.image3?"http://localhost:5007/images/"+post.image3:"" } style={{width:"3rem",height:"3rem"}}  onClick={()=>{
                setPreview(post.image3)
              }}/>
               
              </span>
              <div className="row ">
                <div className="col">
                  <div align="center"><img style={{width:'20px',height:'20px'}} src={share} alt="" /></div>
                   <div align="center"> <button onClick={()=>{
                   navigator.clipboard.writeText(window.location.toString())
                   console.log("haiii")
                   }}  style={btn}>Share</button> </div>
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
              <div className="right-side-pro-detail border p-3 m-0 shadow-lg mt-n9" id="carasouelsection">
                <div className="row">
                  <div className="col-lg-12 pt-2">
                  
                    <span style={{fontWeight:'800',fontSize:'22px',lineHeight:'40px',fontStyle:'Poppins',color:'rgba(0,0,0,1)'}}> <h2>{post.desc}</h2> </span>
                    <div className="col-lg-12" style={{marginTop:'20px',paddingBottom:'20px'}} >
                    <div className="colors"  ><h4>Color</h4>
                    
                        <div className="color" style={{height:'25px',width:'25px',backgroundColor: 'rgba(219, 30, 30, 1)',marginLeft:'20px',marginTop:'5px'}} data-hex="#e1e851" />
                        <div className="color" style={{height:'25px',width:'25px',backgroundColor: 'rgba(255, 101, 166, 1)',marginLeft:'10px',marginTop:'5px'}} data-hex="#8cd147" />
                        <div className="color" style={{height:'25px',width:'25px',backgroundColor: 'rgba(33, 33, 33, 1)',marginLeft:'10px',marginTop:'5px'}} data-hex="#4a9ccf" />
                        <div className="color" style={{height:'25px',width:'25px',backgroundColor: 'rgba(16, 11, 255, 1)',marginLeft:'10px',marginTop:'5px'}} data-hex="#661f45" />
                        
                    </div>
                    <br />
                    <br />
                  </div>
                    <hr className="m-0 pt-2 mt-2" />
                  </div>
                  <div className="row">
                    <div className="col" style={{marginLeft:'20px'}}> 
                    <li style={{fontSize:'20px',lineHeight:'43.94px',fontWeight:'400',fontStyle:'Poppins',listStyle:'inherit',listStyleType:'none'}}> <h5>Shipping Fee:</h5> </li>
                    <br />
                    <li style={{fontSize:'20px',lineHeight:'43.94px',fontWeight:'400',fontStyle:'Poppins',listStyle:'inherit',listStyleType:'none'}}> <h5> Service Fee</h5></li>
                    <br />
                 
                   
                    <li style={{fontSize:'20px',lineHeight:'43.94px',fontWeight:'400',fontStyle:'Poppins',listStyle:'inherit',listStyleType:'none'}}> <h5>SKU:</h5>
                     </li>
                     <br />
                     <div style={{display:'flex'}}>
                  <div><h5>Quantity</h5></div>
                   <div>
                   <div className='wrapper'>
                        <span className='minus' style={{cursor:"pointer"}} onClick={()=>{
                       if(quantity >=2){
                        const newQua=quantity-1
                        setQuantity(newQua)
                       }else {
                          setQuantity(1)
                       }
                        }}>-</span>
                        <span className='num'>{quantity}</span>
                        <span className='plus' style={{cursor:"pointer"}} onClick={()=>{
                       
                          const newQua=quantity+1
                          setQuantity(newQua)
                        
                        }} >+</span>
                    </div>
                   </div>
                  </div>
                     <button style={{backgroundColor:'#FDE31A',fontSize:'15px',borderRadius:'10px',color:'black',width:'220px',height:'50px',borderColor:'transparent',marginTop:'30px', boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)" }}> <b>Product Price :</b>   ₹{post.price}</button>
                    </div>
                      
                    <div className="col">
                    <div align="center" className="row" style={{marginnBottom:'10px'}} >
                    <div className="container" style={{width:'350px',paddingRight:'20px'}}>
                        <br />
                      <form action="">
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <div style={{justifyContent:'left'}}><label style={label} htmlFor=""><h5>Shipping To</h5> </label></div>
                          <div style={{justifyContent:'right'}}><select  style={selectbox} name="" id="">
                            <option  value="">value</option>
                            <option value=""></option>
                            <option value=""></option>
                          </select></div>
                         </div>
                         <br />
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <div style={{justifyContent:'left'}}><label style={label} htmlFor=""> <h5>Seller</h5></label></div>
                          <div  style={{justifyContent:'right'}}><input style={inputtext} value={post.sellerName} type="text" /></div>
                        </div>
                        <br />
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                        <div style={{justifyContent:'left'}}>  <label style={label} htmlFor=""><h5>Estimated Delivery Time</h5></label></div>
                        <div  style={{justifyContent:'right'}}>text</div>
                        </div>
                        <br />
                        
                      </form>
                      </div>

                    <div>
                    
                    </div>
                    <br />
                 
                </div>
                
       

                      </div>
                  </div>
               
                  
                  <div className="col-lg-12">
                  
                    <div className="col-lg-12 mt-3" style={{margin:'10px'}}>
                      <div className="col-lg-20" style={listings} >
                        <button style={btnbuy} onClick={()=>{
                          history.push(`/checkout/${post._id}/${quantity}`)
                        }} >Buy Now</button>
               {
                seller?<></>:  <>
                   <button style={btnbuy} onClick={Checkout} >Connect</button>
                <button style={btnbuy} onClick={handleClickOpen}>List</button>
               </>    }
                        <Dialog   open={open} 
                              sx={{
                                "& .MuiDialog-container": {
                                  "& .MuiPaper-root": {
                                    width: "100%",
                                    maxWidth: "1500px",  // Set your width here
                                  },
                                },
                              }}
                             onClose={handleClose}>
        <DialogTitle></DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
            <div className="container-fluid" >
              
              <div className="flexcontinaer" style={{width:'300px'}}>
                <div className="flexleft" style={{marginTop:'10px'}}>
                <h5>Store</h5>
                </div>
                <div style={{marginLeft:'20px'}} className="flexright">
                <select className="Selectbox" name="" id="">
                    <option value=""></option>
                     <option value=""></option>
                      <option value=""></option>
                    </select>
                </div>
              </div>
            </div>
           
            <div align="center" className="row" style={{width:'1000px',marginTop:'20px'}} >
              <div className="col-2"><button className="bulkbtn">Bulk Revise</button></div>
              <div className="col-2"> <input className="inputflied" type="text" /> </div>
              <div className="col-2"><button className="bulkbtnprice">Price Change</button></div>
              
            
              
            </div>
            <div align="middle" className="row" style={{backgroundColor:'rgba(255, 214, 0, 1)',marginTop:'40px',padding:'10px',borderRadius:'20px'}}>
              <div className="col"><input style={{width:'20px',height:'20px'}} type="checkbox" /></div>
              <div className="col"><button className="buttonbox">Image</button></div>
              <div className="col"><button className="buttonbox">Sku</button></div>
              <div className="col"><button className="buttonbox"> Catogory</button></div>

              <div className="col"><button className="buttonbox">MRP</button></div>
              <div className="col-md-auto"><button className="buttonbox">Shipping Fee</button></div>
              <div className="col-2"><button className="buttonbox">Service fee</button></div>
              <div className="col-md-auto"><button className="buttonbox" >Total Dropshipping Cost</button></div>
              <div className="col"><button className="buttonbox">Price</button></div>
            </div>
          
             
         
        </DialogContent>
        <DialogActions >
          <div align="center" style={{marginRight:'40%',display:'flex',marginBottom:'10px'}}>
          <div ><button style={{backgroundColor:'black',padding:'5px',color:'white',width:'100px',borderColor:'transparent', boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'5px' }} onClick={handleClose}>Cancel</button></div>
          <div ><button style={subbtnlist} onClick={handleClose}>List Now</button></div>
          
          </div>

       
         
        </DialogActions>
      </Dialog>
                        
                        <button style={btnbuy}
                          onClick={
                            ()=>{
                              swal({
                                text: 'Enter quantity".',
                                content: "input",
                                button: {
                                  text: "Submit!",
                                  closeModal: false,
                                },
                              })
                              .then(name => {
                                if (!name) throw null;
                               
                                return fetch(`https://itunes.apple.com/search?term=${name}&entity=movie`);
                              })
                              .then(results => {
                                return results.json();
                              })
                              .then(json => {
                                const movie = json.results[0];
                               
                                if (!movie) {
                                  return swal("No movie was found!");
                                }
                               
                                const name = movie.trackName;
                                const imageURL = movie.artworkUrl100;
                               
                                swal({
                                  title: "Top result:",
                                  text: name,
                                  icon: imageURL,
                                });
                              })
                              .catch(err => {
                                if (err) {
                                  swal("Oh noes!", "The AJAX request failed!", "error");
                                } else {
                                  swal.stopLoading();
                                  swal.close();
                                }
                              });
                            }
                      
                                       }
                        
                        >Add to cart</button>
                      </div>
                    </div>
                  </div>
                 
                
                  
                </div>
              
              </div>
              
            </div>

 
          </div>
        </div>
      </div>

    </div>
    <br />
    <div className='conatiner shadow-lg' id="carasouelsection" style={{marginTop:'40px'}}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row align="center" style={{margin:'40px 40px 40px 40px',padding:'40px 40px 40px 40px'}}>
            <Col sm={3}>
              <Nav   className="flex-column">
                <Nav.Item style={{backgroundColor:'#FDE31A'}}>
                  <Nav.Link eventKey="first" style={{color:'black',fontSize:'15px',fontWeight:'800'}}>Description</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" style={{color:'black',fontSize:'15px',fontWeight:'800'}}>Additional information</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
               {post.desc}
                </Tab.Pane>
                <Tab.Pane eventKey="second">
            
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
    </div>
  
    <div className='container-fluid' style={{marginTop:'50px'}}>
      <div className='recomdproduct'><h2>Recomanded Products</h2></div>
      <br />
      <Trending />
      <br />
      <br />
    </div>
    <Footer />


    </>
  )
}

export default ProductPage
