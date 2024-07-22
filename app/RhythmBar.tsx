import BarSymbol from "./BarSymbol";

export default function RhythmBar() {
  const timeSig = 4;
  const bars = [];
  for (let i = 0; i < timeSig; i++) {
    bars.push(i + 1);
  }

  console.log(bars);
  return (
    <div className="grid grid-cols-4 grid-rows-3 w-full">
      {bars.map((n) => {
        return <div>{n}</div>;
      })}
      {bars.map((n) => {
        return <BarSymbol />;
      })}
      {bars.map((n) => {
        return <BarSymbol />;
      })}
    </div>
  );
}
