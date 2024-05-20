import DrumPad from "./DrumPad";
import KeysPad from "./KeysPad";
import RhythmStave from "./RhythmStave";

export default function Section() {
  return (
    <div className="border-2 border-green-500 flex justify-end w-full ">
      <div className="flex flex-col border-2 border-orange-500 w-full">
        <p className="w-full">section type</p>
        <RhythmStave />
        <KeysPad />
      </div>
      <DrumPad />
    </div>
  );
}
