import React,{useState,useRef} from 'react'
import './MediaSourching.css'
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux'
import { uploadImage, uploadPost } from '../../actions/uploadAction'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar';

import leftarrow from '../../assets/leftarrow.png'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Papa from 'papaparse';
import { uploadCsv } from '../../Api/ProductRequest';



function TabPanel(props) {
  const { children, value, index, ...other } = props;




  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const [tabSelected, setTabSelected] = useState(null);

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
  const desc=useRef()
  const name=useRef()
  const price=useRef()
  const quantity=useRef()
  const imageRef=useRef()
  const csvRef=useRef()
  const skuId=useRef()
  const descrip=useRef()
  const height=useRef()
  const width=useRef()
  const deapth=useRef()
  const weight=useRef()
  const category=useRef()
  const subCategory=useRef()
  const maxprice=useRef()
  const color=useRef()
  const Material=useRef()
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

      const newPost={
          // userId:user._id,
           title:desc.current.value,
           desc:descrip.current.value,
          name:name.current.value,
          price:price.current.value,
          quantity:quantity.current.value,
          height:height.current.value,
          width:width.current.value,
          deapth:deapth.current.value,
          weight:weight.current.value,
          sku:skuId.current.value,
          category:category.current.value,
          subCategory:subCategory.current.value,
          color:color.current.value,
          maxprice:maxprice.current.value,
          Material:Material.current.value,
          image0:null,
          image1:null,
          image2:null,
          image3:null,
          image4:null,
          
      }
console.log(newPost);
     
          // const data=new FormData()
          // const filename =Date.now() + image.name
          // data.append("name",filename)
          // data.append("file",image)
          // newPost.image=filename
          // console.log(newPost)
          console.log(image);
         
         
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

  const resetShare=()=>{
      setImage(null)
      desc.current.value=null;
      name.current.value=null;
      price.current.value=null;
      quantity.current.value=null;
      weight.current.value=null;
      height.current.value=null;
      deapth.current.value=null;
      width.current.value=null;
      descrip.current.value=null;
      skuId.current.value=null;
      category.current.value=null;
      subCategory.current.value=null;
      maxprice.current.value=null;
      color.current.value=null;
      Material.current.value=null;
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




  
  const handelTabCLick = (e) => {
    setTabSelected(e);
  };
  return (
  <>
    <MediaNavbar />
    <Box sx={{ width: '100%',paddingBottom:'60px' }}>
      <Box sx={{ maxWidth: { xs: 'auto', sm: 'auto' }, bgcolor: 'background.paper' }}>
        <Tabs 
         value={value}
         onChange={handleChange}
         variant="scrollable"
         scrollButtons="auto"
         aria-label="scrollable auto tabs example"
        >
          <Tab
            className={`tabbtn3 ${tabSelected === 1 ? "selected-tab1" : ""}`}
            onClick={() => handelTabCLick(1)}
           label="Sourching Form" {...a11yProps(0)} />
          <Tab
          className={`tabbtn3 ${tabSelected === 2 ? "selected-tab1" : ""}`}
          onClick={() => handelTabCLick(2)}
           label="Upload Csv" {...a11yProps(1)} />
          
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      
<div className='container-fluid' id='tabcontainer' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',width:'auto',overflowX:'scroll'}}>  
      <button className='Buttonstik' data-toggle="collapse" data-target="#demo2">Sourching Form <span style={{float:'right'}}><img src={leftarrow} alt="" /></span></button>
      <div id="demo2" className="collapse">

      <div className='container' >
           
            <div  >
           
            <div align='center' className='Dashboardheading20'><h3>Upload Individiual Product</h3></div>
            <form className="container">

<div >
  <div  >
  <label  className="labelstyle20">Product Name</label>
  </div>
  <div >
  <input type="text" style={{width:'auto'}} className='inputfield20' ref={name} required />
  </div>
</div>



<div >
  <div >
  <label className="labelstyle20">Product tag</label>
  </div>
  <div >
  <input type="text" style={{width:'auto'}} className='inputfield20' ref={desc} required />
  </div>
</div>



<div >
  <div >
  <label className="labelstyle20">Product discription</label>
  </div>
  <div >
    <textarea style={{width:'auto'}} className='inputfield20' name="" id="" cols="20" rows="10" ref={descrip}></textarea>

  </div>
</div>


<div >
  <div >
  <label className="labelstyle20">SKU Id</label>
  </div>
  <div >
  <input type="text" style={{width:'auto'}} className='inputfield20' ref={skuId} required />
  </div>
</div>
<div>

  
<div >
  <div >
  <label className="labelstyle20">Category</label>
  </div>
  <div >
  <select style={{width:'auto'}} className='inputfield20' ref={category}>
    <option value="none">none</option>
    <option value="Clothes">Clothes</option>
    <option value="Jwells">Jwells</option>
    <option value="electronics">electronics</option>
  </select>
  </div>
</div>
<div>

</div>
<div >
  <div >
  <label className="labelstyle20">Sub category</label>
  </div>
  <div >
  <select style={{width:'auto'}} className='inputfield20' ref={subCategory}>
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
  <div >
  <label className="labelstyle20">Show Similar Product</label>
  </div>
  <div >
  <input style={{width:'20px',height:'20px'}} type="checkbox" name />
  
    <label className='Checklabelyes'>yes</label>
    <input style={{width:'20px',height:'20px'}}    type="checkbox" name />
    <label className='Checklabel'>No</label>
  </div>
</div>
<div> 
</div>
<div >
  <div >
  <label className="labelstyle20">Manufacturer Price</label>
  </div>
  <div >
  <input style={{width:'auto'}} type="text" className='inputfield20' ref={skuId} required />

  
   
  </div>
</div>
<div> 
</div>
<div >
  <div >
  <label className="labelstyle20">Maximum Retail Price</label>
  </div>
  <div >
  <input style={{width:'auto'}} type="text" className='inputfield20' ref={skuId} required />

  
   
  </div>
</div>
<div> 
</div>
<div >
  <div >
  <label className="labelstyle20">Purchasing item</label>
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
  <div >
  <label  className="labelstyle20"> Quantity Available</label>
  </div>
  <div >
  <input style={{width:'auto'}} type="text" className='inputfield20' ref={quantity} required />

  </div>
</div>
<div >
  <div >
  <label className="labelstyle20">Attachment</label>
  </div>
  <div >
  <input style={{backgroundColor:'transparent'}} type="file" id="myFile" name="myImage"  ref={imageRef} onChange={onImageChange} />
  <input style={{backgroundColor:'transparent'}} type="file" id="myFile" name="myImage"  ref={imageRef} onChange={onImageChange} />
  <input style={{backgroundColor:'transparent'}} type="file" id="myFile" name="myImage"  ref={imageRef} onChange={onImageChange} />
  <input style={{backgroundColor:'transparent'}} type="file" id="myFile" name="myImage"  ref={imageRef} onChange={onImageChange} />
  <input style={{backgroundColor:'transparent'}} type="file" id="myFile" name="myImage"  ref={imageRef} onChange={onImageChange} />

  </div>
</div>
<div >
  <div >
  <label className="labelstyle20">Material</label>
  </div>
  <div >
  <input style={{width:'auto'}}  type="text" className='inputfield20' ref={Material} required />

  </div>
</div>
<div >
  <div >
  <label className="labelstyle20">Product height</label>
  </div>
  <div >
  <input style={{width:'auto'}} type="text" className='inputfield20' ref={height} required />

  </div>
</div>
<div >
  <div >
  <label className="labelstyle20">Product width</label>
  </div>
  <div >
  <input style={{width:'auto'}} type="text" className='inputfield20' ref={width} required />

  </div>
</div>
<div >
  <div >
  <label className="labelstyle20">Product weight</label>
  </div>
  <div >
  <input style={{width:'auto'}} type="text" className='inputfield20' ref={weight} required />

  </div>
</div>
<div >
  <div >
  <label className="labelstyle20">Product deapth</label>
  </div>
  <div >
  <input style={{width:'auto'}} type="text" className='inputfield20' ref={deapth} required />

  </div>
</div>




</div>

<div  style={{justifyContent:'center',width:'auto',marginTop:'40px',marginBottom:'40px'}}>
<div >
<div align='center'>

<button  onClick={handleClickOpen} className='variatiobtn'>Add Variations</button>

<Dialog open={open} onClose={handleClose}>
<DialogTitle>Add Variations</DialogTitle>
<DialogContent style={{width:'100%'}}>
  <DialogContentText >
    <div className='containerfor'style={{width:'500px'}} >
      <form action="">
      <div className='flexcontianerform'>
    <div ><label htmlFor="">Title</label></div>
    <div ><input type="text" /></div>
   </div>
   <div className='flexcontianerform'>
    <div ><label htmlFor="">Catogory</label></div>
    <div >
      <select name="" id="">
        <option value=""></option>
        <option value=""></option>
      </select></div>
   </div>
   <div className='flexcontianerform'>
    <div ><label htmlFor="">Color Code</label></div>
    <div ><input type="text" /></div>
   </div>
   <div className='flexcontianerform'>
    <div ><label htmlFor="">Product Size</label></div>
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
    <div ><label htmlFor="">Price</label></div>
    <div ><input type="text" /></div>
   </div>
   <div className='flexcontianerform'>
    <div ><label htmlFor="">Manufacturer Price</label></div>
    <div ><input type="text" /></div>
   </div>
   <div className='flexcontianerform'>
    <div ><label htmlFor="">Maximum Retail Price</label></div>
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


<div  >
  <div > <button className='productbtn'>Add Product</button> </div>
</div>
</div>

<div  >
  <div > <button className='clearbtn'>Clear</button> </div>
</div>



</form>
                  </div>
        
          
         </div>
          
      </div>
     
      
    
 </div>
   
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className='container-fluid' id='tabcontainer' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',width:'auto',overflowX:'scroll'}}>  
      <button className='Buttonstik' data-toggle="collapse" data-target="#demo3">Bulk Upload <span style={{float:'right'}}><img src={leftarrow} alt="" /></span></button>
      <div id="demo3" className="collapse">

      <div className='container' >
     
      
            <div className='Dashboardheading20'><h3>Bulk Upload</h3></div>
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
        
          
         </div>
          
     
     
      

 </div>
    
      </TabPanel>
      
    </Box>
 
  </>
  );
}