"use client";
import { GrPowerReset } from "react-icons/gr";

export default function ResetTool({
  reset,
  setReset,
  setQuaver,
  setAnd,
  setCurrentNum,
}: {
  reset: boolean;
  setReset: React.Dispatch<React.SetStateAction<boolean>>;
  setQuaver: React.Dispatch<React.SetStateAction<boolean>>;
  setAnd: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentNum: React.Dispatch<React.SetStateAction<number>>;
}) {
  const buttonClass = "border-2 border-red-500 h-full p-2 flex justify-center";
  const clickedButtonClass =
    "border-2 border-red-500 h-full bg-red-500 text-white p-2 flex justify-center";
  return (
    <button
      className={reset ? clickedButtonClass : buttonClass}
      onClick={() => {
        setReset((curr) => !curr);
        setQuaver(false);
        setAnd(false);
        setCurrentNum(0);
      }}
    >
      <GrPowerReset />
    </button>
  );
}
