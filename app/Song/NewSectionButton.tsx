import { useContext } from "react";
import { iRockContext, iRockContextType, iRockSongType } from "../Context";
import { blankSectionStruct } from "../modelData";

export default function NewSectionButton({
  currentSongData,
}: {
  currentSongData: iRockSongType;
}) {
  const { tools } = useContext<iRockContextType>(iRockContext);
  const currentSong = tools.currentSong[0];
  const [songList, setSongList] = tools.songList;
  return (
    <button
      className="bg-pink-400 mx-auto rounded-lg m-1 p-1"
      onClick={() => {
        const songListCopy = JSON.parse(JSON.stringify(songList));
        if (Object.keys(currentSongData).length === 0 && currentSong) {
          songListCopy.songList[currentSong][1] = blankSectionStruct;
          localStorage.setItem("songList", JSON.stringify(songListCopy));
          setSongList(songListCopy);
        } else if (currentSong) {
          const currentNumber =
            Object.keys(currentSongData)[
              Object.keys(currentSongData).length - 1
            ];

          songListCopy.songList[currentSong][Number(currentNumber) + 1] =
            blankSectionStruct;
          localStorage.setItem("songList", JSON.stringify(songListCopy));
          setSongList(songListCopy);
        }
      }}
    >
      New Section
    </button>
  );
}
