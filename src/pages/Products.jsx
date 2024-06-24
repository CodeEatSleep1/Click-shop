import React from "react";
import Product from "../components/Product";
import TrendingProducts from "../components/TrendingProducts";

function Products(){
    return (
        <div className="flex flex-col items-center py-10 px-6 md:px-16 ">
           <Product/>
           <TrendingProducts/>
        </div>
    )
}
export default Products