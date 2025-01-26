import { useState } from "react";
import { iRockDataType } from "../Context";
import NameInput from "./NameInput";

export default function GuitarStudents({
  sectionData,
  sectionNumber,
}: {
  sectionData: iRockDataType;
  sectionNumber: number;
}) {
  const [student1, setStudent1] = useState(
    sectionData.guitar.students.student1
  );
  const [student2, setStudent2] = useState(
    sectionData.guitar.students.student2
  );
  const [student3, setStudent3] = useState(
    sectionData.guitar.students.student3
  );

  return (
    <div className="flex justify-between gap-2">
      <NameInput
        sectionData={sectionData}
        sectionNumber={sectionNumber}
        tempName={student1}
        setTempName={setStudent1}
        studentNumber={1}
      />
      <NameInput
        sectionData={sectionData}
        sectionNumber={sectionNumber}
        tempName={student2}
        setTempName={setStudent2}
        studentNumber={2}
      />
      <NameInput
        sectionData={sectionData}
        sectionNumber={sectionNumber}
        tempName={student3}
        setTempName={setStudent3}
        studentNumber={3}
      />
    </div>
  );
}

//should allow user to input initials for each guitar
//should rotate users between guitars with button push
