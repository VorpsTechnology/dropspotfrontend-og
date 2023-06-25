
import freestore from "../../assets/free-store.png";
import Trendy from '../../assets/Trendy.png';
import ecomerce from '../../assets/ecomerce.png'
import templateone from '../../assets/templateone.png'
import freeshipping from '../../assets/free-shipping.png'
import acadamy from '../../assets/acadamy.png'
import fullfillment from '../../assets/fullfillment.png'
import odm from '../../assets/odm.png'
import video from '../../assets/video.png'
import './Section.css'
import purse from '../../assets/purse.png'
import ring from '../../assets/ring.png'
import tablet from '../../assets/tablet.png'
import dress from '../../assets/dress.png'
import sticks from '../../assets/sticks.png'
import hat from '../../assets/hat.png'
import home from '../../assets/home.png'
import bike from '../../assets/bike.png'
import toy from '../../assets/toy.png'
import shirt from '../../assets/shirt.png'
import circuit from '../../assets/circuit.png'



function Section() {
  const infostyle = {
    background: '#FFD600',
    height: "50px",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
  };

  const box={
    background:'#FFFFFF',
    width:'350px',
    boxshadow:'20px',
    borderRadius:'20px'
  }
  const list_style={
    background:'white',
    alignItems:'center',
    boxshadow:'2px 3px 5px whitesmoke',
    paddingLeft:'10px'
  }
  const shiiping={
    borderRadius:'20px',
    backgroundColor:'rgba(255, 221, 46, 1)',
    color:'rgba(0, 0, 0, 1)',
    borderColor:'transparent',
    fontstyle:'Poppins',
    fontSize:'14px',
    fontWeight:'400',
    lineHeight:'21px',
    width:'169px',
    height:'30px',
    marginTop:'25px'
  }
  const delivery={

    color:'rgba(0, 0, 0, 1)',

    fontstyle:'Poppins',
    fontSize:'14px',
    fontWeight:'400',
    lineHeight:'21px',
    width:'169px',
    height:'30px', 
    marginTop:'25px'
  }
  const order={
   
    color:'rgba(0, 0, 0, 1)',

    fontstyle:'Poppins',
    fontSize:'14px',
    fontWeight:'400',
    lineHeight:'21px',
    width:'169px',
    height:'30px', 
    marginTop:'10px' 
  }
    
  document.body.style = 'background: #FFFEF6;'


  // 
  // 

  
  return (
    <>
    <div id='SectionContainer'>

        <div  className="row"  style={{display:'flex',width:'100%',padding:'20px',justifyContent:'center'}}>
          <div className="col-3" style={{justifyContent:'left'}}>
          <div >
                <div align="center" className="flexutemcenter" style={{backgroundColor:'#FFD600',padding:'10px',height:'50px',marginTop:'3px'}}>All Catogries</div>
              </div>
          <div align="center" className="sidenav" id="scrollbar" style={{overflowY:'scroll',height:'400px'}}>
          
              
            <button className="catogrybtns"   > 
              <div className="flexContainer" style={{display:'flex'}}>
                <div className="flexutemleft"><img src={purse} alt="" /></div>
                <div className="flexutemright" style={{marginLeft:'15px'}}>Bags and shoes</div>
              </div>
            </button>
            <button className="catogrybtns"   > 
              <div className="flexContainer" style={{display:'flex'}}>
              <div className="flexutemleft"  ><img src={ring} alt="" /></div>
                <div  className="flexutemright" style={{marginLeft:'15px'}}>Jewelory & Watches</div>
              </div>
            </button>
            <button className="catogrybtns"   > 
              <div className="flexContainer" style={{display:'flex'}}>
              <div className="flexutemleft" ><img src={tablet} alt="" /></div>
                <div className="flexutemright" style={{marginLeft:'15px'}}>Beauty & Hair</div>
              </div>
            </button>
            <button className="catogrybtns"   > 
              <div className="flexContainer" style={{display:'flex'}}>
              <div className="flexutemleft" ><img src={dress} alt="" /></div>
                <div className="flexutemright" style={{marginLeft:'15px'}}>Women's Clothing</div>
              </div>
            </button>
            <button className="catogrybtns"   > 
              <div className="flexContainer" style={{display:'flex'}}>
              <div className="flexutemleft" ><img src={home} alt="" /></div>
                <div className="flexutemright" style={{marginLeft:'15px'}}> Home,Garden & Furtinure</div>
              </div>
            </button>
            <button className="catogrybtns"   > 
              <div className="flexContainer" style={{display:'flex'}}>
              <div className="flexutemleft" ><img src={hat} alt="" /></div>
                <div className="flexutemright" style={{marginLeft:'15px'}}>Phone and Accessories</div>
              </div>
            </button>
            <button className="catogrybtns"   > 
              <div className="flexContainer" style={{display:'flex'}}>
              <div className="flexutemleft" ><img  src={sticks}alt="" /></div>
                <div className="flexutemright" style={{marginLeft:'15px'}}>Sports & Outdoors</div>
              </div>
            </button>
            <button className="catogrybtns"   > 
              <div className="flexContainer" style={{display:'flex'}}>
              <div className="flexutemleft" ><img  src={shirt}alt="" /></div>
                <div className="flexutemright" style={{marginLeft:'15px'}}>Men's Clothing</div>
              </div>
            </button>
            <button className="catogrybtns"   > 
              <div className="flexContainer" style={{display:'flex'}}>
              <div className="flexutemleft" ><img  src={circuit}alt="" /></div>
                <div className="flexutemright" style={{marginLeft:'15px'}}>Consumer Electronics</div>
              </div>
            </button>
            <button className="catogrybtns"   > 
              <div className="flexContainer" style={{display:'flex'}}>
              <div className="flexutemleft" ><img  src={home}alt="" /></div>
                <div className="flexutemright" style={{marginLeft:'15px'}}>Home improvement</div>
              </div>
            </button>
            </div>


          </div>
          <div className="col-9">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            {/* Indicators */}
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" style={{width:'20px'}} data-slide-to={0} className="active" />
              <li data-target="#myCarousel" style={{width:'20px'}} data-slide-to={1} />
              <li data-target="#myCarousel" style={{width:'20px'}} data-slide-to={2} />
            </ol>
            {/* Wrapper for slides */}
            <div className="carousel-inner" id="carasouelsection" style={{height:'470px'}}>
              <div className="item active">
                <img src={ecomerce} alt="Los Angeles" style={{width: '100%'}} />
              </div>
              <div className="item">
                <img src={ecomerce} alt="Chicago" style={{width: '100%'}} />
              </div>
              <div className="item">
                <img src={ecomerce} alt="New york" style={{width: '100%'}} />
              </div>
            </div>
          </div>
          </div>
          {/* <div className="flex-item-right6" style={{justifyContent:'right'}}>
          <div className="container" id="carasouelsection" style={{padding:'10px 40px 10px 40px'}} >
            <div align="center" style={{margin:'5px 5px 5px 5px'}}><h3>How we work</h3></div>
          <div className="row"  >
            <div className="col-6" >
              <div align="center">
              <div><img src={freestore} alt="" /></div>
              <div><b>Find <br /> store</b></div>
              </div>
              
            
            </div>
            <div className="col-6">
            <div align="center">
              <div><img src={freeshipping} alt="" /></div>
              <div><b>Fast <br /> Shipping</b></div>
            </div>
            </div>
          </div>
          <div className="row" >
            <div className="col-6">
            <div align="center">
              <div> <img src={acadamy} alt="" /></div>
              <div><b>Order <br /> Tracking</b></div>
              </div>
            </div>
            <div className="col-6">
            <div align="center">
              <div><img src={fullfillment} alt="" /></div>
              <div><b>24hrs <br /> Fullfillment</b></div>
            </div>
            </div>
          </div>
          <div className="row" >
            <div className="col-6">
            <div align="center">
              <div><img src={odm} alt="" /></div>
              <div><b>Manage <br /> Order</b></div>
            </div>
            </div>
            <div className="col-6">
            <div align="center">
              <div><img src={video} alt="" /></div>
              <div><b>Request <br /> Material</b></div>
            </div>
              </div>
          </div>
          </div>

          </div> */}
        </div>

     </div>

  </>
  );
}

export default Section;
