import FoodDetails from "@/components/modules/foodmenu/FoodDetails";
import { useRouter } from "next/router";
function Food({ food }) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <div className="w-full h-[100vh] absolute grid place-items-center top-0 left-0 opacity-5 bg-slate-600 -z-50">
        <p>...loading</p>
      </div>
    );
  }
  return (
    <>
      <h1 className=" ml-4 border-b-4 border-b-[#53C60B] text-[1.5rem] font-bold my-16 w-fit">
        Details
      </h1>
      <div>
        <FoodDetails food={food} />
      </div>
    </>
  );
}

export default Food;

export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();
  const foods = data.slice(1, 10);
  const paths = foods.map((food) => {
    return { params: { menuID: food.id.toString() } };
  });
  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`${process.env.BASE_URL}/data/${params.menuID}`);
  try {
    const food = await res.json();
    if (!food.id) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        food,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
