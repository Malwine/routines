import { useLoaderData } from 'react-router-dom';
import Button from '../components/Button';
import data from '../data.json';

export async function loader({ params }: any) {
  return { routine: data.routines.find(routine => routine === params.routine) };
}

const Routine = () => {
  const { data } = useLoaderData() as { data: any };
  return (
    <div>
      <h1>{data.routine}</h1>
      <Button onClick={()=> {}}>Start</Button>
      <Button onClick={()=> {}}>End</Button>
    </div>
  );
};

export default Routine;
