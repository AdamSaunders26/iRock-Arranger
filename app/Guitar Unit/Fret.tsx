import { SetStateAction } from "react";
import FretNumbers from "./FretNumbers";

export default function Fret({
  marker,
  currentNum,
  fretState,
  setFretState,
}: {
  marker?: number;
  currentNum: number;
  fretState: string[];
  setFretState: React.Dispatch<SetStateAction<string[]>>;
}) {
  let fretClass = "border-r-2 border-slate-600 w-full flex flex-col ";
  if (marker == 0) {
    fretClass += " bg-yellow-200";
  } else if (marker == 1) {
    fretClass += " bg-neutral-200";
  }

  return (
    <div
      className={fretClass}
      onClick={() => {
        currentNum === 5
          ? setFretState([])
          : setFretState((curr) => {
              const copy = [...curr];
              copy.push(`${currentNum}`);
              return copy;
            });
      }}
    >
      {fretState.length ? (
        <div className="flex justify-between ">
          {fretState.map((val, i) => {
            return <FretNumbers key={i} number={val} />;
          })}
        </div>
      ) : (
        <div className="py-2">
          <div className="border-b-2 border-black"></div>
          <div></div>
        </div>
      )}
    </div>
  );
}
