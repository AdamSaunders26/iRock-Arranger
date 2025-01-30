import { useContext, useEffect, useState } from "react";
import { iRockContext, iRockContextType, iRockDataType } from "../Context";

export default function NotesSection({
  sectionData,
  sectionNumber,
}: {
  sectionData: iRockDataType;
  sectionNumber: number;
}) {
  const { tools } = useContext<iRockContextType>(iRockContext);
  const currentSong = tools.currentSong[0];
  const [noteList, setNoteList] = tools.noteList;

  const [tempNotes, setTempNotes] = useState(
    "For anything you need to remember!"
  );

  useEffect(() => {
    if (currentSong) {
      if (noteList[currentSong]) {
        setTempNotes(noteList[currentSong]);
      } else {
        noteList[currentSong] = "";
      }
    }
  }, []);

  //useEffect probably not needed
  //Need to write saving function next
  //then save automatically on change

  return (
    <div className="bg-primary border-4 border-primary rounded-lg shadow-lg flex flex-col w-full my-2">
      <h1 className="text-white ml-2">Notes: </h1>
      <textarea className="w-full rounded-md p-1" defaultValue={tempNotes} />
    </div>
  );
}
