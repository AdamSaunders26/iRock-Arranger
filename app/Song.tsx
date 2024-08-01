"use client";

import { useContext } from "react";
import { iRockContext, iRockContextType } from "./Context";

export default function Song() {
  const { section, tools } = useContext<iRockContextType>(iRockContext);
  const currentSong = tools.currentSong[0];
  return (
    <div className="flex flex-col">
      <div>Current Song: {currentSong}</div>
      <button>New Section</button>
      Here are all the songs!
    </div>
  );
}
