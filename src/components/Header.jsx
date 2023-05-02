import Image from "next/image"
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars4Icon,

} from '@heroicons/react/24/outline'

function Header() {
  return (
    <header>
      {/* Top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2 gap-5">
        <div className="mt-2 flex items-center flex-group sm:flex-grow-0 ">
          <Image
            src='https://links.papareact.com/f90'
            alt="logo de amazon"
            width={150}
            height={40}
            className="cursor-pointer object-contain "
          />
        </div>

        <div  className="bg-yellow-400 items-center hidden sm:flex h-10 rounded-md
           flex-grow cursor-pointer hover:bg-yellow-500 ">

          <input type="text" className="p-2 h-full w-6 flex-grow  flex-shrink rounded-l-md
            focus:outline-none px-4" 
          />
          <MagnifyingGlassIcon className="h-12 p-4 "/>
        </div>

        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap ">
          <div className="link">
            <p >Hello Amauri Ulloa </p>
            <p className="font-extrabold md:text-sm">Account & Lists </p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div className="link relative flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400
              text-center rounded-full text-black font-bold" 
              
             >
              0
            </span>

            <ShoppingCartIcon className="h-10"/>
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
          </div>

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

