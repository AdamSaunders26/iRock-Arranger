"use client";
import { SetStateAction, useContext, useState } from "react";
import { iRockContext, iRockContextType, iRockDataType } from "../Context";
import { saveStudentName } from "../utils";

export default function NameInput({
  sectionData,
  sectionNumber,
  tempName,
  setTempName,
  studentNumber,
}: {
  sectionData: iRockDataType;
  sectionNumber: number;
  tempName: string;
  setTempName: React.Dispatch<SetStateAction<string>>;
  studentNumber: number;
}) {
  const { tools } = useContext<iRockContextType>(iRockContext);

  const [songList, setSongList] = tools.songList;
  const currentSong = tools.currentSong[0];

  return (
    <div className="flex justify-end items-center w-full">
      <label htmlFor="voice" className="mr-1">
        {studentNumber === 3 ? "Bass: " : `Guitar:`}
      </label>
      <input
        className={
          tempName === "Enter name"
            ? "text-neutral-500 rounded-lg p-1 bg-amber-50 max-w-24"
            : "text-black rounded-lg p-1 bg-amber-50 max-w-24"
        }
        id="chords"
        value={tempName}
        onFocus={() => {
          if (tempName === "Enter name") {
            setTempName("");
          }
        }}
        onChange={(e) => {
          setTempName(e.target.value);
          if (currentSong) {
            setSongList(
              saveStudentName(
                e.target.value,
                sectionNumber,
                songList,
                currentSong,
                studentNumber
              )
            );
          }
        }}
      />
    </div>
  );
}
