import { GrPowerReset } from "react-icons/gr";
import { LuMusic2 } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";
import quaverIcon from "../symbols/U+266B_d.svg";
import Image from "next/image";

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
      icon = (
        <Image src={quaverIcon} alt="quaver" className="max-h-4 max-w-4" />
      );
      break;
    case "and":
      icon = <FaPlus />;
      break;
    default:
      break;
  }

  const buttonClass = "  w-full p-2 flex justify-center items-center";
  const clickedButtonClass =
    "  w-full bg-cyan-500 rounded-full text-white p-2 flex justify-center items-center";
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
