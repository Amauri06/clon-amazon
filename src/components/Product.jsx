'use client'

import { useState } from "react"
import Image from "next/image"
import {StarIcon} from '@heroicons/react/24/solid'


const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({id, title, price, description, category, image}) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1 )) + MIN_RATING
  )

  const [hasPrime] = useState(Math.random() < 0.5)

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });



  return (
    <div className="relative flex flex-col m-5 items-center bg-white z-30 p-10">
        <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>

        <Image 
          src={image} 
          height={200} 
          width={200} 
          alt=""
          className="object-contain"    
        />

        <h4 className="my-3">{title}</h4>

        <div className="flex">

            {Array(rating)
            .fill()
            .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500 "/>       
            ))}    
        </div>
        <p className="text-xs mt-2 my-2 line-clamp-2">{description}</p>

        <div className="mb-5">
            {USDollar.format(price)}
        </div>

        {hasPrime && (
          <div className="flex items-center space-x-2 -mt-5"> 
             <img className="w-12" src="https://links.papareact.com/fdw" alt=""/> 
             <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )} 

        <button className="mt-auto button">Add to Basket</button>     
        
    </div>
  )
}

export default Product