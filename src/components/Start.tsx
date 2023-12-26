import Button from "./Button";
interface StartProps {
  onButtonClick: () => void;
  onStartClick: () => void;
}

const Start = (onButtonClick: StartProps) => {
  const handleStartClick = () => {
    console.log("Click event reached Start");
  };

  return (
    <div>
      <h1>Routines</h1>
      <p>
        Embracing routines empowers you to craft a path towards success,
        enabling consistent progress, building discipline, and unlocking your
        fullest potential every single day.
      </p>
      <Button onButtonClick={onButtonClick} onStartClick={handleStartClick}>
        Let's go!
      </Button>
    </div>
  );
};

export default Start;
