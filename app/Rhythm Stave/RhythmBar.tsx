import BarSymbol, { SymbolKey } from "./BarSymbol";

export default function RhythmBar({
  currentNote,
}: {
  currentNote: SymbolKey | "blank";
}) {
  const timeSig = 4;
  const bars = [];
  for (let i = 0; i < timeSig; i++) {
    bars.push(i + 1);
  }

  return (
    <div className="flex flex-col w-full border-2 border-black ">
      <div className="flex justify-evenly">
        {bars.map((n) => {
          return (
            <div className="flex justify-center items-center " key={n}>
              {n}
            </div>
          );
        })}
      </div>
      <div className="flex justify-evenly flex-1">
        <BarSymbol currentGlobalSymbol={currentNote} />
        <BarSymbol currentGlobalSymbol={currentNote} />
        <BarSymbol currentGlobalSymbol={currentNote} />
        <BarSymbol currentGlobalSymbol={currentNote} />
      </div>
      <div className="flex justify-evenly flex-1">
        <BarSymbol currentGlobalSymbol={currentNote} />
        <BarSymbol currentGlobalSymbol={currentNote} />
        <BarSymbol currentGlobalSymbol={currentNote} />
        <BarSymbol currentGlobalSymbol={currentNote} />
      </div>
    </div>
  );
}
