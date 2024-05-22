import Drum from "./Drum";

export default function DrumPad({
  currentNum,
  reset,
}: {
  currentNum: number;
  reset: boolean;
}) {
  return (
    <div className="border-2 border-orange-500 flex">
      <div className=" flex flex-col">
        <Drum kind={"cymbal1"} currentNum={currentNum} reset={reset} />
        <Drum kind={"cymbal"} currentNum={currentNum} reset={reset} />
        <Drum kind={"pedal"} currentNum={currentNum} reset={reset} />
      </div>
      <div className=" flex flex-col justify-evenly">
        <Drum kind={"drum1"} currentNum={currentNum} reset={reset} />
        <Drum kind={"drum"} currentNum={currentNum} reset={reset} />
      </div>
      <div className=" flex flex-col justify-evenly">
        <Drum kind={"drum"} currentNum={currentNum} reset={reset} />
        <Drum kind={"pedal"} currentNum={currentNum} reset={reset} />
      </div>
      <div className=" flex flex-col justify-evenly">
        <Drum kind={"cymbal2"} currentNum={currentNum} reset={reset} />
        <Drum kind={"drum"} currentNum={currentNum} reset={reset} />
      </div>
    </div>
  );
}
