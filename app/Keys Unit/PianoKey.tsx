"use client";
import { useState } from "react";
import KeyDot from "./KeyDot";

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
  keyState1: string[];
  setKeyState1: React.Dispatch<React.SetStateAction<string[]>>;
  keyState2: string[];
  setKeyState2?: React.Dispatch<React.SetStateAction<string[]>>;
  prevKeyState: string[];
  setPrevKeyState?: React.Dispatch<React.SetStateAction<string[]>>;
  currentNum: number;
}) {
  const solid =
    "bg-black flex-1 text-center flex flex-col justify-center gap-1";
  const emptyR =
    "bg-white border-r-2 border-black flex-1 text-center flex flex-col justify-center gap-1";
  const emptyRLastTop =
    "bg-white  border-black rounded-tr-lg flex-1 text-center flex flex-col justify-center gap-1 ";
  const emptyRLastBottom =
    "bg-white  border-black rounded-br-lg flex-1 text-center flex flex-col justify-center gap-1";
  const emptyL =
    "bg-white border-l-2 border-black flex-1 text-center flex flex-col justify-center gap-1";
  const emptyLFirstTop =
    "bg-white border-black rounded-tl-lg flex-1 text-center flex flex-col justify-center gap-1";
  const emptyLFirstBottom =
    "bg-white border-black rounded-bl-lg flex-1 text-center flex flex-col justify-center gap-1";
  const bothR =
    "bg-black border-r-2 border-white flex-1  text-center flex flex-col justify-center gap-1";
  const bothL =
    "bg-black border-l-2 border-white flex-1  text-center flex flex-col justify-center gap-1";

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
    case "first":
      tlClass = emptyLFirstTop;
      trClass = solid;
      blClass = emptyLFirstBottom;
      brClass = emptyR;
      break;
    case "last":
      tlClass = solid;
      trClass = emptyRLastTop;
      blClass = emptyL;
      brClass = emptyRLastBottom;
      break;
    default:
      break;
  }

  function KS1() {
    currentNum === 5
      ? setKeyState1([])
      : setKeyState1((curr) => {
          const copy = [...curr];
          copy.push(`${currentNum}`);
          return copy;
        });
  }

  function KS2() {
    if (setKeyState2) {
      currentNum === 5
        ? setKeyState2([])
        : setKeyState2((curr) => {
            const copy = [...curr];
            copy.push(`${currentNum}`);
            return copy;
          });
    }
  }

  function PKS() {
    if (setPrevKeyState) {
      currentNum === 5
        ? setPrevKeyState([])
        : setPrevKeyState((curr) => {
            const copy = [...curr];
            copy.push(`${currentNum}`);
            return copy;
          });
    }
  }

  return (
    <div className=" h-full flex flex-col flex-1 justify-center items-center ">
      <div className=" flex flex-1 w-full min-h-16 ">
        <div
          className={tlClass}
          onClick={() => {
            switch (kind) {
              case "right":
                KS1();
                break;
              case "both":
                PKS();
                break;
              case "left":
                PKS();
                break;
              case "first":
                KS1();
                break;
              case "last":
                PKS();
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
                KS2();
                break;
              case "both":
                KS2();
                break;
              case "left":
                KS1();
                break;
              case "first":
                KS2();
                break;
              case "last":
                KS1();
                break;
              default:
                break;
            }
          }}
        >
          {kind !== "left" && kind !== "last"
            ? keyState2.map((val, i) => {
                return <KeyDot key={i} number={val} />;
              })
            : null}
        </div>
      </div>
      <div className=" flex w-full min-h-16">
        <div
          className={blClass}
          onClick={() => {
            switch (kind) {
              case "right":
                KS1();
                break;
              case "both":
                KS1();
                break;
              case "left":
                KS1();
                break;
              case "first":
                KS1();
                break;
              case "last":
                KS1();
                break;
              default:
                break;
            }
          }}
        >
          {keyState1.map((val, i) => {
            return <KeyDot key={i} number={val} />;
          })}
        </div>
        <div
          className={brClass}
          onClick={() => {
            switch (kind) {
              case "right":
                KS1();
                break;
              case "both":
                KS1();
                break;
              case "left":
                KS1();
                break;
              case "first":
                KS1();
                break;
              case "last":
                KS2();
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
