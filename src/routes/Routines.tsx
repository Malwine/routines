import { Link, useLoaderData } from "react-router-dom";
import styles from "../styles/Button.module.css";
import data from "../data.json";

export async function loader() {
  return { routines: data.routines};
}

const Routines = () => {
  const { routines } = useLoaderData() as { routines: string[] };

  return (
    <div>
      <h1>Routines</h1>
        {routines.map((routine, index) => {
          return <div className={styles.buttonWrapper}>
                  <Link key={index} className={styles.primary} to={`/routines/${routine}`}>{routine}</Link>
                </div>
        })}
      <Link key={"back"} className={styles.primary} to={`/`}>Back</Link>
    </div>
  );
};

export default Routines;
