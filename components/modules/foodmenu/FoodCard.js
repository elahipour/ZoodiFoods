import Dollar from "@/components/icons/Dollar";
import Location from "@/components/icons/Location";
import setDiscount from "@/utils/discount";
import Link from "next/link";
function FoodCard({ food }) {
  const { details } = food;
  const { Cuisine } = details[0];
  return (
    <div className="relative flex flex-col gap-6">
      <img className="rounded-md" src={`../../images/${food.id}.jpeg`} />
      <div className="flex justify-between">
        <h1 className="font-bold text-[#53C60B]">{food.name}</h1>
        <span className="flex gap-1 items-center">
          <Location />
          <i className="not-italic text-gray-500">{Cuisine}</i>
        </span>
      </div>
      <div className="flex items-center">
        <Dollar />
        <span className={`${food.discount ? "text-red-500" : ""}`}>
          {food.discount
            ? setDiscount(food.price , food.discount)
            : food.price}
          $
        </span>
      </div>
      <span
        className={`text-gray-50 absolute top-5 left-5 rounded p-1 bg-red-500 ${
          food.discount ? "block" : "hidden"
        }`}
      >
        {food.discount}%
      </span>
      <Link className="bg-[#53C60B] text-center text-white font-[600] py-1 rounded-md" href={`/menu/${food.id}`}>See Details</Link>
    </div>
  );
}

export default FoodCard;
