import React from 'react'

import './ProHeader.css'


const header={
    justifyContent:'center',
    paddingTop:'10px',
    paddingBottom:'10px',
    backgroundColor:'#FDE31A',
    width:'200px',
    fontSize:'20px',
    borderRadius:'20px',
    marginBottom:'40px',
    marginTop:'40px'
  
  }

function ProHeader() {

  
  
  return (
    <div align="center" id="headerMedia"  ><h3  style={header}> 
    <button  style={{backgroundColor:'transparent',borderColor:'transparent'}} >Trending Products</button> </h3>
    
  
  </div>
  )
}

export default ProHeader