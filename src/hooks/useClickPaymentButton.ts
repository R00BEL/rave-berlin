import { useCallback } from "react";
import { increaseNumberOfInterestedUsers } from "../serverActions/increaseNumberOfInterestedUsers";
import { LocalStorageKey } from "../constans/localStorageKey";

const useClickPaymentButton = () => {
  const handleClickOnPaymentButton = useCallback(async () => {
    const isAttemptedPayment = localStorage.getItem(
      LocalStorageKey.IS_ATTEMPTED_PAYMENT,
    );

    if (isAttemptedPayment === "true") {
      return;
    }

    localStorage.setItem(LocalStorageKey.IS_ATTEMPTED_PAYMENT, "true");
    await increaseNumberOfInterestedUsers();
  }, []);

  return { handleClickOnPaymentButton };
};

export default useClickPaymentButton;
