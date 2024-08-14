import { useEffect, useState } from "react";
import filterByCookingTime from "@/utils/filterByCookingTime";
import filterByDifficultyLevel from "@/utils/filterByDifficultyLevel";
import Categories from "@/components/templates/Categories";
function Index({ foods, difficulty, time }) {
  const [queries, updateQueries] = useState({
    time: time,
    difficulty: difficulty,
  });
  useEffect(() => {
    const copyQueries = { ...queries };
    if (!time.length) {
      delete copyQueries.time;
      updateQueries({ ...copyQueries });
    }
    if (!difficulty.length) {
      delete copyQueries.difficulty;
      updateQueries({ ...copyQueries });
    }
  }, [time,difficulty]);
  return (
    <div>
      <Categories foods={foods} queries={queries} updateQueries={updateQueries}/>
    </div>
  );
}

export default Index;

export async function getServerSideProps(context) {
  const { query } = context;
  const { difficulty, time } = query;
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const foods = await res.json();
  const filterLevel1 = filterByCookingTime(foods, time);
  const lastFilter = filterByDifficultyLevel(filterLevel1, difficulty);

  return {
    props: {
      foods: lastFilter,
      difficulty: difficulty || "",
      time: time || "",
    },
  };
}
