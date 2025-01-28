import { useContext } from "react";
import { iRockContext, iRockContextType, iRockSongType } from "../Context";
import BackButton from "../Menu/BackButton";
import NewSectionButton from "./NewSectionButton";
import { DeleteSongButton } from "./DeleteSongButton";

export default function SongHeader({
  currentSongData,
}: {
  currentSongData: iRockSongType;
}) {
  const { tools } = useContext<iRockContextType>(iRockContext);
  const [currentSong, setCurrentSong] = tools.currentSong;

  return (
    <h1 className="flex flex-col items-center justify-between px-2 w-full">
      <p className="p-2 text-3xl ">{currentSong}</p>

      <div className="flex justify-between gap-2 ">
        <BackButton setCurrentSong={setCurrentSong} />
        <NewSectionButton currentSongData={currentSongData} />
        <DeleteSongButton />
      </div>
    </h1>
  );
}
