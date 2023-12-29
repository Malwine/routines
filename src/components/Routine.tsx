import Button from './Button';

interface RoutineProps {
  name: string;
}

const Routine = (props: RoutineProps) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <Button onClick={()=> {}}>Start</Button>
      <Button onClick={()=> {}}>End</Button>
    </div>
  );
};

export default Routine;
