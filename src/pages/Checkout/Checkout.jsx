import React, { useState } from 'react'
import PageOne from '../CheckOutStep/PageOne'
import Navbar from '../../components/Navbar'
import Shopnavbar from '../../components/ShopNavbar/Shopnavbar'
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar'
import MediaFooter from '../../components/MediaFooter/MediaFooter'
import Footer from '../../components/Footer/Footer'
import { Tab } from '@headlessui/react';
function Checkout() {
  const tabpanls={
    padding:'30px',
  
  }

  const handelTabCLick = (e) => {
    setTabSelected(e);
  };
  const [tabSelected, setTabSelected] = useState(null);
  const buttonheader={
    backgroundColor:'#FDE31A',
    borderRadius:'15px',
    borderColor:'transparent',
    width:'auto',
    alignItems:'center',
    height:'80px',
    alignSelf:'center',
    boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',
    
  }
  return (
    <div>
        <Navbar />
        <MediaNavbar />
        <Shopnavbar />

        <Tab.Group >
       
        <div style={{marginLeft:"5rem"}}>
        <Tab.List className="flex space-x-1 rounded-xl  p-1"  defaultChecked="white" >

<Tab    className={`tabbtn3 ${tabSelected === 1 ? "selected-tab1" : ""}`}
            onClick={() => handelTabCLick(1)}>Pay Now !</Tab>
            <Tab    className={`tabbtn3 ${tabSelected === 2 ? "selected-tab1" : ""}`}
            onClick={() => handelTabCLick(2)}>PreOrder Inventory !</Tab>
</Tab.List>
        </div>


        <Tab.Panels style={tabpanls}>

        <Tab.Panel >
        <PageOne type={"PayNow"} />
       </Tab.Panel>

       <Tab.Panel  >
        <PageOne type={"PreOrder"}/>
      </Tab.Panel>
           
            </Tab.Panels>
           
    </Tab.Group>
      
        <MediaFooter />
        <Footer />
    </div>
  )
}

export default Checkout