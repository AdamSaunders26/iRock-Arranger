import { useState } from "react";
import { GuitarFretboard } from "../Context";
import Fret from "./Fret";

export default function GuitarString({
  currentNum,
  stringStates,
}: {
  currentNum: number;
  stringStates: GuitarFretboard;
}) {
  const {
    fret1,
    fret2,
    fret3,
    fret4,
    fret5,
    fret6,
    fret7,
    fret8,
    fret9,
    fret10,
    fret11,
    fret12,
    fret13,
    fret14,
    fret15,
    fret16,
    fret17,
    fret18,
    fret19,
    fret20,
    fret21,
    fret22,
    fret23,
    fret24,
  } = stringStates;

  const [tempFret1, setTempFret1] = useState(fret1);
  const [tempFret2, setTempFret2] = useState(fret2);
  const [tempFret3, setTempFret3] = useState(fret3);
  const [tempFret4, setTempFret4] = useState(fret4);
  const [tempFret5, setTempFret5] = useState(fret5);
  const [tempFret6, setTempFret6] = useState(fret6);
  const [tempFret7, setTempFret7] = useState(fret7);
  const [tempFret8, setTempFret8] = useState(fret8);
  const [tempFret9, setTempFret9] = useState(fret9);
  const [tempFret10, setTempFret10] = useState(fret10);
  const [tempFret11, setTempFret11] = useState(fret11);
  const [tempFret12, setTempFret12] = useState(fret12);
  const [tempFret13, setTempFret13] = useState(fret13);
  const [tempFret14, setTempFret14] = useState(fret14);
  const [tempFret15, setTempFret15] = useState(fret15);
  const [tempFret16, setTempFret16] = useState(fret16);
  const [tempFret17, setTempFret17] = useState(fret17);
  const [tempFret18, setTempFret18] = useState(fret18);
  const [tempFret19, setTempFret19] = useState(fret19);
  const [tempFret20, setTempFret20] = useState(fret20);

  return (
    <div className="flex">
      <Fret
        currentNum={currentNum}
        fretState={tempFret1}
        setFretState={setTempFret1}
      />
      <Fret
        currentNum={currentNum}
        fretState={tempFret2}
        setFretState={setTempFret2}
      />
      <Fret
        marker={0}
        currentNum={currentNum}
        fretState={tempFret3}
        setFretState={setTempFret3}
      />
      <Fret
        currentNum={currentNum}
        fretState={tempFret4}
        setFretState={setTempFret4}
      />
      <Fret
        marker={0}
        currentNum={currentNum}
        fretState={tempFret5}
        setFretState={setTempFret5}
      />
      <Fret
        currentNum={currentNum}
        fretState={tempFret6}
        setFretState={setTempFret6}
      />
      <Fret
        marker={0}
        currentNum={currentNum}
        fretState={tempFret7}
        setFretState={setTempFret7}
      />
      <Fret
        currentNum={currentNum}
        fretState={tempFret8}
        setFretState={setTempFret8}
      />
      <Fret
        marker={0}
        currentNum={currentNum}
        fretState={tempFret9}
        setFretState={setTempFret9}
      />
      <Fret
        currentNum={currentNum}
        fretState={tempFret10}
        setFretState={setTempFret10}
      />
      <Fret
        currentNum={currentNum}
        fretState={tempFret11}
        setFretState={setTempFret11}
      />
      <Fret
        marker={1}
        currentNum={currentNum}
        fretState={tempFret12}
        setFretState={setTempFret12}
      />
      <Fret
        currentNum={currentNum}
        fretState={tempFret13}
        setFretState={setTempFret13}
      />
      <Fret
        currentNum={currentNum}
        fretState={tempFret14}
        setFretState={setTempFret14}
      />
      <Fret
        marker={0}
        currentNum={currentNum}
        fretState={tempFret15}
        setFretState={setTempFret15}
      />
      <Fret
        currentNum={currentNum}
        fretState={tempFret16}
        setFretState={setTempFret16}
      />
      <Fret
        marker={0}
        currentNum={currentNum}
        fretState={tempFret17}
        setFretState={setTempFret17}
      />
      <Fret
        currentNum={currentNum}
        fretState={tempFret18}
        setFretState={setTempFret18}
      />
      <Fret
        marker={0}
        currentNum={currentNum}
        fretState={tempFret19}
        setFretState={setTempFret19}
      />
      <Fret
        currentNum={currentNum}
        fretState={tempFret20}
        setFretState={setTempFret20}
      />
    </div>
  );
}
