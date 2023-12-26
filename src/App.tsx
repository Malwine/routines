import "./App.css";
import Button from "./components/Button";

function App() {
  const handleOnClick = () => {
    console.log("Clicked!");
  };

  return (
    <>
      <h1>Routines</h1>
      <p>
        Embracing routines empowers you to craft a path towards success,
        enabling consistent progress, building discipline, and unlocking your
        fullest potential every single day.
      </p>
      <Button onClick={handleOnClick}>Let's go!</Button>
    </>
  );
}

export default App;
