import { useContext } from "react";
import { saveSongName } from "../utils";
import { iRockContext, iRockContextType } from "../Context";

export default function SongNameInput({
  songName,
  setSongName,
}: {
  songName: string;
  setSongName: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { tools } = useContext<iRockContextType>(iRockContext);
  const [songList, setSongList] = tools.songList;

  return (
    <div className="flex justify-between gap-2 ">
      <div className="flex items-center ">
        <input
          className={
            songName === "Enter song name"
              ? "text-neutral-500 rounded-lg p-1 shadow-lg "
              : "text-black rounded-lg p-1 shadow-lg"
          }
          id="section"
          value={songName}
          onFocus={() => {
            if (songName === "Enter song name") {
              setSongName("");
            }
          }}
          onChange={(e) => {
            setSongName(e.target.value);
          }}
        />
      </div>
      <button
        className={
          songName === "Enter song name"
            ? "bg-neutral-400 mx-auto p-1 rounded-lg shadow-lg"
            : "bg-primary mx-auto p-1 rounded-lg shadow-lg"
        }
        disabled={songName === "Enter song name"}
        onClick={() => {
          setSongList(saveSongName(songName, songList));
          setSongName("Enter song name");
        }}
      >
        New Song
      </button>
    </div>
  );
}
