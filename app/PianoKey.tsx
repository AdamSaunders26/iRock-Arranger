export default function PianoKey({ kind }: { kind: string }) {
  const solid = "bg-black flex-1";
  const emptyR = "bg-white border-r-2 border-black flex-1";
  const emptyL = "bg-white border-l-2 border-black flex-1";
  const bothR = "bg-black border-r-2 border-white flex-1";
  const bothL = "bg-black border-l-2 border-white flex-1";

  let tlClass = "";
  let trClass = "";
  let blClass = "";
  let brClass = "";

  switch (kind) {
    case "right":
      tlClass = emptyL;
      trClass = solid;
      blClass = emptyL;
      brClass = emptyR;
      break;
    case "left":
      tlClass = solid;
      trClass = emptyR;
      blClass = emptyL;
      brClass = emptyR;
      break;
    case "both":
      tlClass = bothR;
      trClass = bothL;
      blClass = emptyL;
      brClass = emptyR;
      break;

    default:
      break;
  }
  return (
    <div className=" h-full flex flex-col flex-1 justify-center items-center ">
      <div className=" flex flex-1 w-full ">
        <div className={tlClass}></div>
        <div className={trClass}></div>
      </div>
      <div className=" flex w-full min-h-8">
        <div className={blClass}></div>
        <div className={brClass}></div>
      </div>
    </div>
  );
}
