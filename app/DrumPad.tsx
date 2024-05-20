import Drum from "./Drum";

export default function DrumPad() {
  return (
    <div className="border-2 border-orange-500 flex">
      <div className=" flex flex-col">
        <Drum kind={"cymbal1"} />
        <Drum kind={"cymbal"} />
        <Drum kind={"pedal"} />
      </div>
      <div className=" flex flex-col justify-evenly">
        <Drum kind={"drum1"} />
        <Drum kind={"drum"} />
      </div>
      <div className=" flex flex-col justify-evenly">
        <Drum kind={"drum"} />
        <Drum kind={"pedal"} />
      </div>
      <div className=" flex flex-col justify-evenly">
        <Drum kind={"cymbal2"} />
        <Drum kind={"drum"} />
      </div>
    </div>
  );
}
