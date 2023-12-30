import Button from './Button';

interface Props {
  name: string;
}

const Routine = (props: Props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <Button onClick={()=> {}}>Start</Button>
      <Button onClick={()=> {}}>End</Button>
    </div>
  );
};

export default Routine;
