import React from 'react'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import Sidebar from '../Sidebar/Sidebar'

function SkuList() {
    const serchbtn={
        backgroundColor:'#FDE31A',
        borderColor:'transparent',
        borderRadius:'10px',
        width:'100px',
        padding:'5px',
        outlineColor:'#FDE31A',
        fontWeight:'800'
        
        
         }
        
        //  const Clearbtn={
        //     backgroundColor:'#FDE31A',
        //     borderColor:'transparent',
        //     borderRadius:'10px',
        //     width:'80px',
        //     padding:'5px',
        //     marginLeft:'1px'  
        //  }
        
         const Order={
            backgroundColor:'#FDE31A',
            borderColor:'transparent',
            borderRadius:'10px',
            fontWeight:'400',
            fontSize:'15px',
           
          
         }
        
        //  const inputbox={
        //     outlineColor:'#FDE31A',
        //     width:'350px',
        //     innerHeight:'30px',
        //     borderColor:'#FDE31A'
        //  }
         const skubnt={
          width:'300px',
          height:'35px',
          borderColor:'transparent',
        
          borderRadius: '86px',
         
          backgroundColor:'rgba(231, 231, 231, 1)',
          color: 'rgba(50, 51, 58, 1)',
          fontSize: '15px',
          paddingLeft: '20px',
        
        
        
          outlineColor:'transparent', 
        }
  return (
    <div style={{backgroundColor:'#31343A',padding:'0px 0px  0px'}}>       
    <Adminnavbar />
    <div className='row'>
        <div className='col-2' style={{backgroundColor:'#31343A'}}>
            <Sidebar />
        </div>
        <div className='col-10' style={{height:'800px'}}>
          <div className='container' id="tabcontainer"  style={{ display: 'block',color:'black',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',padding:'40px',width:'auto',margin:'20px 20px 20px 20px' }}>
          <div className='container'  style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px'}} >
          <div className='row'>
          <div className='col'><h4 style={{marginTop:'20px'}}>SkuList</h4> </div>
          <div  ><button style={{float:'right',backgroundColor:'#FFE51A',borderColor:'transparent',borderRadius:'10px',padding:'5px',marginRight:'5px'}}>Add To Sku list</button></div>
          <div className='row' style={{marginTop:'25px'}}>
              <div className='col-4'><input style={skubnt} type="text" placeholder='Enter Sku/Product name' /></div>

              
              <div className='col-2'><p><button style={serchbtn}>Search</button></p></div>
            </div>
          </div>
          

              
</div>
<div  className='container'  style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1000px' ,overflowX:'scroll'}}  >
<div style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1000px' }}>
<div className='row' style={{padding:'7px',backgroundColor:'#FDE31A',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px',width:'1800px',marginRight:'100px' }}>
   <div className='col'><button style={Order}>Product Information</button></div>
              <div className='col'><button style={Order}>	Inventry</button></div>

              <div className='col'><button style={Order}>Weight</button></div>
              <div className='col'><button style={Order}>Shipping From</button></div>
              <div className='col'><button style={Order}>Shipping Method</button></div>
              <div className='col'><button style={Order}>Price</button></div>
              <div className='col'><button style={Order}>Shipping Cost</button></div>
              <div className='col'><button style={Order}>Amount</button></div>
              <div className='col'><button style={Order}>Action</button></div>
    </div>
</div>
  
   </div>
          </div>
 
        </div>
    </div>
  </div>
  )
}

export default SkuList

