"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import { blankDataStruct } from "./modelData";

export interface iRockContextType {
  // storageFunction: () => void;
  tools: {
    drums: {
      drumsCurrentNum: [number, React.Dispatch<React.SetStateAction<number>>];
      reset: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
      quaver: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
      and: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
    };
    keysCurrentNum: [number, React.Dispatch<React.SetStateAction<number>>];
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
  rhythm: {
    keys: Record<string, string>;
    guitar: Record<string, string>;
  };
  keys: Record<string, string>;
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
  const [drumsCurrentNum, setDrumsCurrentNum] = useState(1);
  const [keysCurrentNum, setKeysCurrentNum] = useState(1);
  const [reset, setReset] = useState(false);
  const [quaver, setQuaver] = useState(false);
  const [and, setAnd] = useState(false);
  const [currentSong, setCurrentSong] = useState<null | string>(null);
  const [songList, setSongList] = useState({ songList: {} });

  return (
    <iRockContext.Provider
      value={{
        // storageFunction: storageFunction,
        tools: {
          drums: {
            drumsCurrentNum: [drumsCurrentNum, setDrumsCurrentNum],
            reset: [reset, setReset],
            quaver: [quaver, setQuaver],
            and: [and, setAnd],
          },
          keysCurrentNum: [keysCurrentNum, setKeysCurrentNum],
          currentSong: [currentSong, setCurrentSong],
          songList: [songList, setSongList],
        },
      }}
    >
      {children}
    </iRockContext.Provider>
  );
}
