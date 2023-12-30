import Button from "./Button";
import ViewState, { ChangeViewState } from '../ViewState';

interface Props {
  onMotivationalClick: (newState: ChangeViewState) => void;
}

const Motivational = (props: Props) => {

  const clickHandler = () => {
    props.onMotivationalClick({to: ViewState.Routines});
  };

  return (
    <div>
      <h1>Routines</h1>
      <p>
        Embracing routines empowers you to craft a path towards success,
        enabling consistent progress, building discipline, and unlocking your
        fullest potential every single day.
      </p>
      <Button onClick={clickHandler}>
        Let's go!
      </Button>
    </div>
  );
};

export default Motivational;
