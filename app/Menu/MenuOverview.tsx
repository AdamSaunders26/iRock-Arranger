"use client";
import { ReactNode, useContext, useEffect, useState } from "react";
import BackButton from "./BackButton";
import { iRockContext, iRockContextType } from "../Context";

export default function MenuOverview({ children }: { children: ReactNode }) {
  const { tools } = useContext<iRockContextType>(iRockContext);
  const [currentSong, setCurrentSong] = tools.currentSong;
  const [songList, setSongList] = tools.songList;

  const toDisplay = Object.keys(Object.values(songList)[0]);
  //   console.log(toDisplay);

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
      setSongList(JSON.parse(storedSongList));
    }
  }, []);

  return (
    <div className="flex flex-col w-full">
      {currentSong ? null : (
        <div>
          Select Song.
          <div className="flex justify-between">
            <button
              className="bg-green-600 mx-auto p-1"
              onClick={() => {
                if (!Object.keys(songList.songList).length) {
                  const songListCopy = JSON.parse(JSON.stringify(songList));
                  songListCopy.songList[1] = {};
                  setSongList(songListCopy);
                  localStorage.setItem(
                    "songList",
                    JSON.stringify(songListCopy)
                  );
                } else {
                  const songListCopy = JSON.parse(JSON.stringify(songList));
                  const currentSongs = Object.keys(songListCopy.songList);
                  const nextSong = currentSongs[currentSongs.length - 1];
                  songListCopy.songList[Number(nextSong) + 1] = {};
                  setSongList(songListCopy);
                  localStorage.setItem(
                    "songList",
                    JSON.stringify(songListCopy)
                  );
                }
              }}
            >
              New Song
            </button>
            <button
              className="bg-red-600 mx-auto p-1"
              onClick={() => {
                localStorage.clear();
              }}
            >
              Clear storage
            </button>
          </div>
          <div className="flex flex-col">
            <p>Current song: {currentSong}</p>
            {toDisplay.map((value, i) => {
              return (
                <button
                  key={i}
                  onClick={() => {
                    console.log(typeof value);
                    setCurrentSong(Number(value));
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
