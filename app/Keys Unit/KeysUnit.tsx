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
  const { section, tools } = useContext<iRockContextType>(iRockContext);
  const [songList, setSongList] = tools.songList;
  const currentSong = tools.currentSong[0];
  return (
    <div className="flex flex-col border-2 border-orange-500 w-full  overflow-x-scroll">
      <KeysPad sectionData={sectionData} sectionNumber={sectionNumber} />
      <div className="flex justify-evenly">
        <KeysNumberSelector />
        <ChordInput />
      </div>
    </div>
  );
}
