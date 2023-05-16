import React ,{useEffect, useState} from 'react'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import Sidebar from '../Sidebar/Sidebar'
import 'bootstrap/dist/css/bootstrap.css';
import { Tab } from '@headlessui/react';
import './ImportedOrder.css'
import DataTable from 'react-data-table-component';
import {  myOrders, preOrderFullFill} from "../../Api/OrderRequest";
import swal from 'sweetalert';





function ImportedOrder() {
  const [tabSelected, setTabSelected] = useState(null);

  const serchbtn={
    backgroundColor:'#FDE31A',
    borderColor:'transparent',
    borderRadius:'10px',
    
    padding:'10px',
    outlineColor:'#FDE31A',
    marginRight:'10px',
    fontSize:'15px',
    width:'100px',
    fontWeight:'650'
    
    
     }
    
     const Clearbtn={
        backgroundColor:'black',
        borderColor:'transparent',
        borderRadius:'10px',
        color:'white',
        padding:'10px',
        
    
        width:'100px',
        fontWeight:'650',
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
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
  



  outlineColor:'transparent', 
}




const buttonheader={
  backgroundColor:'#FDE31A',
  borderRadius:'15px',
  width:'auto',
  alignItems:'center',
  height:'80px',
  alignSelf:'center',
  borderColor:'transparent',
  
}

const tabpanls={
  padding:'30px',

}
const handelTabCLick = (e) => {
  setTabSelected(e);
};


const userId=localStorage.getItem("userId")
const[users,setUsers]=useState([]);
const [search,setSearch]=useState("");
const [filterUsers,setFilteredUsers]=useState([]);
const [ordercomponent,setOrderComponent]=useState(true)
const [invalidordercomponent,setinvalidOrderComponent]=useState(false)
const [declinedordercomponent,setdeclineOrderComponent]=useState(false)

useEffect(() => {
async function fetchData() {
// You can await here
if(declinedordercomponent){
  const ata={userId:userId,type:"preOrder",status:"Declined"}
const {data}=await myOrders(ata)
setUsers(data)
setFilteredUsers(data)
console.log("gaiii",data);
}
// ...
}
fetchData();
}, [ordercomponent,invalidordercomponent,declinedordercomponent]); // Or [] if effect doesn't need props or state

// useEffect(()=>{
//   const result=users.filter((user)=>{
//       return user.firstname.toLowerCase().match(search.toLowerCase());
  
//   })
//   setFilteredUsers(result)
// },[search,users])
const customStyles={
headCells: {
style: {
 backgroundColor:'#FFE627',padding:'5px',marginTop:'20px',
 height:"60px",
 fontWeight:"500px",
 fontSize:"16px"
},
},
cells: {
style: {
 paddingLeft: '8px', // override the cell padding for data cells
 paddingRight: '8px',
 width:"12rem"

},
},
}

const handleFullFillPreOrder=async(dat,sat)=>{
  const ata={
    orderId:dat,
    status:sat 
  } 
  const {data}=await preOrderFullFill(ata)
  if(data){
    swal("Requested to the seller")
  }else{
    swal("error oquired")
  }
 }
const coloumn=[
  {name:"Image",selector:(row)=>(
   <img style={{width:"7rem"}} src={"http://localhost:5000/images/"+row.image} alt="" />
  ) ,style: {
      color: "gray",
      }},
      {name:"Order Time",selector:(row)=>row.createdAt,style: {
       color: "gray",
       }},
      {name:"Seller Id",selector:(row)=>
        row.sellerId
     ,style: {
          color: "gray",
          }},
  {name:"Product",selector:(row)=>row.productName,style: {
      color: "gray",
      }},
      
        {name:"Price",selector:(row)=>row.price,style: {
          color: "gray",
          }},
  {name:"Quantity",selector:(row)=>row.
  quantity,style: {
      color: "gray",
      }},
  {name:"ACTION ",selector:(row)=>
  <div style={{}}>

    {
      declinedordercomponent && <>

      <div style={{display:"inline"}}>
     <div>
     <button className='button' style={{background:"#FFE51A",color:"black",borderColor:'transparent',marginLeft:"5px",padding:"10px",width:'140px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',marginBottom:"10px"}}
         onClick={()=>handleFullFillPreOrder(row._id,"Requested")}
     >Request Again</button>
      
     </div>
     <div>
     <button className='button' style={{background:"black",borderColor:'transparent',color:"white",marginLeft:"5px", padding:"10px",width:'auto',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
         onClick={()=>alert()}
         >Raise A Dispute</button>
     </div>
    
      </div>
        
       </>
    }
            
           
       </div>
     
      },
            
]
  return (

    <>
    <div style={{backgroundColor:'#32333A'}}>
      <Adminnavbar />
      <div className='row'>
        <div className='col-2'  style={{backgroundColor:'#31343A'}}><Sidebar /></div>
        <div className='col-10' style={{height:'800px'}}>
       
        <div className='container' id="tabcontainer" style={{margin:'20px 0px 20px 10px',width:'1100px', padding:'20px',}}>
        <div className='headingAll'><h2>Imported Order</h2></div>
      <Tab.Group>
      <div className='conatiner' style={buttonheader}>
      <Tab.List  className="flex space-x-1 rounded-xl  p-1" >
                
                <Tab
                 className={`tabbtn3 ${tabSelected === 1 ? "selected-tab2" : ""}`}
                 onClick={() => {
                  setOrderComponent(true)
                  setinvalidOrderComponent(false)
                  setdeclineOrderComponent(false)
                  handelTabCLick(1)}}  >Orders(0)</Tab>
                <Tab  className={`tabbtn3 ${tabSelected === 2 ? "selected-tab2" : ""}`}
                 onClick={() =>
                 { 
                  setOrderComponent(false)
                  
                  setinvalidOrderComponent(true)
                  setdeclineOrderComponent(false)
                  handelTabCLick(2)}} >Invalid Orders(1)</Tab>
                <Tab  className={`tabbtn3 ${tabSelected === 3 ? "selected-tab2" : ""}`}
                 onClick={() =>{ 
                  setOrderComponent(false)
                  
                  setinvalidOrderComponent(false)
                  setdeclineOrderComponent(true)
                  handelTabCLick(3)}}>Declined</Tab>
              </Tab.List>
         </div>
       <Tab.Panels style={tabpanls}>
            <Tab.Panel>
            
            <div className='container' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px'}} >
            <div className='Dashboardheading'><h3>Orders</h3></div>
         <div className='row' style={{marginTop:'20px'}}>
            <div className='col'>
              <select style={skubnt} name="name" id="value">
                <option value="">Your Order Time</option>
                <option value="">Your Order Time</option>
                <option value="">CJ Time</option>
              </select>
              </div>
            <div className='col'><input  style={skubnt} type="date" /></div>
            <div className='col'>
              <select  style={skubnt}  name="name" id="value">
                <option value="">Select a Shipping method</option>
                <option value="">#method</option>
                <option value="">#method</option>
              </select>
            </div>
          </div>
          <div className='row'  style={{marginTop:'20px'}} >
                  <div className='col'><input   style={skubnt} type="text" placeholder='Please enter the name' /></div>
                  <div className='col'><input style={skubnt}  type="text" placeholder='Please enter the product title' /></div>
                  <div className='col'><input  style={skubnt} type="text" placeholder='Please enter SKU' /></div>
                </div>
                <div className='row'  style={{marginTop:'20px'}}>
                  <div className='col'><input  style={skubnt} type="text" placeholder='Please enter order number' /></div>
                  <div className='col'><input style={skubnt} type="text"  placeholder='Abnormal Orders' /></div>
                  <div className='col'><p><span style={{margin:'10px'}}><button style={serchbtn}>Search</button></span><button style={Clearbtn}>Clear</button></p></div>
                </div>
         </div>
          <div className='container' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',marginTop:'10px'}}  >
               <div className='row' style={{backgroundColor:'#FDE31A',padding:'15px 2px 5px 2px',color:'black',borderRadius:'20px'}}>
                  <div className='col-2'> 
                  <p >Your Order ID.</p>
                 </div>
                  <div className='col-2'><p >Your Order Time</p></div>
                  <div className='col'>
                  <p>Cost 
                  <span style={{margin:'1px'}}>
                   
                  </span> 
                    </p>
                  </div>
                
                 
                  <div className='col'>
                  <p>Address</p>
                  </div>
                  <div className='col'>
                  <p>SKU ID</p>
                  </div>
                  <div className='col'>
                  <p>Status</p>
                  </div>
                  <div className='col'>
                  <p>Action</p>
                  </div>
                </div>
               </div>
            </Tab.Panel>
            <Tab.Panel>
            <div className='container' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px'}} >
            <div className='Dashboardheading'><h3>Invalid Orders</h3></div>
         <div className='row' style={{marginTop:'20px'}}>
            <div className='col'>
              <select style={skubnt} name="name" id="value">
                <option value="">Your Order Time</option>
                <option value="">Your Order Time</option>
                <option value="">CJ Time</option>
              </select>
              </div>
            <div className='col'><input  style={skubnt} type="date" /></div>
            <div className='col'>
              <select  style={skubnt}  name="name" id="value">
                <option value="">Select a Shipping method</option>
                <option value="">#method</option>
                <option value="">#method</option>
              </select>
            </div>
          </div>
          <div className='row'  style={{marginTop:'20px'}} >
                  <div className='col'><input   style={skubnt} type="text" placeholder='Please enter the name' /></div>
                  <div className='col'><input style={skubnt}  type="text" placeholder='Please enter the product title' /></div>
                  <div className='col'><input  style={skubnt} type="text" placeholder='Please enter SKU' /></div>
                </div>
                <div className='row'  style={{marginTop:'20px'}}>
                  <div className='col'><input  style={skubnt} type="text" placeholder='Please enter order number' /></div>
                  <div className='col'><input style={skubnt} type="text"  placeholder='Abnormal Orders' /></div>
                  <div className='col'><p><span style={{margin:'10px'}}><button style={serchbtn}>Search</button></span><button style={Clearbtn}>Clear</button></p></div>
                </div>
         </div>

       
             
               <div className='container' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',marginTop:'10px'}}  >
               <div className='row' style={{backgroundColor:'#FDE31A',padding:'15px 2px 5px 2px',color:'black',borderRadius:'20px'}}>
                  <div className='col-2'> 
                  <p >Your Order ID.</p>
                 </div>
                  <div className='col-2'><p >Your Order Time</p></div>
                  <div className='col'>
                  <p>Cost 
                  <span style={{margin:'1px'}}>
                   
                  </span> 
                    </p>
                  </div>
                
                 
                  <div className='col'>
                  <p>Address</p>
                  </div>
                  <div className='col'>
                  <p>SKU ID</p>
                  </div>
                  <div className='col'>
                  <p>Status</p>
                  </div>
                  <div className='col'>
                  <p>Action</p>
                  </div>
                </div>
               </div>
            </Tab.Panel>
            
            <Tab.Panel>
            <div className='Dashboardheading'><h3>Declined Order</h3></div>
         {/* <div className='flexck' style={{display:'flex',justifyContent:'space-evenly'}}>
              <div className='flg' style={{justifyContent:'left'}}>
                 <button>Delete The Order</button>
              </div>
              <div className='dim'  style={{justifyContent:'left'}}>
                <button>Raise a dispute</button>
              </div>
              
         </div> */}
          {/* <div className='row' style={{backgroundColor:'#FDE31A',padding:'15px 2px 5px 2px',color:'black',borderRadius:'20px'}}>
                  <div className='col-2'> 
                  <p >Your Order ID.</p>
                 </div>
                  <div className='col-2'><p >Your Order Time</p></div>
                  <div className='col'>
                  <p>Cost 
                  <span style={{margin:'1px'}}>
                   
                  </span> 
                    </p>
                  </div>
                
                 
                  <div className='col'>
                  <p>Address</p>
                  </div>
                  <div className='col'>
                  <p>SKU ID</p>
                  </div>
                  <div className='col'>
                  <p>Status</p>
                  </div>
                  <div className='col'>
                  <p>Action</p>
                  </div>
                </div> */}
                <DataTable 
        
        columns={coloumn} 
        data={filterUsers} 
        pagination
        
        customStyles={customStyles}
        highlightOnHover
      
        
      
        // data={data}
      />
              </Tab.Panel>
          </Tab.Panels>
    </Tab.Group>
      </div>
      
        </div>
      </div>
    </div>
  
    </>
  )
}

export default ImportedOrder
