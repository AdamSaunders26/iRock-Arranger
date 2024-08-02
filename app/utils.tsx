"use client";

export function saveSectionName(
  sectionName: string,
  sectionNumber: number,
  songList: any,
  currentSong: number
) {
  const songListCopy = objectCopier(songList);
  songListCopy.songList[currentSong][sectionNumber].sectionName = sectionName;

  localStorage.setItem("songList", JSON.stringify(songListCopy));
  return songListCopy;
}
export function saveChords(
  chords: string,
  sectionNumber: number,
  songList: any,
  currentSong: number
) {
  const songListCopy = objectCopier(songList);
  songListCopy.songList[currentSong][sectionNumber].chords = chords;

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
  currentSong: number
) {
  const songListCopy = objectCopier(songList);
  songListCopy.songList[currentSong][sectionNumber].rhythm = updatedNotes;
  localStorage.setItem("songList", JSON.stringify(songListCopy));
  return songListCopy;
}

export function saveKeyPadData(
  updatedKeys: Record<string, string>,
  sectionNumber: number,
  songList: any,
  currentSong: number
) {
  const songListCopy = objectCopier(songList);
  songListCopy.songList[currentSong][sectionNumber].keys = updatedKeys;
  return songListCopy;
}
export function saveDrumPadData(
  updatedDrums: Record<string, string>,
  sectionNumber: number,
  songList: any,
  currentSong: number
) {
  const songListCopy = objectCopier(songList);
  songListCopy.songList[currentSong][sectionNumber].drums = updatedDrums;
  console.log(songListCopy);
  return songListCopy;
}

export function objectCopier(object: any) {
  return JSON.parse(JSON.stringify(object));
}
