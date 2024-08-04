import Image from "next/image";
import { SymbolKey } from "./BarSymbol";
import quaver from "../symbols/U+266B_d.svg";
import semibreve from "../symbols/1-1_note_semibreve (1).svg";
import minim from "../symbols/1-2_note_minim_(music).svg";
import crotchet from "../symbols/1-4_note_crotchet_(music).svg";
import { GrPowerReset } from "react-icons/gr";

export default function RhythmToolButton({
  currentNote,
  setCurrentNote,
  toolType,
}: {
  currentNote: SymbolKey | "blank";
  setCurrentNote: React.Dispatch<React.SetStateAction<SymbolKey | "blank">>;
  toolType: SymbolKey | "blank";
}) {
  const selected =
    " rounded-full bg-emerald-500 h-8 w-8   p-2 flex items-center justify-center";
  const unselected = "  h-8 w-8 p-2 flex  items-center justify-center";
  const symbolLib = {
    quaver: quaver,
    semibreve: semibreve,
    minim: minim,
    crotchet: crotchet,
    blank: <GrPowerReset />,
  };
  return (
    <button
      className={currentNote === toolType ? selected : unselected}
      onClick={() => {
        setCurrentNote(toolType);
      }}
    >
      {" "}
      {toolType === "blank" ? (
        <GrPowerReset />
      ) : (
        <Image src={symbolLib[toolType]} alt={toolType} />
      )}
    </button>
  );
}
