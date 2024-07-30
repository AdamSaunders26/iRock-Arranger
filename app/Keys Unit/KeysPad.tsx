"use client";
import { useState } from "react";
import PianoKey from "./PianoKey";

export default function KeysPad({ currentNum }: { currentNum: number }) {
  const [key1, setKey1] = useState("");
  const [key2, setKey2] = useState("");
  const [key3, setKey3] = useState("");
  const [key4, setKey4] = useState("");
  const [key5, setKey5] = useState("");
  const [key6, setKey6] = useState("");
  const [key7, setKey7] = useState("");
  const [key8, setKey8] = useState("");
  const [key9, setKey9] = useState("");
  const [key10, setKey10] = useState("");
  const [key11, setKey11] = useState("");
  const [key12, setKey12] = useState("");
  const [key13, setKey13] = useState("");
  const [key14, setKey14] = useState("");
  const [key15, setKey15] = useState("");
  const [key16, setKey16] = useState("");
  const [key17, setKey17] = useState("");
  const [key18, setKey18] = useState("");
  const [key19, setKey19] = useState("");
  const [key20, setKey20] = useState("");
  const [key21, setKey21] = useState("");
  const [key22, setKey22] = useState("");
  const [key23, setKey23] = useState("");
  const [key24, setKey24] = useState("");
  return (
    <div className="border-purple-500 border-2 h-full w-full justify-evenly flex text-xs">
      <PianoKey
        kind="right"
        keyState1={key1}
        setKeyState1={setKey1}
        keyState2={key2}
        setKeyState2={setKey2}
        prevKeyState="none"
        currentNum={currentNum}
      />
      <PianoKey
        kind="both"
        keyState1={key3}
        setKeyState1={setKey3}
        keyState2={key4}
        setKeyState2={setKey4}
        prevKeyState={key2}
        setPrevKeyState={setKey2}
        currentNum={currentNum}
      />
      <PianoKey
        kind="left"
        keyState1={key5}
        setKeyState1={setKey5}
        keyState2="none"
        prevKeyState={key4}
        setPrevKeyState={setKey4}
        currentNum={currentNum}
      />
      <PianoKey
        kind="right"
        keyState1={key6}
        setKeyState1={setKey6}
        keyState2={key7}
        setKeyState2={setKey7}
        prevKeyState="none"
        currentNum={currentNum}
      />
      <PianoKey
        kind="both"
        keyState1={key8}
        setKeyState1={setKey8}
        keyState2={key9}
        setKeyState2={setKey9}
        prevKeyState={key7}
        setPrevKeyState={setKey7}
        currentNum={currentNum}
      />
      <PianoKey
        kind="both"
        keyState1={key10}
        setKeyState1={setKey10}
        keyState2={key11}
        setKeyState2={setKey11}
        prevKeyState={key9}
        setPrevKeyState={setKey9}
        currentNum={currentNum}
      />
      <PianoKey
        kind="left"
        keyState1={key12}
        setKeyState1={setKey12}
        keyState2="none"
        prevKeyState={key11}
        setPrevKeyState={setKey11}
        currentNum={currentNum}
      />
      <PianoKey
        kind="right"
        keyState1={key13}
        setKeyState1={setKey13}
        keyState2={key14}
        setKeyState2={setKey14}
        prevKeyState="none"
        currentNum={currentNum}
      />
      <PianoKey
        kind="both"
        keyState1={key15}
        setKeyState1={setKey15}
        keyState2={key16}
        setKeyState2={setKey16}
        prevKeyState={key14}
        setPrevKeyState={setKey14}
        currentNum={currentNum}
      />
      <PianoKey
        kind="left"
        keyState1={key17}
        setKeyState1={setKey17}
        keyState2="none"
        prevKeyState={key16}
        setPrevKeyState={setKey16}
        currentNum={currentNum}
      />
      <PianoKey
        kind="right"
        keyState1={key18}
        setKeyState1={setKey18}
        keyState2={key19}
        setKeyState2={setKey19}
        prevKeyState="none"
        currentNum={currentNum}
      />
      <PianoKey
        kind="both"
        keyState1={key20}
        setKeyState1={setKey20}
        keyState2={key21}
        setKeyState2={setKey21}
        prevKeyState={key19}
        setPrevKeyState={setKey19}
        currentNum={currentNum}
      />
      <PianoKey
        kind="both"
        keyState1={key22}
        setKeyState1={setKey22}
        keyState2={key23}
        setKeyState2={setKey23}
        prevKeyState={key21}
        setPrevKeyState={setKey21}
        currentNum={currentNum}
      />
      <PianoKey
        kind="left"
        keyState1={key24}
        setKeyState1={setKey24}
        keyState2="none"
        prevKeyState={key23}
        setPrevKeyState={setKey23}
        currentNum={currentNum}
      />
    </div>
  );
}
