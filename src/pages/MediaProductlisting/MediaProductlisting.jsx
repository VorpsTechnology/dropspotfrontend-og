import React from 'react'
import './MediaProductlisting.css'

const shipbtn={
    backgroundColor:'rgba(253, 227, 26, 1)',
    height:'50px',
    width:'150px',
    borderColor:'transparent',
    borderRadius:'20px'
}
const Storebtn={
    backgroundColor:'rgba(253, 227, 26, 1)',
    height:'50px',
    width:'150px',
    borderColor:'transparent',
    borderRadius:'20px' ,
    justifyContent:'left'  
}

function MediaProductlisting() {
  return (
    <div id="MediaProductListing">
      <div className='container-fluid' >
        <div className='row' id="listingbuttons">
            <div className='col'><button>Listing</button></div>
            <div className='col'><button>Queue</button></div>
            <div className='col'><button>On Listing</button></div>
            <div className='col' ><button>Listing Failed</button></div>
        </div>
        <div className='row' style={{paddingTop:'40px',paddingBottom:'40px'}}>
                    <div><button style={shipbtn}>Ship From</button> <span><select id="selectbox" name="cars">
                    <option value="volvo">Option</option>
                    <option value="saab">Option</option>
                    <option value="fiat">Option</option>
                    <option value="audi">Option</option>
                </select></span>
                </div>
        </div>
        
            <div className='row'style={{marginTop:'20px'}}>
                    <div ><button align="left" style={Storebtn}>Store</button> <span><select id="selectbox" name="cars">
                    <option value="volvo">China Warehouse</option>
                    <option value="saab">Option</option>
                    <option value="fiat">Option</option>
                    <option value="audi">Option</option>
                </select></span>
            </div>
        </div>

        <div className='row' >
            <h4 align="center" style={{paddingTop:'40px',paddingBottom:'40px'}}>Variant</h4>
        </div>

       
  </div>
    
    </div>
  )
}

export default MediaProductlisting
