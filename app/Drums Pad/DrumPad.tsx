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
  const drumStructure = [
    ["cymbal1", "cymbal", "pedal1"],
    ["drum1", "drum"],
    ["drum", "pedal"],
    ["cymbal2", "drum"],
  ];

  return (
    <div className="border-2 border-orange-500 p-2 flex">
      <div className=" flex flex-col">
        {drumStructure[0].map((drumType, i) => {
          return (
            <Drum
              key={i}
              kind={drumType}
              currentNum={currentNum}
              reset={reset}
              quaver={quaver}
              and={and}
            />
          );
        })}
      </div>
      <div className=" flex flex-col justify-evenly">
        {drumStructure[1].map((drumType, i) => {
          return (
            <Drum
              key={i}
              kind={drumType}
              currentNum={currentNum}
              reset={reset}
              quaver={quaver}
              and={and}
            />
          );
        })}
      </div>
      <div className=" flex flex-col justify-evenly">
        {drumStructure[2].map((drumType, i) => {
          return (
            <Drum
              key={i}
              kind={drumType}
              currentNum={currentNum}
              reset={reset}
              quaver={quaver}
              and={and}
            />
          );
        })}
      </div>
      <div className=" flex flex-col justify-between py-2">
        {drumStructure[3].map((drumType, i) => {
          return (
            <Drum
              key={i}
              kind={drumType}
              currentNum={currentNum}
              reset={reset}
              quaver={quaver}
              and={and}
            />
          );
        })}
      </div>
    </div>
  );
}
