import quaver from "../app/symbols/8thNote.svg";
import semibreve from "../app/symbols/semibreve.svg";
import minim from "../app/symbols/minim.svg";
import crotchet from "../app/symbols/crotchet.svg";
import Image from "next/image";
export default function BarSymbol() {
  return (
    <div>
      <Image src={crotchet} alt="Quaver" />
    </div>
  );
}
