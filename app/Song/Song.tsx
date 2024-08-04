"use client";

import { useContext, useState } from "react";
import { iRockContext, iRockContextType, iRockSongType } from "../Context";
import { blankSectionStruct } from "../modelData";
import Section from "./Section";
import NewSectionButton from "./NewSectionButton";
import SongHeader from "./SongHeader";

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

  return (
    <div className="flex flex-col">
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
