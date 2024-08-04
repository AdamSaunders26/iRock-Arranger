"use client";
import { useContext, useEffect, useState } from "react";
import { iRockContext, iRockContextType, iRockDataType } from "../Context";
import { saveSectionName } from "../utils";

export default function SectionNameInput({
  sectionData,
  sectionNumber,
}: {
  sectionData: iRockDataType;
  sectionNumber: number;
}) {
  const { tools } = useContext<iRockContextType>(iRockContext);
  const sectionName = sectionData.sectionName;
  const [tempSectionName, setTempSectionName] = useState(sectionName);
  const [songList, setSongList] = tools.songList;
  const currentSong = tools.currentSong[0];
  // console.log(sectionName);

  useEffect(() => {
    if (currentSong) {
      setSongList(
        saveSectionName(tempSectionName, sectionNumber, songList, currentSong)
      );
    }
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
    </div>
  );
}
