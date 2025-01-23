export default function Fret({
  marker,
  currentNum,
}: {
  marker?: number;
  currentNum: number;
}) {
  let fretClass = "border-r-2 border-slate-600 w-full flex flex-col py-2";
  if (marker == 0) {
    fretClass += " bg-yellow-200";
  } else if (marker == 1) {
    fretClass += " bg-yellow-400";
  }
  return (
    <div className={fretClass}>
      <div className="border-b-2 border-black"></div>
      <div></div>
    </div>
  );
}
