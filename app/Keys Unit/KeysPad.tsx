"use client";
import { useContext, useEffect, useState } from "react";
import PianoKey from "./PianoKey";
import { iRockContext, iRockContextType, iRockDataType } from "../Context";
import { saveKeyPadData } from "../utils";

export default function KeysPad({
  sectionData,
  sectionNumber,
}: {
  sectionData: iRockDataType;
  sectionNumber: number;
}) {
  console.log(sectionNumber);
  const { section, tools } = useContext<iRockContextType>(iRockContext);
  const [currentNum, setCurrentNum] = tools.keysCurrentNum;
  const [songList, setSongList] = tools.songList;
  const currentSong = tools.currentSong[0];
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
  } = sectionData.keys;

  const [tempKey1, setTempKey1] = useState(key1);
  const [tempKey2, setTempKey2] = useState(key2);
  const [tempKey3, setTempKey3] = useState(key3);
  const [tempKey4, setTempKey4] = useState(key4);
  const [tempKey5, setTempKey5] = useState(key5);
  const [tempKey6, setTempKey6] = useState(key6);
  const [tempKey7, setTempKey7] = useState(key7);
  const [tempKey8, setTempKey8] = useState(key8);
  const [tempKey9, setTempKey9] = useState(key9);
  const [tempKey10, setTempKey10] = useState(key10);
  const [tempKey11, setTempKey11] = useState(key11);
  const [tempKey12, setTempKey12] = useState(key12);
  const [tempKey13, setTempKey13] = useState(key13);
  const [tempKey14, setTempKey14] = useState(key14);
  const [tempKey15, setTempKey15] = useState(key15);
  const [tempKey16, setTempKey16] = useState(key16);
  const [tempKey17, setTempKey17] = useState(key17);
  const [tempKey18, setTempKey18] = useState(key18);
  const [tempKey19, setTempKey19] = useState(key19);
  const [tempKey20, setTempKey20] = useState(key20);
  const [tempKey21, setTempKey21] = useState(key21);
  const [tempKey22, setTempKey22] = useState(key22);
  const [tempKey23, setTempKey23] = useState(key23);
  const [tempKey24, setTempKey24] = useState(key24);

  useEffect(() => {
    const toBeStored = {
      key1: tempKey1,
      key2: tempKey2,
      key3: tempKey3,
      key4: tempKey4,
      key5: tempKey5,
      key6: tempKey6,
      key7: tempKey7,
      key8: tempKey8,
      key9: tempKey9,
      key10: tempKey10,
      key11: tempKey11,
      key12: tempKey12,
      key13: tempKey13,
      key14: tempKey14,
      key15: tempKey15,
      key16: tempKey16,
      key17: tempKey17,
      key18: tempKey18,
      key19: tempKey19,
      key20: tempKey20,
      key21: tempKey21,
      key22: tempKey22,
      key23: tempKey23,
      key24: tempKey24,
    };

    setSongList(
      saveKeyPadData(toBeStored, sectionNumber, songList, currentSong)
    );
  }, [
    tempKey1,
    tempKey2,
    tempKey3,
    tempKey4,
    tempKey5,
    tempKey6,
    tempKey7,
    tempKey8,
    tempKey9,
    tempKey10,
    tempKey11,
    tempKey12,
    tempKey13,
    tempKey14,
    tempKey15,
    tempKey16,
    tempKey17,
    tempKey18,
    tempKey19,
    tempKey20,
    tempKey21,
    tempKey22,
    tempKey23,
    tempKey24,
  ]);
  return (
    <div className="border-purple-500 border-2 h-full w-full justify-evenly flex text-xs">
      <PianoKey
        kind="right"
        keyState1={tempKey1}
        setKeyState1={setTempKey1}
        keyState2={tempKey2}
        setKeyState2={setTempKey2}
        prevKeyState="none"
        currentNum={currentNum}
      />
      <PianoKey
        kind="both"
        keyState1={tempKey3}
        setKeyState1={setTempKey3}
        keyState2={tempKey4}
        setKeyState2={setTempKey4}
        prevKeyState={tempKey2}
        setPrevKeyState={setTempKey2}
        currentNum={currentNum}
      />
      <PianoKey
        kind="left"
        keyState1={tempKey5}
        setKeyState1={setTempKey5}
        keyState2="none"
        prevKeyState={tempKey4}
        setPrevKeyState={setTempKey4}
        currentNum={currentNum}
      />
      <PianoKey
        kind="right"
        keyState1={tempKey6}
        setKeyState1={setTempKey6}
        keyState2={tempKey7}
        setKeyState2={setTempKey7}
        prevKeyState="none"
        currentNum={currentNum}
      />
      <PianoKey
        kind="both"
        keyState1={tempKey8}
        setKeyState1={setTempKey8}
        keyState2={tempKey9}
        setKeyState2={setTempKey9}
        prevKeyState={tempKey7}
        setPrevKeyState={setTempKey7}
        currentNum={currentNum}
      />
      <PianoKey
        kind="both"
        keyState1={tempKey10}
        setKeyState1={setTempKey10}
        keyState2={tempKey11}
        setKeyState2={setTempKey11}
        prevKeyState={tempKey9}
        setPrevKeyState={setTempKey9}
        currentNum={currentNum}
      />
      <PianoKey
        kind="left"
        keyState1={tempKey12}
        setKeyState1={setTempKey12}
        keyState2="none"
        prevKeyState={tempKey11}
        setPrevKeyState={setTempKey11}
        currentNum={currentNum}
      />
      <PianoKey
        kind="right"
        keyState1={tempKey13}
        setKeyState1={setTempKey13}
        keyState2={tempKey14}
        setKeyState2={setTempKey14}
        prevKeyState="none"
        currentNum={currentNum}
      />
      <PianoKey
        kind="both"
        keyState1={tempKey15}
        setKeyState1={setTempKey15}
        keyState2={tempKey16}
        setKeyState2={setTempKey16}
        prevKeyState={tempKey14}
        setPrevKeyState={setTempKey14}
        currentNum={currentNum}
      />
      <PianoKey
        kind="left"
        keyState1={tempKey17}
        setKeyState1={setTempKey17}
        keyState2="none"
        prevKeyState={tempKey16}
        setPrevKeyState={setTempKey16}
        currentNum={currentNum}
      />
      <PianoKey
        kind="right"
        keyState1={tempKey18}
        setKeyState1={setTempKey18}
        keyState2={tempKey19}
        setKeyState2={setTempKey19}
        prevKeyState="none"
        currentNum={currentNum}
      />
      <PianoKey
        kind="both"
        keyState1={tempKey20}
        setKeyState1={setTempKey20}
        keyState2={tempKey21}
        setKeyState2={setTempKey21}
        prevKeyState={tempKey19}
        setPrevKeyState={setTempKey19}
        currentNum={currentNum}
      />
      <PianoKey
        kind="both"
        keyState1={tempKey22}
        setKeyState1={setTempKey22}
        keyState2={tempKey23}
        setKeyState2={setTempKey23}
        prevKeyState={tempKey21}
        setPrevKeyState={setTempKey21}
        currentNum={currentNum}
      />
      <PianoKey
        kind="left"
        keyState1={tempKey24}
        setKeyState1={setTempKey24}
        keyState2="none"
        prevKeyState={tempKey23}
        setPrevKeyState={setTempKey23}
        currentNum={currentNum}
      />
    </div>
  );
}
