import Image from "next/image"
import { MagnifyingGlassIcon, Bars4Icon } from '@heroicons/react/24/outline'
import Login from "./Login"
import Link from "next/link"
import Cart from "./Cart"


function Header() {
  
  return (
    
    <header>
      {/* Top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2 gap-5">
        <div className="mt-2 flex items-center flex-group sm:flex-grow-0 ">
          <Link href='/'>
            <Image
              src='https://links.papareact.com/f90'
              alt="logo de amazon"
              width={150}
              height={40}
              className="cursor-pointer object-contain  "
            />
          </Link>
        </div>

        <div  className="bg-yellow-400 items-center hidden sm:flex h-10 rounded-md
           flex-grow cursor-pointer hover:bg-yellow-500 ">

          <input type="text" className="p-2 h-full w-6 flex-grow  flex-shrink rounded-l-md
            focus:outline-none px-4" 
          />
          <MagnifyingGlassIcon className="h-12 p-4 "/>
        </div>

        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap ">
         
          <Login/>

          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <Cart/>
        </div>
      </div>
      

      {/* Bottom nav */}
      <div className=" flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white 
         text-xs sm:text-sm  "
        >
        <p className="link flex items-center ">
          <Bars4Icon className="h-6 mr-1 font-bold"/>
           All
        </p>

        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Todays&apos; Deals</p>
        <p className="link hidden lg:inline">Electronics</p>
        <p className="link hidden lg:inline">Food & Grocery</p>
        <p className="link hidden lg:inline">Prime</p>
        <p className="link hidden lg:inline">Buy Again</p>
        <p className="link hidden lg:inline">Healt & Personal Care</p>

      </div>

    </header>
    
  )
}

export default Header

