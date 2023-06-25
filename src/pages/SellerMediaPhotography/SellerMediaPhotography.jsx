import React from 'react'
import leftarrow from '../../assets/leftarrow.png'
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar'

const serchbtn={
    backgroundColor:'#FDE31A',
    borderColor:'transparent',
    borderRadius:'10px',
    
    padding:'5px',
    outlineColor:'#FDE31A',
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)"
    
    
     }
     const skubnt={
      width:'250px',
      height:'35px',
      borderColor:'transparent',
    
      borderRadius: '86px',
     
      backgroundColor:'rgba(231, 231, 231, 1)',
      color: 'rgba(50, 51, 58, 1)',
      fontSize: '15px',
      paddingLeft: '20px',
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
    
    
    
      outlineColor:'transparent', 
    }
    
     const Clearbtn={
        backgroundColor:'#FDE31A',
        borderColor:'transparent',
        borderRadius:'10px',
        width:'80px',
        padding:'5px',
        marginLeft:'1px',
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)" 
     }
    
     const Order={
        backgroundColor:'#FDE31A',
        borderColor:'transparent',
        borderRadius:'10px',
        fontWeight:'400',
        fontSize:'15px',
   
       
      
     }
    

function SellerMediaPhotography() {
  return (
    <div>
         <div>
        <MediaNavbar />
              
        <div className='container' id="tabcontainer"  style={{ display: 'block',color:'black',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',padding:'40px',width:'auto',overflowX:'scroll',margin:'20px 20px 20px 20px' }}>
     <button className='Buttonstik' data-toggle="collapse" data-target="#demo">My Photography<span style={{float:'right'}}><img src={leftarrow} alt="" /></span></button>

        <div id="demo" className="collapse">

            <div align='center'><h2>My Photography</h2></div>
           <div className='row'>
                <div className='col'>
                <div>
                <div align='center' className='row' style={{marginTop:'20px'}}>
            <div ><input style={skubnt} type="date" /></div>

            
            <div style={{marginTop:'20px'}} ><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>
          </div>
          
                </div>
                
                </div>
            </div>
           </div>
           <div >

           <div style={{borderRadius:'30px',marginTop:'10px',width:'auto',overflow:'scroll'}} >
        <div style={{ display: 'block',color:'black',padding:'7px',borderRadius:'30px', }}>
        <div className='row' style={{backgroundColor:'#FDE31A',width:'1500px',color:'black',borderRadius:'20px',margin:'20px 20px 20px 0px',padding:'7px'}}>
        <div className='col'><button style={Order}>	Product Name</button></div>
            <div className='col'><button style={Order}>	Sku ID</button></div>
            <div className='col'><button style={Order}>Varient</button></div>
            <div className='col'><button style={Order}>Dropshiper User ID</button></div>
            <div className='col'><button style={Order}>Status</button></div>
           
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

export default SellerMediaPhotography
