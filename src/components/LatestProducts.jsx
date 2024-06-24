import React from "react";
import Item from "./Item";
import { useEcommerce } from "../Context/EcommerceContext";


function LatestProducts() {
    const { Latest_Products } = useEcommerce()
    return (
        <div className="my-10">
            <div className="font-bold text-black text-2xl py-8">
                Store's Latest Products
            </div>
            <div className="flex flex-wrap gap-5  justify-center items-center">
                {Latest_Products?.map((item) => (
                    <div key={item.id}>
                        <Item id={item.id} image={item.image} title={item.title} price={item.price} />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default LatestProducts