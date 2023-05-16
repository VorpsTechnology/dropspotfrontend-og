import Sidebar from '../Sidebar/Sidebar'
import React, { useEffect, useState } from "react";
import Adminnavbar from '../Adminnavbar/Adminnavbar'

import 'bootstrap/dist/css/bootstrap.css';

import { Tab } from '@headlessui/react';

import './Myinventry.css'
import DataTable from 'react-data-table-component';

import { getAllProducts } from '../../Api/ProductRequest';


function Myinventry() {
  const [tabSelected, setTabSelected] = useState(null);

  

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

  borderRadius: '20px',
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
const Clearbtn={
  backgroundColor:'black',
  borderColor:'transparent',
  borderRadius:'10px',
  color:'white',
  padding:'10px',
  

  width:'150px',
  fontWeight:'650',
  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',
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

const handelTabCLick = (e) => {
  setTabSelected(e);
};
const[users,setUsers]=useState([]);
const [search,setSearch]=useState("");
const [filterUsers,setFilteredUsers]=useState([]);

useEffect(() => {
  async function fetchData() {
    // You can await here
    const {data}=await getAllProducts()
    setUsers(data)
    setFilteredUsers(data)
    
    // ...
  }
  fetchData();
}, []); // Or [] if effect doesn't need props or state

useEffect(()=>{
  const result=users.filter((user)=>{
      return user.firstname.toLowerCase().match(search.toLowerCase());
      
  })
  setFilteredUsers(result)
},[search,users])

const coloumn=[
  {name:"NAME",selector:(row)=>row.name,style: {
      color: "gray",
      }},
      {name:"Id",selector:(row)=>row._id,style: {
        color: "gray",
        }},
        {name:"Price",selector:(row)=>row.price,style: {
          color: "gray",
          }},
  {name:"Quantity",selector:(row)=>row.quantity,style: {
      color: "gray",
      }},
  {name:"ACTION ",selector:(row)=>
  <div style={{display:"flex" }}>

    {<>
      <button className='button' style={{background:"#FFE51A",color:"black",borderColor:'transparent',marginLeft:"5px",padding:"10px",width:'100px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
      onClick={()=>alert()}
      >Edit</button> <button className='button' style={{background:"black",borderColor:'transparent',color:"white",marginLeft:"5px", padding:"10px",width:'100px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
      onClick={()=>alert()}
      >Delete</button>
    </>}
            
           
       </div>
     
      },
            
]
  return (
    <div>
      <Adminnavbar />
      <div className='row'>
        <div className='col-2' style={{backgroundColor:'#31343A'}}><Sidebar /></div>
        <div className='col-10' >
        
        <div className='container' id="tabcontainer" style={{margin:'20px 0px 20px 10px',width:'1100px', padding:'20px',}}>
        <div className='headingAll'><h2>My Inventory</h2></div>
      <Tab.Group >
      <div className='conatiner' style={buttonheader}>
      <Tab.List className="flex space-x-1 rounded-xl  p-1"  >
                
                <Tab  className={`tabbtn3 ${tabSelected === 1 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(1)}>Product Inventory</Tab>
                <Tab className={`tabbtn3 ${tabSelected === 2 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(2)}>Connected Inventory</Tab>
                <Tab className={`tabbtn3 ${tabSelected === 3 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(3)}>Pre-Sold  Inventory</Tab>
              </Tab.List>
         </div>
          <Tab.Panels style={tabpanls}>
            <Tab.Panel 
            >
           
            <div className='container' >
            <div className='Dashboardheading'><h3>Product Inventory</h3></div>
                  <div className='row' style={{marginTop:'20px'}}>
                    <div className='col-6'>
                    <div className='buttonIn'></div><input style={skubnt}  placeholder='Enter Product SKU'  type="text" name="" id="" /> <button style={serchbtn}  value={search}     
            onChange={
                (e)=>
                   setSearch(e.target.value)
                
            }>Search</button>
                    </div>
                    <div className='col-3'>
                    <p> Total Value:<span style={{margin:'10px'}} ><input type="checkbox" name="" id="" /></span> Product In Stock .</p>
                    
                    </div>
                    <div className='col-3'>
                  <button style= {tranferbtn}>Transfer record</button>
                    
                    </div>
                  
                  </div>
                  </div>
                 <div className='container' style={{padding:'10px'}}>
                 <div className='row' style={{marginTop:'20px',backgroundColor:'#FDE31A',padding:'10px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'10px',}}>
                    <div className='col'><button style={btnrow}>Name</button></div>
                    <div className='col'><button style={btnrow}>Id</button></div>
                    <div className='col'><button style={btnrow}>Price</button></div>
                    <div className='col'><button style={btnrow}>Quantity</button></div>
                    <div className='col'><button style={btnrow}>Action</button></div>

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
            <div className='row' >
            <div className='Dashboardheading'><h3>Connecting Pacakaging Inventory</h3></div>
                    <div className='col-6'>
                    <div className='buttonIn'></div><input style={skubnt} placeholder='Enter Product SKU'  type="text" name="" id="" /> <button style={serchbtn} >Search</button>
                    </div>
                    
                    <div className='col-6'>
                    <p> Total Value ($): $0<span style={{margin:'15px'}} > Replenishment Quantity : 0 <input type="checkbox" name="" id="" /></span> Product In Stock .</p>
                    </div>
                    <div className='container'>
                    <div className='row' style={{marginTop:'20px',backgroundColor:'#FDE31A',padding:'10px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'10px',}}>
                    <div className='col-md-auto'><button style={btnrow}>Product Name</button></div>
                    <div className='col-md-auto'><button style={btnrow}> Sku Id</button></div>
                    <div className='col-md-auto'><button style={btnrow}>Varient</button></div>
                    <div className='col-md-auto'><button style={btnrow}>Dropship UserId</button></div>
                    <div className='col-md-auto'><button style={btnrow}>Connected Store Domain</button></div>
                    <div className='col-md-auto'><button style={btnrow}>Connected Product link</button></div>
                   

                  </div>
                    </div>
                    
                </div>
            </Tab.Panel>
            <Tab.Panel>
            <div className='Dashboardheading'><h3>Pre-Sold Inventory</h3></div>
            <div className='row' style={{marginTop:'20px'}}>
                <div className='col'><input style={skubnt} placeholder='Please enter the order number' type="text" /></div>
                <div className='col'> <input style={skubnt} placeholder='Please enter SKU' type="text" /> </div>

              </div>
              <div style={{marginTop:'20px'}} ><p> <button style={serchbtn} >Search</button><span style={{margin:'10px'}} > <button style={Clearbtn}>Clear</button> </span></p></div>
              <div className='row' style={{marginTop:'20px',backgroundColor:'#FDE31A',pading:'10px'}}>
                    <div className='col'><button style={btnrow}>Product Name</button></div>
                    <div className='col'><button style={btnrow}>Sku Id</button></div>
                    <div className='col'><button style={btnrow}>Varient</button></div>
                    <div className='col'><button style={btnrow}>Dropship UserId </button></div>
                    <div className='col'><button style={btnrow}>Quantity</button></div>
                    <div className='col'><button style={btnrow}>Action</button></div>
                  
                </div>
            </Tab.Panel>
          </Tab.Panels>
    </Tab.Group>
      </div> 

        </div>
      </div>
 
    </div>
  )
}

export default Myinventry