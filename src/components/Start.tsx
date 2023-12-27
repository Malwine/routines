import Button from "./Button";
import ViewState, { ChangeViewState } from '../ViewState';

interface StartProps {
  onStartClick: (newState: ChangeViewState) => void;
}

const Start = (startProps: StartProps) => {

  const clickHandler = () => {
    startProps.onStartClick({to: ViewState.Routines});
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

export default Start;
