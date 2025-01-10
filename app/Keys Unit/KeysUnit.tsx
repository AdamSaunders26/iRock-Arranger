import { useContext, useState } from "react";
import { iRockContext, iRockContextType, iRockDataType } from "../Context";
import ChordInput from "./ChordInput";
import KeysNumberSelector from "./KeysNumberSelector";
import KeysPad from "./KeysPad";
import VoiceInput from "./VoiceInput";

export default function KeysUnit({
  sectionData,
  sectionNumber,
}: {
  sectionData: iRockDataType;
  sectionNumber: number;
}) {
  const [currentNum, setCurrentNum] = useState(1);

  return (
    <div className="flex flex-col rounded-bl-lg bg-rose-100 w-full justify-between  overflow-hidden">
      <KeysPad
        sectionData={sectionData}
        sectionNumber={sectionNumber}
        currentNum={currentNum}
      />
      <div className="flex flex-col mb-2 mx-2 gap-2 align-end">
        <div className="flex justify-evenly ">
          <KeysNumberSelector
            currentNum={currentNum}
            setCurrentNum={setCurrentNum}
          />
          <ChordInput sectionData={sectionData} sectionNumber={sectionNumber} />
        </div>
        <VoiceInput sectionData={sectionData} sectionNumber={sectionNumber} />
      </div>
    </div>
  );
}
