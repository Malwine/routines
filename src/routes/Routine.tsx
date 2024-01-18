import { useState } from 'react';
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
  const [iterations, setIterations] = useState<Iteration[]>(routine.iterations || []);

  const handleOnStart = () => {
    let runningRoutine = iterations.find(iteration => iteration.running) || false;

    if (!runningRoutine) {
      let currentDate = new Date();
      let newRoutine = {"start": currentDate.toISOString(), "running": true};
      setIterations([...iterations, newRoutine]);
    }
  };
  
  const handleOnEnd = () => {
    let runningRoutine = iterations.find(iteration => iteration.running) || false;

    if (runningRoutine) {
      runningRoutine.running = false;
      let currentDate = new Date();
      runningRoutine.end = currentDate.toISOString();
      setIterations([...iterations]);
    }
  };

  const isRunning = () => {
    if (iterations.find(iteration => iteration.running)) {
      return (
        <div>🔄 iteration in progress</div>
      );
    }
  }

  return (
    <div>
      <h1>{ routine.name }</h1>
        <Button onClick={handleOnStart}>Start</Button>
        <Button onClick={handleOnEnd}>End</Button>

      <h3>Past iterations:</h3>
  

      {iterations && iterations.filter(iteration => iteration.end).map( (iteration, index) => {
        return (<div key={index}>{ formatDate(iteration.start) }</div>)
      })}
      {iterations && isRunning()}
    </div>
  );
};

export default Routine;
