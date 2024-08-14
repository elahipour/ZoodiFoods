import Banner from "../modules/homepage/Banner";
import HowToOrder from "../modules/homepage/HowToOrder";
import Restriction from "../modules/homepage/Restriction";
import WhoWeAre from "../modules/homepage/WhoWeAre";
import WhyUs from "../modules/homepage/WhyUs";
function Homepage() {
  return (
    <main className="min-h-[100vh] container mx-auto">
      <Banner />
      <WhyUs />
      <WhoWeAre />
      <HowToOrder />
      <Restriction />
    </main>
  );
}

export default Homepage;
