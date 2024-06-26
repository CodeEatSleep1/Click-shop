import React, { useEffect, useState } from "react";
import { Link, NavLink, json, useParams } from "react-router-dom";
import Logo from "../../assets/Logo.jpg"
import { useRef } from "react";
import CartItem from "../CartItem";
import { useEcommerce } from "../../Context/EcommerceContext";




function Header() {

    const [sticky, setSticky] = useState(false)
    const cart = useRef(null)
    const cartIcon=useRef(null)
    const menu = useRef(null)
    const overlay = useRef(null)
    const { cartData } = useEcommerce()
    const { slug } = useParams()
    let total = 0
    let id = 1
    if (slug) {
        id = slug
    }
    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 20) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        }

        const handleCart = (e) => {
            if (!cart.current.contains(e.target) && !cartIcon.current.contains(e.target)) {
                closeDisplayCart()
            }
        }

        window.addEventListener("mousedown", handleCart)
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("mousedown", handleCart)
        }
    }, [])

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
    const displayCart = async () => {

        cart.current.style.display="block"
        await sleep(10);
        cart.current.style.right = "1px";
        overlay.current.style.display = "block"

    }

    const closeDisplayCart = async () => {

        cart.current.style.right = "-550px";
        overlay.current.style.display = "none"
        await sleep(400);
        cart.current.style.display="none"

    }
    const displayMenu = () => {
        menu.current.style.left = "0px";
        
    }
    const closeMenu = () => {
        menu.current.style.left = "-650px";
    }
    // console.log("rendering")

    function updateTotal(totalprice) {
        { total = total + totalprice }
    }

    return (
        <header className={`w-full flex justify-center items-center shadow px-8 sm:px-16   fixed z-50 bg-white top-0  ${sticky ? "h-[100px]" : "h-[150px]"} transition-all duration-300`}
        >
            <div className={` w-full flex justify-between items-center`}>
                <div>
                    <Link to="/">
                        <img src={Logo} alt="Grocery house" width="150px" height="150px" className="md:w-[200px]" />
                    </Link>
                </div>
                <div className="hidden md:block">
                    <ul className="flex md:gap-x-3 lg:gap-x-5">
                        <li>
                            <NavLink to="/" className={({ isActive }) => `${isActive ? "text-purple-800" : "text-slate-900 hover:text-purple-800"}  font-bold`}
                                onClick={() => {
                                    window.scrollTo({ top: 0, behavior: "smooth" })
                                }}
                            >
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/categories/all" className={({ isActive }) => `${isActive ? "text-purple-800" : "text-slate-900 hover:text-purple-800"}  font-bold`}
                                onClick={() => {
                                    window.scrollTo({ top: 0, behavior: "smooth" })
                                }}
                            >
                                CATEGORIES
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`products/${id}`} className={({ isActive }) => `${isActive ? "text-purple-800" : "text-slate-900 hover:text-purple-800"}  font-bold`}
                                onClick={() => {
                                    window.scrollTo({ top: 0, behavior: "smooth" })
                                }}
                            >
                                PRODUCTS
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className=" relative flex items-center jusitfy-center gap-4">
                    <div cartquantity={cartData.length} className={`cursor-pointer ${cartData.length > 0 ? "after:block" : "after:hidden"} after:content-[attr(cartquantity)]  after:rounded-full  after:absolute after:top-[-10px] after:left-4  after:bg-purple-800 after:text-white after:w-4 after:h-4  after:pl-[5px] after:pt-[4px] sm:after:pt-[1px]  sm:after:text-[4px] after:font-serif`} onClick={displayCart} ref={cartIcon}>
                        <svg className="w-[31px] h-[31px] text-gray-700  hover:text-gray-950" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.1" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                        </svg>
                    </div>
                    <div className="sm:hidden cursor-pointer" onClick={displayMenu}>
                        <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
                        </svg>
                    </div>
                </div>
            </div>
            {/* overlay page */}
            <div className="hidden fixed top-0 left-0 backdrop-brightness-50  w-[100%] h-[100%] transition-all duration-500 ease-in-out" ref={overlay}>

            </div>

            {/* shoping cart */}
            <div className="hidden w-full  md:w-[65%] lg:w-3/6 xl:w-5/12 h-screen bg-slate-100  py-6 px-5 fixed z-50 top-0 right-[-550px] transition-all duration-700 ease-in-out" ref={cart}>
                <div className="w-full h-[12%] flex justify-between items-center">
                    <h1 className="font-bold">Shopping Cart item &#40;{cartData.length}&#x29;</h1>
                    <p className="cursor-pointer" onClick={closeDisplayCart}>&#10006;</p>
                </div>
                <div className="w-full h-2/3 bg-slate-100  overflow-y-scroll p-1">
                    {cartData?.map((item) => item.id > 0 ? (
                        <div key={item.id} >
                            <CartItem {...item} />
                            {updateTotal(item.totalprice)}
                        </div>
                    ) : null)}
                </div>
                <hr className="pb-4 mb-4 border-dotted border-b-2  border-black" />
                <div className="w-full h-1/6">
                    <h1 className="font-bold text-xl">SubTotal</h1>
                    <div className="flex items-center justify-between font-bold">
                        <h1>{Math.floor(total)}.00$</h1>
                        <button className="h-10 w-36 border-2 border-black text-slate-700 hover:bg-black hover:text-white">Go to Checkout</button>
                    </div>
                </div>
            </div>

            {/* menu for mobile user */}
            <div className="block sm:hidden fixed z-50 top-0 -left-[650px] bg-slate-200 py-10 px-4 w-full h-screen transition-all duration-700 ease-in-out" ref={menu}>
                <div className="w-full flex flex-col">
                    <div className="flex justify-between items-center">
                        <h1 className="font-bold text-2xl text-slate-600">Menu</h1>
                        <p className="cursor-pointer " onClick={closeMenu}>&#10006;</p>
                    </div>
                    <hr className="border-[1px] border-black mt-10 mb-3 " />
                    <ul className="w-full flex flex-col gap-3 ">
                        <li className="shadow">
                            <NavLink to="/" className={({ isActive }) => `${isActive ? "text-slate-950" : "text-slate-700"}  font-bold w-[400px] text-xl `}
                             onClick={() => {
                                 closeMenu()
                                window.scrollTo({ top: 0, behavior: "smooth" })
                            }}
                            >
                                HOME
                            </NavLink>
                        </li>
                        <li className="shadow">
                            <NavLink to="/categories/all" className={({ isActive }) => `${isActive ? "text-slate-950" : "text-slate-700"}  font-bold w-[400px] text-xl pb-2 `}
                              onClick={() => {
                                closeMenu()
                               window.scrollTo({ top: 0, behavior: "smooth" })
                           }}
                            >
                                CATEGORIES
                            </NavLink>
                        </li>
                        <li className="shadow">
                            <NavLink to={`products/${id}`} className={({ isActive }) => `${isActive ? "text-slate-950" : "text-slate-700"}  font-bold w-[400px] text-xl `}
                               onClick={() => {
                                closeMenu()
                               window.scrollTo({ top: 0, behavior: "smooth" })
                           }}
                            >
                                PRODUCTS
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )

}

export default Header