import ViewState, { ChangeViewState } from "../ViewState";
import Button from "./Button";


interface RoutinesProps {
  routines: string[];
  onBackClick: (newState: ChangeViewState) => void;
  onShowRoutineClick: (newState: ChangeViewState) => void;
}

const Routines = (routinesProps: RoutinesProps) => {
  const handleOnClick = (name: string) => {
    console.log("Handled: " + name)
    routinesProps.onShowRoutineClick({ to: ViewState.Routine, name: name });
  };

  const handleBackClick = () => {
    routinesProps.onBackClick({ to: ViewState.Home });
  };

  return (
    <div>
      <h1>Routines</h1>
        {routinesProps.routines.map((routine, index) => {
          return <Button key={index} onClick={() => {handleOnClick(routine)}}>{routine}</Button>;
        })}
      <Button onClick={handleBackClick}>Back</Button>
    </div>
  );
};

export default Routines;
