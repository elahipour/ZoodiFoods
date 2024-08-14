import Dollar from "@/components/icons/Dollar";
import Location from "@/components/icons/Location";
import setDiscount from "@/utils/discount";
import Link from "next/link";
function FoodDetails({ food }) {
  const { details, introduction,ingredients,recipe } = food;
  const { Cuisine } = details[0];

  return (
    <>
      <div className="flex max-md:flex-col gap-6 px-4">
        <img
          className="rounded-md w-full md:w-[70%]"
          src={`../../images/${food.id}.jpeg`}
        />
        <div className="flex max-md:gap-3 md:justify-start md:gap-3 flex-col justify-between flex-1">
          <h1 className="font-bold text-[#53C60B]">{food.name}</h1>

          <div className="flex justify-between">
            <span className="flex gap-1 items-center">
              <Location />
              <i className="not-italic text-gray-500">{Cuisine}</i>
            </span>
          </div>
          <div className="flex items-center">
            <Dollar />
            <span className={`${food.discount ? "text-red-500" : ""}`}>
              {food.discount
                ? setDiscount(food.price ,food.discount)
                : food.price}
              $
            </span>
          </div>
          <span
          className={`text-gray-50 w-[150px] text-center rounded p-1 bg-red-500 ${
            food.discount ? "block" : "hidden"
          }`}
        >
          {food.discount}%
        </span>
        </div>

      
      </div>
      <div>
        <p className="px-4 my-6 text-justify">{introduction}</p>
        <div className="my-24 px-4">
          <h1 className="text-[1.5rem] font-bold text-[#53C60B] my-4">Details</h1>
          <ul className="list-disc marker:text-[#53C60B] ml-5">
            {details.map((detail, index) => {
              return (
                <li key={index}>{`${Object.keys(detail)}:${Object.values(
                  detail
                )}`}</li>
              );
            })}
          </ul>
        </div>
        <div className="my-24 px-4">
          <h1 className="text-[1.5rem] font-bold text-[#53C60B] my-4">Ingredients</h1>
          <ul className="list-disc marker:text-[#53C60B] ml-5">
            {ingredients.map((ing, index) => {
              return (
                <li key={index}><p>{ing}</p></li>
              );
            })}
          </ul>
        </div>
        <table className="w-[90%] mx-auto">
          <tbody>
            {recipe.map((rec,index)=> { return <tr key={index} className="even:bg-green-200 odd:bg-green-300"><td className="p-6 flex items-center gap-4"><span className="text-[2rem]">{index+1}</span><span className="text-justify">{rec}</span></td></tr>})}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FoodDetails;
