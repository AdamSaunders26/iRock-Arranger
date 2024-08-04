"use client";

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
  updatedKeys: Record<string, string>,
  sectionNumber: number,
  songList: any,
  currentSong: string
) {
  const songListCopy = objectCopier(songList);
  songListCopy.songList[currentSong][sectionNumber].keys = updatedKeys;
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
