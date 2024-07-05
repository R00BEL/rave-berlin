"use client";

import { memo } from "react";
import Image from "next/image";

import useClickPaymentButton from "@/hooks/useClickPaymentButton";

const LargeBuyButton = memo(() => {
  const { handleClickOnPaymentButton, isSubmit } = useClickPaymentButton();
  return (
    <button
      className="flex flex-col bg-white mx-2.5 w-[22.625rem] h-[9rem] rounded-3xl px-5 py-6 justify-between cursor-pointer"
      onClick={handleClickOnPaymentButton}
    >
      {isSubmit ? (
        <div
          className={
            "flex text-[40px] font-black justify-center items-center w-full h-full"
          }
        >
          Loading...
        </div>
      ) : (
        <>
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
        </>
      )}
    </button>
  );
});

export default LargeBuyButton;
