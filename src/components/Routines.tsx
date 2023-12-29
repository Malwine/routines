import ViewState, { ChangeViewState } from "../ViewState";
import Button from "./Button";


interface RoutinesProps {
  routines: string[];
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
        {routinesProps.routines.map((routine, index) => {
          return <Button key={index} onClick={handleOnClick}>{routine}</Button>;
        })}
      <Button onClick={handleBackClick}>Back</Button>
    </div>
  );
};

export default Routines;
