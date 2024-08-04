import { useContext } from "react";
import { iRockContext, iRockContextType, iRockSongType } from "../Context";
import BackButton from "../Menu/BackButton";
import NewSectionButton from "./NewSectionButton";

export default function SongHeader({
  currentSongData,
}: {
  currentSongData: iRockSongType;
}) {
  const { tools } = useContext<iRockContextType>(iRockContext);
  const [currentSong, setCurrentSong] = tools.currentSong;
  return (
    <h1 className="flex ">
      <BackButton setCurrentSong={setCurrentSong} />
      <p className="p-2 text-xl">{currentSong}</p>
      <NewSectionButton currentSongData={currentSongData} />
    </h1>
  );
}
