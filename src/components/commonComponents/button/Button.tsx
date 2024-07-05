import { memo } from "react";
import styles from "./style.module.css";

interface Props {
  label: string;
  onClick: () => void;
}

const Button = memo(({ label, onClick }: Props) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
});

export default Button;
