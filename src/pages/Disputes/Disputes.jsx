import React ,{useState} from 'react'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import Sidebar from '../Sidebar/Sidebar'
import 'bootstrap/dist/css/bootstrap.css';
import './Disputes.css'

import { Tab } from '@headlessui/react';


const Disputes = () => {
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

      const skubnt={
        width:'250px',
        height:'35px',
        borderColor:'transparent',
      
       
        backgroundColor:'rgba(231, 231, 231, 1)',
        color: 'rgba(50, 51, 58, 1)',
        fontSize: '15px',
        paddingLeft: '20px',
      
        borderRadius: '10px',
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
       
        outlineColor:'rgba(0, 0, 0, 0.15)',  
      }
      
      const skubntselect ={
        width:'250px',
     
        height:'35px',
        borderColor:'transparent',
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
        borderRadius: '10px',
       
        backgroundColor:'rgba(231, 231, 231, 1)',
        color: 'rgba(50, 51, 58, 1)',
        fontSize: '13px',
       
        outlineColor:'rgba(0, 0, 0, 0.15)', 
      }
 
      const skubntsel={
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
      

  const buttonheader={
    backgroundColor:'#FDE31A',
    borderRadius:'15px',
    width:'auto',
    alignItems:'center',
    height:'80px',
    alignSelf:'center'
    
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

  const tabpanls={
    padding:'30px',

  }
      const handelTabCLick = (e) => {
      setTabSelected(e);
    };

  const [tabSelected, setTabSelected] = useState(null);

   
  return (
    <div>
          <div  style={{backgroundColor:'#31343A'}}>
      <Adminnavbar />
      <div className='row'>
        <div className='col-2'  ><Sidebar /></div>
        <div className='col-10' style={{height:'800px'}}>
       
        <div className='container' id="tabcontainer" style={{margin:'20px 0px 20px 10px',width:'1100px', padding:'20px',}}>
        <div className='headingAll'><h2>Disputes</h2></div>
      <Tab.Group>
      <div className='conatiner' style={buttonheader}>
      <Tab.List className="flex space-x-1 rounded-xl  p-1"  >
                
                <Tab  className={`tabbtn3 ${tabSelected === 1 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(1)}>Awaiting Responses</Tab>
                <Tab className={`tabbtn3 ${tabSelected === 2 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(2)}>Completed</Tab>
                <Tab className={`tabbtn3 ${tabSelected === 3 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(3)}>Closed</Tab>
              </Tab.List>
         </div>
             
         
          
          <Tab.Panels style={tabpanls}>
            <Tab.Panel>
            <div className='container' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',padding:'20px'}} >
            <div className='Dashboardheading'><h3>Orders</h3></div>
            <div className='row' >
           <div className='Dashboardheading'><h3>Awaited Responses</h3></div>
            <div className='col'><input type="date" style={skubnt}  placeholder='Please enter order number' /></div>
           
         
            <div className='col'><select  name="name" id="value" style={skubntselect}>
                <option value="">All</option>
                <option value="">#method</option>
                <option value="">#method</option>
              </select>
            </div>
            <div className='col'>
            <input type="text" style={skubnt}  placeholder='Abnormal Orders' />
            </div>

          </div>
       
               
         </div>
          <div className='container' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',marginTop:'10px'}}  >
               <div className='row' style={{backgroundColor:'#FDE31A',padding:'15px 2px 5px 2px',color:'black',borderRadius:'20px'}}>
                    
           <div className='col-md-auto'><p> Order Number</p></div>
          
          <div className='col-md-auto'><p>Tracking Number</p></div>
          <div className='col-md-auto'><p>Dispute Reason</p></div>
          <div className='col-md-auto'>
          <p>Expected Solution</p>
          </div>
          <div className='col-md-auto'>
          <p>Created Date</p>
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
            <div className='container' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',padding:'20px'}} >
            <div className='Dashboardheading'><h3>Completed</h3></div>
      <div className='row' >
            <div className='col'><input type="date" style={skubnt}  placeholder='Please enter order number' /></div>

            <div className='col'>
              <input type="text"  style={skubnt}   placeholder='Abnormal Orders' /></div>
            <div className='col'><select  name="name" id="value" style={skubntsel}>
                <option value="">All</option>
                <option value="">#method</option>
                <option value="">#method</option>
              </select>
            </div>

          </div>
       
               
         </div>
          <div className='container' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',marginTop:'10px'}}  >
               <div className='row' style={{backgroundColor:'#FDE31A',padding:'15px 2px 5px 2px',color:'black',borderRadius:'20px'}}>
                    
               <div className='col-md-auto'><p> Order Number</p></div>
          
          <div className='col-md-auto'>
          <p>Tracking Number</p>
          </div>
         
          <div className='col-md-auto'><p>Dispute Reason</p></div>
          <div className='col-md-auto'>
          <p>Expected Solution</p>
          </div>
          <div className='col-md-auto'>
          <p>Created Date</p>
          </div>
          <div className='col'><p>Status</p></div>
          <div className='col'><p>Action</p></div>
          </div>
            </div>
          
            </Tab.Panel>
            <Tab.Panel>
            <div className='container' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',padding:'20px'}} >
            <div className='Dashboardheading'><h3>Closed</h3></div>
       <div className='row'  style={{marginTop:'20px'}}>
            <div className='col'><input type="date" style={skubnt}  placeholder='Please enter order number' /></div>

            <div className='col'><input type="text" style={skubnt}   placeholder='Abnormal Orders' /></div>
            <div className='col'><select  name="name" id="value" style={skubntsel}>
                <option value="">All</option>
                <option value="">#method</option>
                <option value="">#method</option>
              </select>
            </div>

          </div>
      
       
               
         </div>
          <div className='container' style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',marginTop:'10px'}}  >
               <div className='row' style={{backgroundColor:'#FDE31A',padding:'15px 2px 5px 2px',color:'black',borderRadius:'20px'}}>
                    
               <div className='col-md-auto'><p> Order Number</p></div>
          
          <div className='col-md-auto'>
          <p>Tracking Number</p>
          </div>
         
          <div className='col-md-auto'><p>Dispute Reason</p></div>
          <div className='col-md-auto'>
          <p>Expected Solution</p>
          </div>
          <div className='col'>
          <p>Created Date</p>
          </div>
         <div className='col'><p>Status</p></div>
         <div className='col'><p>Action</p></div>
          </div>
            </div>
                                
      
            </Tab.Panel>
          </Tab.Panels>
    </Tab.Group>
      </div>
        </div>
      </div>
    
    </div>
    </div>
  )
}

export default Disputes
