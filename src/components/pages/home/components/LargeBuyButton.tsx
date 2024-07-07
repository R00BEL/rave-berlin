import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Routes } from "@/constans/routes";

const LargeBuyButton = memo(() => {
  return (
    <Link href={Routes.NO_TICKETS}>
      <button className="flex flex-col bg-white mx-2.5 w-[22.625rem] sm:w-96 h-36 sm:h-40 rounded-3xl px-5 py-6 justify-between cursor-pointer">
        <div className="flex text-[40px] font-black justify-between w-full">
          <div>TICKET:</div>
          <div>20 €</div>
        </div>

        <div className="flex text-xl font-black justify-between w-full">
          <div className="flex items-center">PROCEED TO CHECKOUT</div>
          <div className="flex items-center">
            <Image
              src={"/icons/rightArrow.svg"}
              alt="rightArrow"
              width={37.5}
              height={19.5}
              priority
            />
          </div>
        </div>
      </button>
    </Link>
  );
});

LargeBuyButton.displayName = "LargeBuyButton";

export default LargeBuyButton;
