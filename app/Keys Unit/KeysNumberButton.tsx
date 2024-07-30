import { useContext } from "react";
import { GrPowerReset } from "react-icons/gr";
import { iRockContext, iRockContextType } from "../Context";

export default function KeysNumberButton({ num }: { num: number }) {
  const buttonClass =
    "border-2 border-red-500 h-full flex-1 flex justify-center items-center";
  const clickedButtonClass =
    "border-2 border-red-500 h-full bg-red-500 text-white flex-1 flex justify-center items-center";

  const { tools } = useContext<iRockContextType>(iRockContext);
  const [currentNum, setCurrentNum] = tools.keysCurrentNum;
  return (
    <button
      className={currentNum === num ? clickedButtonClass : buttonClass}
      onClick={() => {
        setCurrentNum(num);
      }}
    >
      {num === 5 ? <GrPowerReset /> : num}
    </button>
  );
}
