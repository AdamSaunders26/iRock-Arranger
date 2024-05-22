"use client";

import { useState } from "react";

export default function ToolButton() {
  const buttonClass = "border-2 border-red-500 h-full p-2";
  const clickedButtonClass =
    "border-2 border-red-500 h-full bg-red-500 text-white p-2";
  const [clicked, setClicked] = useState(false);
  return (
    <button
      className={clicked ? clickedButtonClass : buttonClass}
      onClick={() => {
        setClicked((curr) => !curr);
      }}
    >
      tool
    </button>
  );
}
