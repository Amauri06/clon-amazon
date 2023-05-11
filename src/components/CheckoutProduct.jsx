
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { convertToDollars } from "@/functions/convertToDollars";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "@/app/redux/slices/basketSlice";

function CheckoutProduct({
  id,
  title,
  rating,
  price,
  description,
  category,
  image,
  hasPrime,
}) {
  const usDollar = convertToDollars();
  const dispath = useDispatch()

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      rating,
      price,
      description,
      category,
      image,
      hasPrime,
    }

    dispath(addToBasket(product))
  }

  const removeItemFromBasket = () => {
    dispath(removeFromBasket(id))
  }

  return (
  <div className=" grid grid-cols-5 ">
      <Image
        src={image}
        height={200}
        width={200}
        className="object-contain "
        alt="this are the products"
      />

      {/* Medio */}
      <div className="col-span-3 mx-5 ">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5 text-yellow-500 " key={i} />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        {usDollar.format(price)}

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery </p>
          </div>
        )}
      </div>

      <div className="flex flex-col space-y-2 my-auto justify-center">
        <button className="button mt-auto" onClick={addItemToBasket}> Add to Basket</button>
        <button className="button mt-auto" onClick={removeItemFromBasket}> Remove to Basket</button>
      </div>

    </div>
  );
}

export default CheckoutProduct;
