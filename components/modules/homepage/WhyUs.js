import Choice from "@/components/icons/Choice";
import Clock from "@/components/icons/Clock";
import Fast from "@/components/icons/Fast";
import Food from "@/components/icons/Food";

function WhyUs() {
  return (
    <div className="px-4">
      <h1 className="text-[1.5rem] font-bold text-[#53C60B]">Why Us?</h1>
      <div className="md:flex md:justify-between w-[90%] m-auto my-12 max-[768px]:grid max-[768px]:grid-cols-2">
        <div className="flex flex-col items-center gap-4">
          <Fast />
          <p className="font-[500] w-[100px] text-center">Fast</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Food />
          <p className="font-[500] w-[100px] text-center">Best Restaurants</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Choice />
          <p className="font-[500] w-[100px] text-center">Your Choice</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Clock />
          <p className="font-[500] w-[100px] text-center">24-7</p>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
