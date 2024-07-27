import { GrPowerReset } from "react-icons/gr";
import { LuMusic2 } from "react-icons/lu";

export default function DrumsTool({
  toolType,
  state,
  setMainState,
  setState1,
  setState2,
  setCurrentNum,
}: {
  toolType: string;
  state: boolean;
  setMainState: React.Dispatch<React.SetStateAction<boolean>>;
  setState1: React.Dispatch<React.SetStateAction<boolean>>;
  setState2: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentNum: React.Dispatch<React.SetStateAction<number>>;
}) {
  let icon: string | JSX.Element = "";

  switch (toolType) {
    case "reset":
      icon = <GrPowerReset />;
      break;
    case "quaver":
      icon = <LuMusic2 />;
      break;
    case "and":
      icon = "+";
      break;
    default:
      break;
  }

  const buttonClass = "border-2 border-red-500 h-full p-2 flex justify-center";
  const clickedButtonClass =
    "border-2 border-red-500 h-full bg-red-500 text-white p-2 flex justify-center";
  return (
    <button
      className={state ? clickedButtonClass : buttonClass}
      onClick={() => {
        setMainState((curr) => !curr);
        setState1(false);
        setState2(false);
        setCurrentNum(0);
      }}
    >
      {icon}
    </button>
  );
}
