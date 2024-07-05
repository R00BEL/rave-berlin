import { memo } from "react";
import styles from "./style.module.css";

interface Props {
  label: string;
  isLoading?: boolean;
  onClick?: () => void;
}

const Button = memo(({ label, onClick, isLoading }: Props) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={isLoading}>
      {isLoading ? "Loading..." : label}
    </button>
  );
});

export default Button;
