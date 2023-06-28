import React, { useEffect, useState } from "react";
import Adminnavbar from "../Adminnavbar/Adminnavbar";
import Sidebar from "../Sidebar/Sidebar";
import "./PurchaseCart.css";
import Dashboardfooter from "../../components/Dashboardfooter/Dashboardfooter";
import "bootstrap/dist/css/bootstrap.css";
import { Tab } from "@headlessui/react";
import { useHistory } from "react-router-dom";
function PurchaseCart() {
  
  document.body.style.backgroundColor = "#32333A"
  const [tabSelected, setTabSelected] = useState(null);

  const history = useHistory();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      history.push("/PurchaseCart");
    } else {
      history.push("/signin");
    }
  }, []);

  const tabheader = {
    backgroundColor: "#FFE51A",
    borderColor: "transparent",
    border: " 0.5px solid rgba(0, 0, 0, 0.25)",
    width: "auto",
    padding: "10px",
    fontWeight: "800",
    height: "50px",
    alignItems: "center",
    borderRadius: "10px",
    margin: "15px 5px 15px 5px",
  };

  const buttonheader = {
    backgroundColor: "#FDE31A",
    borderRadius: "15px",
    width: "auto",
    alignItems: "center",
    height: "80px",
    alignSelf: "center",
  };

  const tabpanls = {
    padding: "30px",
  };
  const handelTabCLick = (e) => {
    setTabSelected(e);
  };
  return (
    <div style={{backgroundColor:'#31343A',padding:'0px 0px 0px' }}>
      <div>
        <Adminnavbar />
      </div>
      <div className="row" style={{marginTop:'100px',marginBottom:'100px'}}>
        <div className="col-2"  >
          <Sidebar />
        </div>
        <div className="col-10" style={{height:'800px'}}>
       
          <div
            className="container"
            id="tabcontainer"
            style={{
              margin: "20px 0px 20px 10px",
              width: "1100px",
              padding: "20px",
            }}
          >
             <div className='headingAll'><h2>Purchase Cart</h2></div>
            
            <Tab.Group>
              <div className="conatiner" style={buttonheader}>
               

                <Tab.List className="flex space-x-1 rounded-xl  p-1"   >
                  <Tab
                    defaultActiveKey="first"
                    className={`tabbtn3 ${tabSelected === 1 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(1)}
                  >
                   
                    One Price Dropship
                  </Tab>
                  <Tab
                  
                    className={`tabbtn3 ${tabSelected === 2 ? "selected-tab1" : ""}`}
                    onClick={() => handelTabCLick(2)}
                  >

                   
                    Wholeshale
                  </Tab>
                
                </Tab.List>
              </div>

              <Tab.Panels style={tabpanls}>
                <Tab.Panel>
                <div className='Dashboardheading'><h2>   One Price Dropship</h2></div>

                  Content 1</Tab.Panel>
                <Tab.Panel>
                <div className='Dashboardheading'><h2>Warehouse</h2></div>
                  Content 2</Tab.Panel>
              
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
      <div className='row'>
          <Dashboardfooter />
        </div>
    </div>
  );
}

export default PurchaseCart;
