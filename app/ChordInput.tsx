"use client";
import { useState } from "react";

export default function ChordInput() {
  const [chords, setChords] = useState("e.g. F, Bb, Dm, C");
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
          console.log(e.target.value);
          setChords(e.target.value);
        }}
      />
    </div>
  );
}
