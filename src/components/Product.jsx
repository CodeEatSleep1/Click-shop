import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEcommerce } from '../Context/EcommerceContext'

function Product() {
    const { All_Products, addCart, cartData } = useEcommerce()
    const { slug } = useParams()

    const item = All_Products?.filter((item) => item.id === Number(slug))

    const [Quantity, setQuantity] = useState(1)
    const [image, setImage] = useState(item[0].image)

    useEffect(() => {
        setImage(item[0].image)
    }, [slug])


    const changeImageDisplay = (e) => {
        setImage(e.target.src)
    }
    const increase = () => {
        setQuantity((prev) => prev<10 ? prev + 1:prev)
    }
    const decrease = () => {
        setQuantity((prev) => prev > 1 ? prev - 1 : prev)
    }

    const addToCart = () => {
        addCart({ id: item[0].id, title: item[0].title, image: image, quantity: Quantity, price: item[0].price })
    }
    // console.log(cartData)
    return (
        <>
            <div className="w-full h-auto relative flex flex-col items-center" >
                <h1 className="text-xl text-center font-bold font-sans absolute mt-3">{item[0].title}</h1>
                <div className="w-full h-auto flex flex-col md:flex-row mt-32 md:mt-0 gap-4 md:gap-0 items-center  ">
                    <div className=" w-full md:w-1/2  flex flex-col items-center">
                        <div >
                            <img src={image} alt="" width="300px" className=" h-[300px] p-5" />
                        </div>
                        <div className="flex justify-around items-center">
                            <img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt="" width="100px" className="h-[100px] p-3  hover:shadow-lg hover:border-slate-400 hover:border-[1px]"
                                onMouseOver={changeImageDisplay}
                            />
                            <img src={item[0].image} alt="" width="100px" className="h-[100px] p-3  hover:shadow-lg hover:border-slate-400 hover:border-[1px]"
                                onMouseOver={changeImageDisplay} />
                            <img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt="" width="100px" className="h-[100px] p-3  hover:shadow-lg hover:border-slate-400 hover:border-[1px]"
                                onMouseOver={changeImageDisplay} />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 bg-gray-200 h-full md:h-[650px] lg:h-auto py-10 px-3 md:px-2 lg:px-5">
                        <div className="w-full h-full md:h-auto lg:h-72 md:py-5 lg:py-0  flex justify-center  items-center bg-gray-200 mb-2">
                            <p className="w-full px-1 h-auto md:px-3 lg:px-10 text-wrap text-sm font-bold font-sans text-slate-800">
                                {item[0].description}
                            </p>
                        </div>

                        <div className="w-full  bg-gray-200 md:h-40 flex flex-col  items-center justify-around">
                            <div className="w-full flex flex-col lg:flex-row  gap-3 lg:gap-0 justify-around items-center">
                                <div className="text-xl font-bold">
                                    Quantity
                                </div>
                                <div className="flex items-center border-[1px] border-black">
                                    <button className="text-3xl text-black font-bold  h-11 w-12 bg-gray-100 hover:bg-gray-200 flex justify-center items-center transition-all duration-100 ease-in-out"
                                        onClick={decrease}
                                    >-</button>
                                    <div className=" bg-gray-200 h-11 w-12 flex justify-center items-center border-x-[1px] border-black">{Quantity}</div>
                                    <button className="text-3xl text-black  font-bold   bg-gray-100 hover:bg-gray-200 h-11 w-12 flex justify-center items-center transition-all duration-100 ease-in-out"
                                        onClick={increase}
                                    >+</button>
                                </div>
                                <div className=" text-xl font-bold">
                                    {Math.floor(Quantity * item[0].price)}.00$
                                </div>
                            </div>
                            <div className=" w-full  flex flex-col lg:flex-row items-center justify-around mt-5 gap-3 xl:gap-0">
                                <button className="border-2 border-black hover:bg-black hover:text-white font-bold text-sm py-3 px-4 w-40 h-12  transition-all duration-100 ease-in-out"
                                    onClick={addToCart}
                                >ADD TO CART</button>
                                <button className="hover:border-2 hover:border-purple-800 hover:bg-gray-200 hover:text-purple-800 bg-purple-800 text-white font-bold text-sm py-3 px-4 w-40 h-12 transition-all duration-100 ease-in-out">SHOP NOW</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="w-full flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between my-16">
                    <div className="bg-gray-200 w-full md:w-[31%] px-5 py-3 ">
                        <h1 className="font-bold text-slate-800 pb-2 ">
                            Rating :
                        </h1>
                        <p className="font-sans font-bold text-slate-600">
                            {item[0].rating.rate}
                        </p>
                    </div>
                    <div className="bg-gray-200 w-full md:w-[31%] px-5 py-3 ">
                        <h1 className="font-bold text-slate-800 pb-2 ">
                            Stock :
                        </h1>
                        <p className="font-sans font-bold text-slate-600">
                            {item[0].rating.count}
                        </p>
                    </div>
                    <div className="bg-gray-200 w-full md:w-[31%] px-5 py-3 ">
                        <h1 className="font-bold text-slate-800 pb-2 ">
                            Category :
                        </h1>
                        <p className="font-sans font-bold text-slate-600">
                            {item[0].category}
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Product