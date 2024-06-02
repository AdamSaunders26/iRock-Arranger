"use client";

import { useState } from "react";
import { GrPowerReset } from "react-icons/gr";

export default function KeysNumberButton({
  num,
  currentNum,
  setCurrentNum,
}: {
  num: number;
  currentNum: number;
  setCurrentNum: React.Dispatch<React.SetStateAction<number>>;
}) {
  const buttonClass =
    "border-2 border-red-500 h-full flex-1 flex justify-center items-center";
  const clickedButtonClass =
    "border-2 border-red-500 h-full bg-red-500 text-white flex-1 flex justify-center items-center";

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
