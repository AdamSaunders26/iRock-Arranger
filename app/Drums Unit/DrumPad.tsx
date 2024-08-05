import { useContext, useEffect, useState } from "react";
import Drum from "./Drum";
import { iRockContext, iRockContextType, iRockDataType } from "../Context";
import { saveDrumPadData } from "../utils";

export default function DrumPad({
  sectionData,
  sectionNumber,
}: {
  sectionData: iRockDataType;
  sectionNumber: number;
}) {
  const { tools } = useContext<iRockContextType>(iRockContext);
  const { drum1, drum2, drum3, drum4, drum5, drum6, drum7, drum8, drum9 } =
    sectionData.drums;
  const [songList, setSongList] = tools.songList;
  const currentSong = tools.currentSong[0];

  const [tempDrum1, setTempDrum1] = useState(drum1);
  const [tempDrum2, setTempDrum2] = useState(drum2);
  const [tempDrum3, setTempDrum3] = useState(drum3);
  const [tempDrum4, setTempDrum4] = useState(drum4);
  const [tempDrum5, setTempDrum5] = useState(drum5);
  const [tempDrum6, setTempDrum6] = useState(drum6);
  const [tempDrum7, setTempDrum7] = useState(drum7);
  const [tempDrum8, setTempDrum8] = useState(drum8);
  const [tempDrum9, setTempDrum9] = useState(drum9);

  useEffect(() => {
    const toBeStored = {
      drum1: tempDrum1,
      drum2: tempDrum2,
      drum3: tempDrum3,
      drum4: tempDrum4,
      drum5: tempDrum5,
      drum6: tempDrum6,
      drum7: tempDrum7,
      drum8: tempDrum8,
      drum9: tempDrum9,
    };
    if (currentSong) {
      setSongList(
        saveDrumPadData(toBeStored, sectionNumber, songList, currentSong)
      );
    }
  }, [
    tempDrum1,
    tempDrum2,
    tempDrum3,
    tempDrum4,
    tempDrum5,
    tempDrum6,
    tempDrum7,
    tempDrum8,
    tempDrum9,
  ]);

  return (
    <div className=" p-2 flex">
      <div className="flex flex-col justify-evenly">
        <Drum
          kind={"cymbal1"}
          drumText={tempDrum1}
          setDrumText={setTempDrum1}
        />
        <Drum kind={"cymbal"} drumText={tempDrum2} setDrumText={setTempDrum2} />
        <Drum kind={"pedal1"} drumText={tempDrum3} setDrumText={setTempDrum3} />
      </div>
      <div className="flex flex-col justify-evenly">
        <Drum kind={"drum1"} drumText={tempDrum4} setDrumText={setTempDrum4} />
        <Drum kind={"drum"} drumText={tempDrum5} setDrumText={setTempDrum5} />
      </div>
      <div className="flex flex-col justify-evenly">
        <Drum kind={"drum"} drumText={tempDrum6} setDrumText={setTempDrum6} />
        <Drum kind={"pedal"} drumText={tempDrum7} setDrumText={setTempDrum7} />
      </div>
      <div className="flex flex-col justify-between py-2">
        <Drum
          kind={"cymbal2"}
          drumText={tempDrum8}
          setDrumText={setTempDrum8}
        />
        <Drum kind={"drum"} drumText={tempDrum9} setDrumText={setTempDrum9} />
      </div>
    </div>
  );
}
