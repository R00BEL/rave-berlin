"use client";

import { memo } from "react";

import Button from "@/components/commonComponents/Button";
import useClickPaymentButton from "@/hooks/useClickPaymentButton";

const SmallBuyButton = memo(() => {
  const { handleClickOnPaymentButton, isSubmit } = useClickPaymentButton();
  return (
    <Button
      label={"BUY TICKET"}
      onClick={handleClickOnPaymentButton}
      isLoading={isSubmit}
    />
  );
});

SmallBuyButton.displayName = "SmallBuyButton";

export default SmallBuyButton;
