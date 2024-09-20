import React from "react";
import { Link } from "react-router-dom";

function Item({
    id,
    image,
    title,
    price,
}) {

    return (
        <div className="shadow dark:shadow-white dark:border-transparent border-2 cursor-pointer hover:border-gray-400 transition-all duration-300  ease-in-out">
            <Link to={`/products/${id}`} className="flex flex-col items-center "
                onClick={() => {
                    window.scrollTo({ top: 120, behavior: "smooth" })
                }}
            >
                <img src={image} alt="" width="315px" className="py-5 sm:py-5 px-6 min-h-60 max-h-60 sm:w-[263px] sm:min-h-52  sm:max-h-52 bg-white" />
                <div className="w-[315px] sm:w-[263px]">
                    <p className="p-2  text-[14px] text-wrap  min-h-12 max-h-12">{title}</p>
                    <p className="px-2 py-2  font-bold text-black">{price}$</p>
                </div>
            </Link>
        </div>
    )
}
export default Item