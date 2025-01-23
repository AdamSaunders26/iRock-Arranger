import { useContext } from "react";
import { iRockContext, iRockContextType, iRockDataType } from "../Context";
import Fret from "./Fret";
import GuitarString from "./GuitarString";

export default function FretBoard({
  sectionData,
  sectionNumber,
  currentNum,
}: {
  sectionData: iRockDataType;
  sectionNumber: number;
  currentNum: number;
}) {
  const { tools } = useContext<iRockContextType>(iRockContext);
  // const [currentNum, setCurrentNum] = tools.keysCurrentNum;
  const [songList, setSongList] = tools.songList;

  const currentSong = tools.currentSong[0];
  const { string1, string2, string3, string4, string5, string6 } =
    sectionData.guitar;

  return (
    <div className="border-2 border-slate-500 rounded-md m-2 flex flex-col">
      <GuitarString currentNum={currentNum} stringStates={string1} />
      <GuitarString currentNum={currentNum} stringStates={string2} />
      <GuitarString currentNum={currentNum} stringStates={string3} />
      <GuitarString currentNum={currentNum} stringStates={string4} />
      <GuitarString currentNum={currentNum} stringStates={string5} />
      <GuitarString currentNum={currentNum} stringStates={string6} />
    </div>
  );
}
