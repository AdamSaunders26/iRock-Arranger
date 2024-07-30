"use client";
import { useState } from "react";

import RhythmStave from "./Rhythm Stave/RhythmStave";
import SectionNameInput from "./SectionNameInput";
import DrumsUnit from "./Drums Unit/DrumUnit";
import KeysUnit from "./Keys Unit/KeysUnit";

export default function Section() {
  // const [currentNum, setCurrentNum] = useState(1);
  const [keysCurrentNum, setKeysCurrentNum] = useState(1);
  const [reset, setReset] = useState(false);
  const [quaver, setQuaver] = useState(false);
  const [and, setAnd] = useState(false);

  return (
    <div className="border-2 border-purple-500 flex flex-col justify-end w-full">
      <SectionNameInput />
      <RhythmStave />
      <div className="border-2 border-green-500 flex justify-end w-full ">
        <KeysUnit
          keysCurrentNum={keysCurrentNum}
          setKeysCurrentNum={setKeysCurrentNum}
        />
        <DrumsUnit
        // currentNum={currentNum}
        // reset={reset}
        // quaver={quaver}
        // and={and}
        // setCurrentNum={setCurrentNum}
        // setReset={setReset}
        // setQuaver={setQuaver}
        // setAnd={setAnd}
        />
      </div>
    </div>
  );
}
