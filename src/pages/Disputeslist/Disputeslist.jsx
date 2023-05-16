import React from 'react'

import Adminnavbar from '../Adminnavbar/Adminnavbar'
import Sidebar from '../Sidebar/Sidebar'
import 'bootstrap/dist/css/bootstrap.css';

import { Tab } from '@headlessui/react';


const Disputeslist = () => {

        const serachbtn={
            backgroundColor:'#FDE31A',
            borderColor:'transparent',
            padding:'5px',
            width:'100px',
            borderRadius:'5px',
            fontSize:'15px',
            fontWeight:'400'
          }
     
    
       
       
          const clearbtn={
            backgroundColor:'',
            borderColor:'#FDE31A',
            padding:'5px',
            width:'100px',
            borderRadius:'5px',
            fontSize:'15px',
            fontWeight:'400',
            marginLeft:'5px'
          }
          const tabheader={
            backgroundColor:'#FFE51A',
            borderColor:'transparent',
            border:' 0.5px solid rgba(0, 0, 0, 0.25)',
            width:'auto',
            padding:'10px',
            fontWeight:'800',
            height:'50px',
            alignItems:'center',
            borderRadius:"10px",
            margin:'15px 5px 15px 5px'  
          }
        
          const buttonheader={
            backgroundColor:'#FDE31A',
            borderRadius:'15px',
            width:'600px',
            alignItems:'center',
            height:'80px',
            alignSelf:'center'
            
          }
        
          const tabpanls={
            padding:'30px',
        
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
      
      
      
        outlineColor:'transparent', 
      }
      
      return (
        <div>
            <div>
          <Adminnavbar />
          <div className='row'>
            <div className='col-2'  style={{backgroundColor:'#31343A'}}><Sidebar /></div>
            <div className='col-10'>
            
            <div className='container' id="tabcontainer" style={{margin:'20px 0px 20px 10px',width:'1100px', padding:'20px',}}>
            <div className='headingAll'><h2>Diputes 0.1</h2></div>
      <Tab.Group>
      <div className='conatiner' style={buttonheader}>
      <Tab.List className='tablist' >
                
                <Tab  style={tabheader}>Tab 1</Tab>
                <Tab style={tabheader}>Tab 2</Tab>
                <Tab style={tabheader}>Tab 4</Tab>
                <Tab style={tabheader}>Tab 5</Tab>
                <Tab style={tabheader}>Tab 6</Tab>
               
              </Tab.List>
         </div>
             
         
          
          <Tab.Panels style={tabpanls}>
            <Tab.Panel>
            <div className='container' style={{ display: 'block',color:'black',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',padding:'40px' }}>
           <div className='row'  style={{marginTop:'20px'}}>
                <div className='col-4'><input type="text" style={skubnt}   placeholder='Please enter order number' /></div>
                <div className='col-4'><input type="text" style={skubnt}    placeholder='please enter your order number' /></div>
             
    
              </div>
              <div className='row'  style={{marginTop:'20px'}}>
                <div className='col-4'><input type="text" style={skubnt}   placeholder='Please enter dispute number' /></div>

                <div className='col-4'><input type="date" style={skubnt}    placeholder='Response' /></div>
                <div className='col-4'>
                  <select  style={skubnt} name="" id="">
                    <option value="">Response</option>
                  </select>
                  </div>
             
    
              </div>
            <div style={{marginTop:'20px'}}>
              <button style={serachbtn}>serach</button><span><button style={clearbtn}>Clear</button></span>
            </div>
           </div>
            </Tab.Panel>
            <Tab.Panel>
            <div className='container' style={{ display: 'block',color:'black',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',padding:'40px' }}>
           <div className='row'  style={{marginTop:'20px'}}>
                <div className='col-4'><input type="text" style={skubnt}    placeholder='Please enter order number' /></div>
                <div className='col-4'><input type="text" style={skubnt}     placeholder='please enter your order number' /></div>
             
    
              </div>
              <div className='row'  style={{marginTop:'20px'}}>
                <div className='col-4'><input type="text" style={skubnt}    placeholder='Please enter dispute number' /></div>

                <div className='col-4'><input type="date" style={skubnt}     placeholder='Response' /></div>
                <div className='col-4'>
                  <select  style={skubnt}  name="" id="">
                    <option value="">Response</option>
                  </select>
                  </div>
             
    
              </div>
            <div style={{marginTop:'20px'}}>
              <button style={serachbtn}>serach</button><span><button style={clearbtn}>Clear</button></span>
            </div>
           </div>
            </Tab.Panel>
            <Tab.Panel>
            <div className='row'  style={{marginTop:'20px'}}>
                <div className='col-4'><input type="text" style={skubnt}    placeholder='Please enter order number' /></div>
                <div className='col-4'><input type="text" style={skubnt}     placeholder='please enter your order number' /></div>
             
    
              </div>
              <div className='row'  style={{marginTop:'20px'}}>
                <div className='col-4'><input type="text" style={skubnt}    placeholder='Please enter dispute number' /></div>

                <div className='col-4'><input type="date"style={skubnt}     placeholder='Response' /></div>
                <div className='col-4'>
                  <select  style={skubnt}  name="" id="">
                    <option value="">Response</option>
                  </select>
                  </div>
             
    
              </div>
            <div style={{marginTop:'20px'}}>
              <button style={serachbtn}>serach</button><span><button style={clearbtn}>Clear</button></span>
            </div>
            </Tab.Panel>
            <Tab.Panel>
            <div className='row'  style={{marginTop:'20px'}}>
             <div className='col-4'><input type="text" style={skubnt}    placeholder='Please enter order number' /></div>
            <div className='col-4'><input type="text" style={skubnt}     placeholder='please enter your order number' /></div>
                             
                    
                              </div>
                              <div className='row'  style={{marginTop:'20px'}}>
                                <div className='col-4'><input type="text" style={skubnt}    placeholder='Please enter dispute number' /></div>
                
                                <div className='col-4'><input type="date"style={skubnt}     placeholder='Response' /></div>
                                <div className='col-4'>
                                  <select  style={skubnt}  name="" id="">
                                    <option value="">Response</option>
                                  </select>
                                  </div>
                             
                    
                              </div>
                  <div style={{marginTop:'20px'}}>
                    <button style={serachbtn}>serach</button><span><button style={clearbtn}>Clear</button></span>
                </div>
            </Tab.Panel>
            <Tab.Panel>
                      
                     
            <div className='row'  style={{marginTop:'20px'}}>
                                <div className='col-4'><input type="text" style={skubnt}    placeholder='Please enter order number' /></div>
                                <div className='col-4'><input type="text" style={skubnt}     placeholder='please enter your order number' /></div>
                             
                    
                              </div>
                              <div className='row'  style={{marginTop:'20px'}}>
                                <div className='col-4'><input type="text" style={skubnt}    placeholder='Please enter dispute number' /></div>
                
                                <div className='col-4'><input type="date"style={skubnt}     placeholder='Response' /></div>
                                <div className='col-4'>
                                  <select  style={skubnt}  name="" id="">
                                    <option value="">Response</option>
                                  </select>
                                  </div>
                             
                    
                              </div>
                            <div style={{marginTop:'20px'}}>
                              <button style={serachbtn}>serach</button><span><button style={clearbtn}>Clear</button></span>
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

export default Disputeslist
