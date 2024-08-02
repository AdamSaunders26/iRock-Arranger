import { iRockDataType } from "../Context";
import BarSymbol, { SymbolKey } from "./BarSymbol";

export default function RhythmBar({
  currentNote,
  barState,
  sectionData,
  sectionNumber,
}: {
  currentNote: SymbolKey | "blank";
  barState: {
    keys: (string | React.Dispatch<React.SetStateAction<string>>)[][];
    guitar: (string | React.Dispatch<React.SetStateAction<string>>)[][];
  };
  sectionData: iRockDataType;
  sectionNumber: number;
}) {
  const timeSig = 4;
  const bars = [];
  for (let i = 0; i < timeSig; i++) {
    bars.push(i + 1);
  }

  const [state1, state2, state3, state4] = barState.keys;

  const [state5, state6, state7, state8] = barState.guitar;

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
        <BarSymbol
          currentGlobalSymbol={currentNote}
          keyState={state1}
          sectionData={sectionData}
          sectionNumber={sectionNumber}
        />
        <BarSymbol
          currentGlobalSymbol={currentNote}
          keyState={state2}
          sectionData={sectionData}
          sectionNumber={sectionNumber}
        />
        <BarSymbol
          currentGlobalSymbol={currentNote}
          keyState={state3}
          sectionData={sectionData}
          sectionNumber={sectionNumber}
        />
        <BarSymbol
          currentGlobalSymbol={currentNote}
          keyState={state4}
          sectionData={sectionData}
          sectionNumber={sectionNumber}
        />
      </div>
      <div className="flex justify-evenly flex-1">
        <BarSymbol
          currentGlobalSymbol={currentNote}
          keyState={state5}
          sectionData={sectionData}
          sectionNumber={sectionNumber}
        />
        <BarSymbol
          currentGlobalSymbol={currentNote}
          keyState={state6}
          sectionData={sectionData}
          sectionNumber={sectionNumber}
        />
        <BarSymbol
          currentGlobalSymbol={currentNote}
          keyState={state7}
          sectionData={sectionData}
          sectionNumber={sectionNumber}
        />
        <BarSymbol
          currentGlobalSymbol={currentNote}
          keyState={state8}
          sectionData={sectionData}
          sectionNumber={sectionNumber}
        />
      </div>
    </div>
  );
}
