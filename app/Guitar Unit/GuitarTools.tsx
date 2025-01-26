import { iRockDataType } from "../Context";
import GuitarNumberSelector from "./GuitarNumberSelector";
import GuitarStudents from "./GuitarStudents";

export default function GuitarTools({
  currentNum,
  setCurrentNum,
  sectionData,
  sectionNumber,
}: {
  currentNum: number;
  setCurrentNum: React.Dispatch<React.SetStateAction<number>>;
  sectionData: iRockDataType;
  sectionNumber: number;
}) {
  return (
    <div className="flex justify-evenly pb-2 px-2">
      <GuitarNumberSelector
        currentNum={currentNum}
        setCurrentNum={setCurrentNum}
      />
      <GuitarStudents sectionData={sectionData} sectionNumber={sectionNumber} />
    </div>
  );
}
