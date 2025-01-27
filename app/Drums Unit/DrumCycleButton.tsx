import { GrPowerCycle } from "react-icons/gr";
import {
  saveMultipleDrumStudentNames,
  saveMultipleStudentNames,
} from "../utils";
import { useContext } from "react";
import { iRockContext, iRockContextType } from "../Context";

export default function DrumCycleButton({
  student1,
  student2,
  setStudent1,
  setStudent2,
  sectionNumber,
}: {
  student1: string;
  student2: string;

  setStudent1: React.Dispatch<React.SetStateAction<string>>;
  setStudent2: React.Dispatch<React.SetStateAction<string>>;

  sectionNumber: number;
}) {
  const { tools } = useContext<iRockContextType>(iRockContext);
  const [songList, setSongList] = tools.songList;
  const currentSong = tools.currentSong[0];

  const currentStudentOrder = [student1, student2];

  function rotateStudents() {
    setStudent1(student2);
    setStudent2(student1);

    if (currentSong) {
      setSongList(
        saveMultipleDrumStudentNames(
          [student2, student1],
          sectionNumber,
          songList,
          currentSong
        )
      );
    }
  }
  return (
    <div
      className="flex h-full  items-center"
      onClick={() => {
        rotateStudents();
      }}
    >
      <GrPowerCycle />
    </div>
  );
}
