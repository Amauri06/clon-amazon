"use client";

import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../redux/slices/basketSlice";
import { convertToDollars } from "@/functions/convertToDollars";
import { useSession } from "next-auth/react";
import axios from "axios";
import { loadStripe } from '@stripe/stripe-js';


function TotalShopping() {
  
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const usDollar = convertToDollars();
  const { data: session } = useSession();
  const stripePromise = loadStripe( process.env.stripe_public_key);

  
const createCheckoutSession = async () => {

  const stripe = await stripePromise;

  const checkoutSesion = await axios.post('/api/checkout',
   {
      items: items,
      email: session.user.email

  }) 

  // redireccionar usuario

  const result = await stripe.redirectToCheckout({
    sessionId:checkoutSesion.data.id
  })

  if(result.error) alert(result.error.message);
  

}
  return (

    <div className=" flex flex-col bg-white p-10 shadow-sm ">
      {items.length > 0 && (
        <>
          <h2 className="whitespace-nowrap">
            Subtotal ({items.length} items):{" "}
            <span className="font-bold">{usDollar.format(total)}</span>
          </h2>

            <button
              role="link"
              onClick={createCheckoutSession}
              disabled={!session}
              className={`button mt-2 ${
                !session &&
                "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
              }`}
            >
              {!session ? "Sign in to checkout" : "Proceed to checkout"}
            </button>
        
        </>
      )}
    </div>
  );
}

export default TotalShopping;
