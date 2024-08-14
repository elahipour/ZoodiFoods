import Apple from "@/components/icons/Apple";
import Binance from "@/components/icons/Binance";
import SpaceX from "@/components/icons/SpaceX";
import Tesla from "@/components/icons/Tesla";

function WhoWeAre() {
  return (
    <div className="flex flex-col gap-4 text-justify  px-4">
      <h1 className="text-[1.5rem] font-bold text-[#53C60B]">Who We Are</h1>
      <p className="text-[18px]">
        BotoFood company was founded in 2009 by Garrett Camp and Travis
        Kalanick.The company began food delivery in August 2014 with the launch
        of the UberFRESH service in Santa Monica, California. In 2015, the
        platform was renamed to UberEATS and the ordering software was released
        as its own application, separate from the app for Uber rides.In 2016, it
        commenced operations in both London and Paris.
      </p>
      <div className="flex justify-between items-center max-sm:grid max-sm:grid-cols-2 max-[500px]:mx-auto max-[500px]:grid-cols-1">
        <Apple/>
        <SpaceX/>
        <Binance/>
        <Tesla/>
      </div>
    </div>
  );
}

export default WhoWeAre;
