import React from "react";



import { Switch, Route } from "react-router-dom";
import Home from "./pages";

import AnnualReport from "./pages/annual";

import HelpCenter from "./pages/HelpCenter/HelpCenter";




import Otp from "./components/Otp/Otp"
import catagories from './pages/catagories';


import ProductListing from "./pages/ProductListing/ProductListing"
import ProductPage from "./pages/ProductPage/ProductPage";
import ShippingCost from "./pages/ShippingCost/ShippingCost";
import MediaProductpage from "./pages/MediaProductpage/MediaProductpage";
import MediaProductlisting from './pages/MediaProductlisting/MediaProductlisting';

import MyDropspot from "./pages/MyDropspot";
import Sourcingpage from './pages/Sourcingpage/Sourcingpage';
import Purchaselisting from './pages/Purchaselisting/Purchaselisting'

import Myinventry from './pages/myinventry/Myinventry'
import Wishlist from './pages/Wishlist/Wishlist'
import MyPhotography from './pages/MyPhotography/MyPhotography'
import ImportedOrder from './pages/ImportedOrder/ImportedOrder'
import Connection from './pages/Connection/Connection'
import Listed from './pages/Listed/Listed'
import OrderFullfillment from './pages/OrderFullfillment/OrderFullfillment'
import Dropshiporder from './pages/Dropshiporder/Dropshiporder'
import Calculation from './pages/Calculation/Calculation'
import UserProfile from './pages/UserProfile/UserProfile'
import AboutUS from "./pages/AboutUS/AboutUS";
import ContactUS from "./pages/ContactUS/ContactUS";
import StoreAutherizationAgreement from './pages/StoreAutherizationAgreement/StoreAutherizationAgreement';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import PaymentMethods from './pages/PaymentMethods/PaymentMethods';
import RefundResend from './pages/RefundResend/RefundResend';
import Api from './pages/Api/Api' 
import IntegrityConcerns from "./pages/IntegrityConcerns/IntegrityConcerns";
import UserAgreement from "./pages/UserAgreement/UserAgreement"
import BulkPuchase from "./pages/BulkPurchase/BulkPuchase";
import Supplier from './pages/Supplier/Supplier'
import ProductSourching from './pages/ProductSourching/ProductSourching'
import Blog from './pages/Blog/Blog';
import Ticket from './pages/Ticket/Ticket'
import ProductReport from './pages/ProductReport/ProductReport'
import ProductPhotography from './pages/ProductPhotography/ProductPhotography'
import Afflicate from "./pages/Afflicate/Afflicate";
import Diaries from "./pages/Diaries/Diaries";
import BulkPurchase from './pages/BulkPurchase/BulkPuchase';
import Disputes from "./pages/Disputes/Disputes";
import Disputeslist from'./pages/Disputeslist/Disputeslist'
import UndeleviredOrder from "./pages/UndeleviredOrder/UndeleviredOrder";
import OrderTracking from "./pages/OrdersTracking/OrderTracking";
import PurchaseCart from "./pages/PurchaseCart/PurchaseCart";
import SkuList from "./pages/SkuList/SkuList";
import ServiceProduct from "./pages/ServiceProduct/ServiceProduct";
import NewSignup from "./pages/NewSignup/NewSignup";
import NewLogin from './pages/NewLogin/NewLogin'
import Wallet from "./pages/Wallet/Wallet";
import MediaWallet from "./pages/Wallet/MediaWallet/MediaWallet";
import WithDraw from "./pages/Wallet/MediaWallet/WithDraw";
import Recharge from "./pages/Wallet/MediaWallet/Recharge";
import MediaSourching from './pages/MediaSourching/MediaSourching'
import MediaWishlist from './pages/MediaWishlist/MediaWishlist'
import MediaMyOrder from "./pages/MediaMyOrder/MediaMyOrder";
import MyInventoryMedia from './pages/MyInventoryMedia/MyInventoryMedia'
import MediaWishlistDashboard from './pages/MediaWishlistDashboard/MediaWishlistDashboard'
import SellerDashboard from "./pages/SellerDashboard/SellerDashboard";
import SellerPhotographyRequest from "./pages/SellerPhotographyRequest/SellerPhotographyRequest";
import SellerWishlist from "./pages/SellerWishlist/SellerWishlist";
import SellerInventory from './pages/SellerInventory/SellerInventory'

import SellerSourchingForm from "./pages/SellerSourchingForm/SellerSourchingForm";
import SourchingImportedOrder from './pages/SouchingImportedOrder/SourchingImportedOrder'
import SellerOrderFullfillment from "./pages/SellerOrderFullfillment/SellerOrderFullfillment";
import SellerDispute from './pages/SellerDispute/SellerDispute'
import SellerUndeleviredOrder from './pages/SellerUndeleviredOrder/SellerUndeleviredOrder'
import SellerOrderTracking from './pages/SellerOrderTracking/SellerOrderTracking'
import SellerCart from './pages/SellerCart/SellerCart'


import Authentication from './pages/Authentication/Authentication'
import Checkout from './pages/Checkout/Checkout'
import MediaConnection from './pages/MediaConnection/MediaConnection'
import  MediaAuthentication from './pages/MediaAuthentication/MediaAuthentication'
import MediaDispute from './pages/MediaDispute/MediaDispute'
import MediaRto from './pages/MediaRto/MediaRto'
import MediaOrderTracking from "./pages/MediaOrderTracking/MediaOrderTracking";
import  MediaSellerDashboard from './pages/MediaSellerDashboard/MediaSellerDashboard'
import MediaSellerOrderFullfillment from './pages/MediaSellerOrderFullfillment/MediaSellerOrderFullfillment'
import SellerMediaDispute from './pages/SellerMediaDispute/SellerMediaDispute'
import SellerMediaRto from './pages/SellerMediaRto/SellerMediaRto'
import  SellerMediaOrderTracking from './pages/SellerMediaOrderTracking/SellerMediaOrderTracking'
import SellerMediaInventory from './pages/SellerMediaInventory/SellerMediaInventory'
import SellerMediaPhotography from './pages/SellerMediaPhotography/SellerMediaPhotography'
import SellerMediaWishlist from './pages/SellerMediaWishlist/SellerMediaWishlist'
import PurchaseItem from "./pages/CheckOutStep/PurchaseItem/PurchaseItem";
import SellerSignup from './pages/SellerSignup/SellerSignup'
import SellerLogin from './pages/SellerLogin/SellerLogin'

function App() {
 
 
 // alert()
  return (
    <>
    
     
      <Switch>

      
        <Route path="/" exact component={Home} />
     
        
        <Route path="/annual" component={AnnualReport} />
        <Route path="/CreatePage" component={Diaries} />
       
        <Route path="/HelpCenter" component={HelpCenter} />
        {/* <Route path="/signin" component={signin} />
      
        <Route path="/Signup" component={Signup} /> */}
        <Route path="/signin" component={NewLogin} />
        <Route path="/verifymobile" component={Otp} />
      <Route path="/Signup" component={NewSignup} />
        <Route path="/catagories" component={catagories} />
        <Route path="/MyDropspot" component={MyDropspot} />
        <Route path="/ProductListing" component={ProductListing} />
        <Route path="/ProductPage/:id" component={ProductPage} />
        <Route path="/ShippingCost" component={ShippingCost} />
        <Route path="/MediaProductpage" component={MediaProductpage} />
        <Route path="/MediaProductlisting" component={MediaProductlisting} />
    
        <Route path="/Sourcingpage" component={Sourcingpage} />
        <Route path="/Purchaselisting" component={Purchaselisting} />
      <Route path='/Wallet' component={Wallet}></Route>
        <Route path="/Myinventry" component={Myinventry} />
        <Route path="/Wishlist" component={Wishlist} />
        <Route path="/MyPhotography" component={MyPhotography} />
        <Route path="/ImportedOrder" component={ImportedOrder} />
        <Route path="/Connection" component={Connection} />
        <Route path="/Listed" component={Listed} />
        <Route path="/OrderFullfillment" component={OrderFullfillment} />
        <Route path="/Dropshiporder" component={Dropshiporder} />
        <Route path="/Calculation" component={Calculation} />
        <Route path="/UserProfile" component={UserProfile} />
        <Route path="/AboutUS" component={AboutUS} />
        <Route path="/ContactUS" component={ContactUS} />
        <Route path="/PaymentMethods" component={PaymentMethods} />
        <Route path="/Api" component={Api} />
        <Route path="/RefundResend" component={RefundResend} />
        <Route path="/PrivacyPolicy" component={PrivacyPolicy} />
        <Route path="/StoreAutherizationAgreement" component={StoreAutherizationAgreement}></Route>
        <Route path="/IntegrityConcerns" component={IntegrityConcerns}></Route>
        <Route path="/UserAgreement" component={UserAgreement}></Route>
        <Route path='/BulkPuchase' component={BulkPuchase}></Route>
        <Route path='/Supplier' component={Supplier}></Route>
        <Route path='/ProductSourching' component={ProductSourching}></Route>
        <Route path='/Blog' component={Blog}></Route>
        <Route path="/Ticket" component={Ticket}></Route>
        <Route path="/ProductReport" component={ProductReport}></Route>
        <Route path="/ProductPhotography" component={ProductPhotography}></Route>
        <Route path="/Afflicate" component={Afflicate}></Route>
       
        <Route path='/BulkPurchase' component={BulkPurchase}></Route>
        <Route path='/Disputes' component={Disputes}></Route>
        <Route path="/Disputeslist" component={Disputeslist}></Route>
        <Route path="/UndeleviredOrder" component={UndeleviredOrder}></Route>
        <Route path="/OrderTracking" component={OrderTracking}></Route>
        <Route path="/PurchaseCart" component={PurchaseCart}></Route>
        <Route path="/SkuList" component={SkuList}></Route>
        <Route path="/ServiceProduct" component={ServiceProduct}></Route>
        <Route path="/NewSignup/:type" component={NewSignup}></Route>
        <Route path="/NewLogin" component={NewLogin}></Route>
        <Route path="/MediaWallet" component={MediaWallet}></Route>
        <Route path="/WithDraw" component={WithDraw}></Route>
        <Route path="/Recharge" component={Recharge}></Route>
        <Route path="/MediaSourching" component={MediaSourching}></Route>
        <Route path="/MediaWishlist" component={MediaWishlist}></Route>
        <Route path="/MediaMyOrder" component={MediaMyOrder}></Route>
        <Route path="/MyInventoryMedia" component={MyInventoryMedia}></Route>
        <Route path="/MediaWishlistDashboard" component={MediaWishlistDashboard}></Route>
        <Route path="/SellerDashboard" component={SellerDashboard}></Route>
        <Route path="/SellerPhotographyRequest" component={SellerPhotographyRequest}></Route>
        <Route path="/SellerWishlist" component={SellerWishlist}></Route>
        <Route path="/SellerInventory" component={SellerInventory}></Route>
       
        <Route path="/SellerSourchingForm" component={SellerSourchingForm}></Route>
        <Route path="/SourchingImportedOrder" component={SourchingImportedOrder}></Route>
        <Route path="/SellerOrderFullfillment" component={SellerOrderFullfillment}></Route>
        <Route path="/SellerDispute" component={SellerDispute}></Route>
        <Route path="/SellerUndeleviredOrder" component={SellerUndeleviredOrder}></Route>
        <Route path="/SellerOrderTracking" component={SellerOrderTracking}></Route>
        <Route path="/SellerCart" component={SellerCart}></Route>
        
        <Route path="/Authentication" component={Authentication}></Route>
        <Route path="/Checkout/:id/:quant" component={Checkout}></Route>
        <Route path="/MediaConnection" component={MediaConnection}></Route>
        <Route path="/MediaAuthentication" component={MediaAuthentication}></Route>
        <Route path="/MediaDispute" component={MediaDispute}></Route>
        <Route path="/MediaRto" component={MediaRto}></Route>
        <Route path="/MediaOrderTracking" component={MediaOrderTracking}></Route>
        <Route path="/MediaSellerDashboard" component={MediaSellerDashboard}></Route>
        <Route path="/MediaSellerOrderFullfillment" component={MediaSellerOrderFullfillment}></Route>
        <Route path="/SellerMediaDispute" component={SellerMediaDispute}></Route>
        <Route path="/SellerMediaRto" component={SellerMediaRto}></Route>
        <Route path="/SellerMediaOrderTracking" component={SellerMediaOrderTracking}></Route>
        <Route path="/SellerMediaInventory" component={SellerMediaInventory}></Route>
        <Route path="/SellerMediaPhotography" component={SellerMediaPhotography}></Route>
        <Route path="/SellerMediaWishlist" component={SellerMediaWishlist}></Route>
        <Route path="/PurchaseItem" component={PurchaseItem}></Route>
        <Route path="/SellerSignup" component={SellerSignup}></Route>
        <Route path="/SellerLogin" component={SellerLogin}></Route>

        
        
        
        
      </Switch>
     
      
    
     
 
    </>
  );
}

export default App;
