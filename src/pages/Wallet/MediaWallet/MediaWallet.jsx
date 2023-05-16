import React from 'react'
import './MediaWallet.css'
import MediaNavbar from '../../../components/MediaNavbar/MediaNavbar'
import avatar from '../../../assets/avatar.png'
import coin from '../../../assets/coin.png'
import { useHistory } from "react-router-dom";

function MediaWallet() {

    let history = useHistory();
  
    function handleWithdrawal() {
      history.push("/WithDraw");
    }
    function handleRechage() {
        history.push("/Recharge");
      }

  return (
    <div className='container-fluid' id='mediaWallet'>
        <MediaNavbar />
        <div className='Walletupper' >
            <div className='flecd' style={{display:'flex',justifyContent:'space-between',margin:'10px'}}>
                <div className='flexa' style={{justifyContent:'left'}}><img style={{height:'50px'}} src={avatar} alt="" /></div>
                <div className='flexp' style={{justifyContent:'center'}}><h6>User Name</h6></div>
                <div className='flexe' style={{justifyContent:'right'}}><img src={coin} alt="" /></div>

            </div>
            <div className='flecg' style={{display:'flex',justifyContent:'space-between',margin:'20px'}}>
                <div className='flexf' style={{justifyContent:'left'}}> <h6 className='head'>Amount</h6> </div>
                <div className='flexk' style={{justifyContent:'center'}}> <input className='amoutinput20' type="text" /> </div>
               

            </div>
            <div className='flecl' style={{display:'flex',justifyContent:'space-between',margin:'5px'}}>
                <div className='flexs' style={{justifyContent:'left'}}>
                   <div align='center'>
                   <div> <h6 className='head'> Pending</h6></div>
                    <div><input className='input20' type="text" /></div>
                   </div>
                </div>
                <div className='flexn' style={{justifyContent:'center'}}>
                <div align='center'>
                   <div> <h6 className='head'>Withdrawable</h6></div>
                    <div><input className='input20' type="text" /></div>
                   </div>
                    </div>
                <div className='flexp' style={{justifyContent:'right'}}>
                <div align='center'>
                   <div> <h6 className='head'>Frozen</h6></div>
                    <div><input className='input20' type="text" /></div>
                   </div>
                </div>

            </div>
        </div>
        <div className='moretabs' style={{marginTop:'30px'}}>
            <div  onClick={handleRechage} className='card' id='Rechagre'>
            <div style={{display:'flex',margin:'30px'}}>
                <div><img src="" alt="" /></div>
                <div><h5>Recharge</h5></div>
                
            </div>
            </div>
            <div>
            <div onClick={handleWithdrawal} className='card' id='Rechagre'>
            <div style={{display:'flex',margin:'30px'}}>
            <div><img src="" alt="" /></div>
                <div><h5>Withdrawal</h5></div>
            </div>
            </div>
        
            </div>
        </div>
      
    </div>
  )
}

export default MediaWallet
