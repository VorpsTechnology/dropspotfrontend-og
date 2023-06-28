import React from 'react'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import SellerSidebar from '../SellerDashboard/SellerSidebar'

import { useEffect, useState } from 'react';
import 'react-js-dialog-box/dist/index.css';
import DataTable from 'react-data-table-component';
import { getWishlist } from '../../Api/WishlistRoute';
import { useHistory } from 'react-router-dom';
import { getProduct } from '../../Api/ProductRequest';
import Dashboardfooter from '../../components/Dashboardfooter/Dashboardfooter';
function SellerWishlist() {
  document.body.style.backgroundColor = "#32333A"

      const btns={
        backgroundColor:'transparent',
        borderColor:'transparent',
       
    
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
    
  
      const serchbtn={
        backgroundColor:'#FFE51A',
        borderColor:'transparent',
        borderRadius:'10px',
        width:'150px',
        padding:'7px',
        marginLeft:'1px',
        fontWeight:'650',
        color:'black',
        boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',
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
        // useEffect(()=>{
        //   const result=users.filter((user)=>{
        //       return user.firstname.toLowerCase().match(search.toLowerCase());
              
        //   })
        //   setFilteredUsers(result)
        // },[search]) 
      
       
        useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");
         
          if (userInfo) {
         
            history.push("/SellerWishlist");
           
          } else {
            history.push("/signin");
          }
        }, [history]);
        const coloumn=[
          {selector:(row)=>row.date,style: {
              color: "gray",
              }},
              {selector:(row)=><img style={{height:"50px",width:"50px"}} src={row.image?"https://server.dropspot.in/images/"+row.image:""} alt=''/> },
          {selector:(row)=>row.name,style: {
              color: "gray",
              }},
              {selector:(row)=>row.price,style: {
                color: "gray",
                }},
          {selector:(row)=>
          <div style={{display:"flex" }}>
        
            {<>
              <button className='button'  id='vier'
              onClick={  ()=>{history.push(`/ProductPage/${row.product}`)}}
              >Buy now </button>
               <button className='button' style={{backgroundColor:"black",color:"white",marginLeft:"5px"}} id='vier'
         
              >Remove</button>
            </>}
                    
                   
               </div>
             
              },
                    
        ]
  return (
    <>
    <Adminnavbar />

    <div className='row' style={{backgroundColor:'#32333A',padding:'0px 0px 0px 0px',marginTop:'100px'}}>
    <div className='col-2' ><SellerSidebar /></div>
      <div className='col-10'>
  <div className='container' id='tabcontainer' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',padding:'40px',width:'auto',margin:'10px 20px 10px 20px',}}>
      <div className='container' style={{marginTop:'20px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px',padding:'20px'}}>
      <div style={{justifyContent:'left',padding:'20px'}}> <h2>WishList</h2> </div>

      <div className='row' >

              <div className='col-6'>
              <p><label htmlFor="">Catagory</label>: 
              <span>
                <select style={skubnt} name="All"  >
                  <option value="All">All</option>
                  <option value="All">Sports & Outdoor</option>
                </select>
                </span></p> 
              </div>
              <div className='col-6'>
                <input style={skubnt}  placeholder='Enter SKU/Product Name' type="text" />
              </div>

              <div className='row' style={{marginTop:'20px'}}>
                <div className='col-2'>
                <button style={serchbtn}>Search</button>
                </div>
                <div className='col-2'>
                <button style={serchbtn}>Move btn</button>
                </div>
                <div className='col-2'>
                <button  style={serchbtn}>Create folder</button>
                </div>

              </div>
             
            </div>
      </div>
      <div className='container' style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'auto',overflowX:'scroll' }}>
           <div style={{ display: 'block',color:'black',padding:'10px',borderRadius:'30px',width:'1000px'}}>
             <div >
             <div className='row' style={{padding:'7px',backgroundColor:'#FDE31A',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px' }}>
             <div className='col'><button style={btns}>Date</button></div>
            <div className='col'><button  style={btns}>Images</button></div>
            <div className='col'><button  style={btns}>Title</button></div>
            <div className='col'><button  style={btns}>Product Price</button></div>
            <div className='col'><button  style={btns}>Actions</button></div>
               </div>
               <div className="row" >
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

         </div>
 
    

   
  </div>
    
      </div>
      
    </div>
    <div className='row'>
      <Dashboardfooter/>
    </div>

    </>
  )
}

export default SellerWishlist
