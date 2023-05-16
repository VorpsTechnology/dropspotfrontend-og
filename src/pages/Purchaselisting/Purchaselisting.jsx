import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import './Purchaselisting.css'

function Purchaselisting() {
const addonbtn={
    backgroundColor:'#FDE31A',
    borderColor:'transparent',
    padding:'10px',
    borderRadius:'10px',
    width:'200px',
    fontWeight:'400',
    fontSize:'15px'

}





const searchbtn={
  backgroundColor:'#FDE31A',
  borderColor:'transparent',
  padding:'10px',
  borderRadius:'10px',
  width:'150px',
  fontWeight:'500',
  fontSize:'15px'
}
const Clearbtn={
  backgroundColor:'rgb(0,0,1)',
  borderColor:'transparent',
  padding:'10px',
  borderRadius:'10px',
  width:'150px',
  fontWeight:'500',
  fontSize:'15px',
  color:'white',
 
}
const btnroe={
  borderColor:'transparent',
  backgroundColor:'transparent',
  fontWeight:'400',
  fontSize:'15px'
}


  return (
    <div>
        <Adminnavbar />
      <div className='row'>
        <div className='col-2' style={{backgroundColor:'#32333A'}}><Sidebar /></div>
        <div className='col-10' >
          <div className='container' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",padding:'30px 20px 30px 20px',width:'1080px',borderRadius:'30px'}} >
            <div className='container' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",padding:'30px 20px 30px 20px',width:'1050px',borderRadius:'30px'}}>
                  <div className='row' style={{justifyContent:'space-between',display:'flex',marginTop:'20px'}}>
                      <div className='col' style={{justifyContent:'left',marginLeft:'25px'}}> <h2>Purchase List</h2> </div>
                      <div className='col' style={{justifyContent:'right'}}> <button style={addonbtn}>Add To Purchase</button><span style={{margin:'30px'}} ><button style={addonbtn}>Purchase cart</button></span> </div>
                  </div>
                  <div className='row' style={{marginTop:'20px'}} >
                      <div className='col'  >
                      <select className='selectboxPuechse' name="Select box" id="box">
                      <option value="">Please select order type</option>
                      <option value="">All</option>
                      </select>
                      </div>
                      <div className='col' >
                          <select className='selectboxPuechse' name="Select box" id="box">
                          <option value="">Please select order status</option>
                          <option value="">All</option>
                          </select> 
                      </div>
                      <div className='col'>
                          <select  className='selectboxPuechse' name="Select box" id="box">
                          <option value="">All</option>
                          <option value="">All</option>
                          </select>
                      </div>
                  </div>
                  <div className='row'>
                    <div className='col-4'><p><input className='inputdate' placeholder='Start' type="date" /></p></div>
                    <div className='col-8'><input className='inputtraction' placeholder='Enter Order Number/Transaction Number /SKU/Product Name ' type="text" /></div>
                  </div>
                  <div className='row' style={{marginLeft:'25px'}} >
                  <h6><button style={searchbtn}>Search</button><span style={{marginLeft:'10px'}} ><button style={Clearbtn}>Clear</button></span></h6>
                  </div>
              </div>
              <br />
              <br />
              <div className='container' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",padding:'30px 20px 30px 20px',width:'1050px',borderRadius:'30px'}} >
              <div  className='row' style={{backgroundColor:'#FDE31A',padding:'15px 2px 5px 2px',color:'black',borderRadius:'20px'}}>
                <div className='col'> <button style={btnroe}>Products</button></div>
                <div className='col'><button style={btnroe}>Varient</button></div>
                <div className='col'><button style={btnroe}>Weight(g)</button></div>
                <div className='col'><button style={btnroe}>Price</button></div>
                <div className='col'><button style={btnroe}>Quantity</button></div>
                <div className='col'><button style={btnroe}>Supplier</button></div>
                <div className='col'><button style={btnroe}>Status</button></div>
                <div className='col'><button style={btnroe}>Type</button></div>
                <div className='col'><button style={btnroe}>Tracking Number</button></div>
                <div className='col'><button style={btnroe}>Action</button></div>
              </div>
              </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Purchaselisting
