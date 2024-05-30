import PianoKey from "./PianoKey";

export default function KeysPad() {
  return (
    <div className="border-purple-500 border-2 h-full w-full justify-evenly flex">
      <PianoKey kind="right" />
      <PianoKey kind="both" />
      <PianoKey kind="left" />
      <PianoKey kind="right" />
      <PianoKey kind="both" />
      <PianoKey kind="both" />
      <PianoKey kind="left" />
      <PianoKey kind="right" />
      <PianoKey kind="both" />
      <PianoKey kind="left" />
      <PianoKey kind="right" />
      <PianoKey kind="both" />
      <PianoKey kind="both" />
      <PianoKey kind="left" />
    </div>
  );
}
