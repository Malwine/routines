import Button from "./Button";

const Routines = () => {
  const handleOnClick = () => {
    console.log("Clicked!");
  };

  return (
    <div>
      <h1>Routines</h1>
      <Button onClick={handleOnClick}>Fitness</Button>
      <Button onClick={handleOnClick}>Eisbaden</Button>
      <Button onClick={handleOnClick}>Yoga</Button>
    </div>
  );
};

export default Routines;
