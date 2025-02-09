import { useContext, useEffect, useState } from "react";
import { iRockContext, iRockContextType, iRockDataType } from "../Context";
import { saveNotes } from "../utils";

export default function NotesSection({ songName }: { songName: string }) {
  const { tools } = useContext<iRockContextType>(iRockContext);
  const currentSong = tools.currentSong[0];
  const [noteList, setNoteList] = tools.noteList;

  const [tempNotes, setTempNotes] = useState(noteList[songName]);

  const [largeNotes, setLargeNotes] = useState(false);

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

  return (
    <div className="bg-primary border-4 border-primary rounded-lg shadow-lg flex flex-col w-full  my-2">
      <div className="flex justify-between items-center">
        <label
          htmlFor="notes"
          className="text-white ml-2 text-xl font-bold mb-1 "
        >
          Notes:
        </label>
        <button
          className="p-1 px-2 mb-2 mx-1 mt-1 bg-white rounded-lg"
          onClick={() => {
            setLargeNotes((curr) => !curr);
          }}
        >
          Expand
        </button>
      </div>
      <textarea
        className="w-full rounded-md p-1 "
        id="notes"
        rows={largeNotes ? 5 : 2}
        defaultValue={tempNotes}
        placeholder="Store any useful notes here."
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
