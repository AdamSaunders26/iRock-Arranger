"use client";

import { GuitarFretboard } from "./Context";

export function saveSectionName(
  sectionName: string,
  sectionNumber: number,
  songList: any,
  currentSong: string
) {
  const songListCopy = objectCopier(songList);
  songListCopy.songList[currentSong][sectionNumber].sectionName = sectionName;

  localStorage.setItem("songList", JSON.stringify(songListCopy));
  return songListCopy;
}

export function saveSongData(
  newSongData: object,
  songList: any,
  currentSong: string
) {
  const songListCopy = objectCopier(songList);
  songListCopy.songList[currentSong] = newSongData;
  localStorage.setItem("songList", JSON.stringify(songListCopy));
  return songListCopy;
}

export function saveChords(
  chords: string,
  sectionNumber: number,
  songList: any,
  currentSong: string
) {
  const songListCopy = objectCopier(songList);
  songListCopy.songList[currentSong][sectionNumber].chords = chords;

  localStorage.setItem("songList", JSON.stringify(songListCopy));
  return songListCopy;
}

export function saveVoice(
  voice: string,
  sectionNumber: number,
  songList: any,
  currentSong: string
) {
  const songListCopy = objectCopier(songList);
  songListCopy.songList[currentSong][sectionNumber].voice = voice;

  localStorage.setItem("songList", JSON.stringify(songListCopy));
  return songListCopy;
}

export function saveRhythmNote(
  updatedNotes: {
    keys: Record<string, string>;
    guitar: Record<string, string>;
  },
  sectionNumber: number,
  songList: any,
  currentSong: string
) {
  const songListCopy = objectCopier(songList);
  songListCopy.songList[currentSong][sectionNumber].rhythm = updatedNotes;
  localStorage.setItem("songList", JSON.stringify(songListCopy));
  return songListCopy;
}

export function saveKeyPadData(
  updatedKeys: Record<string, string[]>,
  sectionNumber: number,
  songList: any,
  currentSong: string
) {
  const songListCopy = objectCopier(songList);

  songListCopy.songList[currentSong][sectionNumber].keys = updatedKeys;
  localStorage.setItem("songList", JSON.stringify(songListCopy));
  return songListCopy;
}

export function saveGuitarNoteData(
  updatedFretboard: GuitarFretboard,
  stringNumber: string,
  sectionNumber: number,
  songList: any,
  currentSong: string
) {
  const songListCopy = objectCopier(songList);
  songListCopy.songList[currentSong][sectionNumber].guitar[stringNumber] =
    updatedFretboard;
  localStorage.setItem("songList", JSON.stringify(songListCopy));
  return songListCopy;
}

export function saveDrumPadData(
  updatedDrums: Record<string, string>,
  sectionNumber: number,
  songList: any,
  currentSong: string
) {
  const songListCopy = objectCopier(songList);
  songListCopy.songList[currentSong][sectionNumber].drums = updatedDrums;
  localStorage.setItem("songList", JSON.stringify(songListCopy));
  return songListCopy;
}

export function saveSongName(songName: string, songList: any) {
  const songListCopy = objectCopier(songList);
  const existingName = Object.keys(songListCopy.songList).includes(songName);
  if (!existingName) {
    songListCopy.songList[songName] = {};
  }

  localStorage.setItem("songList", JSON.stringify(songListCopy));
  return songListCopy;
}

export function objectCopier(object: any) {
  return JSON.parse(JSON.stringify(object));
}

//xoezn't work with arrays...
export function structureUpdater(targetObject: any, modelObject: any) {
  let returnObject = objectCopier(targetObject);

  function propertyAdder(targetObject: any, modelObject: any) {
    for (const prop in modelObject) {
      if (typeof modelObject[prop] == "object" && modelObject[prop] !== null) {
        if (
          typeof targetObject[prop] !== "object" ||
          targetObject[prop] === null
        ) {
          targetObject[prop] = Array.isArray(modelObject[prop]) ? [] : {};
        }
        g;
        propertyAdder(targetObject[prop], modelObject[prop]);
      } else {
        if (!targetObject[prop]) targetObject[prop] = modelObject[prop];
        // console.log(object[prop]);
      }
    }
  }
  propertyAdder(returnObject, modelObject);

  return returnObject;
}
