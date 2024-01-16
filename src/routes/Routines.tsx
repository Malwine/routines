import { Link, useLoaderData } from "react-router-dom";
import styles from "../styles/Button.module.css";
import wrapperStyle from "../styles/Wrapper.module.css";
import data from "../data.json";
import AddNew from "../components/AddNew";

export async function loader() {
  return { routines: data.routines};
}

const Routines = () => {
  const { routines } = useLoaderData() as { routines: { name: string }[] };

  return (
    <div>
      <h1>Routines</h1>
        {routines.map((routine, index) => {
          return <div className={wrapperStyle.button}>
                  <Link key={index} className={styles.primary} to={`/routines/${routine.name}`}>{routine.name}</Link>
                </div>
        })}
      {/* <Link key="back" className={styles.primary} to={`/`}>Back</Link> */}
      <AddNew route="/routines/new">Add routine</AddNew>
    </div>
  );
};

export default Routines;
