
import React from 'react'

import 'bootstrap/dist/css/bootstrap.css';

import 'react-js-dialog-box/dist/index.css';

import leftarrow from '../../assets/leftarrow.png'

import MediaNavbar from '../../components/MediaNavbar/MediaNavbar'



function MediaWishlistDashboard() {
  const smtbtn={
    backgroundColor:'#FFE51A',
    borderColor:'transparent',
   
    width:'100px',
   borderRadius:'10px',
   padding:'5px'
  }

  const btns={
    backgroundColor:'transparent',
    borderColor:'transparent',
   

  }
  const btnmovesecond={
    width:'120px',
    backgroundColor:'#FFE51A',
    borderColor:'transparent',
    borderRadius:'10px',
    padding:'5px',
    marginTop:'20px'
  }
  const btnmove={
    backgroundColor:'#FFE51A',
    borderColor:'transparent',
    padding:'5px',
    width:'100px',
    borderRadius:'10px',
    marginTop:'20px'
  }

  const inputselectotion={
    width:'240px',color:'black',
  backgroundColor:'rgba(231, 231, 231, 1)',
 
  
   borderColor:'transparent',
   borderRadius:'40px',
   height:'35px',
   outline:'transparent'
   
  
  
  }
  
 
  return (
    <div>
      <MediaNavbar />
      <div style={{marginBottom:'80px'}}>
      <div  id='tabcontainer' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',width:'auto',overflowX:'scroll',margin:'20px'}}>
      <button data-toggle="collapse" data-target="#demo" className='Buttonstik'>Wishlist <span style={{float:'right'}}><img src={leftarrow} alt="" /></span></button>

      <div id="demo" class="collapse">

      <div className='container' style={{ display: 'block',color:'black',padding:'20px',borderRadius:'30px'}}>
      <div align='center' style={{justifyContent:'center',padding:'20px'}}> <h2>WishList</h2> </div>

   <div className='container-fluid'  >
   <div align='center' className='row' style={{margin:'20px'}} >

<div align='center'  >
<label htmlFor="">Catagory</label>:
<div style={{marginTop:'20px'}}>
<select  name="All" style={inputselectotion}  >
    <option value="All">All</option>
    <option value="All">Sports & Outdoor</option>
  </select>
  </div> 

</div>
<div style={{marginTop:'20px'}}> <input style={inputselectotion}  placeholder='Enter SKU/Product Name' type="text" /></div>
<div align='center' >
 
  <div align='center' style={{marginTop:'20px'}}>  <button style={smtbtn}>Search</button></div>

</div>
<div >
  <button style={btnmove}>Move btn</button>
</div>
<div >
  <button  style={btnmovesecond}>Create folder</button>


</div>
</div>
</div>



   </div>
    
  </div>
  <div style={{borderRadius:'30px',marginTop:'10px',width:'auto',overflow:'scroll'}}>
  <div style={{ display: 'block',color:'black',padding:'7px',borderRadius:'30px', }}>
  
        <div className='row'  style={{backgroundColor:'#FDE31A',width:'1000px',color:'black',borderRadius:'20px',margin:'20px 20px 20px 0px',padding:'7px'}}>
        <div className='col'> <input type="checkbox" /></div>
        <div className='col'><button style={btns}>Date</button></div>
        <div className='col'><button  style={btns}>Images</button></div>
        <div className='col'><button  style={btns}>Title</button></div>
        <div className='col'><button  style={btns}>Product Price</button></div>
        <div className='col'><button  style={btns}>Actions</button></div>
    </div>

</div>

  </div>
 
      </div>

    </div>

</div>
  )
}

export default MediaWishlistDashboard


