import { useState } from "react";
import RhythmBar from "./RhythmBar";
import RhythmTools from "./RhythmTools";

export default function RhythmStave() {
  const [currentNote, setCurrentNote] = useState("crotchet");

  return (
    <div className="flex">
      <div className="border-2 border-orange-500 flex flex-col justify-evenly">
        <div>Beats</div>
        <div>Keys</div>
        <div>Guitar</div>
      </div>
      <div className="border-2 border-blue-500 flex-1 flex justify-evenly">
        <RhythmBar />
        <RhythmBar />
        <RhythmBar />
        <RhythmBar />
      </div>
      <RhythmTools setCurrentNote={setCurrentNote} />
    </div>
  );
}
