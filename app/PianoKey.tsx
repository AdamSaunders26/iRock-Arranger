"use client";
import { useState } from "react";

export default function PianoKey({
  kind,
  keyState1,
  keyState2,
}: // prevKeyState,
{
  kind: string;
  keyState1: string;
  keyState2: string;
  // prevKeyState: string;
}) {
  const [key1Pressed, setKey1Pressed] = useState(false);
  const [key2Pressed, setKey2Pressed] = useState(false);

  const solid = key2Pressed
    ? "bg-black flex-1 text-pink-500 text-center"
    : "bg-black flex-1 text-white text-center";
  const emptyR = key1Pressed
    ? "bg-white border-r-2 border-black flex-1 text-center text-pink-500"
    : "bg-white border-r-2 border-black flex-1 text-center";
  const emptyL = key1Pressed
    ? "bg-white border-l-2 border-black flex-1 text-center text-pink-500"
    : "bg-white border-l-2 border-black flex-1 text-center";
  const bothR = key2Pressed
    ? "bg-black border-r-2 border-white flex-1 text-pink-500 text-center"
    : "bg-black border-r-2 border-white flex-1 text-white text-center";
  const bothL = key2Pressed
    ? "bg-black border-l-2 border-white flex-1 text-pink-500 text-center"
    : "bg-black border-l-2 border-white flex-1 text-white text-center";

  let tlClass = "";
  let trClass = "";
  let blClass = "";
  let brClass = "";

  switch (kind) {
    case "right":
      tlClass = emptyL;
      trClass = solid;
      blClass = emptyL;
      brClass = emptyR;
      break;
    case "left":
      tlClass = solid;
      trClass = emptyR;
      blClass = emptyL;
      brClass = emptyR;
      break;
    case "both":
      tlClass = bothR;
      trClass = bothL;
      blClass = emptyL;
      brClass = emptyR;
      break;

    default:
      break;
  }

  const [text, setText] = useState("key");

  return (
    <div className=" h-full flex flex-col flex-1 justify-center items-center ">
      <div className=" flex flex-1 w-full ">
        <div
          className={tlClass}
          onClick={() => {
            switch (kind) {
              case "right":
                setKey1Pressed((curr) => !curr);
                break;
              default:
                break;
            }
          }}
        ></div>
        <div
          className={trClass}
          onClick={() => {
            switch (kind) {
              case "right":
                setKey2Pressed((curr) => !curr);
                break;
              default:
                break;
            }
          }}
        >
          {kind !== "left" ? keyState2 : null}
        </div>
      </div>
      <div className=" flex w-full min-h-8">
        <div
          className={blClass}
          onClick={() => {
            switch (kind) {
              case "right":
                setKey1Pressed((curr) => !curr);
                break;
              default:
                break;
            }
          }}
        >
          {keyState1}
        </div>
        <div
          className={brClass}
          onClick={() => {
            switch (kind) {
              case "right":
                setKey1Pressed((curr) => !curr);
                break;
              default:
                break;
            }
          }}
        ></div>
      </div>
    </div>
  );
}
