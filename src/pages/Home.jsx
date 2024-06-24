import React from "react";
import LatestProducts from "../components/LatestProducts";
import Hero from "../components/Hero";
import ShopNow1 from "../components/ShopNow1";
import ShopNow2 from "../components/ShopNow2";
import TrendingProducts from "../components/TrendingProducts";

function Home(){
    // console.log(latestProducts)
    return (
        <div className="flex flex-col items-center pt-3 pb-10 px-6 md:px-12 " >
        <Hero/>
        <LatestProducts/>
        <ShopNow1 />
        <TrendingProducts/>
        <ShopNow2/>
        </div>
    )
}
export default Home