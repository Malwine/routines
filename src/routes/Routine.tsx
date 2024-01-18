import { useLoaderData } from 'react-router-dom';
import type { Params } from "react-router-dom";
import Button from '../components/Button';
import jsonData from '../data.json';
import { formatDate } from '../lib/dateConversion';

interface Iteration {
  start: string;
  running?: boolean;
  end?: string;
};

interface RoutineData {
  name: string;
  iterations?: Iteration[];
};

export async function loader({ params }: {params: Params}) {
  return jsonData.routines.find(routine => routine.name === params.routine);
};

const Routine = () => {
  const routine = useLoaderData() as RoutineData;
  

  const handleOnStart = (routine: RoutineData) => {
    if(routine.iterations) {
      let runningRoutine = routine.iterations.find(iteration => iteration.running) || false;
  
      if (!runningRoutine) {
        let currentDate = new Date();
        let newRoutine = {"start": currentDate.toISOString(), "running": true};
        routine.iterations.push(newRoutine)

      }
      console.log("start clicked", routine.iterations)
    } 
  };
  
  const handleOnEnd = (routine: RoutineData) => {
    if(routine.iterations) {
      let runningRoutine = routine.iterations.find(iteration => iteration.running) || false;
  
      if (runningRoutine) {
        runningRoutine.running = false;
        let currentDate = new Date();
        runningRoutine.end = currentDate.toISOString();
      }
      console.log("end clicked", routine.iterations)
    }
  };

  return (
    <div>
      <h1>{ routine.name }</h1>
        <Button onClick={() => handleOnStart(routine)}>Start</Button>
        <Button onClick={() => handleOnEnd(routine)}>End</Button>

      <h3>Past iterations:</h3>

      {routine.iterations && routine.iterations.map( (iteration, index) => {
        return (<div key={index}>{ formatDate(iteration.start) }</div>)
      })}
    </div>
  );
};

export default Routine;
