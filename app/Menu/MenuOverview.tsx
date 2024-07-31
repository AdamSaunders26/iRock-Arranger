"use client";
import { ReactNode, useEffect, useState } from "react";

export default function MenuOverview({ children }: { children: ReactNode }) {
  const [songList, setSongList] = useState({ songList: {} });

  useEffect(() => {
    if (localStorage.length === 0) {
      //   console.log("empty");
      const blankSongList = { songList: {} };
      localStorage.setItem("songList", JSON.stringify(blankSongList));
    } else {
      //   console.log("not empty");
      const storedSongList = localStorage.getItem("songList");
      //   console.log(storedSongList);
      setSongList(JSON.parse(storedSongList));
    }
  }, []);
  return (
    <div className="flex flex-col w-full">
      Select Song.
      <div className="flex justify-between">
        <button
          className="bg-green-600 mx-auto p-1"
          onClick={() => {
            console.log(Object.keys(songList.songList));
            console.log(songList);
            if (!Object.keys(songList.songList).length) {
              const songListCopy = JSON.parse(JSON.stringify(songList));
              songListCopy.songList[1] = {};
              setSongList(songListCopy);
            } else {
              const songListCopy = JSON.parse(JSON.stringify(songList));
              const currentSongs = Object.keys(songListCopy.songList);
              const nextSong = currentSongs[currentSongs.length - 1];
              songListCopy.songList[Number(nextSong) + 1] = {};
              setSongList(songListCopy);
              console.log(songListCopy);
              console.log(nextSong);
            }
            console.log(Object.values(songList));
            // localStorage.setItem();
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
      <div>{JSON.stringify(songList)}</div>
      <div>{children}</div>
    </div>
  );
}
