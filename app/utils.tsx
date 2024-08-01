"use client";

export function saveSectionName(
  sectionName: string,
  sectionNumber: number,
  songList: any,
  currentSong: number
) {
  console.log(songList);
  console.log(currentSong);
  const songListCopy = objectCopier(songList);
  songListCopy.songList[currentSong][sectionNumber].sectionName = sectionName;
  console.log(songListCopy);

  localStorage.setItem("songList", JSON.stringify(songListCopy));
  return songListCopy;
}

export function objectCopier(object: any) {
  return JSON.parse(JSON.stringify(object));
}
