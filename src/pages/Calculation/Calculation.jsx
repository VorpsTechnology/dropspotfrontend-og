import React from 'react';
import Navbar from '../../components/Navbar'
import Shopnavbar from '../../components/ShopNavbar/Shopnavbar';
import './Calculation.css'
import Footer from '../../components/Footer/Footer'


function Calculation() {


    const calbtn={
       marginTop:'40px',
       marginLeft:'40px',
       backgroundColor:'#FFD600',
       borderColor:'transparent',
       width:'200px',
       height:'50px',
       borderRadius:'20px',
       marginBottom:'40px'
    }

  return (
    <div>
      <Navbar />
      <br />
      <Shopnavbar />
      <br />
       <div align="center"><h2 style={{marginLeft:'50px',marginTop:'20px',marginBottom:'40px'}}>Shipping Cost Calculation </h2></div>
       <div className='container' id="formcontainer" style={{padding:'10px',marginBottom:'30px'}}>
       <form action="">

        <div className='flexcontainer'>
            <div className='flex-left'><h4>Plateform</h4></div>
            <div className='flex-right'>
            <select className='inputbox' name="" id="">
            <option value="">Please select</option>
            </select>
            </div>
        </div>
        <div>
        <div className='flexcontainer'>
            <div className='flex-left'><h4>Shipping From</h4></div>
            <div className='flex-right'>
            <select className='inputbox' name="" id="">
            <option value="">Plaese select</option>
            </select>
            </div>
        </div>
        <div className='flexcontainer'>
            <div className='flex-left'><h4>Shipping To</h4></div>
            <div className='flex-right'>
            <select className='inputbox' name="" id="">
            <option value="">Plaese select</option>
            </select>
            </div>
        </div>
        </div>
        <div className='flexcontainer'>
            <div className='flex-left'><h4>Postcode</h4></div>
            <div className='flex-right'>
            <input className='inputbox'  type="text" />
            </div>
        </div>
        <div className='flexcontainer'>
            <div className='flex-left'><h4>Size:</h4></div>
            <div className='flex-right'>
            <div ><input className='inputbox' type="text" />
            </div>
        </div>
        
        
       
            
           
        </div>
        <div className='flexcontainer'>
            <div className='flex-left'><h4>Weight</h4></div>
            <div className='flex-right'>
            <div > <input className='inputbox'  type="number" />
            </div>
        </div>   
        </div>
          <div  align="center"  className='row' style={{backgroundColor:'#FDE31A',padding:'20px 50px 20px 50px',borderRadius:'10px'}}>
          <div className='row' style={{justifyContent:"center"}}>
            <div className='col-md-auto'><span style={{paddingRight:'10px'}}><input type="checkbox" /></span>Ordinary</div>
             <div className='col-md-auto'><span style={{paddingRight:'10px'}}><input type="checkbox" /></span> Electronic</div>
                        <div className='col-md-auto'><span style={{paddingRight:'10px'}}><input type="checkbox" /></span>Battery contains</div>
                        <div className='col-md-auto'><span style={{paddingRight:'10px'}}><input type="checkbox" /></span>Pure Battery</div>
                        <div className='col-md-auto'><span style={{paddingRight:'10px'}}><input type="checkbox" /></span>Liquid Contains</div>
                        <div className='col-md-auto'><span style={{paddingRight:'10px'}}><input type="checkbox" /></span>Powder</div>


                            <div className='col-md-auto'><span style={{marginRight:'10px'}}><input type="checkbox" /></span>Imitation Brand</div>

            </div>
            
                <div className='row' style={{paddingTop:'10px',justifyContent:'center'}}>
                 <div className='col-md-auto'><span style={{marginRight:'10px'}}><input type="checkbox" /></span>Custom Ban</div>
                <div  className='col-md-auto'><span  style={{marginRight:'10px'}}><input type="checkbox" /></span>Magnetic Contains</div>
                <div className='col-md-auto'><span style={{paddingRight:'10px'}}><input type="checkbox" /></span>Cream</div>
                            <div className='col-md-auto'><span style={{marginRight:'10px'}}><input type="checkbox" /></span>Oversize</div>
                            <div className='col-md-auto'><span style={{marginRight:'10px'}}><input type="checkbox" /></span>Thin</div>
                                                  <div className='col-md-auto'><span style={{marginRight:'10px'}}><input type="checkbox" /></span>Sharp</div>
                            <div className='col-md-auto'><span style={{marginRight:'10px'}}><input type="checkbox" /></span>other</div>
                </div>
         </div>
      <div align="center" ><button style={calbtn}>Calculate</button></div>
      
     
        </form>
      
       </div>
     
      
       <Footer />
       </div>
       
     
    

  )
}

export default Calculation
