import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import 'bootstrap/dist/css/bootstrap.css';


import { useEffect, useState } from 'react';
import 'react-js-dialog-box/dist/index.css';
import DataTable from 'react-data-table-component';
import { getWishlist } from '../../Api/WishlistRoute';
import { useHistory } from 'react-router-dom';
import Dashboardfooter from  '../../components/Dashboardfooter/Dashboardfooter' 
import illustration from '../../assets/illustration.jpg'
import './Wishlist.css'
function Wishlist() {

  const smtbtn={
    backgroundColor:'#FFE51A',
    borderColor:'transparent',
   
    width:'100px',
   borderRadius:'10px',
   padding:'5px'
  }

  const btns={
    backgroundColor:'transparent',
    borderColor:'transparent',
   

  }
  const btnmovesecond={
    width:'120px',
    backgroundColor:'#FFE51A',
    borderColor:'transparent',
    borderRadius:'10px',
    padding:'5px'
  }
  const btnmove={
    backgroundColor:'#FFE51A',
    borderColor:'transparent',
    padding:'5px',
    width:'100px',
    borderRadius:'10px'
  }

  const inputselectotion={
    width:'240px',color:'black',
  backgroundColor:'rgba(231, 231, 231, 1)',
   paddingLeft:'20px',
   marginLeft:'20px',
   borderColor:'transparent',
   borderRadius:'40px',
   height:'35px',
   outline:'transparent'
   
  
  
  }
  
  const[users,setUsers]=useState([]);
const [search,setSearch]=useState("");
const [filterUsers,setFilteredUsers]=useState([]);
  const userData=localStorage.getItem('userId')

  const history=useHistory()
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const beta={userId:userData}
      const {data}=await getWishlist(beta)
      setUsers(data)
      setFilteredUsers(data.Wishlist?.products)
      console.log(userData);
     
      // ...
    }
    fetchData();
  }, [userData]); // Or [] if effect doesn't need props or state
  useEffect(()=>{
    const result=users.filter((user)=>{
        return user.firstname.toLowerCase().match(search.toLowerCase());
        
    })
    setFilteredUsers(result)
  },[search]) 

 
  useEffect(() => {
  const userInfo = localStorage.getItem("userInfo");
   
    if (userInfo) {
   
      history.push("/wishlist");
     
    } else {
      history.push("/signin");
    }
  }, [history]);
  const coloumn=[
    {name:"product",selector:(row)=>row.product,style: {
        color: "gray",
        }},
    {name:"Quantity",selector:(row)=>row.quantity,style: {
        color: "gray",
        }},
    {name:"ACTION ",selector:(row)=>
    <div style={{display:"flex" }}>
  
      {<>
        <button className='button' id='vier'
        onClick={  ()=>{history.push(`/ProductPage/${row.product}`)}}
        >View </button>
      </>}
              
             
         </div>
       
        },
              
  ]
  return (
    
    <div style={{backgroundColor:'#31343A',padding:'0px 0px 0px 0px'}}>
        <Adminnavbar />
    <div className='row' style={{marginTop:'100px'}}>
    <div className='col-2' ><Sidebar /></div>
      <div className='col-10' style={{height:'800px'}} >
  <div className='container' id='tabcontainer' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',margin:'20px',width:'auto'}}>
      <div className='container' style={{marginTop:'20px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px'}}>
      <div style={{justifyContent:'left',padding:'20px'}}> <h2>WishList</h2> </div>

      <div className='row' >

              <div className='col-md-auto'>
              <p><label htmlFor="">Catagory</label>: 
              <span>
                <select name="All" className='selectoption' >
                  <option value="All">All</option>
                  <option value="All">Sports & Outdoor</option>
                </select>
                </span></p> 
              </div>
              <div className='col-md-auto'>
                <p><input style={inputselectotion}  placeholder='Enter SKU/Product Name' type="text" /><span><button style={smtbtn}  value={search}  onChange={
                (e)=>
                   setSearch(e.target.value)
                
            }>Search</button></span></p>
              </div>
              <div className='col-md-auto'>
                <button style={btnmove}>Move btn</button>
              </div>
              <div className='col-md-auto'>
                <button  style={btnmovesecond}>Create folder</button>
          
            
              </div>
            </div>
      </div>

     {filterUsers && filterUsers.length === 0 ? (
  <div className="text-center">
    <img src={illustration} alt="illustration" style={{ width: '300px' }} />
  </div>
) : (
  <div className='container' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px'}}>
    <div className='row' style={{marginTop:'20px',backgroundColor:'#FFE51A',padding:'5px'}}>
      <div className='col'> <input type="checkbox" /></div>
      <div className='col'><button style={btns}>Date</button></div>
      <div className='col'><button  style={btns}>Images</button></div>
      <div className='col'><button  style={btns}>Title</button></div>
      <div className='col'><button  style={btns}>Product Price</button></div>
      <div className='col'><button  style={btns}>Actions</button></div>
    </div>
    <div className='container' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px'}}>
      <DataTable 
        columns={coloumn} 
        data={filterUsers} 
        pagination
        fixedHeader
        style={{color:"red"}}
        highlightOnHover
        subHeader
        subHeaderAlign="center"
      />  
    </div>
  </div>
)}


  </div>
  <Dashboardfooter/>
    
      </div>
      
    </div>
    
    </div>

  )
}

export default Wishlist
