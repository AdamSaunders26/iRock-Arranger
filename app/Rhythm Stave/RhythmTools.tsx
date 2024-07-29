import { useState } from "react";
import quaver from "../symbols/U+266B_d.svg";
import semibreve from "../symbols/1-1_note_semibreve (1).svg";
import minim from "../symbols/1-2_note_minim_(music).svg";
import crotchet from "../symbols/1-4_note_crotchet_(music).svg";
import Image from "next/image";
import { GrPowerReset } from "react-icons/gr";
import { SymbolKey } from "./BarSymbol";
import RhythmToolButton from "./RhythmToolButton";

export default function RhythmTools({
  currentNote,
  setCurrentNote,
}: {
  currentNote: SymbolKey | "blank";
  setCurrentNote: React.Dispatch<React.SetStateAction<SymbolKey | "blank">>;
}) {
  const tools: Array<SymbolKey | "blank"> = [
    "quaver",
    "crotchet",
    "minim",
    "semibreve",
    "blank",
  ];
  return (
    <div className="flex flex-col justify-between">
      {tools.map((tool, i) => {
        return (
          <RhythmToolButton
            key={i}
            currentNote={currentNote}
            setCurrentNote={setCurrentNote}
            toolType={tool}
          />
        );
      })}
    </div>
  );
}
