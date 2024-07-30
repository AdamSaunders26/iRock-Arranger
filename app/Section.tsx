"use client";

import RhythmStave from "./Rhythm Stave/RhythmStave";
import SectionNameInput from "./SectionNameInput";
import DrumsUnit from "./Drums Unit/DrumUnit";
import KeysUnit from "./Keys Unit/KeysUnit";
// const localData = localStorage.getItem("section") || "Nothing stored";

export default function Section() {
  return (
    <div className="border-2 border-purple-500 flex flex-col justify-end w-full">
      <SectionNameInput />
      <RhythmStave />
      <div className="border-2 border-green-500 flex justify-end w-full ">
        <KeysUnit />
        <DrumsUnit />
      </div>
    </div>
  );
}
