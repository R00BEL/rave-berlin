import { memo } from "react";
import styles from './style.module.css'

interface Props {
  label: string;
}

const Button = memo(({ label }: Props) => {
  return <button className={styles.button}>{label}</button>;
});

export default Button;
