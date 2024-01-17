import { Link, useLoaderData } from "react-router-dom";
import styles from "../styles/Button.module.css";
import data from "../data.json";
import AddNew from "../components/AddNew";

export async function loader() {
  return { routines: data.routines};
}

const Routines = () => {
  const { routines } = useLoaderData() as { routines: { id: number, name: string }[] };

  return (
    <div>
      <h1>Routines</h1>
        {routines.map((routine) => {
          return <Link key={routine.id} className={styles.primary} to={`/routines/${routine.name}`}>{routine.name}</Link>
        })}
      {/* <Link key="back" className={styles.primary} to={`/`}>Back</Link> */}
      <AddNew route="/routines/new">Add routine</AddNew>
    </div>
  );
};

export default Routines;
