import React from "react";
import { Link } from "react-router-dom";

function Footer(){

    
    return(
      <footer className="w-full">
        <div className="w-full bg-gradient-to-r from-indigo-800 via-purple-800 to-indigo-800">
            <div className="flex flex-col items-center py-20 ">
                <h1 className="font-bold text-3xl text-white mb-3">Newsletter</h1>
                <div className="flex flex-col sm:flex-row gap-1 my-3 items-center">
                    <input className="py-1 px-2 focus:text-black outline-none text-center sm:text-start w-[250px] " type="email" name="" id="" placeholder="username@gmail.com"  />
                    <button className="bg-gray-100 py-1 px-2 text-slate-950 hover:bg-slate-950 hover:text-white w-[250px] sm:w-auto">Subscribe</button>
                </div>
            </div>
        </div>
        <div className="bg-gradient-to-r from-indigo-950 via-purple-950 to-indigo-950">
            <div className="flex flex-col items-center py-6">
                <ul className="flex flex-wrap  items-center justify-center gap-5 my-2 text-white">
                    <Link to="#"><li className="cursor-pointer hover:underline"onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}}>About</li></Link>
                    <Link to="#"><li className="cursor-pointer hover:underline"onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}}>Store locator</li></Link>
                    <Link to="#"><li className="cursor-pointer hover:underline"onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}}>FAQs</li></Link>
                    <Link to="#"><li className="cursor-pointer hover:underline"onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}}>News</li></Link>
                    <Link to="#"><li className="cursor-pointer hover:underline"onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}}>Careers</li></Link>
                    <Link to="#"><li className="cursor-pointer hover:underline"onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}}>Contact Us</li></Link>
                </ul>
                <p className="my-3 text-sm  text-white ">clickShop - online shoping store</p>
            </div>
        </div>
      </footer>
    )

}

export default Footer
