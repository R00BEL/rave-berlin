"use client";

import { memo } from "react";

import Button from "@/components/commonComponents/button/Button";
import useClickPaymentButton from "@/hooks/useClickPaymentButton";

const SmallBuyButton = memo(() => {
  const { handleClickOnPaymentButton, isSubmit } = useClickPaymentButton();
  return (
    <div className="flex justify-end pr-3 pt-3.5 pb-7">
      <Button
        label={"BUY TICKET"}
        onClick={handleClickOnPaymentButton}
        isLoading={isSubmit}
      />
    </div>
  );
});

export default SmallBuyButton;
