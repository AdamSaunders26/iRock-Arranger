"use client";
import { useState } from "react";
import PianoKey from "./PianoKey";

export default function KeysPad() {
  const [key1, setKey1] = useState("1");
  const [key2, setKey2] = useState("2");
  const [key3, setKey3] = useState("3");
  const [key4, setKey4] = useState("4");
  const [key5, setKey5] = useState("5");
  const [key6, setKey6] = useState("6");
  const [key7, setKey7] = useState("7");
  const [key8, setKey8] = useState("8");
  const [key9, setKey9] = useState("9");
  const [key10, setKey10] = useState("10");
  const [key11, setKey11] = useState("11");
  const [key12, setKey12] = useState("12");
  const [key13, setKey13] = useState("13");
  const [key14, setKey14] = useState("14");
  const [key15, setKey15] = useState("15");
  const [key16, setKey16] = useState("16");
  const [key17, setKey17] = useState("17");
  const [key18, setKey18] = useState("18");
  const [key19, setKey19] = useState("19");
  const [key20, setKey20] = useState("20");
  const [key21, setKey21] = useState("21");
  const [key22, setKey22] = useState("22");
  const [key23, setKey23] = useState("23");
  const [key24, setKey24] = useState("24");
  return (
    <div className="border-purple-500 border-2 h-full w-full justify-evenly flex">
      <PianoKey kind="right" keyState1={key1} keyState2={key2} />
      <PianoKey kind="both" keyState1={key3} keyState2={key4} />
      <PianoKey kind="left" keyState1={key5} keyState2="none" />
      <PianoKey kind="right" keyState1={key6} keyState2={key7} />
      <PianoKey kind="both" keyState1={key8} keyState2={key9} />
      <PianoKey kind="both" keyState1={key10} keyState2={key11} />
      <PianoKey kind="left" keyState1={key12} keyState2="none" />
      <PianoKey kind="right" keyState1={key13} keyState2={key14} />
      <PianoKey kind="both" keyState1={key15} keyState2={key16} />
      <PianoKey kind="left" keyState1={key17} keyState2="none" />
      <PianoKey kind="right" keyState1={key18} keyState2={key19} />
      <PianoKey kind="both" keyState1={key20} keyState2={key21} />
      <PianoKey kind="both" keyState1={key22} keyState2={key23} />
      <PianoKey kind="left" keyState1={key24} keyState2="none" />
    </div>
  );
}
