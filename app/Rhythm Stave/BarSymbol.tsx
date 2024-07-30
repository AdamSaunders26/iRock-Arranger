import quaver from "../symbols/U+266B_d.svg";
import semibreve from "../symbols/1-1_note_semibreve (1).svg";
import minim from "../symbols/1-2_note_minim_(music).svg";
import crotchet from "../symbols/1-4_note_crotchet_(music).svg";
import Image from "next/image";

import { useState } from "react";

export const symbolLib = {
  quaver: quaver,
  semibreve: semibreve,
  minim: minim,
  crotchet: crotchet,
};
export type SymbolKey = keyof typeof symbolLib;

export default function BarSymbol({
  currentGlobalSymbol,
  keyState,
}: {
  currentGlobalSymbol: SymbolKey | "blank";
  keyState: [string, React.Dispatch<React.SetStateAction<string>>];
}) {
  // const [currentSymbol, setCurrentSymbol] = useState<SymbolKey | "blank">(
  //   "blank"
  // );
  const [currentSymbol, setCurrentSymbol] = keyState;
  return (
    <div
      className="p-2 border-2 border-grey-500 w-full flex items-center justify-center"
      onClick={() => {
        setCurrentSymbol(currentGlobalSymbol);
      }}
    >
      {currentSymbol === "blank" ? (
        <div></div>
      ) : (
        <Image src={symbolLib[currentSymbol]} alt="Quaver" />
      )}
    </div>
  );
}