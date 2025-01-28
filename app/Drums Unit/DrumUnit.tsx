import DrumsNumberSelector from "./DrumsNumberSelector";
import DrumsToolSelector from "./DrumsToolSelector";
import DrumPad from "./DrumPad";
import { iRockDataType } from "../Context";
import { useState } from "react";
import DrumStudents from "./DrumStudents";

export default function DrumsUnit({
  sectionData,
  sectionNumber,
}: {
  sectionData: iRockDataType;
  sectionNumber: number;
}) {
  const [currentNum, setCurrentNum] = useState(1);
  const [reset, setReset] = useState(false);
  const [quaver, setQuaver] = useState(false);
  const [and, setAnd] = useState(false);

  return (
    <div className="flex flex-col justify-evenly bg-cyan-100 rounded-br-lg">
      <div className="flex">
        {" "}
        <DrumPad
          sectionData={sectionData}
          sectionNumber={sectionNumber}
          currentNum={currentNum}
          and={and}
          quaver={quaver}
          reset={reset}
        />
        <DrumsNumberSelector
          currentNum={currentNum}
          setCurrentNum={setCurrentNum}
          setAnd={setAnd}
          setQuaver={setQuaver}
          setReset={setReset}
        />
        <DrumsToolSelector
          setCurrentNum={setCurrentNum}
          and={and}
          quaver={quaver}
          reset={reset}
          setAnd={setAnd}
          setQuaver={setQuaver}
          setReset={setReset}
        />
      </div>
      <DrumStudents sectionData={sectionData} sectionNumber={sectionNumber} />
    </div>
  );
}
