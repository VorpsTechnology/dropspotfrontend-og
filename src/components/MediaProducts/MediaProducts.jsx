import Slider from "react-slick";
import { useState, useEffect, useRef } from "react";
import shopingcard from '../../assets/shopingcard.png'
import { useHistory } from "react-router-dom";
import connection from '../../assets/connection.png'
import list from '../../assets/list.png'
import './MediaProducts.css'


const cardsize = {
  width: "170px",
  
};
const list_second = {
  color: "rgba(165, 165, 165, 1)",
  fontstyle: "Poppins",
  fontWeight: "500",
  fontSize: "17.82px",
  lineHeight: "22.23px",
  paddingLeft: "30px",
 
  fontFamily: "poppins",

 

};
const Connect_btn={

  fontstyle: "Poppins",
  fontWeight: "400",
  fontSize: "15.82px",
  lineHeigt: "22.23px",
  marginLeft: "10px",
  fontFamily: "poppins",
  backgroundColor:'#FDE31A',
  borderColor:'transparent',
  borderRadius:'20px',
  marginTop:'5px' ,
  marginBottom:'5px',


}
const List_btn={
 
  fontstyle: "Poppins",
  fontWeight: "400",
  fontSize: "15.82px",
  lineHeigt: "22.23px",
  paddingLeft: "10px",
  fontFamily: "poppins",
  backgroundColor:'#FDE31A',
  borderColor:'transparent',
  borderRadius:'20px',
  marginTop:'5px' 
}
const super_btnmedia={
  fontstyle: "Poppins",
  fontWeight: "400",
  fontSize: "15.82px",
  lineHeigt: "22.23px",
  paddingLeft: "10px",
  marginLeft: "10px",
  fontFamily: "poppins",
  backgroundColor:'#FDE31A',
  borderColor:'transparent',
  borderRadius:'20px' ,
  float:'left',
  marginTop: "10px",
  
}
const header={
    justifyContent:'center',
    paddingTop:'10px',
    paddingBottom:'10px',
    backgroundColor:'#FDE31A',
    width:'200px',
    fontSize:'20px',
    borderRadius:'20px',
    marginBottom:'40px',
    marginTop:'40px'
  
  }

export const MediaProducts = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  let history = useHistory();

  function handleClick() {
    history.push("/MediaProductpage");
  }
  function ListClick(){
    history.push('./MediaProductlisting')
  }

  return (
    <>
    <div align="center" id="headerMedia"  ><h3  style={header}>Trending Products</h3></div>
    <div className="container"  id="headerMedia">
          <div style={{ width: "auto" }}>
      <div>
     

        <Slider
          asNavFor={nav1}
          ref={slider2}
          slidesToShow={2}
          swipeToSlide={true}
          focusOnSelect={true}
          dots={false}
          infinite={false}
          speed={500}
          slidesToScroll={4}
          initialSlide={0}
          prevArrow={false}
          nextArrow={false}
        
        >
          <div>
          <div className="card" style={cardsize}>

            <div align='center' ><img style={{width:'150px'}}  src={shopingcard}  alt="" /></div>
            <div className="row">
                      <div className="col">
                      <div className="first">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="wishlist">
                        {/* <i class= "fa fa-heart"></i>
                        <i class= " fa fa-heart-o"></i> */}
                         

                        

                               

                        
                        </span>{" "}
                        
                      </div>
                    </div>  {" "}   <button  className="super_btn" > ₹ </button>
                      </div>
                    </div>
                    <div><span > <button className="discount01" > + Queue </button> </span>{" "} </div>
                    <div className="row" >
                        {" "}

                        <div align="center" >  <button  className="listbtnlist01"  >   List</button>
                       
                        
 
  </div>
 
                       
                      </div>
    
             
             
            </div> 
          </div>
          <div>

          <div className="card" style={cardsize}>
          <div className="first">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="wishlist">
                          <i className="fa fa-heart-o" />
                        </span>{" "}
                        <span className="discount">Queue</span>{" "}
                      </div>
                    </div>
             <div><img style={{ width: "150px" }}  src={shopingcard} alt="" /></div>
             <div align="center"><h6>Product name</h6></div>
             <div className="row" style={list_second}>List</div>
             <div align="left"><button style={super_btnmedia}>$24-15.25</button></div>
             <div className="row">
              <div className="col"><button  style={Connect_btn} onClick={handleClick}>Connect</button></div>
              <div className="col"><button  style={List_btn} onClick={ListClick} >List</button></div>
             </div>
            </div> 
          </div>
          <div>
          <div className="card" style={cardsize}>
          <div className="first">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="wishlist">
                          <i className="fa fa-heart-o" />
                        </span>{" "}
                        <span className="discount">Queue</span>{" "}
                      </div>
                    </div>
             <div><img style={{ width: "150px" }}  src={shopingcard} alt="" /></div>
             <div align="center"><h6>Product name</h6></div>
             <div className="row" style={list_second}>List</div>
             <div align="left"><button style={super_btnmedia}>$24-15.25</button></div>
             <div className="row">
              <div className="col"><button  style={Connect_btn}>Connect</button></div>
              <div className="col"><button  style={List_btn} >List</button></div>
             </div>
            </div> 
      
          </div>
          <div>
          <div className="card" style={cardsize}>
          <div className="first">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="wishlist">
                          <i className="fa fa-heart-o" />
                        </span>{" "}
                        <span className="discount">Queue</span>{" "}
                      </div>
                    </div>
             <div><img style={{ width: "150px" }}  src={shopingcard} alt="" /></div>
             <div align="center"><h6>Product name</h6></div>
             <div className="row" style={list_second}>List</div>
             <div align="left"><button style={super_btnmedia}>$24-15.25</button></div>
             <div className="row">
              <div className="col"><button  style={Connect_btn}>Connect</button></div>
              <div className="col"><button  style={List_btn} >List</button></div>
             </div>
            </div> 
          </div>
        
          <div>
          <div className="card" style={cardsize}>
          <div className="first">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="wishlist">
                          <i className="fa fa-heart-o" />
                        </span>{" "}
                        <span className="discount">Queue</span>{" "}
                      </div>
                    </div>
             <div><img style={{ width: "150px" }}  src={shopingcard} alt="" /></div>
             <div align="center"><h6>Product name</h6></div>
             <div className="row" style={list_second}>List</div>
             <div align="left"><button style={super_btnmedia}>$24-15.25</button></div>
             <div className="row">
              <div className="col"><button  style={Connect_btn}>Connect</button></div>
              <div className="col"><button  style={List_btn} >List</button></div>
             </div>
            </div> 
          </div>
       
          <div>
          <div className="card" style={cardsize}>
          <div className="first">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="wishlist">
                          <i className="fa fa-heart-o" />
                        </span>{" "}
                        <span className="discount">Queue</span>{" "}
                      </div>
                    </div>
             <div><img style={{ width: "150px" }}  src={shopingcard} alt="" /></div>
             <div align="center"><h6>Product name</h6></div>
             <div className="row" style={list_second}>List</div>
             <div align="left"><button style={super_btnmedia}>$24-15.25</button></div>
             <div className="row">
              <div className="col"><button  style={Connect_btn}>Connect</button></div>
              <div className="col"><button  style={List_btn} >List</button></div>
             </div>
            </div> 
          </div>
        
          <div>
          <div className="card" style={cardsize}>
          <div className="first">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="wishlist">
                          <i className="fa fa-heart-o" />
                        </span>{" "}
                        <span className="discount">Queue</span>{" "}
                      </div>
                    </div>
             <div><img style={{ width: "150px" }}  src={shopingcard} alt="" /></div>
             <div align="center"><h6>Product name</h6></div>
             <div className="row" style={list_second}>List</div>
             <div align="left"><button style={super_btnmedia}>$24-15.25</button></div>
             <div className="row">
              <div className="col"><button  style={Connect_btn}>Connect</button></div>
              <div className="col"><button  style={List_btn} >List</button></div>
             </div>
            </div> 
          </div>
         
        </Slider>
      </div>
    </div>
    </div>
    </>

  );
};
export default MediaProducts