"use client";
import { useContext, useEffect, useState } from "react";
import { iRockContext, iRockContextType, iRockDataType } from "./Context";
import { saveSectionName } from "./utils";

export default function SectionNameInput({
  sectionData,
  sectionNumber,
}: {
  sectionData: iRockDataType;
  sectionNumber: number;
}) {
  const { section, storageFunction, tools } =
    useContext<iRockContextType>(iRockContext);
  const sectionName = sectionData.sectionName;
  const [tempSectionName, setTempSectionName] = useState(sectionName);
  const [songList, setSongList] = tools.songList;
  const currentSong = tools.currentSong[0];
  // console.log(sectionName);

  useEffect(() => {
    setSongList(
      saveSectionName(tempSectionName, sectionNumber, songList, currentSong)
    );
  }, [tempSectionName]);

  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <label htmlFor="section">Section: </label>
        <input
          className={
            sectionName === "Name?" ? "text-neutral-500" : "text-black"
          }
          id="section"
          value={tempSectionName}
          onFocus={() => {
            if (sectionName === "Name?") {
              // setSectionName("");
            }
          }}
          onChange={(e) => {
            setTempSectionName(e.target.value);
            console.log(tempSectionName);
          }}
        />
      </div>
      {/* <button
        className="border-2 border-neutral-500 rounded-lg m-1 p-1 active:bg-red-300"
        onClick={() => {
          const stored = localStorage.getItem("songList");
          console.log(stored);
        }}
      >
        Check
      </button>
      <button
        className="border-2 border-neutral-500 rounded-lg m-1 p-1 active:bg-red-300"
        onClick={() => {
          console.log("saved");
          // storageFunction();
          setSongList(
            saveSectionName(
              tempSectionName,
              sectionNumber,
              songList,
              currentSong
            )
          );
        }}
      >
        Save
      </button> */}
    </div>
  );
}
