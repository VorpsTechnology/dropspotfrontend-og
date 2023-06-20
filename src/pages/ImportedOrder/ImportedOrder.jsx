import React ,{useEffect, useState} from 'react'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import Sidebar from '../Sidebar/Sidebar'
import 'bootstrap/dist/css/bootstrap.css';
import { Tab } from '@headlessui/react';
import './ImportedOrder.css'
import DataTable from 'react-data-table-component';
import {  changeAwaitingpayment, changependingstatus, changeprocessingstatus, myOrders, mypreOrders, myshopifyOrders, preOrderFullFill} from "../../Api/OrderRequest";
import swal from 'sweetalert';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { payment } from '../../Api/paymentRequest';




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

const [checkOrderSku,setcheckOrderSku]=useState([])
useEffect(() => {
  async function fetchData() {
    // You can await here
    const ata={userId:userId}
    const {data}=await mypreOrders(ata)

    setUsers(data)
    setcheckOrderSku(data)
    console.log("gaiii",data);
    // ...
 
  }
  fetchData();
}, []); // Or [] if effect doesn't need props or state
useEffect(() => {
async function fetchData() {
// You can await here

  const ata={dropshipperId:userId,type:"shopify"}
const {data}=await myshopifyOrders(ata)
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
  {name:"Sl",selector:(row,index)=>index+1,style: {
    color: "gray",
    }},
  {name:"Image",selector:(row)=>(
   <img style={{width:"7rem"}} src={"http://localhost:5000/images/"+row.image} alt="" />
  ) ,style: {
      color: "gray",
      }},
      {name:"Product",selector:(row)=>row.productName,style: {
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
          {name:"Billing Address",selector:(row)=>"xxxxxxxx",style: {
            color: "gray",
            }},
  
      {name:"Quantity",selector:(row)=>row.
      quantity,style: {
          color: "gray",
          }},
        {name:"Price",selector:(row)=>row.price,style: {
          color: "gray",
          }},

      {name:"Shipping fee",selector:(row)=>100,style: {
      color: "gray",
      }},
      {name:"service fee",selector:(row)=>row.price*2/100,style: {
      color: "gray",
      }},
      ,
      {name:"Total",selector:(row)=>row.price*2/100 +row.price+ 100,style: {
      color: "gray",
      }},
  {name:"ACTION ",selector:(row)=>
  <div style={{}}>

    {/* {
      ordercomponent && row.pending==true && <>
      
      pay for shipping
      </>
    } */}
   {
    ordercomponent && 
    <>

      <div style={{display:"inline"}}>
      <div>

       
{row.sku && (()=>{
          
          const data= checkOrderSku
          console.log("data",checkOrderSku);
          if(row.pending){
          return  <> <div>  <button className='button' style={{background:"#FFE51A",color:"black",borderColor:'transparent',margin:"5px",padding:"10px",width:'150px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
          onClick={()=>{
            var opitions={
              key:"rzp_test_70gDFCaoRxwKfe",
              key_secret:"KUpauE5IPXusyiUy7rNUpdvZ",
              amount:(row.price*2/100 +100)*100,
              currency:"INR",
              name:"dropshipper",
              description:"test payment",
              handler:async function (resp){
                alert(resp.razorpay_payment_id)
                const ata={
                  orderId:row._id,
                  status:true,
                  shipping:{
              
                      
                      "shipping_charges": 40, 
                      "discount": 100, 
                      "cod_charges": 30, 
                      "payment_type": "cod", 
                      "order_amount": 1000, 
                      "package_weight": 300, 
                      "package_length": 10, 
                      "package_breadth": 10, 
                      "package_height": 10, 
                      "request_auto_pickup" : "yes", 
                      "consignee": { 
                          "name": "Customer Name", 
                          "address": "190, ABC Road", 
                          "address_2": "Near Bus Stand", 
                          "city": "Mumbai", 
                          "state": "Maharastra", 
                          "pincode": "400001", 
                          "phone": "9999999999" 
                      }, 
                      "pickup": { 
                          "warehouse_name": "warehouse 1", 
                          "name" : "Nitish Kumar", 
                          "address": "140, MG Road", 
                          "address_2": "Near metro station", 
                          "city": "Gurgaon", 
                          "state": "Haryana", 
                          "pincode": "122001", 
                          "phone": "9999999999" 
                      }, 
                      "order_items": [ 
                          { 
                              "name": "product 1", 
                              "qty": "18", 
                              "price": "100", 
                              "sku": "sku001" 
                          } 
                      ], 
                      "courier_id" : "1", 
                     "collectable_amount":"150" 
                   
                  
                  }
                }
                try {
                  const {data}=await changeprocessingstatus(ata)
                console.log(data);
                if(data){
                  alert("Requested to fullfil order >!")
                  console.log(data);
                }
    
                } catch (error) {
                  console.log(error);
                }
                
              },
              prefill:{
                name:"adarshraj",
                email:"ahazadarsh0014@gmail.com",
                contact:"8590037942"
              },
              notes:{
                address:"Razorpay coorparate office"
              },
              theme:{
                color:"#FFE51A"
              }
            };
    
            var pay=new window.Razorpay(opitions)
            pay.open()
          }
          
          }
          >Pay for shipping</button>
    
            </div>
            <div>
        <button className='button' style={{background:"black",borderColor:'transparent',color:"white",margin:"5px", padding:"10px",width:'150px',borderRadius:'auto',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
      onClick={()=>alert()}
      >Decline</button>
        </div>
            </>
          }else{
          return  <>
          {data.length>0 && data.map((ele)=>(
           ele.sku==row.sku?  <><div><button className='button' style={{background:"#FFE51A",color:"black",borderColor:'transparent',margin:"5px",padding:"10px",width:'150px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',margin:"5px"}}
             onClick={async()=>{
               alert()
              const ata={
                orderId:row._id,
                status:true,
                quantity:row.quantity,
                sku:row.sku
              }
              try {
                const {data}=await changependingstatus(ata)
              console.log(data);
              if(data){
                alert("Requested to fullfil order >!")
                console.log(data);
              }

              } catch (error) {
                console.log(error);
              }



             }
            
            }
          
        > Preorder Fulfill</button></div>
        
        <div>
        <button className='button' style={{background:"black",borderColor:'transparent',color:"white",margin:"5px", padding:"10px",width:'150px',borderRadius:'auto',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
      onClick={()=>alert()}
      >Decline</button>
        </div>
      </>
        :<>
        <div>
        <button className='button' style={{background:"#FFE51A",color:"black",borderColor:'transparent',margin:"5px",padding:"10px",width:'150px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
      onClick={()=>{
        var opitions={
          key:"rzp_test_70gDFCaoRxwKfe",
          key_secret:"KUpauE5IPXusyiUy7rNUpdvZ",
          amount:row.price*100,
          currency:"INR",
          name:"dropshipper",
          description:"test",
          handler:async function (resp){
            alert(resp.razorpay_payment_id)
            const ata={
              orderId:row._id,
              status:true,
              shipping:{ 
               
                "shipping_charges": 40, 
                "discount": 100, 
                "cod_charges": 30, 
                "payment_type": "cod", 
                "order_amount": 1000, 
                "package_weight": 300, 
                "package_length": 10, 
                "package_breadth": 10, 
                "package_height": 10, 
                "request_auto_pickup" : "yes", 
                "consignee": { 
                    "name": "Customer Name", 
                    "address": "190, ABC Road", 
                    "address_2": "Near Bus Stand", 
                    "city": "Mumbai", 
                    "state": "Maharastra", 
                    "pincode": "400001", 
                    "phone": "9999999999" 
                }, 
                "pickup": { 
                    "warehouse_name": "warehouse 1", 
                    "name" : "Nitish Kumar", 
                    "address": "140, MG Road", 
                    "address_2": "Near metro station", 
                    "city": "Gurgaon", 
                    "state": "Haryana", 
                    "pincode": "122001", 
                    "phone": "9999999999" 
                }, 
                "order_items": [ 
                    { 
                        "name": "product 1", 
                        "qty": "18", 
                        "price": "100", 
                        "sku": "sku001" 
                    } 
                ], 
                "courier_id" : "1", 
               "collectable_amount":"150" 
             
            }
            }
            try {
              const {data}=await changeprocessingstatus(ata)
            console.log(data);
            if(data){
              alert("Requested to fullfil order >!")
              console.log(data);


              // const dta={
              //   userId:userId,
              //   amount:((row.price)+100+(row.price *2/100)),
              //   oderId:data._id
              // }
              // const response=await payment(dta)
              // if(response.ok){
              //   console.log("money added to the wakket")
              // }
            }

            } catch (error) {
              console.log(error);
            }
            
          },
          prefill:{
            name:"adarshraj",
            email:"ahazadarsh0014@gmail.com",
            contact:"8590037942"
          },
          notes:{
            address:"Razorpay coorparate office"
          },
          theme:{
            color:"#FFE51A"
          }
        };

        var pay=new  window.Razorpay(opitions)
        pay.open()
      }
      
      }
      >Pay for the order</button>

        </div>
        <div>
        <button className='button' style={{background:"black",borderColor:'transparent',color:"white",margin:"5px", padding:"10px",width:'150px',borderRadius:'auto',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
      onClick={()=>alert()}
      >Decline</button>
        </div>
        </>


        
          ))}
            </>
          }
       })()
       
       }
</div>
  
    
      </div>
       </> 
   }
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


 
               </div>
               <DataTable 
        
        columns={coloumn} 
        data={filterUsers} 
        pagination
        
        customStyles={customStyles}
        highlightOnHover
      
        
      
        // data={data}
      />
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
