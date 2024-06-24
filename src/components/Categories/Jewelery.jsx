import React,{useEffect} from "react";
import Item from "../Item.jsx";
import { useEcommerce } from "../../Context/EcommerceContext.jsx";

function Jewelery(){
const {All_Products,setCategoryTitle} =useEcommerce()
useEffect(()=>{
    setCategoryTitle("JEWELERY")
},[])

// console.log(typeof(All_Products))

    return(
        <div className="px-10 py-10 w-auto">
            <div className="flex flex-wrap gap-5 justify-center w-auto items-center">
               {All_Products?.map((item)=>(
                item.category==="jewelery" ?
                <div key={item.id}>
                    {/* {console.log(item.title)} */}
                    <Item {...item}/>
                </div>
                :null    
               ))}
            </div>
        </div>
    )
}
export default Jewelery