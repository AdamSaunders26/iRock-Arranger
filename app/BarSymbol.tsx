import quaver from "../app/symbols/U+266B_d.svg";
import semibreve from "../app/symbols/1-1_note_semibreve (1).svg";
import minim from "../app/symbols/1-2_note_minim_(music).svg";
import crotchet from "../app/symbols/1-4_note_crotchet_(music).svg";
import Image from "next/image";
import { useState } from "react";
export default function BarSymbol({
  currentGlobalSymbol,
}: {
  currentGlobalSymbol: string;
}) {
  const [currentSymbol, setCurrentSymbol] = useState("blank");
  const symbolLib = {
    quaver: quaver,
    semibreve: semibreve,
    minim: minim,
    crotchet: crotchet,
  };

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
