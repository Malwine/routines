import { useState } from "react";
import "./App.css";
import Routines from "./components/Routines";
import Start from "./components/Start";
import ViewState, {ChangeViewState} from "./ViewState";
import data from './data.json';
import Routine from "./components/Routine";

function App() {
  const [currentView, setCurrentView] = useState(ViewState.Home);
  const [routineName, setRoutineName] = useState("");

  const handleOnClick = (newView: ChangeViewState) => {
    console.log('Handled ', newView.name)
    setCurrentView(newView.to);
    if(newView.name){setRoutineName(newView.name)};
  };

  return (
    <>
      {currentView === ViewState.Home ? <Start onStartClick={handleOnClick} /> : null}
      {currentView === ViewState.Routines ? <Routines routines={data.routines} onShowRoutineClick={handleOnClick} onBackClick={handleOnClick} /> : null}
      {currentView === ViewState.Routine ? <Routine name={routineName} /> : null}
    </>
  );
}

export default App;
