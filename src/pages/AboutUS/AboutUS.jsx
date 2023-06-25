import React from 'react'
import Navbar from '../../components/Navbar'
import Shopnavbar from '../../components/ShopNavbar/Shopnavbar'
import Footer from '../../components/Footer/Footer'

function AboutUS() {
  return (
    <div>
      <div> 
    <Navbar/>
    <Shopnavbar/>
    
 <div className='container'>
 <div align='left' className='prihead' > <h4>About Us</h4> </div>
  <p style={{ padding:"5px 20px 20px 2px;"  }}>
  Dropspot is a new company started in 2023 by Huzaifa Nagaria (CEO) & his team, after years of experience in the reselling space, we have launched Dropspot to make reselling easier for every person in India, regardless of the location & qualification in the space.
  </p>
  <div align='left' className='prihead' > <h4>Our Mission </h4> </div>
  <p style={{ padding:"5px 20px 20px 2px;"  }}>
  Us at Dropspot helps everybody in India Dropship products to their customers, we have a lot of experience in Dropshipping in India, we have studied the market, learnt what are the problems in the market and how we can innovate and make it easier for everyone to access the same, so our customers have a business which mostly takes care of Itself while you can do whatever is it that you love to do to make life as blissful as you wish. 
  </p>
  <div align='left' className='prihead' > <h4>Making Your Business Easy</h4> </div>
  <p style={{ padding:"5px 20px 20px 2px;"  }}>

  You focus on marketing, while we focus on supplying services and products, including order fulfilment, wholesale, pre-order inventory, product sourcing, warehousing, etc. We want to save your time and money and help you remain competitive in today's fierce market. Your satisfaction is our top priority.

  </p>
 </div>
 <Footer/>
    </div>
    </div>
  )
}

export default AboutUS
