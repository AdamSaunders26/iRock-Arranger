"use client";
import { useContext, useState } from "react";
import { iRockContext, iRockContextType, iRockDataType } from "../Context";
import { saveChords, saveVoice } from "../utils";

export default function VoiceInput({
  sectionData,
  sectionNumber,
}: {
  sectionData: iRockDataType;
  sectionNumber: number;
}) {
  const { tools } = useContext<iRockContextType>(iRockContext);
  const [tempVoice, setTempVoice] = useState(sectionData.voice);
  const [songList, setSongList] = tools.songList;
  const currentSong = tools.currentSong[0];

  return (
    <div className="flex justify-end items-center w-full">
      <label htmlFor="voice" className="mr-1">
        Voice:{" "}
      </label>
      <input
        className={
          tempVoice === "e.g. Fargo 119"
            ? "text-neutral-500 rounded-lg p-1 bg-rose-50"
            : "text-black rounded-lg p-1 bg-rose-50"
        }
        id="chords"
        value={tempVoice}
        onFocus={() => {
          if (tempVoice === "e.g. Fargo 119") {
            setTempVoice("");
          }
        }}
        onChange={(e) => {
          setTempVoice(e.target.value);
          if (currentSong) {
            setSongList(
              saveVoice(e.target.value, sectionNumber, songList, currentSong)
            );
          }
        }}
      />
    </div>
  );
}
