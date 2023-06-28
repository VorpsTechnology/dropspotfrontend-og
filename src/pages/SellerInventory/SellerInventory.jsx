import React, { useEffect, useState } from "react";
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import SellerSidebar from '../SellerDashboard/SellerSidebar'
import 'bootstrap/dist/css/bootstrap.css';

import { Tab } from '@headlessui/react';
import DataTable from 'react-data-table-component';
import Dashboardfooter from "../../components/Dashboardfooter/Dashboardfooter";

import { getAllProducts } from '../../Api/ProductRequest';
import { mypreOrders, preOrderFullFill, sellerOrders, sellerpreOrders } from "../../Api/OrderRequest";
import swal from "sweetalert";
function SellerInventory() {
  document.body.style.backgroundColor = "#32333A"

const btnrow={
    backgroundColor:'transparent',
    borderColor:'transparent',
    padding:'10px',
    fontWeight:'400',
    fontSize:'15px',
    color:'black'
  }
  
  const skubnt={
    width:'300px',
    height:'35px',
    borderColor:'transparent',
  
    borderRadius: '86px',
    backgroundColor:'rgba(231, 231, 231, 1)',
    color: 'rgba(50, 51, 58, 1)',
    fontSize: '15px',
    paddingLeft: '20px',
    outlineColor:'transparent', 
    boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',
  }
  
  
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
  
  const tabpanls={
    padding:'30px',
  
  }
  
  const tranferbtn={
    backgroundColor:'#FFE51A',
    borderColor:'transparent',
    padding:'5px',
    borderRadius:'10px',
    boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',
  }

 
  const Clearbtn={
    backgroundColor:'black',
    borderColor:'transparent',
    borderRadius:'10px',
    width:'150px',
    padding:'7px',
    marginLeft:'1px',
    fontWeight:'650',
    color:'white',
    boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',
   
 }

  const serchbtn={
    backgroundColor:'#FFE51A',
    borderColor:'transparent',
    borderRadius:'10px',
    width:'150px',
    padding:'7px',
    marginLeft:'1px',
    fontWeight:'650',
    color:'black',
    boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',
  }
  const handelTabCLick = (e) => {
    setTabSelected(e);
  };
  const [tabSelected, setTabSelected] = useState(null);


  const userId=localStorage.getItem("userId")
    const[users,setUsers]=useState([]);
const [search,setSearch]=useState("");
const [filterUsers,setFilteredUsers]=useState([]);

useEffect(() => {
  async function fetchData() {
    // You can await here
    const ata={userId:userId,type:"preOrder"}
    const {data}=await sellerpreOrders(ata)
    setUsers(data)
    setFilteredUsers(data)
    console.log("gaiii",data);
    // ...
  }
  fetchData();
}, []); // Or [] if effect doesn't need props or state

// useEffect(()=>{
//   const result=users.filter((user)=>{
//       return user.firstname.toLowerCase().match(search.toLowerCase());
      
//   })
//   setFilteredUsers(result)
// },[search,users])
const handleFullFillPreOrder=async(dat,sat)=>{
  const ata={
    orderId:dat,
    status:sat
  } 
  const {data}=await preOrderFullFill(ata)
  if(data){
    swal(`${sat} PreOrder !`)
  }else{
    swal("error occuired")
  }
 }
const coloumn=[
  {selector:(row)=>row._id,style: {
      color: "gray",
      }},
      {selector:(row)=>{
        if(row.pending==true){
          return "Pending"
        }
      },style: {
          color: "gray",
          }},
  {selector:(row)=>row.productName,style: {
      color: "gray",
      }},
      
        {selector:(row)=>row.quantity,style: {
          color: "gray",
          }},
  {selector:(row)=>row.
    paymentMod,style: {
      color: "gray",
      }},{selector:(row)=>"xxxx",style: {
          color: "gray",
          }},
          {selector:(row)=>row.price,style: {
              color: "gray",
              }},
  {name:"ACTION ",selector:(row)=>
  <div style={{display:"inline"}}>
{
  <>
  <div>
  <button className='button' style={{background:"#FFE51A",color:"black",borderColor:'transparent',marginBottom:"10px",marginLeft:"5px",padding:"10px",width:'100px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
  onClick={()=>handleFullFillPreOrder(row._id,"Accepted")}
  >Edit </button>
    </div> 
    <div>
      
    <button className='button' style={{background:"black",borderColor:'transparent',color:"white",marginLeft:"5px",marginBottom:"10px", padding:"10px",width:'100px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
  onClick={()=>handleFullFillPreOrder(row._id,"Declined")}
  >Delete</button>
    </div>
</>
}
    {row.preOrderFullfill=="Requested"?<>
      <div>
      <button className='button' style={{background:"#FFE51A",color:"black",borderColor:'transparent',marginBottom:"10px",marginLeft:"5px",padding:"10px",width:'100px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
      onClick={()=>handleFullFillPreOrder(row._id,"Accepted")}
      >Accept </button>
        </div> 
        <div>
          
        <button className='button' style={{background:"black",borderColor:'transparent',color:"white",marginLeft:"5px",marginBottom:"10px", padding:"10px",width:'100px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
      onClick={()=>handleFullFillPreOrder(row._id,"Declined")}
      >Decline</button>
        </div>
    </>:""}
            
           
       </div>
     
      },
            
]
  return (
    <>
    <Adminnavbar />
    <div className='row' style={{backgroundColor:'#32333A',marginTop:'100px',marginBottom:'100px'}}>
        <div className='col-2' ><SellerSidebar /></div>
        <div className='col-10'>
       
        
        <div className='container' id="tabcontainer" style={{margin:'20px 20px 20px 20px',width:'auto', padding:'20px',}}>
        <div className='headingAll'><h2>My Inventory</h2></div>
      <Tab.Group >
      <div className='conatiner' style={buttonheader}>
      <Tab.List className="flex space-x-1 rounded-xl  p-1"  defaultChecked="white" >
      <Tab    className={`tabbtn3 ${tabSelected === 1 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(1)}>My Inventory</Tab>
                    <Tab    className={`tabbtn3 ${tabSelected === 2 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(2)}>Connected  Inventory</Tab>
                    <Tab    className={`tabbtn3 ${tabSelected === 3 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(3)}>Preordered Inventory</Tab>
                
              
              </Tab.List>
         </div>
          <Tab.Panels style={tabpanls}>
            <Tab.Panel 
            >
           
           <div className='container' style={{ display: 'block',color:'black',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px',padding:'20px' }}>
            <div className='Dashboardheading'><h3>Sourching Inventory</h3></div>
                  <div className='row' style={{marginTop:'20px'}}>
                    
                    <div className='col-6'>
                    <input style={skubnt}  placeholder='Enter Product SKU'  type="text" name="" id="" />
                    <div style={{margin:'20px'}}> <button style={serchbtn}  >Search</button></div>
                    </div>
                    <div className='col-3'>
                    <p> Total Value:<span style={{margin:'10px'}} ><input type="checkbox" name="" id="" /></span> Product In Stock .</p>
                    
                    </div>
                    <div className='col-3'>
                  <button style={serchbtn} >Transfer record</button>
                    
                    </div>
                  
                  </div>
                  </div>
                  <div className='container' style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'auto',overflowX:'scroll' }}>
           <div style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1200px'}}>
             <div >
             <div className='row' style={{padding:'7px',backgroundColor:'#FDE31A',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px' }}>
             <div className='col'><button style={btnrow}>Name</button></div>
                    <div className='col'><button style={btnrow}>Id</button></div>
                    <div className='col'><button style={btnrow}>Price</button></div>
                    <div className='col'><button style={btnrow}>Quantity</button></div>
                    <div className='col'><button style={btnrow}>Action</button></div>
               </div>
               <div className="row" style={{width:'1200px'}}>
     
             </div>
           
             </div>
           </div>
           <DataTable 
        
        columns={coloumn} 
        data={filterUsers} 
        pagination
      
         
        highlightOnHover
      
        
      
        // data={data}
      />
         </div>
            </Tab.Panel>
            <Tab.Panel>
            <div className='container' style={{ display: 'block',color:'black',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px',padding:'20px' }}>
            <div className='row' >
            <div className='Dashboardheading'><h3>Connecting  Inventory</h3></div>
                    <div className='col-6'>
                      <div><input style={skubnt} placeholder='Enter Product SKU'  type="text" name="" id="" /></div>
                      <div style={{margin:'20px'}}><button style={serchbtn} >Search</button></div>
                     
                    </div>
                    
                    <div className='col-6'>
                    <p> Total Value ($): $0<span style={{margin:'15px'}} > Replenishment Quantity : 0 <input type="checkbox" name="" id="" /></span> Product In Stock .</p>
                    </div>
                </div>
            </div>
            <div className='container' style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'auto',overflowX:'scroll' }}>
           <div style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1200px'}}>
             <div >
             <div className='row' style={{padding:'7px',backgroundColor:'#FDE31A',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px' }}>
             <div className='col'><button style={btnrow}>Product Name</button></div>
             <div className='col'><button style={btnrow}>SKU-ID</button></div>
                    <div className='col'><button style={btnrow}>Varient</button></div>
                    <div className='col'><button style={btnrow}>Dropshiper UserID </button></div>
                    <div className='col'><button style={btnrow}>Connected Store Domain</button></div>
                    <div className='col'><button style={btnrow}>Connected product link</button></div>
               </div>
               <div className="row" style={{width:'1200px'}}>
          
             </div>
           
             </div>
           </div>
           <DataTable 
        
        columns={coloumn} 
        data={filterUsers} 
        pagination
      
         
        highlightOnHover
      
        
      
        // data={data}
      />
         </div>
           
            </Tab.Panel>
            <Tab.Panel>

            <div className='container' style={{ display: 'block',color:'black',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px',padding:'20px' }}>
            <div className='Dashboardheading'><h3>Preordered Inventory</h3></div>
            <div className='row' style={{marginTop:'20px'}}>
                <div className='col'><input style={skubnt} placeholder='Please enter the order number' type="text" /></div>
                <div className='col'> <input style={skubnt} placeholder='Please enter SKU' type="text" /> </div>

              </div>
              <div style={{marginTop:'20px'}} ><p> <button style={serchbtn}>Search</button><span style={{margin:'10px'}} > <button style={Clearbtn} >Clear</button> </span></p></div>
            </div>
            <div className='container' style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'auto',overflowX:'scroll' }}>
           <div style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1400px'}}>
             <div >
             <div className='row' style={{padding:'7px',backgroundColor:'#FDE31A',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px' }}>
             <div className='col'><button style={btnrow}>Product Name</button></div>
                    <div className='col'><button style={btnrow}>SKU-ID</button></div>
                    <div className='col'><button style={btnrow}>Varient</button></div>
                    <div className='col'><button style={btnrow}>Dropshiper UserID </button></div>
                    <div className='col'><button style={btnrow}>Connected Store Domain</button></div>
               </div>
               <div className="row" style={{width:'1200px'}}>
             <DataTable 
        
        columns={coloumn} 
        data={filterUsers} 
        pagination
      
         
        highlightOnHover
      
        
      
        // data={data}
      />
             </div>
           
             </div>
           </div>

         </div>
           
      
            </Tab.Panel>
          </Tab.Panels>
    </Tab.Group>
    
    
      </div> 

        </div>
        </div>
        <div className='row'>
      <Dashboardfooter/>
    </div>

    </>
  )
}

export default SellerInventory