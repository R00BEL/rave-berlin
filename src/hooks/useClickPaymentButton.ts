import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { increaseNumberOfInterestedUsers } from "../serverActions/increaseNumberOfInterestedUsers";
import { LocalStorageKey } from "../constans/localStorageKey";
import { Routes } from "../constans/routes";

const useClickPaymentButton = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const router = useRouter();

  const handleClickOnPaymentButton = useCallback(async () => {
    setIsSubmit(true);
    const isAttemptedPayment = localStorage.getItem(
      LocalStorageKey.IS_ATTEMPTED_PAYMENT,
    );

    if (isAttemptedPayment === "true") {
      router.push(Routes.NO_TICKETS);
      return;
    }

    localStorage.setItem(LocalStorageKey.IS_ATTEMPTED_PAYMENT, "true");
    await increaseNumberOfInterestedUsers();
    router.push(Routes.NO_TICKETS);
  }, []);

  return { handleClickOnPaymentButton, isSubmit };
};

export default useClickPaymentButton;
