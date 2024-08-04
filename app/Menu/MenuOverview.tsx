"use client";
import { ReactNode, useContext, useEffect, useState } from "react";
import BackButton from "./BackButton";
import { iRockContext, iRockContextType } from "../Context";
import SongNameInput from "../SongNameInput";
import { saveSongName } from "../utils";

export default function MenuOverview({ children }: { children: ReactNode }) {
  const { tools } = useContext<iRockContextType>(iRockContext);
  const [currentSong, setCurrentSong] = tools.currentSong;
  const [songList, setSongList] = tools.songList;
  const [songName, setSongName] = useState("Enter song name");
  const toDisplay = Object.keys(Object.values(songList)[0]);
  // console.log(songList);

  useEffect(() => {
    // localStorage.setItem("songList", JSON.stringify({ songList: {} }));
    if (localStorage.length === 0) {
      console.log("empty");
      const blankSongList = { songList: {} };
      localStorage.setItem("songList", JSON.stringify(blankSongList));
    } else {
      console.log("not empty");
      const storedSongList = localStorage.getItem("songList");
      //   console.log(storedSongList);
      if (storedSongList) {
        setSongList(JSON.parse(storedSongList));
      }
    }
  }, []);

  return (
    <div className="flex flex-col w-full">
      {currentSong ? null : (
        <div>
          <div className="flex p-2">
            <SongNameInput songName={songName} setSongName={setSongName} />
            <button
              className={
                songName === "Enter song name"
                  ? "bg-green-800 mx-auto p-2"
                  : "bg-green-600 mx-auto p-1"
              }
              disabled={songName === "Enter song name"}
              onClick={() => {
                setSongList(saveSongName(songName, songList));
              }}
            >
              New Song
            </button>
          </div>
          <div className="flex justify-between">
            <button
              className="bg-red-600 mx-auto p-1"
              onClick={() => {
                localStorage.clear();
              }}
            >
              Clear storage
            </button>
          </div>
          <div className="flex flex-col items-center gap-2 p-2">
            {toDisplay.map((value, i) => {
              console.log(value);
              return (
                <button
                  key={i}
                  className="bg-blue-400 rounded-lg p-1 w-fit"
                  onClick={() => {
                    console.log(typeof value);
                    setCurrentSong(value);
                  }}
                >
                  Song: {value}
                </button>
              );
            })}
          </div>
        </div>
      )}
      <div>
        {currentSong ? (
          <div className="flex flex-col">
            <BackButton setCurrentSong={setCurrentSong} />
            {children}
          </div>
        ) : null}
      </div>
    </div>
  );
}
