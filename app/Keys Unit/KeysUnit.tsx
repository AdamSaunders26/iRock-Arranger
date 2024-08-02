import { useContext } from "react";
import { iRockContext, iRockContextType, iRockDataType } from "../Context";
import ChordInput from "./ChordInput";
import KeysNumberSelector from "./KeysNumberSelector";
import KeysPad from "./KeysPad";

export default function KeysUnit({
  sectionData,
  sectionNumber,
}: {
  sectionData: iRockDataType;
  sectionNumber: number;
}) {
  return (
    <div className="flex flex-col border-2 border-orange-500 w-full  overflow-x-scroll">
      <KeysPad sectionData={sectionData} sectionNumber={sectionNumber} />
      <div className="flex justify-evenly">
        <KeysNumberSelector />
        <ChordInput sectionData={sectionData} sectionNumber={sectionNumber} />
      </div>
    </div>
  );
}
