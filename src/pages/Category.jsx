import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useEcommerce } from "../Context/EcommerceContext";

function Category() {
    const {categoryTitle}=useEcommerce()
    // console.log(categoryTitle)
    return (
        <div className="w-full flex flex-col  items-center ">
            <div className=" w-full flex justify-between items-center py-10 px-8 ">
                <Link to="/" className="w-1/6 font-bold text-sm text-slate-700 hover:text-slate-950">
                    &lt;Home
                </Link>
                <div className="w-10/12 flex justify-center items-center">
                    <h1 className="text-2xl font-bold text-purple-800"> {categoryTitle}</h1>
                </div>
            </div>
            <header className="mb-12 flex justify-center items-center">
                <div className="flex flex-wrap justify-center items-center gap-4">
                    <NavLink to="all" className={({ isActive }) => `${isActive ? "border-slate-400  " : "hover:border-slate-400  text-slate-950"} border-2 shadow py-1 px-4 text-sm`}
                    >
                        All
                    </NavLink>
                    <NavLink to="electronics" className={({ isActive }) => `${isActive ? "border-slate-400 " : "hover:border-slate-400  text-slate-950"} border-2 shadow py-1 px-4 text-sm`}
                    >
                    Electronics
                    </NavLink>
                    <NavLink to="mens" className={({ isActive }) => `${isActive ? "border-slate-400 " : "hover:border-slate-400  text-slate-950"} border-2 shadow py-1 px-4 text-sm`} 
                    >
                        Mens
                    </NavLink>
                    <NavLink to="womens" className={({ isActive }) => `${isActive ? "border-slate-400 " : "hover:border-slate-400  text-slate-950"} border-2 shadow py-1 px-4 text-sm`}
                    >
                        Womens
                        </NavLink>
                    <NavLink to="jewelery" className={({ isActive }) => `${isActive ? "border-slate-400 " : "hover:border-slate-400  text-slate-950"} border-2 shadow py-1 px-4 text-sm`}
                    >
                        Jewelery
                    </NavLink>
                </div>
            </header>
            <Outlet/>
        </div>
    )
}
export default Category