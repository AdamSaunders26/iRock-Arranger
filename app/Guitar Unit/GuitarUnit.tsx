import { useState } from "react";
import { iRockDataType } from "../Context";
import FretBoard from "./FretBoard";
import GuitarTools from "./GuitarTools";

export default function GuitarUnit({
  sectionData,
  sectionNumber,
}: {
  sectionData: iRockDataType;
  sectionNumber: number;
}) {
  const [currentNum, setCurrentNum] = useState(1);
  return (
    <div className="flex flex-col bg-yellow-100 ">
      <FretBoard
        sectionData={sectionData}
        sectionNumber={sectionNumber}
        currentNum={currentNum}
      />
      <GuitarTools
        currentNum={currentNum}
        setCurrentNum={setCurrentNum}
        sectionData={sectionData}
        sectionNumber={sectionNumber}
      />
    </div>
  );
}
