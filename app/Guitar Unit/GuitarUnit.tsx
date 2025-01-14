import { iRockDataType } from "../Context";
import FretBoard from "./FretBoard";

export default function GuitarUnit({
  sectionData,
  sectionNumber,
}: {
  sectionData: iRockDataType;
  sectionNumber: number;
}) {
  return (
    <div className="flex flex-col bg-yellow-100 rounded-t-lg">
      <FretBoard sectionData={sectionData} sectionNumber={sectionNumber} />
    </div>
  );
}
