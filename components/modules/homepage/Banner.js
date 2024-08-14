import  Link  from "next/link";

function Banner() {
  return (
    <div className="flex py-12 max-[630px]:flex-col max-[630px]:gap-10 px-4">
      <div className="flex-1 flex flex-col gap-4 justify-center">
        <h1 className="border-b-4 border-b-[#53C60B] text-[1.5rem] font-bold mb-2 w-fit">
          BotoFood
        </h1>
        <h2 className="font-[600]">Food Delivey and Takeout!</h2>
        <p className="text-gray-500 text-[18px] text-justify">
          BotoFood is an online food ordering and delivery platform launched by
          Uber in 2014. Meals are delivered by couriers using cars, scooters,
          bikes, or on foot.
        </p>
        <Link className="bg-[#53C60B] w-fit text-white font-[600] px-6 py-3 rounded-md" href='/menu'>See All</Link>
      </div>
      <div className="flex-1">
        <img className="w-[450px] max-[630px]:mx-auto " src="./images/banner.png"/>
      </div>
    </div>
  );
}

export default Banner;
