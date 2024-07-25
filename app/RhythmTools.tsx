import { useState } from "react";
import quaver from "../app/symbols/U+266B_d.svg";
import semibreve from "../app/symbols/1-1_note_semibreve (1).svg";
import minim from "../app/symbols/1-2_note_minim_(music).svg";
import crotchet from "../app/symbols/1-4_note_crotchet_(music).svg";
import Image from "next/image";
import { GrPowerReset } from "react-icons/gr";

export default function RhythmTools({
  currentNote,
  setCurrentNote,
}: {
  currentNote: string;
  setCurrentNote: React.Dispatch<React.SetStateAction<string>>;
}) {
  const selected =
    "border-2 border-red-500 bg-red-500 max-h-8 max-w-8 flex-1  p-1 flex items-center justify-center";
  const unselected =
    "border-2 border-red-500 flex-1 max-h-8 max-w-8 p-1 flex items-center justify-center";
  return (
    <div className="flex flex-col justify-between">
      <button
        className={currentNote === "quaver" ? selected : unselected}
        onClick={() => {
          setCurrentNote("quaver");
        }}
      >
        {" "}
        <Image src={quaver} alt="Quaver" />
      </button>
      <button
        className={currentNote === "crotchet" ? selected : unselected}
        onClick={() => {
          setCurrentNote("crotchet");
        }}
      >
        {" "}
        <Image className="p-1" src={crotchet} alt="Crotchet" />
      </button>
      <button
        className={currentNote === "minim" ? selected : unselected}
        onClick={() => {
          setCurrentNote("minim");
        }}
      >
        {" "}
        <Image className="p-1" src={minim} alt="Minim" />
      </button>
      <button
        className={currentNote === "semibreve" ? selected : unselected}
        onClick={() => {
          setCurrentNote("semibreve");
        }}
      >
        {" "}
        <Image className="p-1" src={semibreve} alt="Semibreve" />
      </button>
      <button
        className={currentNote === "blank" ? selected : unselected}
        onClick={() => {
          setCurrentNote("blank");
        }}
      >
        <GrPowerReset />
      </button>
    </div>
  );
}
