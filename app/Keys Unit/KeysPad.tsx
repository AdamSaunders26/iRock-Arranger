"use client";
import { useContext, useState } from "react";
import PianoKey from "./PianoKey";
import { iRockContext, iRockContextType } from "../Context";

export default function KeysPad({ currentNum }: { currentNum: number }) {
  const { section } = useContext<iRockContextType>(iRockContext);
  console.log(section.keys);
  const {
    key1,
    key2,
    key3,
    key4,
    key5,
    key6,
    key7,
    key8,
    key9,
    key10,
    key11,
    key12,
    key13,
    key14,
    key15,
    key16,
    key17,
    key18,
    key19,
    key20,
    key21,
    key22,
    key23,
    key24,
  } = section.keys;

  // const [key1, setKey1] = useState("");
  // const [key2, setKey2] = useState("");
  // const [key3, setKey3] = useState("");
  // const [key4, setKey4] = useState("");
  // const [key5, setKey5] = useState("");
  // const [key6, setKey6] = useState("");
  // const [key7, setKey7] = useState("");
  // const [key8, setKey8] = useState("");
  // const [key9, setKey9] = useState("");
  // const [key10, setKey10] = useState("");
  // const [key11, setKey11] = useState("");
  // const [key12, setKey12] = useState("");
  // const [key13, setKey13] = useState("");
  // const [key14, setKey14] = useState("");
  // const [key15, setKey15] = useState("");
  // const [key16, setKey16] = useState("");
  // const [key17, setKey17] = useState("");
  // const [key18, setKey18] = useState("");
  // const [key19, setKey19] = useState("");
  // const [key20, setKey20] = useState("");
  // const [key21, setKey21] = useState("");
  // const [key22, setKey22] = useState("");
  // const [key23, setKey23] = useState("");
  // const [key24, setKey24] = useState("");
  return (
    <div className="border-purple-500 border-2 h-full w-full justify-evenly flex text-xs">
      <PianoKey
        kind="right"
        keyState1={key1[0]}
        setKeyState1={key1[1]}
        keyState2={key2[0]}
        setKeyState2={key2[1]}
        prevKeyState="none"
        currentNum={currentNum}
      />
      <PianoKey
        kind="both"
        keyState1={key3[0]}
        setKeyState1={key3[1]}
        keyState2={key4[0]}
        setKeyState2={key4[1]}
        prevKeyState={key2[0]}
        setPrevKeyState={key2[1]}
        currentNum={currentNum}
      />
      <PianoKey
        kind="left"
        keyState1={key5[0]}
        setKeyState1={key5[1]}
        keyState2="none"
        prevKeyState={key4[0]}
        setPrevKeyState={key4[1]}
        currentNum={currentNum}
      />
      <PianoKey
        kind="right"
        keyState1={key6[0]}
        setKeyState1={key6[1]}
        keyState2={key7[0]}
        setKeyState2={key7[1]}
        prevKeyState="none"
        currentNum={currentNum}
      />
      <PianoKey
        kind="both"
        keyState1={key8[0]}
        setKeyState1={key8[1]}
        keyState2={key9[0]}
        setKeyState2={key9[1]}
        prevKeyState={key7[0]}
        setPrevKeyState={key7[1]}
        currentNum={currentNum}
      />
      <PianoKey
        kind="both"
        keyState1={key10[0]}
        setKeyState1={key10[1]}
        keyState2={key11[0]}
        setKeyState2={key11[1]}
        prevKeyState={key9[0]}
        setPrevKeyState={key9[1]}
        currentNum={currentNum}
      />
      <PianoKey
        kind="left"
        keyState1={key12[0]}
        setKeyState1={key12[1]}
        keyState2="none"
        prevKeyState={key11[0]}
        setPrevKeyState={key11[1]}
        currentNum={currentNum}
      />
      <PianoKey
        kind="right"
        keyState1={key13[0]}
        setKeyState1={key13[1]}
        keyState2={key14[0]}
        setKeyState2={key14[1]}
        prevKeyState="none"
        currentNum={currentNum}
      />
      <PianoKey
        kind="both"
        keyState1={key15[0]}
        setKeyState1={key15[1]}
        keyState2={key16[0]}
        setKeyState2={key16[1]}
        prevKeyState={key14[0]}
        setPrevKeyState={key14[1]}
        currentNum={currentNum}
      />
      <PianoKey
        kind="left"
        keyState1={key17[0]}
        setKeyState1={key17[1]}
        keyState2="none"
        prevKeyState={key16[0]}
        setPrevKeyState={key16[1]}
        currentNum={currentNum}
      />
      <PianoKey
        kind="right"
        keyState1={key18[0]}
        setKeyState1={key18[1]}
        keyState2={key19[0]}
        setKeyState2={key19[1]}
        prevKeyState="none"
        currentNum={currentNum}
      />
      <PianoKey
        kind="both"
        keyState1={key20[0]}
        setKeyState1={key20[1]}
        keyState2={key21[0]}
        setKeyState2={key21[1]}
        prevKeyState={key19[0]}
        setPrevKeyState={key19[1]}
        currentNum={currentNum}
      />
      <PianoKey
        kind="both"
        keyState1={key22[0]}
        setKeyState1={key22[1]}
        keyState2={key23[0]}
        setKeyState2={key23[1]}
        prevKeyState={key21[0]}
        setPrevKeyState={key21[1]}
        currentNum={currentNum}
      />
      <PianoKey
        kind="left"
        keyState1={key24[0]}
        setKeyState1={key24[1]}
        keyState2="none"
        prevKeyState={key23[0]}
        setPrevKeyState={key23[1]}
        currentNum={currentNum}
      />
    </div>
  );
}
