"use client";
import { ReactNode, useContext, useEffect, useState } from "react";
import { iRockContext, iRockContextType } from "../Context";
import SongNameInput from "./SongNameInput";
import { blankSectionStruct } from "../modelData";
import testObject from ".././testObject.json";
import { objectCopier, saveSongData, structureUpdater } from "../utils";

export default function MenuOverview({ children }: { children: ReactNode }) {
  const { tools } = useContext<iRockContextType>(iRockContext);
  const [currentSong, setCurrentSong] = tools.currentSong;
  const [songList, setSongList] = tools.songList;
  const [songName, setSongName] = useState("Enter song name");
  const toDisplay = Object.keys(Object.values(songList)[0]);

  useEffect(() => {
    // localStorage.setItem("songList", JSON.stringify({ songList: {} }));
    const storedSongList = localStorage.getItem("songList");
    if (localStorage.length === 0) {
      const blankSongList = { songList: {} };
      localStorage.setItem("songList", JSON.stringify(blankSongList));
    } else {
      if (storedSongList) {
        setSongList(JSON.parse(storedSongList));
      }
    }
    if (storedSongList) {
      const songListCopy = objectCopier(JSON.parse(storedSongList));
      console.log(songListCopy);
      for (const song in songListCopy.songList) {
        for (const section in songListCopy.songList[song]) {
          const updatedSection = structureUpdater(
            songListCopy.songList[song][section],
            blankSectionStruct
          );
          // console.log(updatedSection);
          songListCopy.songList[song][section] = updatedSection;
        }
      }
      console.log(songListCopy);
      localStorage.setItem("songList", JSON.stringify(songListCopy));
      setSongList(songListCopy);
    }
  }, []);

  return (
    <div className="flex flex-col w-full items-center">
      <h1 className="font-bold p-2 text-3xl">Band Coach Arranger Tool</h1>
      {currentSong ? null : (
        <div className="flex flex-col items-center gap-4 w-full text-xl">
          <SongNameInput songName={songName} setSongName={setSongName} />

          <button
            className="bg-red-600 mx-auto p-1"
            onClick={() => {
              localStorage.clear();
            }}
          >
            Clear storage (Do not click!)
          </button>
          <button
            className="bg-red-600 mx-auto p-1"
            onClick={() => {
              let songs = localStorage.getItem("songList");
              console.log(JSON.parse(songs as string));
            }}
          >
            localStorage logger
          </button>
          <button
            className="bg-pink-600 mx-auto p-1"
            onClick={() => {
              const songList = JSON.parse(
                localStorage.getItem("songList") as string
              );
              // console.log(songList.songList);
              // console.log(testObject.songList.songList.Shotgun);
              songList.songList.mockSong = testObject.songList.songList.Shotgun;
              localStorage.setItem("songList", JSON.stringify(songList));
              // console.log(songList);
            }}
          >
            Add test song
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
