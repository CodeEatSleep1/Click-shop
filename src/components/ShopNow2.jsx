import React from "react";
import { Link } from "react-router-dom";

function ShopNow2() {
    return (
        <div className="w-full sm:w-[520px] md:w-full flex md:flex-row flex-col bg-gray-200 my-10 ">
            <div className="md:w-1/2 w-full">
                <img src="https://media.istockphoto.com/id/1224339637/photo/online-shop-website-on-home-office-setup.jpg?s=612x612&w=0&k=20&c=sPmF5_KvgsoR1AYRWXBdAf3qHGAeiGvkHE3_0O4OA3g=" alt="" className="w-full h-[350px] md:h-[500px]  opacity-80" />
            </div>
            <div className="md:w-1/2 w-full md:p-0 p-4 flex flex-col justify-center items-center ">
                <div className="w-11/12 md:w-1/2 h-auto">
                    <h1 className="text-3xl font-bold font-sans  ">Elevate Your Everyday</h1>
                    <p className="text-sm font-bold  my-4">Discover unbeatable deals and exclusive finds that transform your shopping experience—only at ClickShop</p>
                    <Link to="/categories/all" className="bg-black text-white font-bold py-2 px-3 hover:bg-gray-200 hover:border-2 hover:text-black border-black  duration-75  ease-in-out "
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }}
                    >
                        SHOP NOW
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default ShopNow2