"use client";
import { useState } from "react";

export default function Drum({ kind }: { kind: string }) {
  const drum = "border-2 border-cyan-500 rounded-full w-12 h-12";
  const drum1 = "border-2 border-cyan-200 ml-4 rounded-full w-12 h-12";
  const cymbal = "border-2 border-purple-500 rounded-full w-10 h-10";
  const cymbal1 = "border-2 border-purple-300 ml-4 rounded-full w-10 h-10";
  const cymbal2 = "border-2 border-purple-300 mb-4 rounded-full w-10 h-10";
  const pedal = "border-2 border-yellow-500 place-self-center  w-5 h-10";

  let divName = "";

  switch (kind) {
    case "drum":
      divName = drum;
      break;
    case "drum1":
      divName = drum1;
      break;
    case "cymbal":
      divName = cymbal;
      break;
    case "cymbal1":
      divName = cymbal1;
      break;
    case "cymbal2":
      divName = cymbal2;
      break;
    case "pedal":
      divName = pedal;
      break;
    default:
      break;
  }

  const [tap, setTap] = useState(false);

  return (
    <p
      onClick={() => {
        setTap((curr) => !curr);
      }}
      className={divName}
    >
      {tap ? "tap" : null}
    </p>
  );
}
