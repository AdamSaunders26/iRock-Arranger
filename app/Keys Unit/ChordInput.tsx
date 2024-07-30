"use client";
import { useContext, useState } from "react";
import { iRockContext, iRockContextType } from "../Context";

export default function ChordInput() {
  const { section } = useContext<iRockContextType>(iRockContext);
  const [chords, setChords] = section.chords;

  return (
    <div>
      <label htmlFor="chords">Chords: </label>
      <input
        className={
          chords === "e.g. F, Bb, Dm, C" ? "text-neutral-500" : "text-black"
        }
        id="chords"
        value={chords}
        onFocus={() => {
          if (chords === "e.g. F, Bb, Dm, C") {
            setChords("");
          }
        }}
        onChange={(e) => {
          setChords(e.target.value);
        }}
      />
    </div>
  );
}
