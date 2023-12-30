import styles from "../styles/Button.module.css";

interface Props {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button className={styles.primary} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
