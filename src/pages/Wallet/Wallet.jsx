import React, { useEffect, useState } from "react";
import './Wallet.css'
import icon from '../../assets/coin.png'
import "bootstrap/dist/css/bootstrap.css";
import { Tab } from "@headlessui/react";
import gold from '../../assets/gold.png'
import Footer from '../../components/Footer/Footer'
import Navbar from "../../components/Navbar";

import Shopnavbar from "../../components/ShopNavbar/Shopnavbar";
import { getUserWallet } from "../../Api/userWalletRequest";
import DataTable from "react-data-table-component";
const Wallet = () => {

  const [wallet,setWallet]=useState()

  useEffect(()=>{
    const fetchData=async()=>{
   
       const userId=localStorage.getItem("userid")
       const {data}=await getUserWallet(userId)
       setWallet(data)
    }
    fetchData()
  },[])

  const [tabSelected, setTabSelected] = useState(null);
  // const tabheader = {
  //   backgroundColor: "rgba(217, 217, 217, 1)",
  //   borderColor: "transparent",
  //   border: " 0.5px solid rgba(0, 0, 0, 0.25)",
  //   width: "auto",
  //   padding: "10px",
  //   fontWeight: "800",
  //   height: "50px",
  //   alignItems: "center",
  //   borderRadius: "10px",
  //   margin: "15px 5px 15px 5px",
  // };

  const buttonheader = {
    backgroundColor: "transparent",
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


  const [allawaiting,setAllawaiting]=useState([])

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

      {row.allawaiting&&<>
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
  
  
  
  
       
         </div>,
         style:{
          marginLeft:"-7rem",
         }
       
        },
              
  ]

  
  return (
    <div>
      <Navbar/>
     <Shopnavbar/>
      <br />

      <div style={{display:'flex',marginLeft:'80px',padding:'40px'}}>
        <div><h2>Account Balance : </h2></div>
        <div style={{paddingLeft:'10px'}}><input className='inputtext' type="text" placeholder="₹" value={`₹ ${wallet?.userAddedMoney||0}`} /></div>
      </div>



<div className='row' id='walletrow'>
  <div className='col'>
    <div align='center'>
    <div><h6>Pending</h6></div>
    <div><input className='walletinput' type="text" value={`₹ ${wallet?.userAddedMoney||0}`} placeholder="₹" /></div>
    </div>
  </div>
  <div className='col'>
  <div align='center'>
    <div><h6>Frozen</h6></div>
    <div><input className='walletinput' type="text" value={`₹ ${wallet?.userAddedMoney||0}`} placeholder="₹"/></div>
    </div>
  </div>
  <div className='col'>
    <div align='center'>
      <div><h6>Withdrawable</h6></div>
      <div><input className='walletinput' type="text" value={`₹ ${wallet?.userAddedMoney||0}`}  placeholder="₹"/></div>
      </div>
  </div>
  <div className='col'>
    <div align='center'>
      <div><h6>Deposit</h6></div>
      <div><input className='walletinput' type="text"  value={`₹ ${wallet?.userAddedMoney||0}`} placeholder="₹"/></div>
      </div>
  </div>

</div>
<div>

<div className="container-fluid" id="walletcontainer" >
    <div className='flexitems' style={{backgroundColor:'#1F1F1F',borderRadius:'40px',margin:'20px 20px 20px 20px',padding:'10px'}}>
        <div className='flexleft'>
          <div className='row' style={{marginTop:'45px'}}>
            <div className='col-4'><h4 style={{color:'white'}}>Amount</h4></div>
            <div className='col-4'><input className='boxinput'  placeholder="Enter the amount you want to withdraw" type="number" /></div>
          </div>
          </div>
        <div className='flexright'>
          <img src={icon} alt="" />
        </div>

      </div>

    <div className='container-fluid' style={{marginLeft:'40px'}}>
      
      <h2 style={{paddingTop:'40px',marginLeft:'60px'}}>Charging Methods</h2>
    <div className="flexcontent" style={{display:'flex',justifyContent:'space-between'}}>
      <div className="flexleft" style={{justifyContent:'left'}}>
      <div style={{display:'flex',margin:'10px',paddingTop:'20px'}}>
        <div><button className='upibtn'>UPI</button></div>
        <div><button className='paybtn' style={{marginLeft:'5px'}}>Paytm</button></div>
        <div><button className='paybtn' style={{marginLeft:'5px'}}>Net Banking</button></div>
      </div>
      <div style={{margin:'10px',paddingTop:'40px'}}>
        <div><h6>Amount Charging <span style={{marginLeft:'20px'}}><input className='inputitem' type="text" /></span></h6></div>
        <div><h6>Amount Recievied<span  style={{marginLeft:'20px'}}><input  className='inputitem'  type="text" /></span></h6></div>
      </div>
      <div><button className='withdrawbtn'>withdraw</button></div>

      </div>
      <div className="flexright" style={{justifyContent:'right'}}>
        <img src={gold} alt="" />
      </div>
    </div>

    </div>

    <div className='conatiner'>
    <div
            
                id="tabcontainer"
                style={{
                  margin: "20px 0px 20px 10px",
                
                  padding: "20px",
                }}
              >
                <div align="center" className='headingAll'><h2>Transactions</h2></div>
                
                <Tab.Group>
                  <div className="conatiner" style={buttonheader}>
                  

                    <Tab.List className="tablist">
                      <Tab
                        className={`tabbtn ${tabSelected === 1 ? "selected-tab" : ""}`}
                        onClick={() => handelTabCLick(1)}
                      >
                      
                        Billing History
                      </Tab>
                      <Tab

                        className={`tabbtn ${tabSelected === 2 ? "selected-tab" : ""}`}
                        onClick={() => handelTabCLick(2)}
                      >

                      
                        Balance History
                      </Tab>
                    
                    </Tab.List>
                  </div>

                  <Tab.Panels style={tabpanls}>
                    <Tab.Panel>
                    <div className='Dashboardheading'></div>
                      <div className="row" style={{padding:'40px'}}>
                        <div className="col"><input   className="selectbox" type="date" /></div>
                        <div className="col">
                          <select className="selectbox" name="" id="">
                          <option value="">All</option>
                          <option value="">All</option>
                          <option value="">All</option>
                          </select></div>
                        <div className="col">
                          <input className="selectbox"  style={{color:'black'}} type="text" placeholder="Please Enter Order Number" />
                        </div>
                        <div className="col">
                          <button className="serachbtn">Search</button>
                        </div>
                        <div className="col">
                          <button className="genrateinvoice">Generate Invoice</button>
                        </div>
                      </div>
                      <div className="row" style={{backgroundColor:'#FDE31A',padding:'15px'}}>
                        <div className="col">Order ID</div>
                        <div className="col">   Date  </div>
                        <div className="col">  Type  </div>
                        <div className="col-2">  Payment Method </div>
                        <div className="col">  Account</div>
                        <div className="col">  Amount  </div>
                        <div className="col">  Status  </div>
                        <div className="col">  Transfer  </div>
                        <div className="col">  Slip  </div>
                        <div className="col">  Message  </div>
                      </div>


                      <DataTable 
        customStyles={customStyles}
        columns={coloumn} 
        data={allawaiting} 
        pagination
      
      
        highlightOnHover
      
        
      
        // data={data}
      />
                      </Tab.Panel>
                    <Tab.Panel>
                    <div className='Dashboardheading'><h2>Warehouse</h2></div>
                      Content 2</Tab.Panel>
                  
                  </Tab.Panels>
                </Tab.Group>
    </div>
    </div>
    </div>

</div>
<br /><br />
<Footer/> 
</div>

 
  )
}

export default Wallet
