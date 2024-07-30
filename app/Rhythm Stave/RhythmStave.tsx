import { useContext, useState } from "react";
import RhythmBar from "./RhythmBar";
import RhythmTools from "./RhythmTools";
import { SymbolKey } from "./BarSymbol";
import { iRockContext, iRockContextType } from "../Context";

export default function RhythmStave() {
  const [currentNote, setCurrentNote] = useState<SymbolKey | "blank">(
    "crotchet"
  );
  const { section } = useContext<iRockContextType>(iRockContext);
  const {
    keySymbol1,
    keySymbol2,
    keySymbol3,
    keySymbol4,
    keySymbol5,
    keySymbol6,
    keySymbol7,
    keySymbol8,
    keySymbol9,
    keySymbol10,
    keySymbol11,
    keySymbol12,
    keySymbol13,
    keySymbol14,
    keySymbol15,
    keySymbol16,
  } = section.rhythm.keys;

  const {
    guitarSymbol1,
    guitarSymbol2,
    guitarSymbol3,
    guitarSymbol4,
    guitarSymbol5,
    guitarSymbol6,
    guitarSymbol7,
    guitarSymbol8,
    guitarSymbol9,
    guitarSymbol10,
    guitarSymbol11,
    guitarSymbol12,
    guitarSymbol13,
    guitarSymbol14,
    guitarSymbol15,
    guitarSymbol16,
  } = section.rhythm.guitar;
  const bar1 = {
    keys: [keySymbol1, keySymbol2, keySymbol3, keySymbol4],
    guitar: [guitarSymbol1, guitarSymbol2, guitarSymbol3, guitarSymbol4],
  };
  const bar2 = {
    keys: [keySymbol5, keySymbol6, keySymbol7, keySymbol8],
    guitar: [guitarSymbol5, guitarSymbol6, guitarSymbol7, guitarSymbol8],
  };
  const bar3 = {
    keys: [keySymbol9, keySymbol10, keySymbol11, keySymbol12],
    guitar: [guitarSymbol9, guitarSymbol10, guitarSymbol11, guitarSymbol12],
  };
  const bar4 = {
    keys: [keySymbol13, keySymbol14, keySymbol15, keySymbol16],
    guitar: [guitarSymbol13, guitarSymbol14, guitarSymbol15, guitarSymbol16],
  };

  return (
    <div className="flex">
      <div className="border-2 border-orange-500 flex flex-col justify-evenly pt-4 px-2">
        <div>Keys</div>
        <div>Guitar</div>
      </div>
      <div className="border-2 border-blue-500 flex-1 flex justify-evenly">
        <RhythmBar currentNote={currentNote} barState={bar1} />
        <RhythmBar currentNote={currentNote} barState={bar2} />
        <RhythmBar currentNote={currentNote} barState={bar3} />
        <RhythmBar currentNote={currentNote} barState={bar4} />
      </div>
      <RhythmTools currentNote={currentNote} setCurrentNote={setCurrentNote} />
    </div>
  );
}
