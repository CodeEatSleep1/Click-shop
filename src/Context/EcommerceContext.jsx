import { createContext, useContext, useState, useMemo,useEffect } from "react";
import data from '../assets/all_products'
import latestProducts from '../assets/latest_products'
import trendingProducts from '../assets/trending_products'


export const EcommerceContext = createContext()


export const EcommerceContextProvider = ({ children }) => {
  const [All_Products, setAll_Products] = useState([])
  const [Latest_Products, setLatest_Products] = useState([])
  const [Trending_Products, setTrending_Products] = useState([])
  const [categoryTitle, setCategoryTitle] = useState("ALL")
  const [cartData, setcartData] = useState([])

  const addCart = ({ ...data }) => {
    let exist = false
    // if exist just update the quantity and total price
    // console.log("Is cartData empty ",cartData)
    // for (let index = 0; index < cartData.length; index++) {
    //     if(cartData[index].id===data.id){
    //       exist=true;
    //       break;
    //     }
    //   // console.log(cartData[index]);
    // }
    cartData.map((CartItem) => CartItem.id === data.id ? exist = true : exist)
    if (exist) {
      setcartData((prevCart) => prevCart.map((prevItem) => prevItem.id === data.id && prevItem.quantity<10 ? { ...prevItem, quantity: prevItem.quantity + data.quantity, totalprice: (prevItem.quantity + data.quantity) * data.price } : { ...prevItem }))
    }
    else {
      // if not exist Add new item in cart
      setcartData((prev) => [...prev, { ...data, totalprice: data.quantity * data.price }])

    }
    // console.log(cartData)
  }

  const decreaseCartQuantity = (id) => {
    setcartData((cart) => cart.map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 ,totalprice:(item.quantity-1)*item.price  } : { ...item }))
  }

  const increaseCartQuantity = (id) => {
    setcartData((cart) => cart.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1,totalprice:(item.quantity+1)*item.price } : { ...item }))

  }
  const removeCart = (id) => {
    setcartData((prevCart) => prevCart.filter((previtem) => previtem.id !== id))
  }

  useMemo(() => {
    // console.log("hey i am running")

    setAll_Products(data)
    setLatest_Products(latestProducts)
    setTrending_Products(trendingProducts)

    

  }, [])
  useEffect(()=>{
    const cart = JSON.parse(localStorage.getItem("cartData"))
    if (cart && cart.length > 0) {
      setcartData(cart)
    }
  },[])
  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartData))
}, [cartData])

  return (
    <EcommerceContext.Provider value={{ All_Products, setAll_Products, Latest_Products, setLatest_Products, Trending_Products, setTrending_Products, categoryTitle, setCategoryTitle, cartData, addCart, removeCart, decreaseCartQuantity, increaseCartQuantity }}>
      {children}
    </EcommerceContext.Provider>
  )
}

export const useEcommerce = () => {
  return useContext(EcommerceContext)
}
