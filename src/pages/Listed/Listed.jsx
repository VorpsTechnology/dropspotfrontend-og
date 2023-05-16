import React , {useState} from 'react'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import Sidebar from '../Sidebar/Sidebar'

import './Listed.css'
import 'bootstrap/dist/css/bootstrap.css';

import { Tab } from '@headlessui/react';


function Listed() {

const  productbtn={
    backgroundColor:'transparent',
    borderColor:'transparent',
    padding:'5px',
    
}
const skubntdate={
    width:'300px',
 
    height:'35px',
    borderColor:'transparent',
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
    borderRadius: '10px',
   
    backgroundColor:'rgba(231, 231, 231, 1)',
    color: 'rgba(50, 51, 58, 1)',
    fontSize: '13px',
   
    outlineColor:'rgba(0, 0, 0, 0.15)',  
   }
const serchbtn={
    backgroundColor:'#FDE31A',
    borderColor:'transparent',
    borderRadius:'10px',
    
    padding:'10px',
    outlineColor:'#FDE31A',
    marginRight:'10px',
    fontSize:'15px',
    width:'150px',
    fontWeight:'650',
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
}
const Product={
    backgroundColor:'#FDE31A',
    borderColor:'transparent',
    padding:'5px',
    width:'150px',
    borderRadius:'10px'  
}


  const buttonheader={
    backgroundColor:'#FDE31A',
    borderRadius:'15px',
    width:'auto',
    alignItems:'center',
    height:'80px',
    alignSelf:'center'
    
  }

  const tabpanls={
    padding:'30px',

  }
  const handelTabCLick = (e) => {
    setTabSelected(e);
  };

  const [tabSelected, setTabSelected] = useState(null);
  return (
    <div style={{backgroundColor:'#31343A',padding:'0px 0px 0px 0px'}}>
        <Adminnavbar />
        <div className='row'>
            <div className='col-2' style={{backgroundColor:'#31343A'}}>
                <Sidebar />
            </div>
            <div className='col-10' style={{height:'800px'}}>
                <div className='container' id="tabcontainer" style={{margin:'20px 0px 20px 10px',width:'1100px', padding:'20px',}}>
                <div className='headingAll'><h2>Listing</h2></div>
                    <Tab.Group>
                    <div className='conatiner' style={buttonheader}>

                    <Tab.List  className="flex space-x-1 rounded-xl  p-1" >
                    <Tab   className={`tabbtn3 ${tabSelected === 1 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(1)}>Listed</Tab>
                    <Tab   className={`tabbtn3 ${tabSelected === 2 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(2)}>On Listing</Tab>
                    <Tab   className={`tabbtn3 ${tabSelected === 3 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(3)}>Queue</Tab>
                    <Tab   className={`tabbtn3 ${tabSelected === 4 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(4)}>Listing Failed</Tab>
                                
                            
                    </Tab.List>
                        </div>
                            
                        
                        
        <Tab.Panels style={tabpanls}>
         <Tab.Panel>
                            <div className='container' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',padding:'20px'}} >
                            <div className='Dashboardheading'><h3>Listed</h3></div>
                            <div className='row' style={{marginTop:'20px'}}>
                                            <div className='col'><select style={skubntdate}  name="AllStores" id="AllStores">
                                                <option value="AllStores">All Stores</option>
                                                <option value="AllStores">#lknn</option>
                                                <option value="AllStores">#nlknnl</option>
                                                </select></div>
                                            <div className='col'><input style={skubntdate} placeholder='Enter SKU/Product name' type="text" name="" id="" /></div>
                                            
                                        </div>
                                        <div style={{marginTop:'20px'}}><button style={serchbtn}>Search</button></div>  
       
               
         </div>
         <div className='container' style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1000px' ,overflowX:'scroll'}}>
           <div style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1000px' }}>
             <div >
             <div className='row' style={{padding:'7px',backgroundColor:'#FDE31A',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px',width:'1800px',marginRight:'100px' }}>
             <div className='col'><button style={productbtn}>Products</button></div>
                <div className='col'><button  style={productbtn}>Store Name</button></div>
                <div className='col'><button  style={productbtn}>Price</button></div>
                <div className='col'><button  style={productbtn}>Weight</button></div>
                <div className='col'><button  style={productbtn}>Shipping From</button></div>
                <div className='col'><button  style={productbtn}>Shippping Method</button></div>
                <div className='col'><button  style={productbtn}>Shippping Cost</button></div>
                <div className='col'><button  style={productbtn}>Amount</button></div>
                <div className='col'><button  style={productbtn}>Action</button></div>
               </div>
           
             </div>
           </div>

         </div>
         
            <div className='row' style={{marginLeft:'400px',marginTop:'40px'}}>
           <div><button  style={Product}>Add Products</button></div>
             </div>
                 </Tab.Panel>
                            <Tab.Panel>
                            <div className='container' style={{ display: 'block',color:'black',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px',padding:'20px' }}>
                            <div className='Dashboardheading'><h3>On Listing</h3></div>
                            <div className='row' style={{marginTop:'20px'}}>
                                            <div className='col'><select style={skubntdate} name="AllStores" id="AllStores">
                                                <option value="AllStores">All Stores</option>
                                                <option value="AllStores">#lknn</option>
                                                <option value="AllStores">#nlknnl</option>
                                                </select></div>
                                            <div className='col'><input style={skubntdate}  placeholder='Enter SKU/Product name' type="text" name="" id="" /></div>
                                            
                                        </div>
                                        <div style={{marginTop:'20px'}}><button style={serchbtn}>Search</button></div>
                            </div>
                            <div className='container' style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1000px' ,overflowX:'scroll'}}>
           <div style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'auto' }}>
             <div >
             <div className='row' style={{padding:'7px',backgroundColor:'#FDE31A',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px',width:'1200px',marginRight:'100px' }}>
             <div className='col'><button style={productbtn}>Products</button></div>
                <div className='col'><button  style={productbtn}>Store Name</button></div>
               <div className='col'><button  style={productbtn}>Price</button></div>
                <div className='col'><button  style={productbtn}>Shipping From</button></div>
                <div className='col'><button  style={productbtn}>Shippping Method</button></div>
                <div className='col'><button  style={productbtn}>Status</button></div>
               </div>
           
             </div>
           </div>

         </div>

            <div className='row' style={{marginLeft:'400px',marginTop:'40px'}}>
                <div><button  style={Product}>Add Products</button></div>
             </div>
                            </Tab.Panel>
                            <Tab.Panel>
                            <div className='container' style={{ display: 'block',color:'black',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px',padding:'20px' }}>
                            <div className='Dashboardheading'><h3>Queue</h3></div>
                            <div className='row' style={{marginTop:'20px'}}>
                            <div className='col'>
                                    <p> <span ><input type="checkbox" /></span> Products</p>
                                        </div>
                                        <div className='col' style={{color:'black'}}>Price</div>
                                        <div className='col' style={{color:'black'}}>Action</div>
                                            
                                        </div>
                                        <div style={{marginTop:'20px'}}><button style={serchbtn}>Search</button></div>
                            </div>
                            <div className='container' style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1000px' ,overflowX:'scroll'}}>
           <div style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'auto' }}>
             <div >
             <div className='row' style={{padding:'7px',backgroundColor:'#FDE31A',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px',width:'1200px',marginRight:'100px' }}>
             <div className='col'><button style={productbtn}>Products</button></div>
                   <div className='col'><button  style={productbtn}>Store Name</button></div>
                   <div className='col'><button  style={productbtn}>Price</button></div>
                  <div className='col'><button  style={productbtn}>Shipping from</button></div>
                <div className='col'><button  style={productbtn}>Shipping Method</button></div>
                <div className='col'><button  style={productbtn}>Status</button></div>
               </div>
           
             </div>
           </div>

         </div>
        </Tab.Panel>
                            <Tab.Panel>
                            <div className='container' style={{ display: 'block',color:'black',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px',padding:'20px' }}>
                            <div className='Dashboardheading'><h3>Listing Failed</h3></div>
                            <div className='row' style={{marginTop:'20px'}}>
                                            <div className='col'><select style={skubntdate}  name="AllStores" id="AllStores">
                                                <option value="AllStores">All Stores</option>
                                                <option value="AllStores">#lknn</option>
                                                <option value="AllStores">#nlknnl</option>
                                                </select></div>
                                            <div className='col'><input style={skubntdate} placeholder='Enter SKU/Product name' type="text" name="" id="" /></div>
                                          
                                        </div>
                                        <div style={{marginTop:'20px'}}><button style={serchbtn}>Search</button></div>
                            </div>

                          
                                       
                                       
                                        
                            </Tab.Panel>
                        </Tab.Panels>
                        
                    </Tab.Group>
                </div>  
            <div>
            
            </div>
            </div>
        </div>
       
      </div>

  )
}

export default Listed
