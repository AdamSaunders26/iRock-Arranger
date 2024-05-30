"use client";

import { LuMusic2 } from "react-icons/lu";

export default function QuaverTool({
  quaver,
  setQuaver,
  setReset,
  setAnd,
  setCurrentNum,
}: {
  quaver: boolean;
  setQuaver: React.Dispatch<React.SetStateAction<boolean>>;
  setAnd: React.Dispatch<React.SetStateAction<boolean>>;
  setReset: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentNum: React.Dispatch<React.SetStateAction<number>>;
}) {
  const buttonClass =
    "border-2 border-red-500 h-full p-2 flex  justify-center ";
  const clickedButtonClass =
    "border-2 border-red-500 h-full bg-red-500 text-white p-2 flex  justify-center";
  return (
    <button
      className={quaver ? clickedButtonClass : buttonClass}
      onClick={() => {
        setQuaver((curr) => !curr);
        setReset(false);
        setAnd(false);
        setCurrentNum(0);
      }}
    >
      <LuMusic2 className="" />
    </button>
  );
}
