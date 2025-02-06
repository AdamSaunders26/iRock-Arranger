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

export function saveStudentName(
  name: string,
  sectionNumber: number,
  songList: any,
  currentSong: string,
  studentNumber: number
) {
  const songListCopy = objectCopier(songList);
  songListCopy.songList[currentSong][sectionNumber].guitar.students[
    `student${studentNumber}`
  ] = name;

  localStorage.setItem("songList", JSON.stringify(songListCopy));
  return songListCopy;
}

export function saveMultipleStudentNames(
  names: string[],
  sectionNumber: number,
  songList: any,
  currentSong: string
) {
  const songListCopy = objectCopier(songList);
  songListCopy.songList[currentSong][sectionNumber].guitar.students = {
    student1: names[0],
    student2: names[1],
    student3: names[2],
  };
  localStorage.setItem("songList", JSON.stringify(songListCopy));
  return songListCopy;
}

export function saveDrumStudentName(
  name: string,
  sectionNumber: number,
  songList: any,
  currentSong: string,
  studentNumber: number
) {
  const songListCopy = objectCopier(songList);
  songListCopy.songList[currentSong][sectionNumber].drums.students[
    `student${studentNumber}`
  ] = name;
  localStorage.setItem("songList", JSON.stringify(songListCopy));
  return songListCopy;
}

export function saveMultipleDrumStudentNames(
  names: string[],
  sectionNumber: number,
  songList: any,
  currentSong: string
) {
  const songListCopy = objectCopier(songList);
  songListCopy.songList[currentSong][sectionNumber].drums.students = {
    student1: names[0],
    student2: names[1],
  };
  // console.log(songListCopy);
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
  const { drum1, drum2, drum3, drum4, drum5, drum6, drum7, drum8, drum9 } =
    updatedDrums;
  const songListCopy = objectCopier(songList);
  songListCopy.songList[currentSong][sectionNumber].drums.drum1 = drum1;
  songListCopy.songList[currentSong][sectionNumber].drums.drum2 = drum2;
  songListCopy.songList[currentSong][sectionNumber].drums.drum3 = drum3;
  songListCopy.songList[currentSong][sectionNumber].drums.drum4 = drum4;
  songListCopy.songList[currentSong][sectionNumber].drums.drum5 = drum5;
  songListCopy.songList[currentSong][sectionNumber].drums.drum6 = drum6;
  songListCopy.songList[currentSong][sectionNumber].drums.drum7 = drum7;
  songListCopy.songList[currentSong][sectionNumber].drums.drum8 = drum8;
  songListCopy.songList[currentSong][sectionNumber].drums.drum9 = drum9;
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

export function saveNotes(
  notes: string,
  songName: string,
  noteList: any,
  setNoteList: any
) {
  const noteListCopy = objectCopier(noteList);
  noteListCopy[songName] = notes;
  // console.log(localStorage.getItem("noteList"));
  // console.log(noteListCopy);
  localStorage.setItem("noteList", JSON.stringify(noteListCopy));
  setNoteList(noteListCopy);

  // localStorage.setItem("noteList", )
}
