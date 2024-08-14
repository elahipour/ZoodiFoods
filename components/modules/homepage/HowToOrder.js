import React from "react";
import Link  from "next/link";

function HowToOrder() {
  return (
    <div className="flex flex-col gap-4  px-4">
      <h1 className="text-[1.5rem] font-bold text-[#53C60B]">How To Order?</h1>
      <ul className="ml-5 font-[500] flex flex-col gap-2">
        <li className="list-disc marker:text-[#53C60B]">
          <p className="text-[18px]">Sign in (or create an account) and set your delivery address.</p>
        </li>
        <li className="list-disc marker:text-[#53C60B]">
          <p className="text-[18px]">Choose the restaurant you want to order from.</p>
        </li>
        <li className="list-disc marker:text-[#53C60B]">
          <p className="text-[18px]">Select your items and tap “Add to Cart”.</p>
        </li>
        <li className="list-disc marker:text-[#53C60B]">
          <p className="text-[18px]">To place your order, select “View cart” or “Checkout”.</p>
        </li>
        <li className="list-disc marker:text-[#53C60B]">
          <p className="text-[18px]">Review your order and tap “Place Order”...</p>
        </li>
        <li className="list-disc marker:text-[#53C60B]">
          <p className="text-[18px]">Track your order progress.</p>
        </li>
      </ul>
      <div className="flex justify-between w-[80%] my-12 mx-auto">
        <Link href='/menu'>Menu</Link>
        <Link href='/categories'>Categories</Link>
        <Link href='/'>Discount</Link>
      </div>
    </div>
  );
}

export default HowToOrder;
