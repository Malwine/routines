import ViewState, { ChangeViewState } from "../ViewState";
import Button from "./Button";

interface RoutinesProps {
  onBackClick: (newState: ChangeViewState) => void;
}

const Routines = (routinesProps: RoutinesProps) => {
  const handleOnClick = () => {
    console.log("Clicked!");
  };

  const handleBackClick = () => {
    routinesProps.onBackClick({ to: ViewState.Home });
  };

  return (
    <div>
      <h1>Routines</h1>
      <Button onClick={handleOnClick}>Fitness</Button>
      <Button onClick={handleOnClick}>Eisbaden</Button>
      <Button onClick={handleOnClick}>Yoga</Button>
      <Button onClick={handleBackClick}>Back</Button>
    </div>
  );
};

export default Routines;
