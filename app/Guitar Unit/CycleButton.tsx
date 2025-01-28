import { GrPowerCycle } from "react-icons/gr";
import { saveMultipleStudentNames } from "../utils";
import { useContext } from "react";
import { iRockContext, iRockContextType } from "../Context";

export default function CycleButton({
  student1,
  student2,
  student3,
  setStudent1,
  setStudent2,
  setStudent3,
  sectionNumber,
}: {
  student1: string;
  student2: string;
  student3: string;
  setStudent1: React.Dispatch<React.SetStateAction<string>>;
  setStudent2: React.Dispatch<React.SetStateAction<string>>;
  setStudent3: React.Dispatch<React.SetStateAction<string>>;
  sectionNumber: number;
}) {
  const { tools } = useContext<iRockContextType>(iRockContext);
  const [songList, setSongList] = tools.songList;
  const currentSong = tools.currentSong[0];

  const currentStudentOrder = [student1, student2, student3];

  function rotateStudents() {
    setStudent1(currentStudentOrder[1]);
    setStudent2(currentStudentOrder[2]);
    setStudent3(currentStudentOrder[0]);
    if (currentSong) {
      setSongList(
        saveMultipleStudentNames(
          [student2, student3, student1],
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
