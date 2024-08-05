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

  useEffect(() => {
    if (currentSong) {
      setSongList(
        saveSectionName(tempSectionName, sectionNumber, songList, currentSong)
      );
    }
  }, [tempSectionName]);

  return (
    <div className="flex justify-between">
      <div className="flex items-center ">
        <input
          className={
            sectionName === "Enter section name"
              ? "bg-white text-neutral-500  rounded-md p-1"
              : "bg-white text-black rounded-md p-1"
          }
          id="section"
          value={tempSectionName}
          onFocus={() => {
            if (tempSectionName === "Enter section name") {
              setTempSectionName("");
            }
          }}
          onChange={(e) => {
            setTempSectionName(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
