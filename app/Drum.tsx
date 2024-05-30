"use client";
import { useState } from "react";
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
    "border-2 border-cyan-500 rounded-full w-12 h-12  flex justify-center items-center";
  const drum1 =
    "border-2 border-cyan-200 ml-4 rounded-full w-12 h-12  flex justify-center items-center";
  const cymbal =
    "border-2 border-purple-500 rounded-full w-10 h-10  flex justify-center items-center";
  const cymbal1 =
    "border-2 border-purple-300 ml-4 rounded-full w-10 h-10  flex justify-center items-center";
  const cymbal2 =
    "border-2 border-purple-300 mb-4 rounded-full w-10 h-10  flex justify-center items-center";
  const pedal =
    "border-2 border-yellow-500 place-self-center  w-5 h-10  flex justify-center items-center";

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

  const [text, setText] = useState("");
  console.log(typeof text);
  return (
    <p
      onClick={() => {
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
      }}
      className={divName}
    >
      {text ? text : null}
    </p>
  );
}
