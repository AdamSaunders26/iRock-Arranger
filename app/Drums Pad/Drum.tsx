"use client";
import { useState } from "react";
import { IconType } from "react-icons";
import { LuMusic2 } from "react-icons/lu";

export default function Drum({
  kind,
  currentNum,
  reset,
  quaver,
  and,
}: {
  kind: string;
  currentNum: number;
  reset: boolean;
  quaver: boolean;
  and: boolean;
}) {
  const drum =
    "border-2 border-black bg-[#CABEBB] rounded-full w-12 h-12  flex justify-center items-center";
  const drum1 =
    "border-2 border-black bg-[#CABEBB] ml-4 mr-1 rounded-full w-12 h-12  flex justify-center items-center";
  const cymbal =
    "border-2 border-black bg-[#E3BB6C] rounded-full w-10 h-10  flex justify-center items-center";
  const cymbal1 =
    "border-2 border-black bg-[#E3BB6C] ml-4 rounded-full w-10 h-10  flex justify-center items-center";
  const cymbal2 =
    "border-2 border-black bg-[#E3BB6C]  rounded-full w-10 h-10  flex justify-center items-center";
  const pedal =
    "border-2 border-black bg-neutral-300 text-center place-self-center text-xs  w-5 h-10  flex justify-center items-center rotate-12 ";
  const pedal1 =
    "border-2 border-black text-center bg-neutral-300 place-self-center text-xs  w-5 h-10  flex justify-center items-center -rotate-12";

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
    case "pedal1":
      divName = pedal1;
      break;
    default:
      break;
  }

  const [text, setText] = useState<string | JSX.Element>("");

  function clickHandler() {
    if (reset) {
      setText("");
    } else if (quaver) {
      setText(<LuMusic2 />);
    } else if (and) {
      setText((curr) => {
        return curr + `+`;
      });
    } else {
      if (typeof text == "object") {
        console.log("noted");
        setText(() => {
          return `${currentNum}`;
        });
      } else {
        setText((curr) => {
          return curr + ` ${currentNum}`;
        });
      }
    }
  }

  return (
    <p
      onClick={() => {
        clickHandler();
      }}
      className={divName}
    >
      {text ? text : null}
    </p>
  );
}
