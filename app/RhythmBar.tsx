import Image from "next/image";
import BarSymbol from "./BarSymbol";
import quaver from "../app/symbols/8thNote.svg";
import semibreve from "../app/symbols/semibreve.svg";
import minim from "../app/symbols/minim.svg";
import crotchet from "../app/symbols/crotchet.svg";

export default function RhythmBar({ currentNote }: { currentNote: string }) {
  const timeSig = 4;
  const bars = [];
  for (let i = 0; i < timeSig; i++) {
    bars.push(i + 1);
  }

  console.log(bars);
  return (
    <div className="grid grid-cols-4  grid-rows-[1fr,2fr,2fr]] w-full border-2 border-black ">
      {bars.map((n) => {
        return (
          <div className="flex justify-center items-center " key={n}>
            {n}
          </div>
        );
      })}
      <BarSymbol currentGlobalSymbol={currentNote} />
      <BarSymbol currentGlobalSymbol={currentNote} />
      <BarSymbol currentGlobalSymbol={currentNote} />
      <BarSymbol currentGlobalSymbol={currentNote} />
      <BarSymbol currentGlobalSymbol={currentNote} />
      <BarSymbol currentGlobalSymbol={currentNote} />
      <BarSymbol currentGlobalSymbol={currentNote} />
      <BarSymbol currentGlobalSymbol={currentNote} />
    </div>
  );
}
