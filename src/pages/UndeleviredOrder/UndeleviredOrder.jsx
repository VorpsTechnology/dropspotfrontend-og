import React ,{useEffect, useState} from 'react'

import Adminnavbar from '../Adminnavbar/Adminnavbar'
import Sidebar from '../Sidebar/Sidebar'
import 'bootstrap/dist/css/bootstrap.css';
import { Tab } from '@headlessui/react';
import './UndeleviredOrder.css'
import { allawaitingPayments, alldispatchedorder, allpendingorders, mypreOrders } from '../../Api/OrderRequest';
import DataTable from 'react-data-table-component';
import Dashboardfooter from '../../components/Dashboardfooter/Dashboardfooter';


function UndeleviredOrder() {
  document.body.style.backgroundColor = "#32333A"
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

        //  const paybtn={
        //   backgroundColor:'#FDE31A',
        //   borderColor:'transparent',
        //   borderRadius:'10px',
          
        //   padding:'10px',
        //   outlineColor:'#FDE31A',
        //   marginRight:'10px',
        //   fontSize:'15px',
        //   width:'150px',
        //   fontWeight:'650',
        //   boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
        //  }
        
         const Clearbtn={
          backgroundColor:'black',
          borderColor:'transparent',
          borderRadius:'10px',
          color:'white',
          padding:'10px',
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
          
      
          width:'150px',
          fontWeight:'650', 
         }
        
         const Order={
            backgroundColor:'#FDE31A',
            borderColor:'transparent',
            borderRadius:'10px',
            fontWeight:'400',
            fontSize:'15px',
           
          
         }
        
    
         const Pickbtn={
          backgroundColor:'#FDE31A',
          borderColor:'transparent',
          borderRadius:'10px',
          
          padding:'10px',
          outlineColor:'#FDE31A',
          marginRight:'10px',
          fontSize:'15px',
          width:'240px',
          fontWeight:'650',
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
             
         }
         const skubnt={
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
  const userId=localStorage.getItem("userId")
    const[users,setUsers]=useState([]);
const [search,setSearch]=useState("");
const [filterUsers,setFilteredUsers]=useState([]);
const [all,setAll]=useState(false)
const [awaitingPayment,setawaitingPayment]=useState(false) 
const [pending,setPending]=useState(false) 
const [processing,setProcessing]=useState(false) 
const [dispatched,setDispatched]=useState(false) 
const [completed,setCompleted]=useState(false)
const [closed,setClosed]=useState(false)
const [returns,setReturns]=useState(false) 

const [allOrders,setAllOrders]=useState([{productName:"testorders"},{productName:"testorders1"},{productName:"testorders2"}])
const [allawaiting,setAllawaiting]=useState([])
const [allpending,setAllpending]=useState([])
const [allprocessing,setAllprocessing]=useState([])
const [alldispatched,setAlldispatched]=useState([])
const [allcompleted,setAllcompleted]=useState([])
const [allclosed,setAllclosed]=useState([])
const [allreturns,setAllreturns]=useState([])

console.log("allpending",allpending);

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
   if(awaitingPayment){
    const ata={userId:userId}
    // const {data}=await sellerOrders(ata)
    // setUsers(data)
    const data=[]
    setFilteredUsers(data)
    console.log("gaiii",data);
   }if(all){
    const data=[{name:"adarsh",price:29},{name:"adarsh",price:29},{name:"adarsh",price:29}]
    setUsers(data)
    setFilteredUsers(data)
    console.log("gaiii",data);
   }
    // ...
  }
  fetchData();
}, [all,awaitingPayment,pending,processing,dispatched,completed,closed,returns]); // Or [] if effect doesn't need props or state

// useEffect(()=>{
//   const result=users.filter((user)=>{
//       return user.firstname.toLowerCase().match(search.toLowerCase());
      
//   })
//   setFilteredUsers(result)
// },[search,users])
const customStyles={
  headCells: {
    style: {
      padding:'5px',marginTop:'20px',
      height:"60px",
      fontWeight:"500px",
      fontSize:"16px"
    },
  },
cells: {
  style: {

      paddingLeft: '8px', // override the cell padding for data cells
      paddingRight: '8px',
      width:"14rem"
     
  },
},
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
    marginLeft:"-7rem",
      color: "gray",
      }},
      
        {selector:(row)=>row.quantity,style: {
          marginLeft:"-5rem",
          color: "gray",
          }},
  {selector:(row)=>row.
    paymentMod,style: {
      marginLeft:"-7rem",
      color: "gray",
      }},{selector:(row)=>"xxxx",style: {
        marginLeft:"-7rem",
          color: "gray",
          }},
          {selector:(row)=>row.price,style: {
            marginLeft:"-7rem",
              color: "gray",
              }},
  {name:"",selector:(row)=>
  <div style={{display:"inline"}}>
    {
      all && <>
      <button className='button' style={{background:"#FFE51A",color:"black",borderColor:'transparent',marginBottom:"10px",marginLeft:"5px",padding:"10px",width:'150px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
      onClick={()=>alert()}
      >Status</button>
      </>
    }
    {awaitingPayment&&<>
      <div>
      <button className='button' style={{background:"#FFE51A",color:"black",borderColor:'transparent',marginBottom:"10px",marginLeft:"5px",padding:"10px",width:'150px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
      onClick={()=>alert()}
      >Request Payment</button>
      </div>
      <div>
      <button className='button' style={{background:"black",borderColor:'transparent',color:"white",marginLeft:"5px", padding:"10px",width:'150px',borderRadius:'auto',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
      onClick={()=>alert()}
      >Decline</button>
      </div>
    </>}


    {
      pending && <>
      <div>
      <button className='button' style={{background:"#FFE51A",color:"black",borderColor:'transparent',marginBottom:"10px",marginLeft:"5px",padding:"10px",width:'150px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
      onClick={()=>alert()}
      >Invoice</button>
      </div>
      <div>
      <button className='button' style={{background:"#FFE51A",color:"black",borderColor:'transparent',marginBottom:"10px",marginLeft:"5px",padding:"10px",width:'150px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
      onClick={()=>alert()}
      >Request shipping fee</button>
      </div>
      <div>
      <button className='button' style={{background:"black",borderColor:'transparent',color:"white",marginLeft:"5px", padding:"10px",width:'150px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
      onClick={()=>alert()}
      >Support </button>
      </div>
      </>
    }

    {
      processing && <>
     <div>
      <button className='button' style={{background:"#FFE51A",color:"black",borderColor:'transparent',marginBottom:"10px",marginLeft:"5px",padding:"10px",width:'150px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
      onClick={()=>alert()}
      >Invoice</button>
      </div>
      <div>
      <button className='button' style={{background:"#FFE51A",color:"black",borderColor:'transparent',marginBottom:"10px",marginLeft:"5px",padding:"10px",width:'150px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
      onClick={()=>alert()}
      >Support</button>
      </div>
      
      
      </>
    }


        {
          dispatched && <>
          <div>
      <button className='button' style={{background:"#FFE51A",color:"black",borderColor:'transparent',marginBottom:"10px",marginLeft:"5px",padding:"10px",width:'150px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
      onClick={()=>alert()}
      >Invoice</button>
      </div>
      <div>
      <button className='button' style={{background:"#FFE51A",color:"black",borderColor:'transparent',marginBottom:"10px",marginLeft:"5px",padding:"10px",width:'150px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
      onClick={()=>alert()}
      >Support</button>
      </div>
          </>
        }   


        {
          closed && <>
       <div>
      <button className='button' style={{background:"#FFE51A",color:"black",borderColor:'transparent',marginBottom:"10px",marginLeft:"5px",padding:"10px",width:'150px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
      onClick={()=>alert()}
      >invoice</button>
      </div>
      <div>
      <button className='button' style={{background:"#FFE51A",color:"black",borderColor:'transparent',marginBottom:"10px",marginLeft:"5px",padding:"10px",width:'150px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
      onClick={()=>alert()}
      >support</button>
      </div>
      <div>
      <button className='button' style={{background:"black",borderColor:'transparent',color:"white",marginLeft:"5px", padding:"10px",width:'150px',borderRadius:'auto',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
      onClick={()=>alert()}
      >Remove</button>
      </div>
          </>
        } 
           

           {
            completed && <>
            <div>
      <button className='button' style={{background:"#FFE51A",color:"black",borderColor:'transparent',marginBottom:"10px",marginLeft:"5px",padding:"10px",width:'150px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
      onClick={()=>alert()}
      >Invoice</button>
      </div>
      <div>
      <button className='button' style={{background:"#FFE51A",color:"black",borderColor:'transparent',marginBottom:"10px",marginLeft:"5px",padding:"10px",width:'150px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
      onClick={()=>alert()}
      >Support</button>
      </div>
            </>
           }

           {
            returns && <>
           <div>
      <button className='button' style={{background:"#FFE51A",color:"black",borderColor:'transparent',marginBottom:"10px",marginLeft:"5px",padding:"10px",width:'150px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
      onClick={()=>alert()}
      >Accept return</button>
      </div>
      <div>
      <button className='button' style={{background:"black",borderColor:'transparent',color:"white",marginLeft:"5px", padding:"10px",width:'150px',borderRadius:'auto',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',}}
      onClick={()=>alert()}
      >Decline</button>
      </div>
            </>
           }
       </div>,
       style:{
        marginLeft:"-7rem",
       }
     
      },
            
]



         
        
  return (
    <div style={{backgroundColor:'#32333A'}}>
      <div>
        <Adminnavbar />
      </div>
      <div className='row' style={{marginTop:'100px',marginBottom:'100px'}}>
      <div className='col-2'  style={{backgroundColor:'#31343A'}}><Sidebar /></div>
      <div className='col-10' >
    
      <div className='container' id="tabcontainer" style={{margin:'10px 20px 10px 10px',width:'auto', padding:'10px'}}>
      <div className='headingAll'><h2>RTO</h2></div>
      <Tab.Group>
      <div className='conatiner' style={buttonheader}>
      <Tab.List className="flex space-x-1 rounded-xl  p-1"  >
      <Tab  className={`tabbtn3 ${tabSelected === 1 ? "selected-tab1" : ""}`}
                    onClick={async() => {
                      setAll(false)
                    setawaitingPayment(false)
                    setPending(false)
                    setProcessing(false)
                    setDispatched(true)
                    setCompleted(false)
                    setClosed(false)
                    setReturns(false)
                    const ata={
                      status:true
                    }
                    const data=await alldispatchedorder(ata)
                 setAlldispatched(data.data)
                  console.log(data.data)
                      handelTabCLick(5)}}> Pickup </Tab>
                    <Tab  className={`tabbtn3 ${tabSelected === 2 ? "selected-tab1" : ""}`}
                     onClick={async() => {
                      setAll(false)
                    setawaitingPayment(false)
                    setPending(true)
                    setProcessing(false)
                    setDispatched(false)
                    setCompleted(false)
                    setClosed(false)
                    setReturns(false)
                    const ata={
                      status:true
                    }
                    const data=await  allpendingorders(ata)
                 setAllpending(data.data)
                  console.log(data.data)
                      handelTabCLick(3)}}>Processing</Tab>
               <Tab   className={`tabbtn3 ${tabSelected === 3 ? "selected-tab1" : ""}`}
                     onClick={async() => { 
                      setAll(false)
                    setawaitingPayment(true)
                    setPending(false)
                    setProcessing(false)
                    setDispatched(false)
                    setCompleted(false)
                    setClosed(false)
                    setReturns(false)
                    const ata={
                      status:true
                    }
                    const data=await  allawaitingPayments(ata)
                 setAllawaiting(data.data)
                  console.log("allawaiting",data.data)
                    handelTabCLick(2)}}>Recieved</Tab>
                <Tab   className={`tabbtn3 ${tabSelected === 4 ? "selected-tab1" : ""}`}
                       onClick={() =>{ 
                        setAll(true)
                        setawaitingPayment(false)
                        setPending(false)
                        setProcessing(false)
                        setDispatched(false)
                        setCompleted(false)
                        setClosed(false)
                        setReturns(false)
    
                        handelTabCLick(1)
                        }}>Closed</Tab>
              </Tab.List>
         </div>
             
         
          
         <Tab.Panels style={tabpanls}>
          <Tab.Panel>
          <div className='container' style={{ display: 'block',color:'black',borderRadius:'30px',}}>
          <div className="container" style={{ display: 'block',color:'black',padding:'20px',borderRadius:'30px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)"}} >
          <div className='row' style={{marginTop:'20px'}}>
            
            
            <div className='col'><input style={skubnt} placeholder='please enter order number' type="text" />
            </div>
            

      </div>
        
      <div className='row' style={{marginTop:'20px'}}>
        <div className='col-2'><button style={serchbtn}>submit</button></div>
        <div className='col-2'><button style={Pickbtn}> Send Pickup Notification</button></div>
      </div>
          </div>
          <div className='container' style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1000px' ,overflowX:'scroll'}}>
            <div style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1000px' }}>
            <div className='row' style={{padding:'7px',backgroundColor:'#FDE31A',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px',width:'1500px',marginRight:'100px' }}>
            <div className='col-md-auto'><button style={Order}>Your Order Number</button></div>
           
            <div className='col-md-auto'><button style={Order}>Order Source</button></div>
            
            <div className='col-md-auto'><button style={Order}>Quantity</button></div>
          
           
            <div className='col-md-auto'><button style={Order}>Paid Time</button></div>
            <div className='col'><button style={Order}>Status</button></div>
            <div className='col'><button style={Order}>Address</button></div>
            <div className='col-md-auto'><button style={Order}>Shipping Info</button></div>
            <div className='col-md-auto'><button style={Order}>Shipping Method</button></div>
            <div className='col-md-auto'><button style={Order}>Tracking Number </button></div>
            <div className='col'><button style={Order}>Amount</button></div>
            <div className='col'><button style={Order}>Action</button></div>


          </div>
            </div>
          
          </div>
          <DataTable 
        
        columns={coloumn} 
        data={allprocessing} 
        pagination
      
      customStyles={customStyles}
        highlightOnHover
      
        
      
        // data={data}
        />

          </div>
      
            </Tab.Panel>
            <Tab.Panel>
           <div  className='container' style={{ display: 'block',color:'black',borderRadius:'30px',}}>
           <div className="container" style={{ display: 'block',color:'black',padding:'20px',borderRadius:'30px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)"}} >
           <div className='row' style={{marginTop:'20px'}}>
            <div className='col'><input style={skubnt} placeholder='please enter order number' type="text" /></div>

            </div>
        
            <div style={{marginTop:'20px'}}><button style={serchbtn}>Search</button></div>
          </div>
           </div>
           <div className='container'  style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1000px' ,overflowX:'scroll'}}>
           <div  style={{ display: 'block',color:'black',padding:'7px',borderRadius:'30px',width:'1000px' }}>
           <div className='row' style={{padding:'7px',backgroundColor:'#FDE31A',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px',width:'1700px',marginRight:'100px' }}>
                <div className='col-md-auto'><button style={Order}> Order Number</button></div>
                <div className='col-md-auto'><button style={Order}>Store Order Number</button></div>
                <div className='col-md-auto'><button style={Order}>Order Source</button></div>
                <div className='col-md-auto'><button style={Order}>Tracking Number</button></div>
                <div className='col-md-auto'><button style={Order}>Pickup Carrier Contact Info</button></div>
                <div className='col-md-auto'><button style={Order}>Resending Fee (INR)</button></div>
                <div className='col-md-auto'><button style={Order}>Deadline</button></div>
                <div className='col-md-auto'><button style={Order}>Note</button></div>
                <div className='col-md-auto'><button style={Order}>Shipping Info</button></div>
                <div className='col-md-auto'><button style={Order}>Date Processed</button></div>



                </div>
           </div>
           <DataTable 
        
        columns={coloumn} 
        data={allpending} 
        pagination
      
      customStyles={customStyles}
        highlightOnHover
      
        
      
        // data={data}
        />
            </div>

           
            
              
                
            </Tab.Panel>
            <Tab.Panel>
            <div className='continer' style={{ display: 'block',color:'black',borderRadius:'30px'}}>
            
            <div className="container" style={{ display: 'block',color:'black',padding:'20px',borderRadius:'30px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)"}} >
            <div className='row' style={{marginTop:'20px'}}>
            <div className='col'><input style={skubnt} type="text"  placeholder='please enter order number' /></div>
         
            
           

          </div>
         
          <div className='row' style={{marginTop:'20px'}}>
            <div className='col-2'><button style={serchbtn}>Search</button></div>
          
            <div className='col-2'><button style={serchbtn}>Upload Excel</button></div>
            <div className='col-2'><button style={serchbtn}>Download Excel</button></div>
          </div>
            </div>

            <div className='container'  style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1000px' ,overflowX:'scroll'}}>
            <div style={{ display: 'block',color:'black',padding:'7px',borderRadius:'30px',width:'1000px',marginRight:'100px' }}>
          <div className='row' style={{padding:'5px',marginTop:'20px',backgroundColor:'#FDE31A',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',width:'1390px'}}>

           
            <div className='col-md-auto'><button style={Order}>Store Order number</button></div>
            <div className='col-md-auto'><button style={Order}>Order Source</button></div>

            <div className='col-md-auto'><button style={Order}>Tracking Number</button></div>
            <div className='col-md-auto'><button style={Order}>Pick Up Carrier Contact Info</button></div>
            <div className='col-md-auto'><button style={Order}>Resending Fee</button></div>
            <div className='col-md-auto'><button style={Order}>Deadline</button></div>
            <div className='col-md-auto'><button style={Order}>Note</button></div>
            <div className='col-md-auto'><button style={Order}>Shipping Info</button></div>
            <div className='col-md-auto'><button style={Order}>Action</button></div>


            </div>
          </div>
            </div>
        
            <DataTable 
        customStyles={customStyles}
        columns={coloumn} 
        data={allawaiting} 
        pagination
      
      
        highlightOnHover
      
        
      
        // data={data}
      />
            </div>
          
            </Tab.Panel>
            <Tab.Panel>
              <div style={{ display: 'block',color:'black',borderRadius:'30px'}}>
                <div className="container" style={{ display: 'block',color:'black',padding:'20px',borderRadius:'30px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)"}} >
                <div className='row' style={{marginTop:'20px'}}>

                  <div className='col'><input style={skubnt} placeholder='please enter order number' type="text" /></div>
                  <div style={{marginTop:'20px'}}><button style={serchbtn}>Search</button></div>



                  </div>
                </div>
                <div className='container'  style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1000px' ,overflowX:'scroll'}}>
                <div style={{ display: 'block',color:'black',padding:'7px',borderRadius:'30px',width:'1000px' }}>
                <div className='row'  style={{padding:'7px',backgroundColor:'#FDE31A',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px',width:'1400px',marginRight:'100px' }}>
                <div className='col-md-auto'><button style={Order}> Order Number</button></div>
                <div className='col-md-auto'><button style={Order}>Store Order Number</button></div>
                <div className='col-md-auto'><button style={Order}>Order Source</button></div>
                <div className='col-md-auto'><button style={Order}>Tracking Number</button></div>
                <div className='col-md-auto'><button style={Order}>Pick Up Carrier Contact Info</button></div>
                <div className='col-md-auto'><button style={Order}>Resending Fee</button></div>
                <div className='col-md-auto'><button style={Order}>Deadline</button></div>
                <div className='col-md-auto'><button style={Order}>Note</button></div>
                <div className='col-md-auto'><button style={Order}>Action</button></div>



                </div>
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
      <div className='row'>
      <Dashboardfooter/>
      </div>
     
    </div>
  )
}

export default UndeleviredOrder
