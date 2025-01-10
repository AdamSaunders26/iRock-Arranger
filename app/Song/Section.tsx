"use client";

import RhythmStave from "../Rhythm Stave/RhythmStave";
import SectionNameInput from "./SectionNameInput";
import DrumsUnit from "../Drums Unit/DrumUnit";
import KeysUnit from "../Keys Unit/KeysUnit";
import { useContext } from "react";
import { iRockContext, iRockContextType, iRockDataType } from "../Context";
import SectionHeader from "./SectionHeader";

export default function Section({
  sectionData,
  sectionNumber,
}: {
  sectionData: iRockDataType;
  sectionNumber: number;
}) {
  return (
    <div className="bg-primary border-4 border-primary rounded-lg shadow-lg flex flex-col justify-end w-full my-2">
      <SectionHeader sectionData={sectionData} sectionNumber={sectionNumber} />
      <RhythmStave sectionData={sectionData} sectionNumber={sectionNumber} />
      <div className=" flex  w-full ">
        <KeysUnit sectionData={sectionData} sectionNumber={sectionNumber} />
        <DrumsUnit sectionData={sectionData} sectionNumber={sectionNumber} />
      </div>
    </div>
  );
}
