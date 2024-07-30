import { useContext } from "react";
import Drum from "./Drum";
import { iRockContext, iRockContextType } from "../Context";

export default function DrumPad() {
  const { section, tools } = useContext<iRockContextType>(iRockContext);
  const { drum1, drum2, drum3, drum4, drum5, drum6, drum7, drum8, drum9 } =
    section.drums;

  return (
    <div className="border-2 border-orange-500 p-2 flex">
      <div className=" flex flex-col justify-evenly">
        <Drum kind={"cymbal1"} drumText={drum1[0]} setDrumText={drum1[1]} />
        <Drum kind={"cymbal"} drumText={drum2[0]} setDrumText={drum2[1]} />
        <Drum kind={"pedal1"} drumText={drum3[0]} setDrumText={drum3[1]} />
      </div>
      <div className=" flex flex-col justify-evenly">
        <Drum kind={"drum1"} drumText={drum4[0]} setDrumText={drum4[1]} />
        <Drum kind={"drum"} drumText={drum5[0]} setDrumText={drum5[1]} />
      </div>
      <div className=" flex flex-col justify-evenly">
        <Drum kind={"drum"} drumText={drum6[0]} setDrumText={drum6[1]} />
        <Drum kind={"pedal"} drumText={drum7[0]} setDrumText={drum7[1]} />
      </div>
      <div className=" flex flex-col justify-between py-2">
        <Drum kind={"cymbal2"} drumText={drum8[0]} setDrumText={drum8[1]} />
        <Drum kind={"drum"} drumText={drum9[0]} setDrumText={drum9[1]} />
      </div>
    </div>
  );
}
