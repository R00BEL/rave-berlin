import { memo } from "react";

interface Props {
  label: string;
  isLoading?: boolean;
  onClick?: () => void;
}

const Button = memo(({ label, onClick, isLoading }: Props) => {
  return (
    <button
      className={
        "rounded-[2.5rem] bg-[#FFD900] flex h-7 px-2.5 sm:px-3.5 py-1 sm:py-2 justify-center items-center text-[0.75rem] sm:text-base not-italic font-black leading-[normal]"
      }
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : label}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
