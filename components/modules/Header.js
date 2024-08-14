import Link from "next/link";

function Header() {
  return (
    <div className="flex justify-between p-4">
      <div>
        <Link href={"/"} className="text-[1rem] text-[#53C60B] font-[600]">
          ZoodiFoods
        </Link>
      </div>
      <div className="flex gap-4">
        <Link href={"/menu"} className="text-[1rem] text-[#696969] font-[600]">
          Menu
        </Link>
        <Link
          href={"/categories"}
          className="text-[1rem] text-[#696969] font-[600]"
        >
          Categories
        </Link>
      </div>
    </div>
  );
}

export default Header;
