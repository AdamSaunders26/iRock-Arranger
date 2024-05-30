"use client";
import { useState } from "react";
import DrumPad from "./DrumPad";
import KeysPad from "./KeysPad";
import NumberSelector from "./NumberSelector";
import RhythmStave from "./RhythmStave";
import ToolSelector from "./ToolSelector";

export default function Section() {
  const [currentNum, setCurrentNum] = useState(1);
  const [reset, setReset] = useState(false);
  const [quaver, setQuaver] = useState(false);
  const [and, setAnd] = useState(false);

  return (
    <div className="border-2 border-green-500 flex justify-end w-full ">
      <div className="flex flex-col border-2 border-orange-500 w-full">
        <p className="w-full">section type</p>
        <RhythmStave />
        <KeysPad />
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
  );
}
