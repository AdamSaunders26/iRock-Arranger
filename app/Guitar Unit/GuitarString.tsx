import { GuitarFretboard } from "../Context";
import Fret from "./Fret";

export default function GuitarString({
  currentNum,
  stringStates,
}: {
  currentNum: number;
  stringStates: GuitarFretboard;
}) {
  console.log(stringStates);
  return (
    <div className="flex">
      <Fret currentNum={currentNum} />
      <Fret currentNum={currentNum} />
      <Fret marker={0} currentNum={currentNum} />
      <Fret currentNum={currentNum} />
      <Fret marker={0} currentNum={currentNum} />
      <Fret currentNum={currentNum} />
      <Fret marker={0} currentNum={currentNum} />
      <Fret currentNum={currentNum} />
      <Fret marker={0} currentNum={currentNum} />
      <Fret currentNum={currentNum} />
      <Fret currentNum={currentNum} />
      <Fret marker={1} currentNum={currentNum} />
      <Fret currentNum={currentNum} />
      <Fret currentNum={currentNum} />
      <Fret marker={0} currentNum={currentNum} />
      <Fret currentNum={currentNum} />
      <Fret marker={0} currentNum={currentNum} />
      <Fret currentNum={currentNum} />
      <Fret marker={0} currentNum={currentNum} />
      <Fret currentNum={currentNum} />
    </div>
  );
}
