import { useContext } from "react";
import { iRockContext, iRockContextType, iRockDataType } from "../Context";
import Fret from "./Fret";

export default function FretBoard({
  sectionData,
  sectionNumber,
}: {
  sectionData: iRockDataType;
  sectionNumber: number;
}) {
  const { tools } = useContext<iRockContextType>(iRockContext);
  // const [currentNum, setCurrentNum] = tools.keysCurrentNum;
  const [songList, setSongList] = tools.songList;

  const currentSong = tools.currentSong[0];

  return (
    <div className="border-red-500 border-2 m-2 flex">
      <Fret />
      <Fret />
      <Fret marker={0} />
      <Fret />
      <Fret marker={0} />
      <Fret />
      <Fret marker={0} />
      <Fret />
      <Fret marker={0} />
      <Fret />
      <Fret />
      <Fret marker={1} />
      <Fret />
      <Fret />
      <Fret marker={0} />
      <Fret />
      <Fret marker={0} />
      <Fret />
      <Fret marker={0} />
      <Fret />
    </div>
  );
}
