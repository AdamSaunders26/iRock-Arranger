"use client";

import { useContext } from "react";
import { iRockContext, iRockContextType, iRockSongType } from "../Context";
import Section from "./Section";
import SongHeader from "./SongHeader";
import { usePDF } from "react-to-pdf";

export default function Song() {
  const { tools } = useContext<iRockContextType>(iRockContext);
  const currentSong = tools.currentSong[0];
  const [songList, setSongList] = tools.songList;

  let currentSongData: iRockSongType = {};
  let currSects: string[] = [];
  if (currentSong) {
    currentSongData = songList.songList[currentSong];
    currSects = Object.keys(songList.songList[currentSong]);
  }

  // const { toPDF, targetRef } = usePDF({
  //   filename: `${currentSong}_arrangement.pdf`,
  // });
  //
  //targetRef to go on highest-level div below for PDF

  return (
    <div className="flex flex-col w-full p-2  ">
      <SongHeader currentSongData={currentSongData} />
      {currentSong
        ? currSects.map((value, i) => {
            return (
              <Section
                key={i}
                sectionData={songList.songList[currentSong][value]}
                sectionNumber={Number(value)}
              />
            );
          })
        : null}
    </div>
  );
}
