import React from 'react'
import { useEcommerce } from '../Context/EcommerceContext'

function CartItem({ id, title, image, quantity, price }) {
  const { removeCart, decreaseCartQuantity, increaseCartQuantity } = useEcommerce()

  const increase = (id) => {
    if(quantity<10){
      increaseCartQuantity(id)
    }
  }
  const decrease = (id) => {
    if (quantity > 1) {
      decreaseCartQuantity(id)
    }

  }
  const removeItem = () => {
    removeCart(id)
  }
  return (
    <div className="w-full border-[1px] border-black flex items-center mb-3 ">
      <div className="w-[30%]">
        <img src={image} alt="" width="100%" className="h-[120px] md:h-[150px] px-4 md:px-2 py-5 bg-white" />
      </div>
      <div className="w-[70%]  h-[120px] md:h-[150px] py-3 px-2 flex flex-col justify-between items-center bg-slate-200">
        <div className="w-full flex justify-around items-center h-1/3">
          <div className="text-[12px] md:text-sm font-bold">
            Quantity
          </div>
          <div className="flex items-center border-[1px] border-black">
            <button className=" text-sm md:text-xl text-black font-bold  h-5 w-5 md:h-7 md:w-8 bg-gray-100 hover:bg-gray-200 flex justify-center items-center transition-all duration-100 ease-in-out"
              onClick={() => { decrease(id) }}
            >-</button>
            <div className="text-sm md:text-lg bg-gray-200 h-5 w-5 md:h-7 md:w-8 flex justify-center items-center border-x-[1px] border-black">{quantity}</div>
            <button className="text-sm md:text-xl text-black  font-bold   bg-gray-100 hover:bg-gray-200 h-5 w-5 md:h-7 md:w-8 flex justify-center items-center transition-all duration-100 ease-in-out"
              onClick={() => { increase(id) }}
            >+</button>
          </div>
          <div className=" text-sm  md:text-lg font-bold">
            {Math.floor((quantity * price))}.00$
          </div>
        </div>
        <div className="w-full flex justify-around items-center ">
          <div className=" w-32 md:w-48 text-[10px] md:text-sm">{title}
          </div>
          <p className="w-5 cursor-pointer"
            onClick={removeItem}
          >&#10006;</p>
        </div>
      </div>
    </div>

  )
}

export default CartItem