"use client";
import { ReactNode, useContext, useEffect, useState } from "react";
import { iRockContext, iRockContextType } from "../Context";
import SongNameInput from "./SongNameInput";

export default function MenuOverview({ children }: { children: ReactNode }) {
  const { tools } = useContext<iRockContextType>(iRockContext);
  const [currentSong, setCurrentSong] = tools.currentSong;
  const [songList, setSongList] = tools.songList;
  const [songName, setSongName] = useState("Enter song name");
  const toDisplay = Object.keys(Object.values(songList)[0]);

  useEffect(() => {
    // localStorage.setItem("songList", JSON.stringify({ songList: {} }));
    if (localStorage.length === 0) {
      const blankSongList = { songList: {} };
      localStorage.setItem("songList", JSON.stringify(blankSongList));
    } else {
      const storedSongList = localStorage.getItem("songList");
      if (storedSongList) {
        setSongList(JSON.parse(storedSongList));
      }
    }
  }, []);

  return (
    <div className="flex flex-col w-full items-center">
      <h1 className="font-bold p-2 text-3xl">Band Coach Arranger Tool</h1>
      {currentSong ? null : (
        <div className="flex flex-col items-center gap-4 w-full text-xl">
          <SongNameInput songName={songName} setSongName={setSongName} />

          {/* <button
            className="bg-red-600 mx-auto p-1"
            onClick={() => {
              localStorage.clear();
            }}
          >
            Clear storage (Do not click!)
          </button> */}
          <button
            className="bg-red-600 mx-auto p-1"
            onClick={() => {
              let songs = localStorage.getItem("songList");
              console.log(JSON.parse(songs));
            }}
          >
            localStorage logger
          </button>

          <div className="flex flex-wrap items-center justify-center gap-2 px-2">
            {toDisplay.map((value, i) => {
              return (
                <button
                  key={i}
                  className=" bg-white shadow-lg  rounded-lg p-1 w-fit"
                  onClick={() => {
                    setCurrentSong(value);
                  }}
                >
                  {value}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {currentSong ? children : null}
    </div>
  );
}
