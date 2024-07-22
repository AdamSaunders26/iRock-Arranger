import RhythmBar from "./RhythmBar";
import RhythmNumbers from "./RhythmNumbers";

export default function RhythmStave() {
  return (
    <div className="flex">
      <div className="border-2 border-orange-500">
        <div>Beats</div>
        <div>Keys</div>
        <div>Guitar</div>
      </div>
      <div className="border-2 border-blue-500 flex-1 flex justify-evenly">
        {/* <RhythmNumbers /> */}
        <RhythmBar />
        <RhythmBar />
        <RhythmBar />
        <RhythmBar />
      </div>
    </div>
  );
}
