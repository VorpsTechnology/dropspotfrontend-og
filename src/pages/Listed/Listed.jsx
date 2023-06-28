import React , {useEffect, useState} from 'react'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import Sidebar from '../Sidebar/Sidebar'

import './Listed.css'
import 'bootstrap/dist/css/bootstrap.css';
import DataTable from 'react-data-table-component'
import { Tab } from '@headlessui/react';
import { getUser } from '../../Api/UserRequest';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Dashboardfooter from '../../components/Dashboardfooter/Dashboardfooter';
import illustration from '../../assets/illustration.jpg'


function Listed() {
  document.body.style.backgroundColor = "#32333A"
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
  const history=useHistory()
  const [tabSelected, setTabSelected] = useState(null);
  const [filterUsers,setFilteredUsers]=useState([]);

const userId=localStorage.getItem("userId")
  useEffect(() => {
    async function fetchData() {
      // You can await here
   const {data}=await getUser(userId)
   console.log("userData",data);

   setFilteredUsers(data?.afterListing)
    }
    
    fetchData();
  }, []); 
  const coloumn=[
    {name:"Sl",selector:(row,index)=>index+1,style: {
      color: "gray",
      }},
    {name:"Image",selector:(row)=>(
     <img style={{width:"7rem"}} src={''} alt="No img" />
    ) ,style: {
        color: "gray",
        }},
        {name:"Product Name",selector:(row)=>row[0]?.name,style: {
          color: "gray",
          }},
        {name:"Store Name",selector:(row)=>`${row?.shopify}.myshopify.com `,style: {
         color: "gray",
         }},
        {name:"Price",selector:(row)=>
          row[0] ?.price
       ,style: {
            color: "gray",
            }},
            {name:"Listed Price",selector:(row)=>row[0] ?.dropshipperPrice,style: {
              color: "gray",
              }},
    
        {name:"Seller Name",selector:(row)=>row[0]?. 
        sellerName,style: {
            color: "gray",
            }},
          {name:"Category",selector:(row)=>row[0]?.category  ,style: {
            color: "gray",
            }},
  
        {name:"Listed Quantity",selector:(row)=>row[0]?.dropshipperQuantity,style: {
        color: "gray",
        }},
       
    
        {name:"Action",selector:(row)=>
        <div>
           <div>
        <button className='button' style={{background:"#FFE51A",borderColor:'transparent',color:"white",margin:"5px", padding:"10px",width:'150px',borderRadius:'auto',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
      onClick={()=>alert()}
      >Preorder</button>
        </div>
        <div>
        <button className='button' style={{background:"#FFE51A",borderColor:'transparent',color:"white",margin:"5px", padding:"10px",width:'150px',borderRadius:'auto',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
      onClick={()=>alert()}
      >Request Photography</button>
        </div>
      <div>
        <button className='button' style={{background:"black",borderColor:'transparent',color:"white",margin:"5px", padding:"10px",width:'150px',borderRadius:'auto',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
      onClick={()=>alert()}
      >Remove Listed</button>
        </div>





        </div> },
   
              
  ]

  const customStyles={
    headCells: {
    style: {
     backgroundColor:'#FFE627',marginTop:'20px',
     height:"60px",
     fontWeight:"500px",
     fontSize:"16px"
    },
    },
    cells: {
    style: {
    //  paddingLeft: '8px', // override the cell padding for data cells
    //  paddingRight: '8px',
     width:"15rem",
     height:"auto"
    
    },
    },
    }


  return (
    <div style={{backgroundColor:'#31343A',padding:'0px 0px 0px 0px'}}>
        <Adminnavbar />
        <div className='row' style={{marginTop:'100px'}}>
            <div className='col-2' style={{backgroundColor:'#31343A'}}>
                <Sidebar />
            </div>
            <div className='col-10' >
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
         <div className='container' style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1000px' }}>
           <div style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1000px' ,boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)"}}>
             <div >
             {filterUsers.length === 0 ? (
              <div className='text-center' >
                <img src={illustration} alt='illustration' style={{ width: '300px' }}/>
              </div>
            ) : (
              <DataTable
                columns={coloumn}
                data={filterUsers}
                pagination
                customStyles={customStyles}
                highlightOnHover
              />
            )}
          
            {/* {/* ACTION BUTTONS * REMOVE LISTING SECONDARY BUTTON * REQUEST PHOTOGRAPHY * PRE ORDER * /} */}
               {/* <DataTable 
        
        columns={coloumn} 
        data={filterUsers} 
        pagination
        
        customStyles={customStyles}
        highlightOnHover
      
        
      
        // data={data}
      /> */}
             </div>
           </div>

         </div>
         
            <div className='row' style={{marginLeft:'400px',marginTop:'40px'}}>
           <div><button  style={Product} onClick={()=>{
                  history.push ("/")
                }}>Add Products</button></div>
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
                <div><button  style={Product} onClick={()=>{
                  history.push ("/")
                }}>Add Products</button></div>
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
        <div className='row'>
          <Dashboardfooter />
        </div>
       
      </div>

  )
}

export default Listed
