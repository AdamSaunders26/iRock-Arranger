import Drum from "./Drum";

export default function DrumPad({
  currentNum,
  reset,
  quaver,
  and,
}: {
  currentNum: number;
  reset: boolean;
  quaver: boolean;
  and: boolean;
}) {
  return (
    <div className="border-2 border-orange-500 flex">
      <div className=" flex flex-col">
        <Drum
          kind={"cymbal1"}
          currentNum={currentNum}
          reset={reset}
          quaver={quaver}
          and={and}
        />
        <Drum
          kind={"cymbal"}
          currentNum={currentNum}
          reset={reset}
          quaver={quaver}
          and={and}
        />
        <Drum
          kind={"pedal"}
          currentNum={currentNum}
          reset={reset}
          quaver={quaver}
          and={and}
        />
      </div>
      <div className=" flex flex-col justify-evenly">
        <Drum
          kind={"drum1"}
          currentNum={currentNum}
          reset={reset}
          quaver={quaver}
          and={and}
        />
        <Drum
          kind={"drum"}
          currentNum={currentNum}
          reset={reset}
          quaver={quaver}
          and={and}
        />
      </div>
      <div className=" flex flex-col justify-evenly">
        <Drum
          kind={"drum"}
          currentNum={currentNum}
          reset={reset}
          quaver={quaver}
          and={and}
        />
        <Drum
          kind={"pedal"}
          currentNum={currentNum}
          reset={reset}
          quaver={quaver}
          and={and}
        />
      </div>
      <div className=" flex flex-col justify-evenly">
        <Drum
          kind={"cymbal2"}
          currentNum={currentNum}
          reset={reset}
          quaver={quaver}
          and={and}
        />
        <Drum
          kind={"drum"}
          currentNum={currentNum}
          reset={reset}
          quaver={quaver}
          and={and}
        />
      </div>
    </div>
  );
}
