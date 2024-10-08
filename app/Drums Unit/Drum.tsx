"use client";
import { useContext, useState } from "react";
import { IconType } from "react-icons";
import quaverIcon from "../symbols/U+266B_d.svg";
import { LuMusic2 } from "react-icons/lu";
import { iRockContext, iRockContextType } from "../Context";
import Image from "next/image";

export default function Drum({
  kind,
  currentNum,
  reset,
  quaver,
  and,
  drumText,
  setDrumText,
}: {
  kind: string;
  currentNum: number;
  reset: boolean;
  quaver: boolean;
  and: boolean;
  drumText: string;
  setDrumText: React.Dispatch<React.SetStateAction<string>>;
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

  function clickHandler() {
    if (reset) {
      setDrumText("");
    } else if (quaver) {
      setDrumText("q");
    } else if (and) {
      setDrumText((curr) => {
        return curr === "q" ? "+" : curr + `+`;
      });
    } else {
      if (typeof drumText == "object") {
        setDrumText(() => {
          return `${currentNum}`;
        });
      } else if (drumText === "q") {
        setDrumText((curr) => {
          return `${currentNum}`;
        });
      } else {
        setDrumText((curr) => {
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
      {drumText ? (
        drumText === "q" ? (
          <Image src={quaverIcon} alt="quaver" className="max-h-4 max-w-4" />
        ) : (
          drumText
        )
      ) : null}
    </p>
  );
}
