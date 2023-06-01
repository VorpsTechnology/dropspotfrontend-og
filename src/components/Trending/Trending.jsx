import React, { useState } from "react";
import "./Trending.css";
import { useHistory } from "react-router-dom";
import Connection from '../.././pages/Connection/Connection'

import connection from "../../assets/connection.png";
import list from "../../assets/list.png";
import { useEffect } from "react";
import { getAllProducts, getProduct } from "../../Api/ProductRequest.js";
import { addToWishlist, getWishlist } from "../../Api/WishlistRoute";

import swal from "sweetalert";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ViewMoreSection from "./ViewMoreSection/ViewMoreSection";
import { beforeList } from "../../Api/ListingRequest";



const subbtn={
  backgroundColor:'rgba(253, 227, 26, 1)',fontWeight:'800',padding:'5px',color:'black',width:'200px',borderColor:'transparent', boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",marginLeft:'20px',borderRadius:'5px'
}
const subbtnlist={
  backgroundColor:'rgba(253, 227, 26, 1)',fontWeight:'800',padding:'5px',color:'black',width:'100px',borderColor:'transparent', boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",marginLeft:'20px',borderRadius:'5px'
}


function Trending() {
  const history = useHistory();
  const [products,setProduct]=useState([])
  const Productpage = () => {
      history.push(`/ProductPage/${products._id}`)
  } 


  const handleCheckOut = () => {
      history.push(`/Connection/${products._id}`)
  } 

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
      const {data}=await getAllProducts(1)
      setProduct(data)
      
      // ...
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state


  const wishlist=async(data)=>{
   if(userData && userInfo){
    const ata={
      productId:data._id,
      userId:userData,
      quantity:1,
      name:data.name,
      image:data.image0,
      date:Date.now()
    }
    console.log("ata",ata)
    const tata= await addToWishlist(ata)
    if(tata){
     swal("Added to wishlist")
     
    }
   }else{
    swal("Login first")
    history.push('/signin')
   }
   
     
  }

    
  const[users,setUsers]=useState([]);
const [search,setSearch]=useState("");
const [filterUsers,setFilteredUsers]=useState([]);

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
const [beforeListingProduct,setbeforeListingProduct]=useState({})
const handleClickOpen =async (productI) => {
  alert(productI)
  const {data}=await getProduct(productI)
  console.log("before",data);
  setbeforeListingProduct(data)
  console.log("beforelisting",beforeListingProduct);
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

const handleBeforelisting=async()=>{
  const {_id,...others}=beforeListingProduct
  console.log("others",others);
const dta={  
      dropshipperId:userData,
    product:others
  }

  console.log("dta==>",dta);
  const{data}=await beforeList(dta)
  if(data){
    alert("Product added as draft")
  }
}


  return (
    <>
   <div align="center"  id="trendingcontainer" className="conatiner-fluid">
    <div className="col-md-14" style={{marginLeft:'40px',marginRight:'40px'}}>
    <div className="row">
          {products &&
            products.length > 0 &&
            products.map((ele) => (
              <div className="col"  >
                <div align="center"       
                  
                   className="cardcard" id="carasouelsection" style={{padding:'10px',width:'220px'}}>
                  <div className="image" style={{width:'100%'}}>
                    
                    <img
                     src={ele.image1?"http://localhost:5007/images/"+ele.image1:"" }
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
                        {/* <i class= "fa fa-heart"></i>
                        <i class= " fa fa-heart-o"></i> */}
                         

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
                        <div className="col" style={{width:"50%"}}> <button  align="left" className="connect" onClick={handleCheckOut}> <img src={connection} alt="" /> Connect</button></div>
                        <div className="col" style={{width:"50%"}}> <button align="right" className="listbtnlist" onClick={()=>{
                          handleClickOpen(ele._id)
                        }} > <img src={list} alt="" /> List</button>
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
        <DialogTitle>Listing modal</DialogTitle>
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
            <div align="middle" className="row" style={{backgroundColor:'',marginTop:'40px',padding:'10px',borderRadius:'20px'}}>
              <div className="col"><input style={{width:'20px',height:'20px'}} type="checkbox" /></div>
              <div className="col"><button className="buttonbox"> <img
                     src={ele.image1?"http://localhost:5007/images/"+ beforeListingProduct?.image1:"" }
                     style={{cursor:"pointer",width:"60px",height:"60px",borderRadius:'10px' }}
                     /></button></div>
              <div className="col"><button className="buttonbox">{beforeListingProduct?.sku}</button></div>
              <div className="col"><button className="buttonbox"> {beforeListingProduct?.category}</button></div>

              <div className="col"><button className="buttonbox"> {beforeListingProduct?.price}</button></div>
              <div className="col-md-auto"><button className="buttonbox">Shipping Fee</button></div>
              <div className="col-2"><button className="buttonbox">Service fee</button></div>
              <div className="col-md-auto"><button className="buttonbox" > {beforeListingProduct?.price}</button></div>
              <div className="col"><button className="buttonbox">Price</button></div>
            </div>
          
             
         
        </DialogContent>
        <DialogActions >
          <div align="center" style={{marginRight:'40%',display:'flex',marginBottom:'10px'}}>
          <div ><button style={{backgroundColor:'black',padding:'5px',color:'white',width:'100px',borderColor:'transparent', boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'5px' }} onClick={handleClose}>Cancel</button></div>
          <div ><button style={subbtnlist} onClick={()=>{
            handleBeforelisting()
          }}>List Now</button></div>
          
          </div>

        </DialogActions>
      </Dialog>
 
  </div>
  <div><span > <button className="discount" onClick={()=>{
                          history.push(`/checkout/${ele._id}`)
                        }}   >Buy Now </button> </span>{" "} </div>
                       
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

    <div> 

   </div>
   <ViewMoreSection />
 </div>

      
     
    </>
  );
}

export default Trending;
