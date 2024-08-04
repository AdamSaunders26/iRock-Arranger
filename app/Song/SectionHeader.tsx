import { iRockDataType } from "../Context";
import DeleteSectionButton from "./DeleteSectionButton";
import SectionNameInput from "./SectionNameInput";

export default function SectionHeader({
  sectionData,
  sectionNumber,
}: {
  sectionData: iRockDataType;
  sectionNumber: number;
}) {
  return (
    <div className="flex justify-between p-1">
      <SectionNameInput
        sectionData={sectionData}
        sectionNumber={sectionNumber}
      />
      <DeleteSectionButton
        sectionData={sectionData}
        sectionNumber={sectionNumber}
      />
    </div>
  );
}
