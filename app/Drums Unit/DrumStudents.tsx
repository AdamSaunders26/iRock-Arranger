"use client";
import { useState } from "react";
import { iRockDataType } from "../Context";
import DrumNameInput from "./DrumNameInput";
import DrumCycleButton from "./DrumCycleButton";

export default function DrumStudents({
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

  //   if (sectionData.drums.students) {
  //     setStudent1(sectionData.drums.students.student1);
  //     setStudent2(sectionData.drums.students.student2);
  //   }
  return (
    <div className="flex justify-between gap-2 pr-2">
      <DrumNameInput
        sectionData={sectionData}
        sectionNumber={sectionNumber}
        tempName={student1}
        setTempName={setStudent1}
        studentNumber={1}
      />
      <DrumNameInput
        sectionData={sectionData}
        sectionNumber={sectionNumber}
        tempName={student2}
        setTempName={setStudent2}
        studentNumber={2}
      />
      <DrumCycleButton
        student1={student1}
        student2={student2}
        setStudent1={setStudent1}
        setStudent2={setStudent2}
        sectionNumber={sectionNumber}
      />
    </div>
  );
}
