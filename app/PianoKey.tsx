"use client";
import { useState } from "react";

export default function PianoKey({
  kind,
  keyState1,
  setKeyState1,
  keyState2,
  setKeyState2,
  prevKeyState,
  setPrevKeyState,
  currentNum,
}: {
  kind: string;
  keyState1: string;
  setKeyState1: React.Dispatch<React.SetStateAction<string>>;
  keyState2: string;
  setKeyState2?: React.Dispatch<React.SetStateAction<string>>;
  prevKeyState: string;
  setPrevKeyState?: React.Dispatch<React.SetStateAction<string>>;
  currentNum: number;
}) {
  // const [key1Pressed, setKey1Pressed] = useState(false);
  // const [key2Pressed, setKey2Pressed] = useState(false);

  const solid = "bg-black flex-1 text-white text-center";
  const emptyR = "bg-white border-r-2 border-black flex-1 text-center";
  const emptyL = "bg-white border-l-2 border-black flex-1 text-center";
  const bothR =
    "bg-black border-r-2 border-white flex-1 text-white text-center";
  const bothL =
    "bg-black border-l-2 border-white flex-1 text-white text-center";

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

  return (
    <div className=" h-full flex flex-col flex-1 justify-center items-center ">
      <div className=" flex flex-1 w-full min-h-8 ">
        <div
          className={tlClass}
          onClick={() => {
            switch (kind) {
              case "right":
                setKeyState1(() => {
                  return `${currentNum}`;
                });
                break;
              case "both":
                setPrevKeyState
                  ? setPrevKeyState(() => {
                      return `${currentNum}`;
                    })
                  : null;
                break;
              case "left":
                setPrevKeyState
                  ? setPrevKeyState(() => {
                      return `${currentNum}`;
                    })
                  : null;
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
                setKeyState2
                  ? setKeyState2(() => {
                      return `${currentNum}`;
                    })
                  : null;
                break;
              case "both":
                setKeyState2
                  ? setKeyState2(() => {
                      return `${currentNum}`;
                    })
                  : null;
                break;
              case "left":
                setKeyState1(() => {
                  return `${currentNum}`;
                });
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
                setKeyState1(() => {
                  return `${currentNum}`;
                });
                break;
              case "both":
                setKeyState1(() => {
                  return `${currentNum}`;
                });
                break;
              case "left":
                setKeyState1(() => {
                  return `${currentNum}`;
                });
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
                setKeyState1(() => {
                  return `${currentNum}`;
                });
                break;
              case "both":
                setKeyState1(() => {
                  return `${currentNum}`;
                });
                break;
              case "left":
                setKeyState1(() => {
                  return `${currentNum}`;
                });
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
