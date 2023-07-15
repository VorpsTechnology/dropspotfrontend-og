import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import {  changependingstatus, myOrders, mypreOrders, myshopifyOrders, preOrderFullFill} from "../../Api/OrderRequest";
import Sidebar from '../Sidebar/Sidebar'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import Dashboardfooter from '../../components/Dashboardfooter/Dashboardfooter';
import swal from 'sweetalert';
function Dropshiporder() {

  document.body.style.backgroundColor = "#32333A"

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
      const skubntselect ={
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
        fontWeight:'650'
        
        
         }
        
         const Clearbtn={
            backgroundColor:'black',
            borderColor:'transparent',
            borderRadius:'10px',
            color:'white',
            padding:'10px',
            
        
            width:'150px',
            fontWeight:'650',
         }
         const userId=localStorage.getItem("userId")
         const[users,setUsers]=useState([]);
     const [search,setSearch]=useState("");
     const [filterUsers,setFilteredUsers]=useState([]);
     const [checkOrderSku,setcheckOrderSku]=useState([])
     useEffect(() => {
       async function fetchData() {
         // You can await here
         const ata={userId:userId}
         const {data}=await mypreOrders(ata)
     
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


     useEffect(()=>{
      async function fetchData() {
        // You can await here
        
          const ata={dropshipperId:userId,type:"shopify"}
        const {data}=await myshopifyOrders(ata)
        setcheckOrderSku(data)
        console.log("check",data);
        
        // ...
        }
        fetchData();
     },[])

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

     console.log("checkordersku",checkOrderSku);
     const coloumn=[
       {name:"Image",selector:(row)=>(
        <img style={{width:"7rem"}} src={"http://localhost:5007/images/"+row.image1} alt="" />
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
     
         {<>

        <div style={{display:"inline"}}>
       <div>

       
         {row.sku && (()=>{
                   
                   const data= checkOrderSku
                   console.log("data",checkOrderSku);
                   let val=false
                    
                   data.length>0 && data.map((ele)=>(
                    ele.sku==row.sku && ele.pending==false?val=true:""
                
                   ))

                return <>
                {
                  val &&    <div>
                    <button className='button' style={{background:"#FFE51A",borderColor:'black',color:"black",marginLeft:"5px", padding:"10px",width:'140px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',margin:"5px"}}
                        onClick={()=>{
                        
                       checkOrderSku.length>0 &&   checkOrderSku.map(async (ele)=>{
                     if(!ele.pending &&  ele.sku==row.sku){
                        const ata={
                          orderId:ele._id,
                          status:true ,
                           quantity:ele.quantity,
                          sku:ele.sku 
                        }
                        try {
                          const {data}= await changependingstatus(ata)
                        console.log(data);
                        if(data){
                          alert("Requested to fullfil order >!")
                          console.log(data);
                        }
          
                        } catch (error) {
                          console.log(error);
                        }
                      }
          
                       })


                        }}
                        >Fullfil All Orders</button>
                    </div>
                }
                </>

                    
                 
                  
                })()
                
                }
       </div>
      
       <div>
       <button className='button' style={{background:"white",borderColor:'black',color:"black",marginLeft:"5px", padding:"10px",width:'140px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',margin:"5px"}}
           onClick={()=>console.log("haiii")}
           >Utilize My Inventory</button>
       </div>
       <div>
       <button className='button' style={{background:"black",borderColor:'transparent',color:"white",marginLeft:"5px", padding:"10px",width:'140px',borderRadius:'5px',  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',margin:"5px"}}
           onClick={()=>console.log("haiii")}
           >Request Refund</button>
       </div>
      
 <div>
  


 </div>
        </div>
          
         </>}
                 
                
            </div>
          
           },
                 
     ]
  return (
    <div  style={{backgroundColor:'#31343A',padding:'0px 0px  0px'}}>
        <Adminnavbar />
        <div className='row'  style={{marginTop:'100px',marginBottom:'100px'}}>
            <div className='col-2' style={{backgroundColor:'#32333A'}}><Sidebar /></div>
            <div className='col-10'  >
             <div className='container' id='tabcontainer' style={{  display: 'block',color:'black',borderRadius:'20px',width:'auto',margin:'20px 20px 20px 20px', border:"0.5px solid rgba(0, 0, 0, 0.25)" ,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',padding:'20px',}}>
                <div className='Dashboardheading'><h3>Pre-Inventory Orders</h3></div>
             <div className='row' style={{marginTop:'20px'}}>
                    <div className='col'>
                        <select name="" id="" style={skubntselect}>
                            <option value="">Your Order Time</option>
                            
                        </select>
                    </div>
                    <div className='col'><p><input style={skubnt} type="date" /></p></div>
                </div>
                <div className='row' style={{marginTop:'20px'}}>
                    
                    <div className='col'>
                        <input style={skubnt} placeholder='please enter the name' type="text" />
                    </div>
                    <div className='col'>
                        <input style={skubnt} placeholder='plaese enter product title' type="text" />
                    </div>
                </div>

                
                <div className='row' style={{marginTop:'20px'}}>
                    <div className='col-4'>
                        <input style={skubnt} placeholder='please enter order number' type="text" />
                    </div>
                 

                    
                   
                </div>
                <div className='row'>
                <div style={{marginTop:'20px'}}><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>
                </div>
                {/* <div className='row' style={{backgroundColor:'#FFE627',padding:'5px',marginTop:'20px',borderRadius:'20px'}}>
                    <div className='col-md-auto'>Your Order Number
                    
                    </div> */}
                    {/* <div className='col-md-auto'>
                        <button style={{backgroundColor:'transparent',borderColor:'transparent'}}>Your order Time</button>
                    </div>
                    <div className='col-md-auto'>
                        <button style={{backgroundColor:'transparent',borderColor:'transparent'}}>Seller ID</button>
                    </div>
                    <div className='col-md-auto'>
                        <button style={{backgroundColor:'transparent',borderColor:'transparent'}}>Product Url</button>
                    </div>
                   
                    
                    <div className='col'>
                       
                        <p>Sku ID</p>
                        
                    </div>
                     <div className='col'><button style={{backgroundColor:'transparent',borderColor:'transparent'}} >Cost</button></div>   
                    <div className='col-md-auto'><button style={{backgroundColor:'transparent',borderColor:'transparent'}} >Available Stock</button></div>
                    
                    <div className='col'><button style={{backgroundColor:'transparent',borderColor:'transparent'}} >action</button></div>
                
                 */}
                {/* </div> */}
               <div  className='container'  style={{overflowX:"auto",padding:'10px',borderRadius:'30px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)"}}>
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
        <div className='row'>
          <Dashboardfooter />
        </div>
      
    </div>
  )
}

export default Dropshiporder
