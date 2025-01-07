"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import { blankDataStruct } from "./modelData";

export interface iRockContextType {
  // storageFunction: () => void;
  tools: {
    currentSong: [
      string | null,
      React.Dispatch<React.SetStateAction<string | null>>
    ];
    songList: [
      iRockSongListObjectType,
      React.Dispatch<React.SetStateAction<iRockSongListObjectType>>
    ];
  };
}

export interface iRockDataType {
  sectionName: string;
  chords: string;
  number: string;
  rhythm: {
    keys: Record<string, string>;
    guitar: Record<string, string>;
  };
  keys: Record<string, string[]>;
  drums: Record<string, string>;
}

export interface iRockSongType {
  [section: string]: iRockDataType;
}

export interface iRockSongListType {
  [song: string]: iRockSongType;
}

export interface iRockSongListObjectType {
  songList: iRockSongListType;
}
export const iRockContext = createContext<iRockContextType>(blankDataStruct);

export function IRockContextProvider({ children }: { children: ReactNode }) {
  const [currentSong, setCurrentSong] = useState<null | string>(null);
  const [songList, setSongList] = useState({ songList: {} });

  return (
    <iRockContext.Provider
      value={{
        // storageFunction: storageFunction,
        tools: {
          currentSong: [currentSong, setCurrentSong],
          songList: [songList, setSongList],
        },
      }}
    >
      {children}
    </iRockContext.Provider>
  );
}
