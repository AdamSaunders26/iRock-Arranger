"use client";

import { useState } from "react";

export default function ResetTool({
  reset,
  setReset,
}: {
  reset: boolean;
  setReset: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const buttonClass = "border-2 border-red-500 h-full p-2";
  const clickedButtonClass =
    "border-2 border-red-500 h-full bg-red-500 text-white p-2";
  return (
    <button
      className={reset ? clickedButtonClass : buttonClass}
      onClick={() => {
        setReset((curr) => !curr);
      }}
    >
      Reset
    </button>
  );
}
