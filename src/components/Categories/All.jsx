import React, { useEffect } from "react";
import Item from "../Item.jsx";
import { useEcommerce } from "../../Context/EcommerceContext.jsx";

function All(){
const {All_Products,setCategoryTitle} =useEcommerce()
useEffect(()=>{
    setCategoryTitle("ALL")
},[])
// console.log("hello I am in All")
    return(
        <div className="px-10 py-10 w-auto">
            <div className="flex flex-wrap gap-5 justify-around w-auto items-center">
               {All_Products?.map((item)=>(
                <div key={item.id}>
                    {/* {console.log(item.title)} */}
                    <Item {...item}/>
                </div>    
               ))}
            </div>
        </div>
    )
}
export default All