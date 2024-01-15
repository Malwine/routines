import { useLoaderData } from 'react-router-dom';
import Button from '../components/Button';
import data from '../data.json';
import wrapperStyle from "../styles/Wrapper.module.css";

interface Payload {
  data: { routine: {name: string, iterations: string[]} }
}

export async function loader({ params } ) {
  return { routine: data.routines.find(routine => routine.name === params.routine) };
}

const Routine = () => {
  const data = useLoaderData() as Payload;

  return (
    <div>
      <h1>{ data.routine.name }</h1>
      <div className={wrapperStyle.button}>
        <Button onClick={()=> {}}>Start</Button>
      </div>
      <div className={wrapperStyle.button}>
        <Button onClick={()=> {}}>End</Button>
      </div>

      <h3>Past iterations:</h3>

      {data.routine.iterations && data.routine.iterations.map( (iteration, index) => {
        return (<div key={index}>{ Date(iteration.date).toLocaleString()}</div>)
      })}
    </div>
  );
};

export default Routine;
