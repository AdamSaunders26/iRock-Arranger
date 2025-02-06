import { useContext, useEffect, useState } from "react";
import { iRockContext, iRockContextType, iRockDataType } from "../Context";
import { saveNotes } from "../utils";

export default function NotesSection({ songName }: { songName: string }) {
  const { tools } = useContext<iRockContextType>(iRockContext);
  const currentSong = tools.currentSong[0];
  const [noteList, setNoteList] = tools.noteList;

  const [tempNotes, setTempNotes] = useState(noteList[songName]);

  useEffect(() => {
    if (currentSong) {
      console.log(noteList[currentSong]);
      if (noteList[currentSong]) {
        setTempNotes(noteList[currentSong]);
      } else {
        noteList[currentSong] = "";
      }
    }
  }, []);

  //Add expand button for two different sizes

  return (
    <div className="bg-primary border-4 border-primary rounded-lg shadow-lg flex flex-col w-full  my-2">
      <h1 className="text-white ml-2">Notes: </h1>
      <textarea
        className="w-full rounded-md p-1 "
        rows={5}
        defaultValue={tempNotes}
        onChange={(e) => {
          if (currentSong) {
            saveNotes(e.target.value, currentSong, noteList, setNoteList);
            setTempNotes(e.target.value);
          }
        }}
      />
    </div>
  );
}
