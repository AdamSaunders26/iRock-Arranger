"use client";

import { useContext, useEffect, useState } from "react";
import { iRockContext, iRockContextType, iRockSongType } from "../Context";
import { blankSectionStruct } from "../modelData";
import Section from "./Section";
import NewSectionButton from "./NewSectionButton";
import SongHeader from "./SongHeader";
import { structureUpdater } from "../utils";

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

  useEffect(() => {
    console.log({ blankSectionStruct });
    console.log({ currentSongData });
    // for (const section in currentSongData) {
    //   console.log("og:", currentSongData[section]);
    //   console.log("new struct:", blankSectionStruct);
    //   //update the section
    //   const updatedSection = structureUpdater(
    //     currentSongData[section],
    //     blankSectionStruct
    //   );
    //   console.log("result:", updatedSection);
    //attach section to songData
    //save new songData
    // }
  }, []);

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
