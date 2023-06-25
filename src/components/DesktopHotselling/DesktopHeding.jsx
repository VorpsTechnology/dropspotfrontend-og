import React from 'react'
import '../Trending/Trending.css'
const header={
    justifyContent:'center',
    paddingTop:'20px',
    paddingBottom:'20px',

   

}
function TrendingHeader() {
  return (
    <div id="header" >
       <div  style={header}>
      <h2 align='center' >Hotselling Products</h2>
    </div>
    </div>
   
  )
}

export default TrendingHeader
