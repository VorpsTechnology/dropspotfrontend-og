import React from 'react'
import './Mediabutton.css'
import shippingbtn from'../../assets/shippingbtn.png'
import settingbtn from'../../assets/settingbtn.png'
import catogrybtn from'../../assets/catogrybtn.png'
import  '../../pages/ShippingCost/ShippingCost'
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import cato from '../../assets/cato.png'
import computer from '../../assets/computer.png'
import purse from '../../assets/purse.png'
import tablet from '../../assets/tablet.png'
import home from '../../assets/home.png'
import ring from '../../assets/ring.png'
import toy from '../../assets/toy.png'
import sticks from '../../assets/sticks.png'
import hat from '../../assets/hat.png'
import shirt from '../../assets/shirt.png'
import circuit from '../../assets/circuit.png'




function Mediabutton() {
  const history = useHistory();
  
  const ShippingCost = () => {
      history.push("/ShippingCost")
  } 
 
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



 
  

  return (
    <div id='mediabutton'>
      <div  className="container-fluid">
        <div align="center" className="row" >
            <div className="col"><button id='catory' onClick={ShippingCost}>
            
            <img  src={shippingbtn}  alt="" />
        
     
             
            </button>
            <div><p style={{fontSize:'12px'}}>  Shipping Calculation</p></div> </div>
            <div className="col">
            <Button  onClick={handleClickOpen}>
      <img src={catogrybtn} alt="" />
     
      </Button>
      <div><p style={{fontSize:'12px'}}>Catogries</p></div>
      
      <Dialog
       sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "500px",  // Set your width here
          },
        },
      }}
        open={open} onClose={handleClose}>
        <DialogTitle>
          <div align='center'>
          <div><img src={cato} alt="" /></div>
          <div><h6>All Catogries</h6></div>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          <div style={{display:'inline',justifyContent:'center'}}>
          <div align='center'>
              <table>
                <tr>
                  <td>
                  <button className="catogrybtns20"   > 
              <div className="flexContainer" style={{display:'flex'}}>
                <div className="flexutemleft" style={{marginLeft:'14px'}}><img src={purse} alt="" /></div>
                <div className="flexutemright" style={{marginLeft:'10px',fontSize:'12px'}}>Bags And Shoes</div>
              </div>
            </button>
                  
                  </td>
                </tr>
                <tr>
                  <td>
                  <button className="catogrybtns20"   > 
              <div className="flexContainer" style={{display:'flex'}}>
                <div className="flexutemleft" style={{marginLeft:'14px'}}><img src={home} alt="" /></div>
                <div className="flexutemright" style={{marginLeft:'10px',fontSize:'12px'}}>Home , Garden and Furniture</div>
              </div>
            </button>
                  
                  </td>
                </tr>

                <tr>
                  <td>
                  <button className="catogrybtns20"   > 
              <div className="flexContainer" style={{display:'flex'}}>
                <div className="flexutemleft" style={{marginLeft:'14px'}}><img src={ring} alt="" /></div>
                <div className="flexutemright" style={{marginLeft:'10px',fontSize:'12px'}}>Jewellary and Watches</div>
              </div>
            </button>
                  </td>
                </tr>
                <tr>
                  <td>
                  <button className="catogrybtns20"   > 
              <div className="flexContainer" style={{display:'flex'}}>
                <div className="flexutemleft" style={{marginLeft:'14px'}}><img src={home} alt="" /></div>
                <div className="flexutemright" style={{marginLeft:'14px',fontSize:'12px'}}>Home Improvement</div>
              </div>
            </button>
                  </td>
                </tr>
                <tr>
                  <td>
                  <button className="catogrybtns20"   > 
              <div className="flexContainer" style={{display:'flex'}}>
                <div className="flexutemleft" style={{marginLeft:'14px'}}><img src={tablet} alt="" /></div>
                <div className="flexutemright" style={{marginLeft:'14px',fontSize:'12px'}}>Health,Beauty and Hairs</div>
              </div>
            </button>
                  </td>
                </tr>
                <tr>
                  <td>
                  <button className="catogrybtns20"   > 
              <div className="flexContainer" style={{display:'flex'}}>
                <div className="flexutemleft" style={{marginLeft:'14px'}}><img src={computer} alt="" /></div>
                <div className="flexutemright" style={{marginLeft:'14px',fontSize:'12px'}}>Automobiles & MotorCycles </div>
              </div>
            </button>
                  </td>
                </tr>
              </table>
            </div>
            <div align='center'>
            <table>
                <tr>
                  <td>
                  <button className="catogrybtns20"   > 
              <div className="flexContainer" style={{display:'flex'}}>
                <div className="flexutemleft" style={{marginLeft:'14px'}}><img src={purse} alt="" /></div>
                <div className="flexutemright" style={{marginLeft:'14px',fontSize:'12px'}}>Women's Clothing</div>
              </div>
            </button>
                  </td>
                </tr>
                <tr>
                  <td>
                  <button className="catogrybtns20"   > 
              <div className="flexContainer" style={{display:'flex'}}>
                <div className="flexutemleft" style={{marginLeft:'14px'}}><img src={toy} alt="" /></div>
                <div className="flexutemright" style={{marginLeft:'14px',fontSize:'12px'}}>Toys,Kids and Movies</div>
              </div>
            </button>
                  </td>
                </tr>
                <tr>
                  <td>
                  <button className="catogrybtns20"   > 
              <div className="flexContainer" style={{display:'flex'}}>
                <div className="flexutemleft" style={{marginLeft:'14px'}}><img src={sticks} alt="" /></div>
                <div className="flexutemright" style={{marginLeft:'14px',fontSize:'12px'}}>Sports and Outdoors</div>
              </div>
            </button>
                  </td>
                </tr>
                <tr>
                  <td>
                  <button className="catogrybtns20"   > 
              <div className="flexContainer" style={{display:'flex'}}>
                <div className="flexutemleft" style={{marginLeft:'14px'}}><img src={shirt} alt="" /></div>
                <div className="flexutemright" style={{marginLeft:'14px',fontSize:'12px'}}>Mens's Clothing</div>
              </div>
            </button>
                  </td>
                </tr>
                <tr>
                  <td>
                  <button className="catogrybtns20"   > 
              <div className="flexContainer" style={{display:'flex'}}>
                <div className="flexutemleft" style={{marginLeft:'14px'}}><img src={circuit} alt="" /></div>
                <div className="flexutemright" style={{marginLeft:'14px',fontSize:'12px'}}>Customer's Electronic</div>
              </div>
            </button>
                  </td>
                </tr>
                <tr>
                  <td>
                  <button className="catogrybtns20"   > 
              <div className="flexContainer" style={{display:'flex'}}>
                <div className="flexutemleft"  style={{marginLeft:'14px'}}><img src={hat} alt="" /></div>
                <div className="flexutemright" style={{marginLeft:'14px',fontSize:'12px'}}>Phone & Accessories</div>
              </div>
            </button>
                  </td>
                </tr>
                <tr>
                  <td>
                  <button className="catogrybtns20"   > 
              <div className="flexContainer" style={{display:'flex'}}>
                <div className="flexutemleft" style={{marginLeft:'14px'}}><img src={computer} alt="" /></div>
                <div className="flexutemright" style={{marginLeft:'14px',fontSize:'12px'}}>Computer & Office</div>
              </div>
            </button>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          </DialogContentText>
       
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
            <div>
            <div>
  
    </div>
              </div> </div>
            <div className="col"><button id='catory' ><img  src={settingbtn}  alt="" /></button>
            <div><p style={{fontSize:'12px'}}> Our Services</p></div> </div>
            <div >
            </div>
            <div>
       
           
        </div>
        
          
          
        </div>
      </div>
    </div>
  )
}

export default Mediabutton
