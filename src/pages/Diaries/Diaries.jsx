import React from 'react'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import Sidebar from '../Sidebar/Sidebar'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import './Diaries.css'


function Diaries() {
  return (
    <div>
      <Adminnavbar />
      <div className='row'>
        <div className='col-2'  style={{backgroundColor:'#31343A'}}><Sidebar /></div>
        <div className='col-10'>
       
        <div className='container' id="tabcontainer" style={{margin:'20px 0px 20px 10px',width:'1100px', padding:'20px',}}>
        <div className='headingAll'><h2>Create Page</h2></div>
        <div>
            <form action="">
               <div className='flexg'>
                <div ><h4>Title</h4></div>
                <div><input  type="text" className='inputfield' /></div>
                </div> 
                <div className='flexg'>
                <div ><h4>Parent Page</h4></div>
                <div>
                    <select style={{outline:'transparent'}} className='inputfield' name="" id="">
                        <option value=""></option>
                    </select>
                  </div>
                </div> 
                <div className='flexg'>
                <div ><h4>YouTube embed link</h4></div>
                <div><input  type="text" className='inputfield' /></div>
                </div>

                  
                    <div className='flexg'>
                    <Editor
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    wrapperStyle={{ width: 800, border: "1px solid black" }}
                /> 
                    </div>

                    <div className='flexg'><button className='subbtn'>Submit</button></div>
                
            </form>
        </div>

        

       
      
        
      
      </div>
        </div>
      </div>

    </div>
  )
}

export default Diaries
