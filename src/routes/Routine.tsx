import { useLoaderData } from 'react-router-dom';
import Button from '../components/Button';
import data from '../data.json';
import wrapperStyle from "../styles/Wrapper.module.css";

interface Payload {
  data: { routine: string}
}

export async function loader({ params } ) {
  return { routine: data.routines.find(routine => routine === params.routine) };
}

const Routine = () => {
  const data = useLoaderData() as Payload;
  console.log(data);
  return (
    <div>
      <h1>{data.routine }</h1>
      <div className={wrapperStyle.button}>
        <Button onClick={()=> {}}>Start</Button>
      </div>
      <div className={wrapperStyle.button}>
        <Button onClick={()=> {}}>End</Button>
      </div>
    </div>
  );
};

export default Routine;
