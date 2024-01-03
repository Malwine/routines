import { Link } from "react-router-dom";
import styles from "../styles/Button.module.css";

const Motivational = () => {

  return (
    <div>
      <h1>Routines</h1>
      <p>
        Embracing routines empowers you to craft a path towards success,
        enabling consistent progress, building discipline, and unlocking your
        fullest potential every single day.
      </p>
      <Link className={styles.primary} to={`routines`}>Let's go</Link>
    </div>
  );
};

export default Motivational;
