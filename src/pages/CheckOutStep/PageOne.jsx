import React, { useEffect, useState } from 'react'

// Latest version - v3.0.0 with Tree Shaking to reduce bundle size
import { Country, State, City }  from 'country-state-city';
import Modal from 'react-modal';

// Import Interfaces`
import { ICountry, IState, ICity } from 'country-state-city'


import './PageOne.css'
import { useHistory, useParams } from 'react-router-dom'
import { getProduct } from '../../Api/ProductRequest'
import swal from 'sweetalert'
import { createOrder } from '../../Api/OrderRequest'
import './PageOne.css'
import { getUser } from '../../Api/UserRequest';






function PageOne(props) {

  const [preOrder,SetPreOrder]=useState(false)
useEffect(()=>{
  console.log("props",props.type);
  if(props.type==="PreOrder"){
    SetPreOrder(true)
  }else{
    SetPreOrder(false)
  }
 
},[])
  const [post ,setPost]=useState({})
  
  const [shipping ,setshipping]=useState(0)
  const [platform ,setPlatform]=useState(0)
  const [total ,setTotal]=useState(0)
  const [states,setState]=useState([])
  const [stateCode,setStateCode]=useState("AN")
  const [cityCode,setCityCode]=useState("Bamboo Flat")
  const [city,setCity]=useState([])
  const [addedAddress,setAddedAddress]=useState([])
  const params =useParams()
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      // overflow: 'hidden', /* Hide scrollbars */
      height:"90%"
    },
  };
  let subtitle;

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [address, setAddress] =React.useState({
    firstName:"",

    email: "",

    lastName: "",
    mobile:"",
    DAddress:"",
    city:"",
    state:"",
    zip:"",
    

  });
  const userId=localStorage.getItem("userId") 
  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

useEffect(() => {
  async function fetchData() {
    // You can await here
    const {data}=await getProduct(params.id)

    setPost(data)
    // ...
    console.log(post.price);
    const totalPrice=shipping+platform+Number(post.price )
    setTotal(totalPrice)
    setState( State.getStatesOfCountry("IN"))
    setCity(City.getCitiesOfState("IN", stateCode))

  }
  fetchData();
}, [stateCode]); // Or [] if effect doesn't need props or state
console.log("states",states)
const userData =localStorage.getItem("userId")
const userInfo =localStorage.getItem("userInfo")
const [userInformation,setUserInformation]=useState()
const orderType=localStorage.getItem("accountType")
  const history = useHistory();
  const handlesubmitinfo= () => {
      // history.push("/PurchaseItem");
          } 

          const order=async()=>{
            
           console.log("orderdata", userData,userId);
           console.log("preOrder",preOrder)
           
            if(userData && userInfo){
             const ata={
               productId:post._id,
               productName:post.name,
               userId:userData,
               quantity:params.quant,
               price:post.price,
               sellerId:post.sellerId,
               sellerName:post.sellerName,
               deliveryAddress:{
                  firstName:address.firstName,
                  lastName:address.lastName,
                  mobile:address.mobile,
                  email:address.email,
                  state:stateCode,
                  city:cityCode,
                  post:address.zip,
                  address1:address.DAddress
        
               },
               image:post.image1,
               orderType:orderType,
               paymentMod:"COD",
               PaymentStatus:"PENDING",
               DeliveryStatus:"PENDING",
               OrderStatus:"ORDERED",
               preOrder:preOrder

             }
             console.log(ata);
             alert()
             const tata= await createOrder(ata)
             if(tata){
              swal("Ordered Successfully...!")
              //  history.push("/SellerOrderFullfillment")
              // history.push("/PurchaseCart")
              openModal()
             }
            }else{
             swal("Login first")
             history.push('/signin')
            }
            
              
           }
          
           console.log(stateCode);
           console.log(city);
           function openModal() {
            setIsOpen(true);
          }
        
          function afterOpenModal() {
            // references are now sync'd and can be accessed.
            subtitle.style.color = '#f00';
          }
        
          function closeModal() {
            setIsOpen(false);
          }
           useEffect(()=>{


            async function fetchData() {
              // You can await here
              console.log(userId);
              const { data} =await getUser( userId)
             setUserInformation(data)
              setAddedAddress( data.address)
              console.log("dta",data.address, );
              // ...
            }
            fetchData();
          

           },[])

           console.log("added address",addedAddress);
  return (
    <div>
    <div style={{marginLeft:"3rem" ,display:"flex"}}>

  {addedAddress 
  && addedAddress.length>0 &&
  addedAddress.map((ele)=>(

    <div onClick={()=>{

      setAddress({
        DAddress:ele.address1,
        zip:ele.post,
        email:userInformation.email,
        mobile:userInformation.mobile,
        firstName:userInformation.firstname,
        lastName:userInformation.lastname,
      })

      setCityCode(ele.city)
      setStateCode(ele.state)
    }} style={{width:"15rem",height:"5rem",backgroundColor:"#bcb9a8",margin:"10px",borderRadius:"15px",padding:"10px",fontSize:"10px"}}>
   Addres : {ele.address1} <br />
   State:{ele.state} <br />
   City:{ele.city} <br />
   Zip :{ele.post}

  </div>
  ))
  
  }
 
    </div>
      <div align='center' className='flex-contianer' >
        <div className='MediaCard' >
         
          <div className='card' id="MediaCard"  >
            <div className='imagecontainer'><img style={{height:"18rem",width:"15rem",padding:"1rem 2rem 1rem 2rem  ",borderRadius:"16%"}} src={post.image1?"https://server.dropspot.in/images/"+post.image1:""} alt="" /></div>
           <div className='containerMAx'>
           <div className='flexitem'>
              <div className='flexleft'>
                <h5>Price </h5>
              </div>
              <div className='flexright'>
              ₹  {post.price}
              </div>
            </div>
              <div className='flexitem'>
              <div className='flexleft'>
                <h5>Platform charge </h5>
              </div>
              <div className='flexright'>
              ₹  {platform}
              </div>
            </div>
            <div className='flexitem'>
              <div className='flexleft'>
                <h5>Shiping</h5>
              </div>
              <div className='flexright'>
              ₹  {shipping}
              </div>
            </div>
            <div >
              <button className='totabtn'>
             <div style={{display:'flex',justifyContent:'space-between',padding:'15px'}}>
             <div>
                <h5>Total Price</h5>
              </div>
              <div>
              ₹ {total}
              </div>
             </div>
              </button>
              
            </div>
           </div>
          </div>
        
        </div>
      <div className='flex-item-left' >
        <div align='center'><h4 className='header1'>Contact Information</h4></div>
       <div align='left'  style={{height:'0px'}} className='mediay' ></div>
        <div align='right' style={{height:'0px'}} className='imghim'></div>
        <div className='container'>
        <form  >
          <div >
          <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
          <div align='left'><label htmlFor="" className='namele'>First Name</label></div>
              <div><input className='Mobiinput' onChange={handleChange} name='firstName' value={address.firstName} type="text" required /></div>
        </div>
        <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
             <div align='left'><label htmlFor="" className='namele'>Last</label></div>
              <div><input className='Mobiinput' name='lastName'     onChange={handleChange} value={address.lastName} type="text" required  /></div>
        </div>
         
          </div>
       
        <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="" className='namele'>Mobile number</label></div>
              <div><input className='Mobiinput'   onChange={handleChange} name='mobile' value={address.mobile} type="text" required  /></div>
        </div>
        <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="" className='namele'>Email</label></div>
              <div><input className='Mobiinput'  onChange={handleChange} name='email' value={address.email} type="text" required  /></div>
        </div>
        <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="" className='namele'>Address</label></div>
              <div><input className='Mobiinput' onChange={handleChange} name='DAddress' value={address.DAddress} type="text" required  /></div>
        </div>
        <div>
          <div>
   
        <div>
    <div  >
     
      <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="" className='namele'>State</label></div>
              <div>
              <select className='Mobiinput'  required onChange={(e)=>{
                  setStateCode(e.target.value)
                 
            
              }} name="" id="">
            
              {states &&
            states.length > 0 &&
            states.map((ele) => (  
              <option value={ele.isoCode} >{ele.name}</option>
             ))}
                
              </select>
              </div>
        </div>
        <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="" className='namele'>City</label></div>
              <div>
              <select className='Mobiinput' required  name="" id="" onChange={(e)=>{
                  setCityCode(e.target.value)
                 
            
              }}>
             { city.length > 0 &&
            city.map((ele) => (  
              <option value={ele.name} >{ele.name}</option>
             ))}
              </select>
              </div>
        </div>
          
          <div>
           
          </div>
          <div>
       
          </div>
          
      </div>

      <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="" className='namele'>Zip</label></div>
              <div><input name='zip' value={address.zip}     onChange={handleChange}  className='Mobiinput' type="text" required  /></div>
        </div> 
        </div>
          </div>
        </div>
      
      <div className='flexbuttons' style={{display:'flex',justifyContent:'space-between'}}>
       
        {
         preOrder==true? <>
           <div><button type='button' className='submitbutton' onClick={order}>PreOrder</button></div>
         </>:
          <>
   <div><button type='submit' className='submitbutton' onClick={order}>Pay Now</button></div>
       
          </>
        }
      </div>
       
         
        
        </form>
        </div>
       
      
      
        </div>
      <div className='flex-item-right'>
          <div className='card' id='cardComponet'>
            <div className='imagecontainer'><img style={{height:"18rem",width:"21rem",padding:"1rem 2rem 1rem 2rem  ",borderRadius:"16%"}} src={post.image1?"https://server.dropspot.in/images/"+post.image1:""} alt="" /></div>
           <div className='containerMAx'>
           <div className='flexitem'>
              <div className='flexleft'>
                <h5>Price </h5>
              </div>
              <div className='flexright'>
              ₹  {post.price}
              </div>
            </div>
              <div className='flexitem'>
              <div className='flexleft'>
                <h5>Platform charge </h5>
              </div>
              <div className='flexright'>
              ₹  {platform}
              </div>
            </div>
            <div className='flexitem'>
              <div className='flexleft'>
                <h5>Shiping</h5>
              </div>
              <div className='flexright'>
              ₹  {shipping}
              </div>
            </div>
            <div >
              <button className='totabtn'>
             <div style={{display:'flex',justifyContent:'space-between',padding:'15px'}}>
             <div>
                <h5>Total Price</h5>
              </div>
              <div>
              ₹ {total}
              </div>
             </div>
              </button>
              
            </div>
           </div>
          </div>
        </div>
        

       

      
       
       
      </div>

      
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
         <h2 ref={(_subtitle) => (subtitle = _subtitle)} style={{color:"#32CD32",margin:"2rem"}}>Preorder Placed Successful!</h2>
        <> 
<div className='container-fluid' style={{height:"600px"}} >
  <div align='right' style={{height:'0px'}} className='pip'><img src="" alt="" /></div>
           <div align='center' style={{justifyContent:'center'}} >
           <div  align='center'   className='card' id='cardpurchase'>
                <div id='orderpack'>
                <div style={{margin:'auto'}}>
                    <img src={"http://localhost:5000/images/"+post.image1} style={{width:"24rem",marginRight:"1rem"}} alt="" />
                </div> 
                <div>
                    <div className='card' id='cardpro' >
                     <div className='container' style={{padding:'20px'}}  >
                     <div  align='center'><h4> <b>{post.name}</b> </h4></div>
                       <div align='center'  style={{display:'flex',justifyContent:'space-between',padding:'20px'}}>
                       <div>Price</div>
                        <div>₹ {post.price }</div>
                       </div>
                     </div>
                    </div>
                </div>
                </div>
               
                <hr />
                <div  id='comple'>
                <div >
                   <button  className='.nextbtn' style={{margin:"1rem" ,borderRadius:"5px",backgroundColor:"#F3CA6D"}}  onClick={()=>{
                 history.push("/")
                   }}>Shop More</button>
                </div> 
                <div>
                    <button className='.nextbtn' style={{margin:"1rem",borderRadius:"5px",backgroundColor:"#F3CA6D"}} onClick={()=>{
                     history.push("/Dropshiporder")
                      closeModal()
                      
                    }}> <b>My PreOrders</b> </button>
                </div>
                </div> 
            </div>
          
           </div>
           <div align='center' style={{marginTop:'50px'}} className='con'>
      <h4 style={{fontWeight:'500px'}}> <b>Your Order will be shipping on </b> </h4>
    </div>
           <div align='left' class="bottomleft"><img style={{height:'300px'}} src="" alt="" /></div>  
           <div className='bootomright'><img src="" alt="" /></div> 

         
    </div>
    
    <div align='right' className='jil'><img src="" alt="" /></div>

   
    </>
      </Modal>
     
      
     
    
    </div>
  )
}

export default PageOne