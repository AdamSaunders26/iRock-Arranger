"use client";

import { useState } from "react";

export default function NumberButton({
  num,
  currentNum,
  setCurrentNum,
}: {
  num: number;
  currentNum: number;
  setCurrentNum: React.Dispatch<React.SetStateAction<number>>;
}) {
  const buttonClass = "border-2 border-red-500 h-full";
  const clickedButtonClass =
    "border-2 border-red-500 h-full bg-red-500 text-white";

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