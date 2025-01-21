import FretNote from "./FretNote";

export default function Fret({ marker }: { marker?: number }) {
  let fretClass = "border-r-2 border-slate-600 w-full flex flex-col";
  if (marker == 0) {
    fretClass += " bg-yellow-200";
  } else if (marker == 1) {
    fretClass += " bg-yellow-400";
  }
  return (
    <div className={fretClass}>
      <FretNote />
      <FretNote />
      <FretNote />
      <FretNote />
      <FretNote />
      <FretNote />
    </div>
  );
}
