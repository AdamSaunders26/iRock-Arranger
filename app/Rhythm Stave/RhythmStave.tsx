import { useContext, useEffect, useState } from "react";
import RhythmBar from "./RhythmBar";
import RhythmTools from "./RhythmTools";
import { SymbolKey } from "./BarSymbol";
import { iRockContext, iRockContextType, iRockDataType } from "../Context";
import { saveRhythmNote } from "../utils";

export default function RhythmStave({
  sectionData,
  sectionNumber,
}: {
  sectionData: iRockDataType;
  sectionNumber: number;
}) {
  const [currentNote, setCurrentNote] = useState<SymbolKey | "blank">(
    "crotchet"
  );
  const { tools } = useContext<iRockContextType>(iRockContext);
  const [songList, setSongList] = tools.songList;
  const currentSong = tools.currentSong[0];
  const {
    keySymbol1,
    keySymbol2,
    keySymbol3,
    keySymbol4,
    keySymbol5,
    keySymbol6,
    keySymbol7,
    keySymbol8,
    keySymbol9,
    keySymbol10,
    keySymbol11,
    keySymbol12,
    keySymbol13,
    keySymbol14,
    keySymbol15,
    keySymbol16,
  } = sectionData.rhythm.keys;

  const {
    guitarSymbol1,
    guitarSymbol2,
    guitarSymbol3,
    guitarSymbol4,
    guitarSymbol5,
    guitarSymbol6,
    guitarSymbol7,
    guitarSymbol8,
    guitarSymbol9,
    guitarSymbol10,
    guitarSymbol11,
    guitarSymbol12,
    guitarSymbol13,
    guitarSymbol14,
    guitarSymbol15,
    guitarSymbol16,
  } = sectionData.rhythm.guitar;

  const [tempKeySymbol1, setTempKeySymbol1] = useState(keySymbol1);
  const [tempKeySymbol2, setTempKeySymbol2] = useState(keySymbol2);
  const [tempKeySymbol3, setTempKeySymbol3] = useState(keySymbol3);
  const [tempKeySymbol4, setTempKeySymbol4] = useState(keySymbol4);
  const [tempKeySymbol5, setTempKeySymbol5] = useState(keySymbol5);
  const [tempKeySymbol6, setTempKeySymbol6] = useState(keySymbol6);
  const [tempKeySymbol7, setTempKeySymbol7] = useState(keySymbol7);
  const [tempKeySymbol8, setTempKeySymbol8] = useState(keySymbol8);
  const [tempKeySymbol9, setTempKeySymbol9] = useState(keySymbol9);
  const [tempKeySymbol10, setTempKeySymbol10] = useState(keySymbol10);
  const [tempKeySymbol11, setTempKeySymbol11] = useState(keySymbol11);
  const [tempKeySymbol12, setTempKeySymbol12] = useState(keySymbol12);
  const [tempKeySymbol13, setTempKeySymbol13] = useState(keySymbol13);
  const [tempKeySymbol14, setTempKeySymbol14] = useState(keySymbol14);
  const [tempKeySymbol15, setTempKeySymbol15] = useState(keySymbol15);
  const [tempKeySymbol16, setTempKeySymbol16] = useState(keySymbol16);

  const [tempGuitarSymbol1, setTempGuitarSymbol1] = useState(guitarSymbol1);
  const [tempGuitarSymbol2, setTempGuitarSymbol2] = useState(guitarSymbol2);
  const [tempGuitarSymbol3, setTempGuitarSymbol3] = useState(guitarSymbol3);
  const [tempGuitarSymbol4, setTempGuitarSymbol4] = useState(guitarSymbol4);
  const [tempGuitarSymbol5, setTempGuitarSymbol5] = useState(guitarSymbol5);
  const [tempGuitarSymbol6, setTempGuitarSymbol6] = useState(guitarSymbol6);
  const [tempGuitarSymbol7, setTempGuitarSymbol7] = useState(guitarSymbol7);
  const [tempGuitarSymbol8, setTempGuitarSymbol8] = useState(guitarSymbol8);
  const [tempGuitarSymbol9, setTempGuitarSymbol9] = useState(guitarSymbol9);
  const [tempGuitarSymbol10, setTempGuitarSymbol10] = useState(guitarSymbol10);
  const [tempGuitarSymbol11, setTempGuitarSymbol11] = useState(guitarSymbol11);
  const [tempGuitarSymbol12, setTempGuitarSymbol12] = useState(guitarSymbol12);
  const [tempGuitarSymbol13, setTempGuitarSymbol13] = useState(guitarSymbol13);
  const [tempGuitarSymbol14, setTempGuitarSymbol14] = useState(guitarSymbol14);
  const [tempGuitarSymbol15, setTempGuitarSymbol15] = useState(guitarSymbol15);
  const [tempGuitarSymbol16, setTempGuitarSymbol16] = useState(guitarSymbol16);

  type BarType = {
    keys: [string, React.Dispatch<React.SetStateAction<string>>][];
    guitar: [string, React.Dispatch<React.SetStateAction<string>>][];
  };

  const bar1: BarType = {
    keys: [
      [tempKeySymbol1, setTempKeySymbol1],
      [tempKeySymbol2, setTempKeySymbol2],
      [tempKeySymbol3, setTempKeySymbol3],
      [tempKeySymbol4, setTempKeySymbol4],
    ],
    guitar: [
      [tempGuitarSymbol1, setTempGuitarSymbol1],
      [tempGuitarSymbol2, setTempGuitarSymbol2],
      [tempGuitarSymbol3, setTempGuitarSymbol3],
      [tempGuitarSymbol4, setTempGuitarSymbol4],
    ],
  };

  const bar2: BarType = {
    keys: [
      [tempKeySymbol5, setTempKeySymbol5],
      [tempKeySymbol6, setTempKeySymbol6],
      [tempKeySymbol7, setTempKeySymbol7],
      [tempKeySymbol8, setTempKeySymbol8],
    ],
    guitar: [
      [tempGuitarSymbol5, setTempGuitarSymbol5],
      [tempGuitarSymbol6, setTempGuitarSymbol6],
      [tempGuitarSymbol7, setTempGuitarSymbol7],
      [tempGuitarSymbol8, setTempGuitarSymbol8],
    ],
  };

  const bar3: BarType = {
    keys: [
      [tempKeySymbol9, setTempKeySymbol9],
      [tempKeySymbol10, setTempKeySymbol10],
      [tempKeySymbol11, setTempKeySymbol11],
      [tempKeySymbol12, setTempKeySymbol12],
    ],
    guitar: [
      [tempGuitarSymbol9, setTempGuitarSymbol9],
      [tempGuitarSymbol10, setTempGuitarSymbol10],
      [tempGuitarSymbol11, setTempGuitarSymbol11],
      [tempGuitarSymbol12, setTempGuitarSymbol12],
    ],
  };

  const bar4: BarType = {
    keys: [
      [tempKeySymbol13, setTempKeySymbol13],
      [tempKeySymbol14, setTempKeySymbol14],
      [tempKeySymbol15, setTempKeySymbol15],
      [tempKeySymbol16, setTempKeySymbol16],
    ],
    guitar: [
      [tempGuitarSymbol13, setTempGuitarSymbol13],
      [tempGuitarSymbol14, setTempGuitarSymbol14],
      [tempGuitarSymbol15, setTempGuitarSymbol15],
      [tempGuitarSymbol16, setTempGuitarSymbol16],
    ],
  };

  useEffect(() => {
    const toBeStored = {
      keys: {
        keySymbol1: tempKeySymbol1,
        keySymbol2: tempKeySymbol2,
        keySymbol3: tempKeySymbol3,
        keySymbol4: tempKeySymbol4,
        keySymbol5: tempKeySymbol5,
        keySymbol6: tempKeySymbol6,
        keySymbol7: tempKeySymbol7,
        keySymbol8: tempKeySymbol8,
        keySymbol9: tempKeySymbol9,
        keySymbol10: tempKeySymbol10,
        keySymbol11: tempKeySymbol11,
        keySymbol12: tempKeySymbol12,
        keySymbol13: tempKeySymbol13,
        keySymbol14: tempKeySymbol14,
        keySymbol15: tempKeySymbol15,
        keySymbol16: tempKeySymbol16,
      },
      guitar: {
        guitarSymbol1: tempGuitarSymbol1,
        guitarSymbol2: tempGuitarSymbol2,
        guitarSymbol3: tempGuitarSymbol3,
        guitarSymbol4: tempGuitarSymbol4,
        guitarSymbol5: tempGuitarSymbol5,
        guitarSymbol6: tempGuitarSymbol6,
        guitarSymbol7: tempGuitarSymbol7,
        guitarSymbol8: tempGuitarSymbol8,
        guitarSymbol9: tempGuitarSymbol9,
        guitarSymbol10: tempGuitarSymbol10,
        guitarSymbol11: tempGuitarSymbol11,
        guitarSymbol12: tempGuitarSymbol12,
        guitarSymbol13: tempGuitarSymbol13,
        guitarSymbol14: tempGuitarSymbol14,
        guitarSymbol15: tempGuitarSymbol15,
        guitarSymbol16: tempGuitarSymbol16,
      },
    };
    if (currentSong) {
      setSongList(
        saveRhythmNote(toBeStored, sectionNumber, songList, currentSong)
      );
    }
  }, [
    tempKeySymbol1,
    tempKeySymbol2,
    tempKeySymbol3,
    tempKeySymbol4,
    tempKeySymbol5,
    tempKeySymbol6,
    tempKeySymbol7,
    tempKeySymbol8,
    tempKeySymbol9,
    tempKeySymbol10,
    tempKeySymbol11,
    tempKeySymbol12,
    tempKeySymbol13,
    tempKeySymbol14,
    tempKeySymbol15,
    tempKeySymbol16,
    tempGuitarSymbol1,
    tempGuitarSymbol2,
    tempGuitarSymbol3,
    tempGuitarSymbol4,
    tempGuitarSymbol5,
    tempGuitarSymbol6,
    tempGuitarSymbol7,
    tempGuitarSymbol8,
    tempGuitarSymbol9,
    tempGuitarSymbol10,
    tempGuitarSymbol11,
    tempGuitarSymbol12,
    tempGuitarSymbol13,
    tempGuitarSymbol14,
    tempGuitarSymbol15,
    tempGuitarSymbol16,
  ]);

  return (
    <div className="flex bg-emerald-50 rounded-t-lg">
      <div className=" flex flex-col justify-evenly pt-4 px-2">
        <div>Keys</div>
        <div>Guitar</div>
      </div>
      <div className=" flex-1 flex justify-evenly">
        <RhythmBar
          currentNote={currentNote}
          barState={bar1}
          sectionData={sectionData}
          sectionNumber={sectionNumber}
        />
        <RhythmBar
          currentNote={currentNote}
          barState={bar2}
          sectionData={sectionData}
          sectionNumber={sectionNumber}
        />
        <RhythmBar
          currentNote={currentNote}
          barState={bar3}
          sectionData={sectionData}
          sectionNumber={sectionNumber}
        />
        <RhythmBar
          currentNote={currentNote}
          barState={bar4}
          sectionData={sectionData}
          sectionNumber={sectionNumber}
        />
      </div>
      <RhythmTools currentNote={currentNote} setCurrentNote={setCurrentNote} />
    </div>
  );
}
