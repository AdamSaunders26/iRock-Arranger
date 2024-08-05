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
    <div className="flex flex-col rounded-bl-lg bg-rose-100 w-full justify-between  overflow-hidden">
      <KeysPad sectionData={sectionData} sectionNumber={sectionNumber} />
      <div className="flex justify-evenly mb-2 mx-2 ">
        <KeysNumberSelector />
        <ChordInput sectionData={sectionData} sectionNumber={sectionNumber} />
      </div>
    </div>
  );
}
