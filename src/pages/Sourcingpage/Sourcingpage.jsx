import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import Sidebar from '../Sidebar/Sidebar'
import Sourchingform from '../Sorchingform/Sorchingform'


function Sourcingpage() {
  const history=useHistory()
  useEffect(() => {
  const userInfo = localStorage.getItem("userInfo");
 
    if (userInfo) {
   
      history.push("/Sourcingpage");
     
    } else {
      history.push("/signin");
    }
  }, [history]);
  return (
    <>
  <Adminnavbar />
 <div className='container-fluid'>
 <div className='row'>
  <div className='col-2' style={{backgroundColor:'#32333A'}}><Sidebar /></div>
  <div className='col-10'>
 
    <Sourchingform /></div>
 </div>
 </div>
    
    </>
  )
}

export default Sourcingpage
