import { useState } from "react";
import "./App.css";
import Routines from "./components/Routines";
import Start from "./components/Start";
import ViewState, {ChangeViewState} from "./ViewState";
import data from './data.json';

function App() {
  const [currentView, setCurrentView] = useState(ViewState.Home);

  const handleOnClick = (newView: ChangeViewState) => {
    console.log('Handled')
    setCurrentView(newView.to);
  };

  return (
    <>
      {currentView === ViewState.Home ? <Start onStartClick={handleOnClick} /> : null}
      {currentView === ViewState.Routines ? <Routines routines={data.routines} onBackClick={handleOnClick} /> : null}
    </>
  );
}

export default App;
