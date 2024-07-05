"use client";

import { memo } from "react";

import Button from "@/components/commonComponents/button/Button";
import useClickPaymentButton from "@/hooks/useClickPaymentButton";

const SmallBuyButton = memo(() => {
  const { handleClickOnPaymentButton } = useClickPaymentButton();
  return (
    <div className="flex justify-end pr-3 pt-3.5 pb-7">
      <Button label={"BUY TICKET"} onClick={handleClickOnPaymentButton} />
    </div>
  );
});

export default SmallBuyButton;
