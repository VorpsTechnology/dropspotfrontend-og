import React, { useEffect, useState } from "react";
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import SellerSidebar from '../SellerDashboard/SellerSidebar'
import "bootstrap/dist/css/bootstrap.css";
import { Tab } from "@headlessui/react";
import { useHistory } from "react-router-dom";
import { allOrders, myOrders } from "../../Api/OrderRequest";
import DataTable from 'react-data-table-component';
import Dashboardfooter from "../../components/Dashboardfooter/Dashboardfooter";

function SellerCart() {
  document.body.style.backgroundColor = "#32333A"

  const [tabSelected, setTabSelected] = useState(null);

 

  const tabheader = {
    backgroundColor: "#FFE51A",
    borderColor: "transparent",
    border: " 0.5px solid rgba(0, 0, 0, 0.25)",
    width: "auto",
    padding: "10px",
    fontWeight: "800",
    height: "50px",
    alignItems: "center",
    borderRadius: "10px",
    margin: "15px 5px 15px 5px",
  };

  const buttonheader = {
    backgroundColor: "#FDE31A",
    borderRadius: "15px",
    width: "auto",
    alignItems: "center",
    height: "80px",
    alignSelf: "center",
  };

  const tabpanls = {
    padding: "30px",
  };
  const handelTabCLick = (e) => {
    setTabSelected(e);
  };

const userId=localStorage.getItem("userId")
  const[users,setUsers]=useState([]);
  const [search,setSearch]=useState("");
  const [filterUsers,setFilteredUsers]=useState([]);
  
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const ata={userId:userId}
      const {data}=await myOrders(ata)
      setUsers(data)
      setFilteredUsers(data)
      console.log("haiii",data);
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
  
  const coloumn=[
    {name:"OrderId",selector:(row)=>row._id,style: {
        color: "gray",
        }},
        {name:"Status",selector:(row)=>{
          if(row.pending==true){
            return "Pending"
          }
        },style: {
            color: "gray",
            }},
    {name:"Product",selector:(row)=>row.productName,style: {
        color: "gray",
        }},
        
          {selector:(row)=>row.quantity,style: {
            color: "gray",
            }},
    {name:"PaymentMod",selector:(row)=>row.
      paymentMod,style: {
        color: "gray",
        }},{name:"Sku",selector:(row)=>"xxxx",style: {
            color: "gray",
            }},
            {name:"Price",selector:(row)=>row.price,style: {
                color: "gray",
                }},
    {name:"Actions",name:"ACTION ",selector:(row)=>
    <div style={{display:"flex" }}>
  
      {<>
        <button className='button' style={{background:"#FFE51A",color:"black",borderColor:'transparent',marginLeft:"5px",padding:"10px",width:'100px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
        onClick={()=>console.log("haiii")}
        >Edit</button> <button className='button' style={{background:"black",borderColor:'transparent',color:"white",marginLeft:"5px", padding:"10px",width:'100px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
        onClick={()=>console.log("haiii")}
        >Delete</button>
      </>}
              
             
         </div>
       
        },
              
  ]
  return (
   <>
   <Adminnavbar />
<div className="row" style={{backgroundColor:'#31343A',padding:'0px 0px 0px 0px',marginTop:'100px',marginBottom:'100px'}}>
<div className='col-2' >
    <SellerSidebar />
   </div>
   <div className='col-10' >
   <div
            className="container"
            id="tabcontainer"
            style={{
              margin: "20px 0px 20px 10px",
              width: "1100px",
              padding: "20px",
            }}
          >
             <div className='headingAll'><h2>Purchase Cart</h2></div>
            
            <Tab.Group>
              <div className="conatiner" style={buttonheader}>
               

                <Tab.List className="flex space-x-1 rounded-xl  p-1"   >
                  <Tab
                    defaultActiveKey="first"
                    className={`tabbtn3 ${tabSelected === 1 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(1)}
                  >
                   
                    One Price Dropship
                  </Tab>
                  <Tab
                  
                    className={`tabbtn3 ${tabSelected === 2 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(2)}
                  >

                   
                    Wholeshale
                  </Tab>
                
                </Tab.List>
              </div>

              <Tab.Panels style={tabpanls}>
                <Tab.Panel>
                <div className='Dashboardheading'><h2>   One Price Dropship</h2></div>

                  Content 1</Tab.Panel>
                <Tab.Panel>
                <div className='Dashboardheading'><h2>Warehouse</h2></div>
                  Content 2</Tab.Panel>
              
              </Tab.Panels>
            </Tab.Group>

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
<div className="row">
  <Dashboardfooter/>
</div>
   </>
  )
}

export default SellerCart
