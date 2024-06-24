import React from 'react'
import Item from './Item'
import { useEcommerce } from '../Context/EcommerceContext'
import { useRef } from 'react'

function TrendingProducts() {
    const { Trending_Products } = useEcommerce()
    const ref = useRef(null)

    const moveLeft = () => {
        const width = ref.current.clientWidth
        // console.log(width)
        if(width>640)
            {
            ref.current.scrollLeft = ref.current.scrollLeft - (width+25)
        }
        else{
            ref.current.scrollLeft = ref.current.scrollLeft - (width+11)
        }
    }
    const moveRight = () => {
        const width = ref.current.clientWidth
        // console.log(width)
        if(width>640)
            {
            ref.current.scrollLeft = ref.current.scrollLeft + (width+25)
        }
        else{
            ref.current.scrollLeft = ref.current.scrollLeft + (width+11)
        }
            
    }

    return (
        <div className="w-full my-10">
            <div className="w-full flex justify-between items-center mt-5 mb-10 ">
                <h1 className="w-1/2 text-2xl font-bold">Trending Items</h1>
                <div className="flex items-center">
                    <button className="py-1 px-3 text-white bg-slate-700 hover:bg-black mr-1"
                        onClick={moveLeft}
                    >
                        &#x2B9C;
                    </button>
                    <button className="py-1 px-3 text-white bg-slate-700 hover:bg-black"
                        onClick={moveRight}
                    >
                        &#x2B9E;
                    </button>
                </div>
            </div>
            <div className="flex items-center overflow-hidden w-full   scroll-smooth gap-5 " ref={ref}>
                {
                    Trending_Products?.map((item) => (
                        <div key={item.id}>
                            <Item {...item} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TrendingProducts