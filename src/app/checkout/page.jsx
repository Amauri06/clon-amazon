import Image from "next/image";
import Shopping from "./Shopping";
import TotalShopping from "./TotalShopping";


function Checkout() {
 

  return (
    <div className="bg-gray-100">
      <main className="lg:flex max-w-screen-xl mx-auto ">
        {/* Left */}
        <div className=" grow m-5 shadow-sm   ">
          <Image
            src="https://links.papareact.com/ikj"
            alt="logo anuncio de amazon"
            width={1020}
            height={250}
            className="object-contain "
          />

          <Shopping />
        </div>

        {/* Rigth */}
        <TotalShopping/>
      </main>
    </div>
  );
}

export default Checkout;
