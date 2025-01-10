import Fret from "./Fret";

export default function FretBoard() {
  return (
    <div className="border-red-500 border-2 m-2 flex">
      <Fret />
      <Fret />
      <Fret marker={0} />
      <Fret />
      <Fret marker={0} />
      <Fret />
      <Fret marker={0} />
      <Fret />
      <Fret marker={0} />
      <Fret />
      <Fret />
      <Fret marker={1} />
      <Fret />
      <Fret />
      <Fret marker={0} />
      <Fret />
      <Fret marker={0} />
      <Fret />
      <Fret marker={0} />
      <Fret />
    </div>
  );
}
