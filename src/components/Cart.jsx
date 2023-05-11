"use client";

import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectItems } from "@/app/redux/slices/basketSlice";


function Cart() {
  const items = useSelector(selectItems)
   
  return (
    <Link href='/checkout'>
      <div className="link relative flex items-center">
        <span
          className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400
              text-center rounded-full text-black font-bold"
        >
          {items.length}
        </span>

        <ShoppingCartIcon className="h-10" />
        <p className="hidden md:inline font-extrabold md:text-sm mt-2">
          Basket
        </p>
      </div>
    </Link>
  );
}

export default Cart;
