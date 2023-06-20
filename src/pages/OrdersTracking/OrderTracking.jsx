import React, { useEffect, useState } from 'react'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import Sidebar from '../Sidebar/Sidebar'
import DataTable from 'react-data-table-component';


import 'bootstrap/dist/css/bootstrap.css';
import { Tab } from '@headlessui/react'
import { allclosedorders, allprocessing, allprocessingOrders, myshopifyOrders } from '../../Api/OrderRequest';
function OrderTracking() {
  const Clearbtn={
    backgroundColor:'black',
    borderColor:'transparent',
    borderRadius:'10px',
    color:'white',
    padding:'10px',
    

    width:'150px',
    fontWeight:'650',
 }
 const skubntselect ={
  width:'150px',

  height:'35px',
  borderColor:'transparent',
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
  borderRadius: '10px',
 
  backgroundColor:'rgba(231, 231, 231, 1)',
  color: 'rgba(50, 51, 58, 1)',
  fontSize: '13px',
 
  outlineColor:'rgba(0, 0, 0, 0.15)', 
}
  
const tabpanls={
  padding:'30px',

}
    const serchbtn={
        backgroundColor:'#FDE31A',
        
        borderColor:'transparent',
        borderRadius:'10px',
        color:'black',
        padding:'10px',
        outlineColor:'#FDE31A',
        marginRight:'10px',
        fontSize:'15px',
        width:'130px',
        fontWeight:'650',
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
        
        
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
        
        
        const Pickbtn={
          backgroundColor:'black',
          borderColor:'transparent',
          borderRadius:'10px',
          color:'white',
          padding:'10px',
          outlineColor:'#FDE31A',
          marginRight:'10px',
          fontSize:'15px',
          width:'130px',
          fontWeight:'650',
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
             
         }
        
         
         const Order={
          backgroundColor:'#FDE31A',
          borderColor:'transparent',
          borderRadius:'10px',
          fontWeight:'400',
          fontSize:'15px',
         
        
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
  
    const ata={status:true}
  const {data}=await allprocessingOrders(ata)
  setUsers(data)
  setFilteredUsers(data)
  console.log("gaiii",data);
  
  // ...
  }
  fetchData();
  }, []);
const [success,setSuccess]=useState([])
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
          ,
      {name:"status",selector:(row)=>row.productName,style: {
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
    
        
        {row.processing && <>
          <div>
     <button className='button' style={{background:"#FFE51A",color:"black",borderColor:'transparent',margin:"5px",padding:"10px",width:'150px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',marginBottom:"10px"}}
         onClick={()=>alert()}
     >Track order</button>
      
     </div>
     <div>
     <button className='button' style={{background:"#FFE51A",color:"black",borderColor:'transparent',margin:"5px",padding:"10px",width:'150px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',marginBottom:"10px"}}
         onClick={()=>alert()}
     >Invoice</button>
      
     </div>
     <div>
     <button className='button' style={{background:"black",borderColor:'transparent',color:"white",margin:"5px", padding:"10px",width:'150px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
         onClick={()=>alert()}
         >Request cancel</button>
     </div>
        </>}

        {
          row.closed && <>
          
          <div>
     <button className='button' style={{background:"#FFE51A",color:"black",borderColor:'transparent',margin:"5px",padding:"10px",width:'150px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',marginBottom:"10px"}}
         onClick={()=>alert()}
     >Request Return</button>
      
     </div>
     <div>
     <button className='button' style={{background:"#FFE51A",color:"black",borderColor:'transparent',margin:"5px",padding:"10px",width:'150px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',marginBottom:"10px"}}
         onClick={()=>alert()}
     >Invoice</button>
      
     </div>
  
          
          
          </>
        }
        
      </div>
      },
                
    ]    
  return (
    <div style={{backgroundColor:'#31343A',padding:'0px 0px 0px'}}>
        <Adminnavbar />
        <div className='row'>
            <div className='col-2'   >
                <Sidebar />
            </div>
     {/* <div className='col-10' style={{height:'800px'}}>
          

           <div className='container' id="tabcontainer"  style={{ display: 'block',color:'black',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',padding:'40px',width:'auto',margin:'20px 20px 20px 20px' }}>
            <div><h2>Order Tracking</h2></div>
           <div className='row'>
                <div className='col' style={{marginTop:'20px'}}>
                <div ><input style={skubnt} type="date" /></div>
                <div>
                <div className='row' >
                <div className='row' style={{marginTop:'20px'}}>
        <div className='col-2'><button style={serchbtn}>Search</button></div>
        <div className='col-2'><button style={Pickbtn}> Clear</button></div>
      </div>


          </div>
          <div className='container' style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1000px' ,overflowX:'scroll'}}>
            <div style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1000px' }}>
              <div >
              
                <DataTable 
        
        columns={coloumn} 
        data={filterUsers} 
        pagination
        
        customStyles={customStyles}
        highlightOnHover
      
        
      
        // data={data}
      />
              </div>
            </div>

          </div>
          
                </div>
                
                </div>
            </div>
           </div>
            </div> */}
          
     <div className='container' id="tabcontainer" style={{margin:'10px 20px 10px 20px', padding:'20px',width:'auto'}}>
     <div><h2>Order Tracking</h2></div>
             <Tab.Group>
     <div className='conatiner' id="buttonheader" style={{ display: 'block',color:'black',borderRadius:'30px'}}  >
     <Tab.List className="flex space-x-1 rounded-xl  p-1" >
               
               <Tab  className={`tabbtn3 ${tabSelected === 1 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(1)}>All</Tab>
               <Tab className={`tabbtn3 ${tabSelected === 2 ? "selected-tab1" : ""}`}
                    onClick={async() =>{
                      const ata={
                        status:true
                      }
                      try {
                       const {data}=await allclosedorders(ata)
                       setSuccess(data)
                      } catch (error) {
                        console.log(error);
                      }
                      handelTabCLick(2)
                    } 
                    
                    }>
               Successful Order
               </Tab>
     </Tab.List>
        </div>
            
        
         
         <Tab.Panels style={tabpanls}>
           <Tab.Panel> 
            
            <div className='continer' style={{ display: 'block',color:'black',borderRadius:'30px',}}>
          
          <div className="container" style={{ display: 'block',color:'black',padding:'20px',borderRadius:'30px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)"}} >
          <div className='Dashboardheading'><h3>All</h3></div>
          <div className='row'>
                <div className='col' style={{marginTop:'20px'}}>
                <div ><input style={skubnt} type="date" /></div>
                <div>
                <div className='row' >
                <div className='row' style={{marginTop:'20px'}}>
        <div className='col-2'><button style={serchbtn}>Search</button></div>
        <div className='col-2'><button style={Pickbtn}> Clear</button></div>
      </div>


          </div>
          <div className='container' style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1000px' ,overflowX:'scroll'}}>
            <div style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1000px' }}>
              <div >
              
                <DataTable 
        
        columns={coloumn} 
        data={filterUsers} 
        pagination
        
        customStyles={customStyles}
        highlightOnHover
      
        
      
        // data={data}
      />
              </div>
            </div>

          </div>
          
                </div>
                
                </div>
            </div>
           </div>

             
          </div>
          </Tab.Panel>
           <Tab.Panel>
            
           <div className='container'  style={{ display: 'block',color:'black',borderRadius:'30px',overflowX:'scroll' }}>
            <div style={{ display: 'block',color:'black',padding:'20px',borderRadius:'30px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)"}}>
            <div className='Dashboardheading'><h3>Successful Orders</h3></div>
           <div className='row' style={{marginTop:'20px'}}>
             <div className='col'><input style={skubnt} type="date" /></div>

             <div className='col'>
                 {/* <select  style={skubntselect} name="Order Status" id="">
                     <option value="">Awaiting Payments</option>
                     <option value="">Waiting for receive</option>
                     <option value="">Waiting for pay again</option>
                 </select>
                 </div>
                 <div className='col'><input style={skubntselect} placeholder='please enter order number' type="text" /></div>
                 <div className='col'>
                 <select  style={skubntselect} name="Order Status" id="">
                     <option value="">Return Orders</option>
                     <option value="">Incomplete Order information</option>
                   
                 </select> */}
                 </div>
             <div style={{marginTop:'20px'}}><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>
           </div>
            </div>
         

           
           <div  style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1100px' }}>
            <div className='row' style={{padding:'7px',backgroundColor:'#FDE31A',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px',width:'1100px',marginRight:'100px'}}>

              <div className='col-md-auto'><button style={Order}>Your Order Number</button></div>
              <div className='col'><button style={Order}>Order Source</button></div>
              
              <div className='col'><button style={Order}>Status</button></div>
              <div className='col'><button style={Order}>Quantity</button></div>
            
            
              <div className='col'><button style={Order}>Amount</button></div>
              <div className='col'><button style={Order}>Action</button></div>


            </div>
           </div>
           <DataTable 
        
        columns={coloumn} 
        data={filterUsers} 
        pagination
        
        customStyles={customStyles}
        highlightOnHover
      
        
      
        // data={data}
      />
           </div> 
           </Tab.Panel>
          

         </Tab.Panels>
   </Tab.Group>
   </div>
        </div>
      </div>
  )
}

export default OrderTracking