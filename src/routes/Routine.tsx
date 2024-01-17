import { useLoaderData } from 'react-router-dom';
import type { Params } from "react-router-dom";
import Button from '../components/Button';
import jsonData from '../data.json';
import wrapperStyle from "../styles/Wrapper.module.css";
import { formatDate } from '../lib/dateConversion';

interface Iteration {
  start: string;
}

interface RoutineData {
  name: string;
  iterations?: Iteration[];
}

export async function loader({ params }: {params: Params}) {
  return jsonData.routines.find(routine => routine.name === params.routine);
}

const Routine = () => {
  const routine = useLoaderData() as RoutineData;

  return (
    <div>
      <h1>{ routine.name }</h1>
      <div className={wrapperStyle.button}>
        <Button onClick={()=> {}}>Start</Button>
      </div>
      <div className={wrapperStyle.button}>
        <Button onClick={()=> {}}>End</Button>
      </div>

      <h3>Past iterations:</h3>

      {routine.iterations && routine.iterations.map( (iteration, index) => {
        return (<div key={index}>{ formatDate(iteration.start) }</div>)
      })}
    </div>
  );
};

export default Routine;
