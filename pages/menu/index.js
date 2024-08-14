import Foods from "../../components/templates/Foods";
function FoodMenu({ foods }) {
  return <Foods foods={foods} />;
}

export default FoodMenu;

export async function getStaticProps() {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const foods = await res.json();
  return {
    props: {
      foods,
    },
    revalidate: +process.env.REVALIDATE,
  };
}
