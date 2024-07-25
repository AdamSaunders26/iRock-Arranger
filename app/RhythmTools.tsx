import { useState } from "react";
import quaver from "../app/symbols/8thNote.svg";
import semibreve from "../app/symbols/semibreve.svg";
import minim from "../app/symbols/minim.svg";
import crotchet from "../app/symbols/crotchet.svg";
import Image from "next/image";
import { GrPowerReset } from "react-icons/gr";

export default function RhythmTools({
  setCurrentNote,
}: {
  setCurrentNote: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="flex flex-col justify-between">
      <button
        className="border-2 border-red-500 flex-1 max-w-8 p-1 flex"
        onClick={() => {
          setCurrentNote("quaver");
        }}
      >
        {" "}
        <Image src={quaver} alt="Quaver" />
      </button>
      <button
        className="border-2 border-red-500 flex-1 max-w-8 p-1 flex justify-center"
        onClick={() => {
          setCurrentNote("crotchet");
        }}
      >
        {" "}
        <Image src={crotchet} alt="Crotchet" />
      </button>
      <button
        className="border-2 border-red-500 flex-1 max-w-8 p-1 flex justify-center"
        onClick={() => {
          setCurrentNote("minim");
        }}
      >
        {" "}
        <Image src={minim} alt="Minim" />
      </button>
      <button
        className="border-2 border-red-500 flex-1 max-w-8 p-1"
        onClick={() => {
          setCurrentNote("semibreve");
        }}
      >
        {" "}
        <Image src={semibreve} alt="Semibreve" />
      </button>
      <button
        className="border-2 border-red-500 flex-1 max-w-8 p-1"
        onClick={() => {
          setCurrentNote("blank");
        }}
      >
        <GrPowerReset />
      </button>
    </div>
  );
}
