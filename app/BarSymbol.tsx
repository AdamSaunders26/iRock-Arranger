import quaver from "../app/symbols/8thNote.svg";
import semibreve from "../app/symbols/semibreve.svg";
import minim from "../app/symbols/minim.svg";
import crotchet from "../app/symbols/crotchet.svg";
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
      className="p-2 border-2 border-grey-500"
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
