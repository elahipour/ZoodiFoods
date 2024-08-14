import FoodCard from "../modules/foodmenu/FoodCard";
function Foods({ foods }) {
  return (
    <div>
      <h1 className="ml-4 border-b-4 border-b-[#53C60B] text-[1.5rem] font-bold my-16 w-fit">
        Menu
      </h1>
      <div className="grid min-h-[100vh] p-12 grid-cols-1 px-4 gap-8 min-[540px]:grid-cols-2 min-[828px]:grid-cols-3 ">
        {foods.map((food) => {
          return <FoodCard key={food.id} food={food} />;
        })}
      </div>
    </div>
  );
}
export default Foods;
