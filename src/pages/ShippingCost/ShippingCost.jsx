import React from 'react'
import './ShippingCost.css'
import  shippingcost from '../../assets/shippingCost.png'
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar'



function ShippingCost() {

  return (
    <>
     <MediaNavbar />
    <div id="ShippingCost" className='container-fluid'  >
      
      <div align="center" style={{marginTop:'40px'}}> <p><img src={shippingcost} alt="" /> <span><h5 className='shippingheading'>Shipping Cost</h5></span></p></div>
      <div align="center" className='container'>
      <div   style={{marginBottom:'10px'}} >
        
        <div align="center">
          <form align="left">
            <div>
              <label  htmlFor="cars">Platform</label>
              <select className='selectbox' id="cars" name="cars">
                <option value="volvo">Please Select</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div>
              <label htmlFor="cars">Shipping From:</label>
              <select className='selectbox' id="cars" name="cars">
                <option value="volvo">Please Select</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <br />
            <div >
              <label  htmlFor="cars" >Shipping To</label>
              <select className='selectbox' id="cars" name="cars" >
                <option value="volvo">Please Select</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <br />
            <div>
              <label htmlFor="cars">Postcode</label>
              <input className='selectbox' id="cars" type="text" name />
            </div>
            <div>
              <label htmlFor="cars">Shipping Method</label>
              <select className='selectbox' id="cars" name="cars" >
                <option value="volvo">All</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div>
            <label htmlFor="cars">weight</label>
              <input className='selectbox' id="cars" type="number" name />
            </div>
            
            <label>Attributes</label>
            <div style={{margin:'5px'}}>
            <input type="checkbox" id="scales" name="scales" /><span> <label style={{color:'black'}} htmlFor="scales"> Scales</label></span>&nbsp;
            <input type="checkbox" id="scales" name="scales" /><span><label style={{color:'black'}} htmlFor="scales"> Electronic</label></span>&nbsp;
            <input type="checkbox" id="scales" name="scales" /><span> <label  style={{color:'black'}}htmlFor="scales"> Battery Contains</label></span><br />&nbsp;
            <input type="checkbox" id="scales" name="scales" /><span> <label  style={{color:'black'}}htmlFor="scales"> Magnetic Conatines</label></span>&nbsp;
            <input type="checkbox" id="scales" name="scales" /><span> <label  style={{color:'black'}}htmlFor="scales"> Sharp</label></span>&nbsp;
            <input type="checkbox" id="scales" name="scales" /><span> <label  style={{color:'black'}}htmlFor="scales"> Custom Ben</label></span>&nbsp;
            </div>
            <div>
              <input type="checkbox" id="horns" name="horns" />
              <label htmlFor="horns" style={{color:'black'}}>Pure Battery</label>&nbsp;
              <input type="checkbox" id="horns" name="horns" />
              <label htmlFor="horns" style={{color:'black'}}>Liquid Contains</label>&nbsp;
              <input type="checkbox" id="horns" name="horns" />
              <label htmlFor="horns" style={{color:'black'}}>Powder</label>&nbsp;
              <input type="checkbox" id="horns" name="horns" />
              <label htmlFor="horns" style={{color:'black'}}>Cream</label>&nbsp;
              <input type="checkbox" id="horns" name="horns" />
              <label htmlFor="horns" style={{color:'black'}}>Imitation Brand</label>&nbsp;
              <input type="checkbox" id="horns" name="horns" />
              <label htmlFor="horns" style={{color:'black'}}>Oversize</label>&nbsp;
              <input type="checkbox" id="horns" name="horns" />
              <label htmlFor="horns" style={{color:'black'}}>Thin</label>&nbsp;
              <input type="checkbox" id="horns" name="horns" />
              <label htmlFor="horns" style={{color:'black'}}>Flat</label>&nbsp;
            </div>
            <div>
            
            </div>
          </form>
          
        </div>
        <div align="left" style={{marginTop:'40px'}}><button className='Calculatebtn'>Calculate</button></div>
      </div>
      </div>
    </div>
    
    </>
   
  )
}

export default ShippingCost

