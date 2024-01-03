import { Link, useLoaderData } from "react-router-dom";
import Button from "../components/Button";
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
          return <Link key={index} to={`/routines/${routine}`}>{routine}</Link>;
        })}
      <Link key={"back"} to={`/`}>Back</Link>
    </div>
  );
};

export default Routines;
