import React,{useEffect} from "react";
import Item from "../Item.jsx";
import { useEcommerce } from "../../Context/EcommerceContext.jsx";

function Electronics(){
const {All_Products,setCategoryTitle} =useEcommerce()
useEffect(()=>{
    setCategoryTitle("ELECTRONICS")
},[])
// console.log("hello I am in Electronics")
    return(
        <div className="px-10 py-10 w-auto">
            <div className="flex flex-wrap gap-5 justify-center w-auto items-center">
               {All_Products?.map((item)=>(
                item.category==="electronics" ?
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
export default Electronics