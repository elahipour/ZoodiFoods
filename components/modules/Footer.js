import Link from "next/link";

function Footer() {
  return (
    <div className="bg-[#53C60B] p-4 mt-16 flex justify-center items-center">
      <Link href={"https://zoodifoods.vercel.app"}>ZoodiFoods </Link>
      <span className="text-white">&nbsp;| Allright Reserved ©</span>
    </div>
  );
}

export default Footer;
