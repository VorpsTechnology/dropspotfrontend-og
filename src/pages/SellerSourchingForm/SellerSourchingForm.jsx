import React,{useState,useRef} from 'react'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import SellerSidebar from '../SellerDashboard/SellerSidebar'
import './SellerSourchingForm.css'


import { useDispatch, useSelector } from 'react-redux'
import { uploadImage, uploadPost } from '../../actions/uploadAction'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import 'bootstrap/dist/css/bootstrap.css';
import { Tab } from '@headlessui/react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import 'bootstrap/dist/css/bootstrap.css';
import Papa from 'papaparse';
import { uploadCsv } from '../../Api/ProductRequest';


function SellerSourchingForm() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  
      //Button Click Function
    
    
      //Button Click Function
     
    const serverPublic=process.env.REACT_APP_PUBLIC_FOLDER
    const loading =useSelector((state)=>state.postReducer.uplading)
    const dispatch=useDispatch()
    const [image,setImage]=useState([])
    const [csv,setCsv]=useState([])
    const userId=localStorage.getItem("userId")
    const userName=localStorage.getItem("userEmail")
    const [newPost,setNewPost]=useState({
      title:"",
      desc:'',
      name:"",
      price:"",
      quantity:"",
      height:"",
      deapth:"",
      weight:"",
      deapth:"",
      maxPrice:"",
      Material:"",
      sku:"",
      category:"",
      subCategory:"",
      color:"",
      descrip:"",
      deapth:"",
      image0:null,
      image1:null,
      image2:null,
      image3:null,
      image4:null,
      sellerId:userId,
      sellerName:userName,
      wholesalePrice:"",
      acceptReturn:false
      
    })

    const imageRef=useRef()
  const csvRef=useRef()
    const onImageChange=(event)=>{
        if(event.target.files && event.target.files[0]){
            let img=event.target.files[0];
            let images=[...image]
          images.push(img)
            setImage(images)
        }
    }
  
    const onCChange=(event)=>{
      if(event.target.files && event.target.files[0]){
          let img=event.target.files[0];
          
       
         
     
          const parseFile = img => {
            Papa.parse(img, {
              header: true,
              complete: results => {
                setCsv(results.data)
                console.log("allooo",results.data);
              },
            });
          };
  
          parseFile(img)
      }
  }
  
  const subbtn={
    backgroundColor:'rgba(253, 227, 26, 1)',padding:'5px',color:'black',width:'100px',borderColor:'transparent', boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",marginLeft:'20px',borderRadius:'5px'
  }
    // const {user} =useSelector((state)=>state.authReducer.authData);
 
    const handleSubmit=(e)=>{
        e.preventDefault();
  
       
  console.log(newPost);
       
            console.log(image);
            alert()
           
            for(let i=0;i<image.length;i++){
            
              const data=new FormData()
              
                const filename =Date.now() + image[i].name
                data.append("name",filename)
                data.append("file",image[i])
                
                newPost["image"+i]=filename
                console.log(newPost)
             
              try {
                dispatch(uploadImage(data))
            } catch (error) {
                console.log(error)
            }
            }
           
    
        dispatch(uploadPost(newPost))
        resetShare();
        
    }
    const handleChange = (e) => {
      setNewPost({ ...newPost, [e.target.name]: e.target.value });
    };
    const resetShare=()=>{
        setImage(null)
        newPost.title= ""
        newPost. desc=''
        newPost.name=""
        newPost.price =""
        newPost.quantity=""
        newPost.height=""
        newPost.deapth=""
        newPost. weight=""
        newPost.deapth=""
        newPost.newPost.maxprice=""
        newPost.Material=""
        newPost.sku=""
        newPost.category=""
        newPost. subCategory=""
        newPost.color=""
        newPost.descrip=""
        newPost.deapth=""
        newPost. wholesalePrice=""
        newPost.image0=null
        newPost. image1=null
        newPost.   image2=null
        newPost.image3=null
        newPost. image4=null
        newPost. sellerId=userId
        newPost.sellerName=userName
        newPost.acceptReturn=""
        toast.success("Product added successfully")
    }
  
    const handleCsvSubmit=async(e)=>{
      e.preventDefault();
      try {
        const data= await uploadCsv(csv)
        console.log(data);
        toast.success("Product added successfully")
      } catch (error) {
        console.log(error)
        toast.error("somehing went wrong")
      }
    }
  

  
    const buttonheader={
      backgroundColor:'#FDE31A',
      borderRadius:'15px',
      width:'auto',
      alignItems:'center',
      height:'80px',
      alignSelf:'center'
      
    }
  
    const tabpanls={
      padding:'30px',
  
    }
    const handelTabCLick = (e) => {
      setTabSelected(e);
    };
    const [tabSelected, setTabSelected] = useState(null);
  
  return (
  <>
    <Adminnavbar />
    <div className='row' style={{backgroundColor:'#32333A',marginTop:'100px'}}>
      <div className='col-2'>
        <SellerSidebar />
      </div>
      <div className='col-10' >
      <div className='container' id="tabcontainer" style={{margin:'20px 0px 20px 10px',width:'1100px', padding:'20px',}}>
    <div className='headingAll'><h2>Sourcing </h2></div>
    <Tab.Group>
      <div className='conatiner' style={buttonheader}>
      <Tab.List  className="flex space-x-1 rounded-xl  p-1" >

                <Tab    className={`tabbtn3 ${tabSelected === 1 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(1)}>Upload Individual Product</Tab>
                <Tab   className={`tabbtn3 ${tabSelected === 2 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(2)}>Bulk Upload</Tab>
               
              </Tab.List>
         </div>
             
         
          
          <Tab.Panels style={tabpanls}>
            <Tab.Panel>
              <div className='Dashboardheading'><h3>Upload Individiual Product</h3></div>
            <form className="container" onSubmit={handleSubmit}>


<div  >
<div className='name'> <label htmlFor="">Product Name</label> </div>
  <div  align='left' >
  <input type="text"  className='inputfield13' name='name' onChange={handleChange} value={newPost.name} required />
  </div>
</div>



<div >
  <div className='name' >
  <label >Product tag</label>
  </div>
  <div >
  <input type="text"  className='inputfield13' name='title' value={newPost.title} onChange={handleChange} required />
  </div>
</div>



<div >
  <div className='name' >
  <label >Product discription</label>
  </div>
  <div >
    <textarea className='inputfield13'  id="" cols="30" rows="10" name='desc' onChange={handleChange}  value={newPost.desc} ></textarea>

  </div>
</div>


<div >
  <div className='name' >
  <label >SKU Id</label>
  </div>
  <div >
  <input type="text"  className='inputfield13' name='sku' onChange={handleChange} value={newPost.sku}  required />
  </div>
</div>
<div>

  
<div >
  <div className='name' >
  <label >Category</label>
  </div>
  <div >
  <select  className='inputfield13' onChange={handleChange} name='category'  >
  <option value="Bags and shoes">Bags and shoes</option>
    <option value="Jewelory & Watches">Jewelory & Watches</option>
    <option value="Beauty & Hair">Beauty & Hair</option>
    <option value="Women's Clothing">Women's Clothing</option>
    <option value="Home,Garden & Furtinure">Home,Garden & Furtinure</option>
    <option value="Phone and Accessories">Phone and Accessories</option>
    <option value="Sports & Outdoors">Sports & Outdoors</option>
    <option value="Men's Clothing">Men's Clothing</option>
    <option value="Consumer Electronics">Consumer Electronics</option>
    <option value="Home improvement">Home improvement</option>
  </select>
  </div>
</div>
<div>

</div>
<div >
  <div className='name' >
  <label >Sub category</label>
  </div>
  <div >
  <select  className='inputfield13' onChange={handleChange} name='subCategory'>
  <option value="none">none</option>
  <option value="ladies">ladies</option>
  <option value="gents">gents</option>
  <option value="premium">premium</option>
</select>
  </div>
</div>
<div>
  
</div>
<div >
  <div className='name' >
  <label >Show Similar Product</label>
  </div>
  <div style={{marginLeft:'20px'}} >
  <input style={{width:'20px',height:'20px'}} type="checkbox" name />
  
    <label className='Checklabelyes'>yes</label>
    <input style={{width:'20px',height:'20px'}}    type="checkbox" name />
    <label className='Checklabel'>No</label>
  </div>
</div>
<div> 
</div>
<div >
  <div className='name' >
  <label >Manufacturer Price</label>
  </div>
  <div >
  <input  type="text" className='inputfield13'  onChange={handleChange} value={newPost.price} name='price' required />
  
   
  </div>
</div>

<div >
  <div className='name' >
  <label >Wholeshale Price</label>
  </div>
  <div >
  <input  type="text" className='inputfield13' onChange={handleChange } name='wholesalePrice'  value={newPost.wholesalePrice} required />
  
   
  </div>

</div>
<div> 
</div>
<div>
  
</div>
<div >
  <div className='name' >
  <label >Maximum Retail Price</label>
  </div>
  <div >
  <input  type="text" className='inputfield13'  onChange={handleChange} name='maxPrice' value={newPost.maxPrice } required />
  
   
  </div>
</div>
<div> 
</div>
<div >
  <div className='name' >
  <label >Purchasing item</label>
  </div>
  <div >
  <span style={{marginLeft:'30px'}}>
    <input style={{width:'20px',height:'20px'}}  type="checkbox" name />
    <label className='Checklabel' >Bulk</label>
    
    <input style={{marginLeft:'20px',width:'20px',height:'20px'}}  type="checkbox" name />
    <label  className='Checklabel' >Dropshipping</label>
    
    </span> 

  </div>
</div>
<div> 
</div>
<div >
  <div className='name' >
  <label  > Quantity Available </label>
  </div>
  <div >
  <input  type="text" className='inputfield13' onChange={handleChange} name='quantity' value={newPost.quantity}  required />

  </div>
</div>
<div >
  <div className='name' >
  <label >Attachment</label>
  </div>
  <div style={{marginLeft:'20px'}} >
  <input style={{backgroundColor:'transparent'}} type="file" id="myFile" name="myImage"  ref={imageRef} onChange={onImageChange} />
  <input style={{backgroundColor:'transparent'}} type="file" id="myFile" name="myImage"  ref={imageRef} onChange={onImageChange} />
  <input style={{backgroundColor:'transparent'}} type="file" id="myFile" name="myImage"  ref={imageRef} onChange={onImageChange} />
  <input style={{backgroundColor:'transparent'}} type="file" id="myFile" name="myImage"  ref={imageRef} onChange={onImageChange} />
  <input style={{backgroundColor:'transparent'}} type="file" id="myFile" name="myImage"  ref={imageRef} onChange={onImageChange} />

  </div>
</div>
<div >
  <div className='name'  >
  <label >Material</label>
  </div>
  <div >
  <input   type="text" className='inputfield13' onChange={handleChange} name='Material' value={newPost.Material}  required />

  </div>
</div>
<div >
  <div className='name' >
  <label >Product height</label>
  </div>
  <div >
  <input  type="text"  style={{width:'1000px'}} className='inputfield13' onChange={handleChange} name='height' value={newPost.height}  required />

  </div>
</div>
<div >
  <div className='name' >
  <label >Product width</label>
  </div>
  <div className='flexright'>
  <input  type="text" style={{width:'1000px'}}  className='inputfield13' onChange={handleChange} name='width' value={newPost.width}  required />

  </div>
</div>
<div >
  <div className='name' >
  <label >Product weight</label>
  </div>
  <div className='flexright'>
  <input  type="text" style={{width:'1000px'}}  className='inputfield13' onChange={handleChange} name='weight' value={newPost.weight} required />

  </div>
</div>
<div >
  <div className='name' >
  <label >Product deapth</label>
  </div>
  <div className='flexright'>
  <input  type="text" style={{width:'1000px'}} onChange={handleChange} name='deapth' value={newPost.deapth}  className='inputfield13'  required />

  </div>
</div>

<div >
    
    <input type="checkbox" name="" id="" />
    <label ><h5>Accept Return</h5></label>
    </div>


</div>

<div  style={{display:'flex',justifyContent:'space-evenly',marginTop:'40px',marginBottom:'40px'}}>
<div className='flexitemleft' style={{justifyContent:'left'}}>
<div>

{/* <button  onClick={handleClickOpen} style={{color:'black',borderColor:'transparent',backgroundColor:'rgba(253, 227, 26, 1)',borderRadius:'20px',fontSize:'15px',fontWeight:'800',padding:'10px',width:'150px'}} >Add Variations</button> */}

<Dialog open={open} onClose={handleClose}>
<DialogTitle>Add Variations</DialogTitle>
<DialogContent style={{width:'100%'}}>
  <DialogContentText >
    <div className='containerfor'style={{width:'500px'}} >
      <form action="">
      <div className='flexcontianerform'>
    <div ><label htmlFor="">Title</label></div>
    <div className='flexright'><input type="text" /></div>
   </div>
   <div className='flexcontianerform'>
    <div><label htmlFor="">Catogory</label></div>
    <div className='flexright' >
      <select name="" id="">
        <option value=""></option>
        <option value=""></option>
      </select></div>
   </div>
   <div className='flexcontianerform'>
    <div><label htmlFor="">Color Code</label></div>
    <div ><input type="text" /></div>
   </div>
   <div className='flexcontianerform'>
    <div><label htmlFor="">Product Size</label></div>
    <div >
      <select name="" id="">
        <option value="">-----</option>
        <option value="">S</option>
        <option value="">M</option>
        <option value=""></option>
      </select>
    </div>
   </div>
   <div className='flexcontianerform'>
    <div><label htmlFor="">Price</label></div>
    <div ><input type="text" /></div>
   </div>
   <div className='flexcontianerform'>
    <div><label htmlFor="">Manufacturer Price</label></div>
    <div ><input type="text" /></div>
   </div>
   <div className='flexcontianerform'>
    <div><label htmlFor="">Maximum Retail Price</label></div>
    <div ><input type="text" /></div>
   </div>
      </form>
    </div>

  </DialogContentText>
 
</DialogContent>
<div align="center">
<DialogActions >
  <div align="center" style={{marginRight:'30%',display:'flex',marginBottom:'10px'}}>
  <div ><button style={{backgroundColor:'black',padding:'5px',color:'yellow',width:'100px',borderColor:'transparent', boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'5px' }} onClick={handleClose}>Cancel</button></div>
  <div ><button style={subbtn} onClick={handleClose}>Submit</button></div>
  </div>


 
</DialogActions>
</div>

</Dialog>
</div>
</div>
<div className='flexitemcenter' style={{justifyContent:'center'}} >
  <div > <button className='clearbtn'>Clear</button> </div>
</div>


<div className='flexitemright' style={{justifyContent:'left'}} >
  <div > <button className='productbtn'>Add Product</button> </div>
</div>
</div>



</form>
            </Tab.Panel>
            <Tab.Panel>
            <div className='container'>
            <div className='Dashboardheading'><h3>Bulk Upload</h3></div>
    <span><h5 style={{color:"red"}}>Or Upload CSV file</h5></span>
        <form action="">
        <br />
      <input type="file" id="myFile"  name="myCsv"  ref={csvRef} onChange={onCChange} />

    <br />
      <button className='subbtn'onClick={handleCsvSubmit} disabled={loading}>
                         {loading?"Uploading...":"Add Products"}
                     </button>
      </form>
    </div>
            </Tab.Panel>
           
          </Tab.Panels>
    </Tab.Group>
      </div>

      
   
      <ToastContainer />
      </div>

    </div>
  </>
  )
}

export default SellerSourchingForm
