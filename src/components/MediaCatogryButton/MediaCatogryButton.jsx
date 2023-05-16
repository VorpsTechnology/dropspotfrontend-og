import React from 'react'
import './MediaCatogryButton.css'
import group1 from '../../assets/group1.png'
import group2 from '../../assets/group2.png'
import group3 from '../../assets/group3.png'
import group4 from '../../assets/group4.png'
import group5 from '../../assets/group5.png'
import group6 from '../../assets/group6.png'
import group7 from '../../assets/group7.png'
import group8 from '../../assets/group8.png'

function MediaCatogryButton() {
  return (
    <div id='MediaCatogryButton'>
      <div className='container-fluid'>
        <div className='row' style={{marginTop:'40px'}}>
            <div  className='col-3'>
                <div align="center" style={{width:'70px',height:'100px'}} className='bannerbtn'><img src={group8} alt="" /></div>
                <div align="center" ><button className='trendingbanner'>Trending Products</button></div>
            </div>
            <div className='col-3'>
                <div align="center" style={{width:'70px',height:'100px'}} className='bannerbtn'><img src={group1} alt="" /></div>
                <div align="center" ><button className='trendingbanner'> New Products</button></div>
            </div>
            <div className='col-3'>
                <div align="center" style={{width:'70px',height:'100px'}} className='bannerbtn'><img src={group2} alt="" /></div>
                <div align="center"><button  className='trendingbanner'> Video Products</button></div>
            </div>
            <div className='col-3'>
                <div align="center" style={{width:'70px',height:'100px'}} className='bannerbtn'><img src={group3} alt="" /></div>
                <div align="center" ><button className='trendingbanner'> Hot Selling Catogries</button></div>
            </div>
        </div>
        <div className='row' style={{marginTop:'40px'}}>
        <div className='col-3'>
        
            <div align="center" style={{width:'70px',height:'100px'}} className='bannerbtn'> <img src={group4} alt="" /></div>
           <div align="center" ><button className='trendingbanner'> Super Deal</button></div>
        </div>
        <div className='col-3'>
        <div align="center" style={{width:'70px',height:'100px'}} className='bannerbtn'><img src={group5} alt="" /></div>
             <div align="center" ><button className='trendingbanner'> Brand Section</button></div>
        </div>
        <div className='col-3'>
        <div align="center" style={{width:'70px',height:'100px'}} className='bannerbtn'><img src={group6} alt="" /></div>
            <div align="center"><button  className='trendingbanner'> Print on Demand</button></div>
        </div>
        <div className='col-3'>
        <div align="center"  style={{backgroundColor:'rgba(220, 220, 220, 1)',height:'100px',paddingTop:'30px',borderRadius:'35.67px',width:'70px'}}><img src={group7} alt="" /></div>
            <div align="center" ><button className='trendingbanner'>Recommended Products</button> </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default MediaCatogryButton
