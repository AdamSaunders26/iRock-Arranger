"use client";

import { LuMusic2 } from "react-icons/lu";

export default function QuaverTool({
  quaver,
  setQuaver,
  setReset,
}: {
  quaver: boolean;
  setQuaver: React.Dispatch<React.SetStateAction<boolean>>;
  setReset: React.Dispatch<React.SetStateAction<boolean>>;
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
      }}
    >
      <LuMusic2 className="" />
    </button>
  );
}
