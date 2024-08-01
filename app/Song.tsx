"use client";

import { useContext, useState } from "react";
import { iRockContext, iRockContextType, iRockDataType } from "./Context";
import { blankSectionStruct } from "./modelData";
import Section from "./Section";

export default function Song() {
  const { section, tools } = useContext<iRockContextType>(iRockContext);
  const currentSong = tools.currentSong[0];
  const [songList, setSongList] = tools.songList;
  const [currentSections, setCurrentSections] = useState(null);
  const [currentSectionNumber, setCurrentSectionNumber] = useState(null);

  let currentSongData: unknown;
  if (currentSong) {
    currentSongData = songList.songList[currentSong];
  }

  const currSects = Object.keys(songList.songList[currentSong]);
  //   console.log(currSects);
  return (
    <div className="flex flex-col">
      <div>Current Song: {currentSong}</div>
      <button
        className="bg-pink-400 mx-auto rounded-lg m-1 p-1"
        onClick={() => {
          const songListCopy = JSON.parse(JSON.stringify(songList));
          if (Object.keys(currentSongData).length === 0) {
            songListCopy.songList[currentSong][1] = blankSectionStruct;
            localStorage.setItem("songList", JSON.stringify(songListCopy));
            setSongList(songListCopy);
          } else {
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
      <button
        className="bg-orange-400 mx-auto rounded-lg m-1 p-1"
        onClick={() => {
          console.log(JSON.parse(localStorage.getItem("songList")));
        }}
      >
        Check storage
      </button>
      {currSects.map((value, i) => {
        return (
          <Section
            key={i}
            sectionData={songList.songList[currentSong][value]}
            sectionNumber={Number(value)}
          />
        );
      })}
    </div>
  );
}
