import { useRouter } from "next/router";
import FoodCard from "@/components/modules/foodmenu/FoodCard";

function Categories({ foods, queries, updateQueries }) {
  const router = useRouter();

  function handleChange(e) {
    updateQueries({ ...queries, [e.target.name]: e.target.value });
  }
  function setQuery() {
    router.push({ pathname: "/categories", query: { ...queries } });
  }
  return (
    <>
      <h1 className="ml-4 border-b-4 border-b-[#53C60B] text-[1.5rem] font-bold my-16 w-fit">
        Categories
      </h1>
      <div className="flex gap-4 px-4 max-[385px]:flex-col">
        <select
          defaultValue={queries.difficulty}
          onChange={handleChange}
          name="difficulty"
          className=" max-[385px]:w-full p-2 shadow-lg rounded w-[140px] shadow-green-200"
        >
          <option value="">Difficulty</option>
          <option value={"easy"}>easy</option>
          <option value={"medium"}>medium</option>
          <option value={"hard"}>hard</option>
        </select>
        <select
          defaultValue={queries.time}
          onChange={handleChange}
          name="time"
          className=" max-[385px]:w-full p-2 shadow-lg rounded w-[140px] shadow-green-200"
        >
          <option value="">Cooking Time</option>
          <option value={"morethan30"}>More Than 30</option>
          <option value={"lessthan30"}>Less Than 30</option>
        </select>
        <button
          onClick={setQuery}
          className=" max-[385px]:w-full bg-[#53C60B] p-2 w-[80px] rounded text-white shadow-lg shadow-green-200"
        >
          Search
        </button>
      </div>
      <div
        className={`grid min-h-[100vh] p-12 grid-cols-1 px-4 gap-8 min-[540px]:grid-cols-2 min-[828px]:grid-cols-3 ${
          foods.length ? "" : "grid place-items-center"
        } `}
      >
        {!foods.length && <img src={"./images/search.png"} />}
        {foods.map((food) => {
          return <FoodCard key={food.id} food={food} />;
        })}
      </div>
    </>
  );
}

export default Categories;
