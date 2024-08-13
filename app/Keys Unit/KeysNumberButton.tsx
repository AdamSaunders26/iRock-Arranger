import { useContext } from "react";
import { GrPowerReset } from "react-icons/gr";
import { iRockContext, iRockContextType } from "../Context";

export default function KeysNumberButton({
  num,
  currentNum,
  setCurrentNum,
}: {
  num: number;
  currentNum: number;
  setCurrentNum: React.Dispatch<React.SetStateAction<number>>;
}) {
  const buttonClass = " h-full flex-1 flex justify-center items-center";
  const clickedButtonClass =
    "rounded-full h-full bg-rose-500 text-white flex-1 flex justify-center items-center";

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
