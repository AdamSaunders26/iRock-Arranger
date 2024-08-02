"use client";

import RhythmStave from "./Rhythm Stave/RhythmStave";
import SectionNameInput from "./SectionNameInput";
import DrumsUnit from "./Drums Unit/DrumUnit";
import KeysUnit from "./Keys Unit/KeysUnit";
import { useContext } from "react";
import { iRockContext, iRockContextType, iRockDataType } from "./Context";

export default function Section({
  sectionData,
  sectionNumber,
}: {
  sectionData: iRockDataType;
  sectionNumber: number;
}) {
  // const { section, tools } = useContext<iRockContextType>(iRockContext);
  // const currentSong = tools.currentSong[0]
  console.log(sectionData);
  // console.log(sectionNumber);
  return (
    <div className="border-2 border-purple-500 flex flex-col justify-end w-full">
      <SectionNameInput
        sectionData={sectionData}
        sectionNumber={sectionNumber}
      />
      <RhythmStave sectionData={sectionData} sectionNumber={sectionNumber} />
      <div className="border-2 border-green-500 flex justify-end w-full ">
        <KeysUnit sectionData={sectionData} sectionNumber={sectionNumber} />
        <DrumsUnit sectionData={sectionData} sectionNumber={sectionNumber} />
      </div>
    </div>
  );
}
