"use client";
import { useContext, useState } from "react";
import { iRockContext, iRockContextType, iRockDataType } from "../Context";
import { saveChords } from "../utils";

export default function ChordInput({
  sectionData,
  sectionNumber,
}: {
  sectionData: iRockDataType;
  sectionNumber: number;
}) {
  const { tools } = useContext<iRockContextType>(iRockContext);
  const [tempChords, setTempChords] = useState(sectionData.chords);
  const [songList, setSongList] = tools.songList;
  const currentSong = tools.currentSong[0];

  return (
    <div>
      <label htmlFor="chords">Chords: </label>
      <input
        className={
          tempChords === "e.g. F, Bb, Dm, C"
            ? "text-neutral-500 rounded-lg p-1 bg-rose-50"
            : "text-black rounded-lg p-1 bg-rose-50"
        }
        id="chords"
        value={tempChords}
        onFocus={() => {
          if (tempChords === "e.g. F, Bb, Dm, C") {
            setTempChords("");
          }
        }}
        onChange={(e) => {
          setTempChords(e.target.value);
          if (currentSong) {
            setSongList(
              saveChords(e.target.value, sectionNumber, songList, currentSong)
            );
          }
        }}
      />
    </div>
  );
}
