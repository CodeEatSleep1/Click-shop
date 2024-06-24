import React from "react";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <div className=" sm:flex md:flex-nowrap flex flex-wrap  items-center  justify-center gap-3 mb-5 w-full">
            <div className="w-full sm:w-1/2">
                <Link to="/categories/all" className="relative w-full">
                    <img src="https://images.pexels.com/photos/6331230/pexels-photo-6331230.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width="100%" className="h-[400px] lg:h-[600px]  transition-all duration-700  ease-in-out hover:brightness-50 brightness-75" />
                    <h1 className="absolute bottom-6 left-4 text-white text-3xl font-bold font-sans ">Explore our Store</h1>
                </Link>
            </div>
            <div className="flex gap-3  w-full sm:w-1/2">
                <div className="w-1/2">
                    <Link to="/categories/mens" className="relative w-full">
                        <img src="https://images.pexels.com/photos/1884579/pexels-photo-1884579.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""
                            width="100%" className="h-[400px] lg:h-[600px] transition-all duration-700  ease-in-out hover:brightness-50 brightness-75 " />
                        <h1 className="absolute lg:bottom-6 bottom-2 left-4 text-white text-xl lg:text-3xl font-bold font-sans ">Mens</h1>
                    </Link>
                </div>
                <div className="flex flex-col gap-3 w-1/2">
                    <div className="w-full">

                        <Link to="/categories/womens" className="relative">
                            <img src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""
                                width="100%" className="h-[194px] lg:h-[294px]  transition-all duration-700  ease-in-out hover:brightness-50 brightness-75 " />
                            <h1 className="absolute lg:bottom-6 bottom-2 left-4 text-white text-xl lg:text-3xl font-bold font-sans ">Womens</h1>
                        </Link>
                    </div>
                    <div className="w-full">
                        <Link to="/categories/jewelery" className="relative">
                            <img src="https://images.pexels.com/photos/975250/pexels-photo-975250.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""
                                width="100%" className="h-[194px] lg:h-[294px]  transition-all duration-700  ease-in-out hover:brightness-50 brightness-75 " />
                            <h1 className="absolute lg:bottom-6 bottom-2 left-4 text-white text-xl lg:text-3xl font-bold font-sans ">Jewelery</h1>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero
