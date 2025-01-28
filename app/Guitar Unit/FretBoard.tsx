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
      <GuitarString
        currentNum={currentNum}
        stringStates={string1}
        stringNumber={"string1"}
        sectionNumber={sectionNumber}
      />
      <GuitarString
        currentNum={currentNum}
        stringStates={string2}
        stringNumber={"string2"}
        sectionNumber={sectionNumber}
      />
      <GuitarString
        currentNum={currentNum}
        stringStates={string3}
        stringNumber={"string3"}
        sectionNumber={sectionNumber}
      />
      <GuitarString
        currentNum={currentNum}
        stringStates={string4}
        stringNumber={"string4"}
        sectionNumber={sectionNumber}
      />
      <GuitarString
        currentNum={currentNum}
        stringStates={string5}
        stringNumber={"string5"}
        sectionNumber={sectionNumber}
      />
      <GuitarString
        currentNum={currentNum}
        stringStates={string6}
        stringNumber={"string6"}
        sectionNumber={sectionNumber}
      />
    </div>
  );
}
