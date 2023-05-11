'use client'

import { useSelector } from "react-redux"
import { selectItems } from "../redux/slices/basketSlice"
import CheckoutProduct from "@/components/CheckoutProduct"


function Shopping() {
    const items = useSelector(selectItems)

  return (
    <div className="flex flex-col p-5 space-y-10 bg-white">
      <h1 className="text-3xl border-b pb-4">
        {items.length === 0 
            ? "Your Amazon Basket is empty" 
            : "Shopping basket"}
      </h1>

      {items.map((item, i) => (
            <CheckoutProduct
              key={i}
              id = {item.id} 
              title = {item.title}
              price = {item.price}
              rating = {item.rating}
              description = {item.description} 
              category = {item.category} 
              image = {item.image}
              hasPrime = {item.hasPrime}
            />
      ))}
    </div>

    
  );
}

export default Shopping;
