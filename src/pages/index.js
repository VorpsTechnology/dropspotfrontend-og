import React from "react";

import Shopnavbar from "../components/ShopNavbar/Shopnavbar";
import Link from "../components/Links/Link";

import Trending from "../components/Trending/Trending";
import TrendingHeader from "../components/Trending/TrendingHeader";
// import Shipping from "../components/Shipping/Shipping";

import Section from '../components/Section/Section'
import Review from "../components/Reviews/Review";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
// import Partner from "../components/Partner/Partner";

import MediaNavbar from "../components/MediaNavbar/MediaNavbar";

// import Hotsellingproducts from '../components/Hotsellingproducts/Hotsellingproducts'

import Mediabutton from '../components/Mediabutton/Mediabutton'

import MediaNavabarbutton from "../components/MediaNavabarbutton/MediaNavabarbutton";
import MediaSuperDeals from "../components/MediaSuperDeals/MediaSuperDeals";

import ScrollUpButton from '../components/ScrollUpButton/ScrollUpButton';
import ShoppingCard from '../components/ShoppingCard/ShoppingCard';
import MoreProduct from "../components/MoreProduct/MoreProduct";
import HowWeWork from "../components/HowWeWork/HowWeWork";
import DesktopHotselling from "../components/DesktopHotselling/DesktopHotselling";
import TopSellingProducts from '../components/TopSellingProducts/TopSellingProducts'

const Home = () => {
    // const [category, setCategory] = useState("");
    // const [products, setProduct] = useState([1, 2, 3, 4, 5]);

    return ( 
    <div >
        <Navbar />
         <MediaNavbar />
        <Shopnavbar />
        <Section />
        <br />
        <HowWeWork/>
        <br />
        <MediaNavabarbutton />
        <br />
        <Mediabutton />
        {/* <Hotsellingproducts /> */}
        <TrendingHeader />
        <Trending  />
        <DesktopHotselling />
        <TopSellingProducts/>
        <br />
        
        <MediaSuperDeals />
        <MoreProduct />
        
        
        {/* <ShoppingCard /> */}
        <br />
        <Review />
        <br />
        
        <Link />
        <br />
        <Footer />
        <ScrollUpButton />

        </div>

    );
};

export default Home;