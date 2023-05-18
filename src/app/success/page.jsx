import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function Success() {
  return (
    <div className="bg-gray-100 h-screen">
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className=" text-green-500 h-10 md:flex shrink-0" />
            <h1 className="text-3xl">
              Thank you, your order has been confirmed!
            </h1>
          </div>
          <p>
            Thank you shopping with us. well send a confirmation once your item
            has shipped, if you you would like to check the status of your
            orders please press the link below.
          </p>

          <Link href="/orders">
            <button className="button mt-8 w-full">Go to my orders</button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Success;
