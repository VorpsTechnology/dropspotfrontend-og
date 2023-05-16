import React from 'react'
import './ShoppingCard.css'
import etc from '../../assets/etc.png'
import WIX from '../../assets/WIX.png'
import ish from '../../assets/ish.png'
import wcom from '../../assets/wcom.png'

import d2c from '../../assets/d2c.png'
import shop from '../../assets/shop.png'
import magento from '../../assets/magento.png'
import bigcomerce from '../../assets/bigecomerce.png'


function ShoppingCard() {
  return (
   <div id='ShopingCard'>
    <div align="center" className='container'>
        <div align="center" className='row' >
            <div className='col-3'><img src={etc} alt="" /></div>
            <div className='col-3'><img src={WIX} alt="" /></div>
            <div className='col-3'><img src={ish} alt="" /></div>
            <div className='col-3'><img src={wcom} alt="" /></div>
        </div>
        <div  align="center"  className='row'>
            <div className='col'><img src={d2c} alt="" /></div>
            <div className='col'><img src={shop} alt="" /></div>
            <div className='col'><img src={magento} alt="" /></div>
            <div className='col'><img src={bigcomerce} alt="" /></div>
        </div>
    </div>
   </div>
  )
}

export default ShoppingCard