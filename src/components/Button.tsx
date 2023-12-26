import styles from "../styles/Button.module.css";

interface ButtonProps {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className={styles.primary} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;