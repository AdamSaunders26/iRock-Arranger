"use client";
import { useState } from "react";
import DrumPad from "./Drums Pad/DrumPad";
import KeysPad from "./KeysPad";
import NumberSelector from "./NumberSelector";
import RhythmStave from "./RhythmStave";
import ToolSelector from "./ToolSelector";
import KeysNumberSelector from "./KeysNumberSelector";
import ChordInput from "./ChordInput";
import SectionNameInput from "./SectionNameInput";

export default function Section() {
  const [currentNum, setCurrentNum] = useState(1);
  const [keysCurrentNum, setKeysCurrentNum] = useState(1);
  const [reset, setReset] = useState(false);
  const [quaver, setQuaver] = useState(false);
  const [and, setAnd] = useState(false);

  return (
    <div className="border-2 border-purple-500 flex flex-col justify-end w-full">
      {/* <p className="w-full  border-yellow-500 border-2">Chorus:</p>
       */}
      <SectionNameInput />
      <RhythmStave />
      <div className="border-2 border-green-500 flex justify-end w-full ">
        <div className="flex flex-col border-2 border-orange-500 w-full  overflow-x-scroll">
          <KeysPad currentNum={keysCurrentNum} />
          <div className="flex justify-evenly">
            <KeysNumberSelector
              currentNum={keysCurrentNum}
              setCurrentNum={setKeysCurrentNum}
            />

            <ChordInput />
          </div>
        </div>
        <div className="flex">
          <DrumPad
            currentNum={currentNum}
            reset={reset}
            quaver={quaver}
            and={and}
          />
          <NumberSelector
            currentNum={currentNum}
            setCurrentNum={setCurrentNum}
            setReset={setReset}
            setQuaver={setQuaver}
            setAnd={setAnd}
          />
          <ToolSelector
            reset={reset}
            setReset={setReset}
            quaver={quaver}
            setQuaver={setQuaver}
            and={and}
            setAnd={setAnd}
            setCurrentNum={setCurrentNum}
          />
        </div>
      </div>
    </div>
  );
}
