import React, { useState } from 'react';

import service from '../../assets/service.png'
// import './Shopnavbar'
import logo from '../../assets/logo.png'
import sorce from '../../assets/sorce.png'
import Navbar from '../../components/Navbar'
import Shopnavbar from '../../components/ShopNavbar/Shopnavbar'
import Trending from '../../components/Trending/Trending'
import downarrow from '../../assets/downarrow.png'
import Footer from '../../components/Footer/Footer'
import './ProductListing.css'
import { useHistory } from "react-router-dom";
import shopingcard from "../../assets/shopingcard.png";
import { useLocation } from "react-router-dom";
import connection from "../../assets/connection.png";
import list from "../../assets/list.png";
import { useEffect } from "react";
import swal from "sweetalert";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { getAllProducts } from "../../Api/ProductRequest.js";
import { addToWishlist, getWishlist } from "../../Api/WishlistRoute";


function ProductListing() {

  const list_second = {
    color: "rgba(165, 165, 165, 1)",
    fontstyle: "Poppins",
    fontWeight: "500",
    fontSize: "13.82px",
    lineHeigt: "22.23px",
    paddingLeft: "13px",
    fontFamily: "poppins",
    backgroundColor:'transparent',
    borderColor:'transparent',
    float:'left',
    paddingBottom:'10px'
  
   
  
  };
  
  const subbtn={
    backgroundColor:'rgba(253, 227, 26, 1)',fontWeight:'800',padding:'5px',color:'black',width:'200px',borderColor:'transparent', boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",marginLeft:'20px',borderRadius:'5px'
  }
  const subbtnlist={
    backgroundColor:'rgba(253, 227, 26, 1)',fontWeight:'800',padding:'5px',color:'black',width:'100px',borderColor:'transparent', boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",marginLeft:'20px',borderRadius:'5px'
  }
  
  const carddesign = {
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.3)",
   height:'350px',
   boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)" ,
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
   
  };
  

    const history = useHistory();
    const [products,setProduct]=useState([])
         

  const [search,setSearch]=useState("");
  const [filteredProducts,setFilteredProducts]=useState([]);
    // const [searchd,setSearchd]=useState("");
    // const [filteredProducts,setFilteredUsers]=useState([]);
    const [page,setPage]=useState(1)
    const Productpage = () => {
        history.push(`/ProductPage/${products._id}`)
    } 
  console.log(page);
    const userData =localStorage.getItem("userId")
   const userInfo =localStorage.getItem("userInfo")
    // useEffect(async()=>{
    //   const fetchProducts=async()=>{
    //     const {data}=await getAllProducts()
    //     setProduct(data)
        
    //   }
    //   fetchProducts()
    // },[])
  
    useEffect(() => {
      async function fetchData() {
        // You can await here
        const {data}=await getAllProducts(page)
        setProduct(data)
        setFilteredProducts(data)
        // ...
      }
      fetchData();
    }, []); // Or [] if effect doesn't need props or state
  
    useEffect(()=>{
      const result=products.filter((products)=>{
          if(products.name){
            return products.name.toLowerCase().match(search.toLowerCase());
          
          }else{
            return []
          }
        
       
      })
      setFilteredProducts(result)
    },[search])
    const wishlist=async(data)=>{
     if(userData && userInfo){
      const ata={
        productId:data._id,
        userId:userData,
        quantity:1,
        name:data.name,
        image:data.image0,
        date:Date.now(),
        price:data.price
      }
      console.log("ata",ata);
      const tata= await addToWishlist(ata)
      if(tata){
       swal("Added to wishlist")
       
      }
     }else{
      swal("Login first")
      history.push('/signin')
     }
     
       
    }

    const [seller,setSeller]=useState(true)
    const accountType=localStorage.getItem("accountType")
    if(accountType!=="Seller"){
      setSeller(false)
    }

  
  // useEffect(() => {
  //   async function fetchData() {
  //     // You can await here
  //     const beta={userId:userData}
  //     const {data}=await getWishlist(beta)
  //     setUsers(data)
  //     setFilteredUsers(data.Wishlist.products)
  //     console.log(userData);
  //     console.log(data.Wishlist.products);
  //     // ...
  //   }
  //   fetchData();
  // }, []);
  const [toggle,setToggle]=useState(false)
  const handleToggle=()=>{
    setToggle(!toggle)
  }
  
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
console.log("products",products);
console.log("filtered",filteredProducts);
console.log("search",search);
  return (
    <div>
      <Navbar />
      <br />
      {/* <Shopnavbar /> */}
      <div className="navbarContainer">
    <ul>
      <li className='listitemone'><img style={{height:'60px'}} src={logo} alt="" /></li>
      <li style={{listStyle:'none',paddingTop:'12px'}}>  
        <div className="input-group">
          <div className="form-outline" style={{display:'flex',height:'10px',listStyle:'none'}}>
          <form action="">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for products" 
                         value={search}
                         name='name'
                         onChange={
                             (e)=>
                                setSearch(e.target.value)
                             
                         }
                        
                        
                        style={{width:'500px',borderRadius:'20px',outlineColor:'transparent'}} />
                        <div className="input-group-append">
                            <span >
                            <button style={{width:'70px',backgroundColor:'white',borderRadius:'20px',borderColor:'transparent',margin:'5px'}}><i className="fa fa-search" aria-hidden="true"></i></button>
                            </span>
                        </div>
                    </div>
          </form>
          
          </div>
        </div>
      </li>
      <li className='listitem'> <span><i data-count="3" className="fa fa-shopping-cart " /></span><a onClick={()=>{
        history.push("/SellerCart")
      }}><span classname="glyphicon glyphicon-shopping-cart"> Cart<span classname="badge" /></span></a>
      </li>
      
        {/* <li className='listitem' > Source more<span classname="badge" />
        </li> */}

      <li className='listitem'><span><img src={service}  style={{width:'auto',height:'auto',borderRadius:'20px',borderColor:'transparent'}} /></span><div className="dropdown">
          <button className="dropbtn">Tools</button>
          <div className="dropdown-content">
            <a href="#">Shipping Calculator</a>
            <a href="#">Track Order</a>
           
          </div>
          <span><i className='fas fa-chevron-circle-down'></i></span>
        </div>
        
        </li>
      
    </ul>
  </div>
   <br />
      
      <div className="container" style={{  border: "0.5px solid rgba(0, 0, 0, 0.25)",boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',borderRadius:'27px'}}>
        <div className="container" style={{margin:'20px',}}>
        <div className="row" style={{margin:'20px'}}>
                <div className="col-2"><h4>You are in:</h4></div>

                <div className="col"><select className="buttonstyle"  name="" id="">
                  <option value=""><h4>All Catogries</h4></option>
                  <option value=""></option>
                  </select>

                  </div>
               
            </div>
            <div className="row" style={{margin:'20px'}}>
                <div className="col-2"><h4>Filter by:</h4></div>

                <div className="col"><select className="buttonstyle"  name="" id="">
                  <option value="">All Warehouses</option>
                  <option value=""></option>
                  </select>

                  </div>
                <div className="col"><button className="buttonstylePrice">Price : <input style={{width:'70px',borderColor:'transparent',borderRadius:"20px",outline:'transparent'}} placeholder='Min' type="number" name="" id="" /> - <input style={{width:'70px',borderColor:'transparent',borderRadius:"20px",outline:'transparent',outline:'transparent'}} placeholder='Max' type="number" name="" id="" /> </button></div>
                <div className="col"><select className="buttonstyle"  name="" id="">
                  <option value="">Conferm</option>
                  <option value=""></option>
                  </select>

                  </div>
            </div>
            <div className="row" style={{margin:'20px'}}>
                <div className="col-2"><h4>Sort by:</h4></div>
                <div className="col"><button className="buttonstyle">Best Match</button></div>
                <div className="col"><input placeholder='list' className='inputfieldtext'  type="number" /></div>
                <div className="col"><input   className='inputfieldtext'   style={{color:'black'}} placeholder='price' type="number" /></div>
                
                
                <div className="col"><button className="buttonstyle">Newest</button></div>
            </div>
        </div>
      </div>
      <br />
      <br />
      <div className="col-md-14" style={{marginLeft:'40px',marginRight:'40px'}}>
    <div className="row">
          {filteredProducts &&
           filteredProducts.length > 0 &&
           filteredProducts.map((ele) => (
              <div className="col"  style={{marginTop:"20px"}}   >
                <div align="center"       
                  
                     onClick={() => {
                      history.push(`/ProductPage/${ele._id}`)
                  } } className="card" id="carasouelsection" style={{padding:'10px',width:'220px'}}>
                  <div className="image" style={{width:'100%'}}>
                    
                    <img
                     src={ele.image1?"https://server.dropspot.in/images/"+ele.image1:"" }
                     style={{cursor:"pointer",width:"100%",height:"200px",borderRadius:'10px' }}
                     onClick={() => {
                      history.push(`/ProductPage/${ele._id}`)
                  } }
                     />
                  </div>
                  <div className="product-detail-container">
                    <div className="d-flex">
                      <h4 align="left" className="dress-name" >
                        {ele.name}
                      </h4>
                    </div>
                   
                    
                    <div className="row">
                      <div className="col">
                      <div className="first">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="wishlist">
                        {/* <i className= "fa fa-heart"></i>
                        <i className= " fa fa-heart-o"></i> */}
                         

                         {(toggle==false)?<i className=" fa fa-heart-o" onClick={()=>{
                                wishlist(ele)
                                
                                handleToggle()
                               }} />:  <i className=" fa fa-heart" onClick={()=>{
                                wishlist(ele._id)
                                    handleToggle()
                               }} />}
                              

                               

                        
                        </span>{" "}
                        
                      </div>
                    </div>  {" "}   <button  className="super_btn" > ₹ {ele.price}</button>
                      </div>
                    </div>
                   
                      <div className="row" >
                        {" "}
                       {
                        seller ?<>
                         <div><span > <button className="discount" > Add to Cart </button> </span>{" "} </div>
                        
                        <div><span > <button className="discount" > Buy Now </button> </span>{" "} </div>
                        </>:<>

<div className="col" style={{width:"50%"}}> <button  align="left" className="connect"> <img src={connection} alt="" /> Connect</button></div>
                        <div className="col" style={{width:"50%"}}> <button align="right" className="listbtnlist" onClick={handleClickOpen} > <img src={list} alt="" /> List</button>
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
            <div className="container" >
              
              <div className="flexcontinaer" style={{width:'300px'}}>
                <div className="flexleft" style={{marginTop:'10px'}}>
                <h5>Store</h5>
                </div>
                <div className="flexright">
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
              <div className="col-4"><button className="bulkbtnprice">Price Change</button></div>
              <div className="col-2"> <input className="inputflied" type="text" /> </div>
              <div className="col-2"><button className="bulkbtnok">OK</button></div>
              <div className="col-2"><button className="bulkbtnrec">Recommended Listed Price </button></div>
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
            <div align="middle" className="row" style={{backgroundColor:'rgba(217, 217, 217, 1)',marginTop:'40px',padding:'10px',borderRadius:'20px'}}>
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
              <div className="row" style={{backgroundColor:'rgba(0, 0, 0, 1)',marginTop:'40px',padding:'20px',borderRadius:'20px'}}>
             
              <div className="col"><button className="buttonboxsecond">Estimated Delvery Time</button></div>
              <div className="col"><button className="buttonboxrange">Time range</button></div>
              <div className="col"><button className="buttonboxsecond"> Shipping Cost</button></div>
              <div className="col"><button className="buttonboxcost">₹Cost</button></div>
              <div className="col"><button className="buttonboxTcking">Tracking Information :</button></div>
              <div className="col"><button className="Availblity">Available</button></div>
            </div>
         
        </DialogContent>
        <DialogActions >
          <div align="center" style={{marginRight:'33%',display:'flex',marginBottom:'10px'}}>
          <div ><button style={{backgroundColor:'black',padding:'5px',color:'white',width:'100px',borderColor:'transparent', boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'5px' }} onClick={handleClose}>Cancel</button></div>
          <div ><button style={subbtnlist} onClick={handleClose}>List Now</button></div>
          <div ><button style={subbtn} onClick={handleClose}>Listing Before Edit</button></div>
          </div>

       
         
        </DialogActions>
      </Dialog>
 
  </div>

  <div><span > <button className="discount" > + Queue </button> </span>{" "} </div>
                        </>
                       }

                       
                      </div>



                    <div className="d-flex justify-content-between align-items-left pt-1">
                      <div>
                        {" "}
                        
                        
                      </div>{" "}
                     
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
    </div>
     <div align='center'><button className="btnview" onClick={()=>{
      setPage(page+1)
     }} >Load more </button></div>
      <br />
      <br />
      <Footer />
      
    </div>
   
  )
}

export default ProductListing

