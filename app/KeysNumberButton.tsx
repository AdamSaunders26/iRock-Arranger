"use client";

import { useState } from "react";

export default function KeysNumberButton({
  num,
  currentNum,
  setCurrentNum,
}: {
  num: number;
  currentNum: number;
  setCurrentNum: React.Dispatch<React.SetStateAction<number>>;
}) {
  const buttonClass = "border-2 border-red-500 h-full flex-1";
  const clickedButtonClass =
    "border-2 border-red-500 h-full bg-red-500 text-white flex-1";

  return (
    <button
      className={currentNum === num ? clickedButtonClass : buttonClass}
      onClick={() => {
        setCurrentNum(num);
      }}
    >
      {num}
    </button>
  );
}
