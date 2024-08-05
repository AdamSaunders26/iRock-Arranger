import DrumsNumberSelector from "./DrumsNumberSelector";
import DrumsToolSelector from "./DrumsToolSelector";
import DrumPad from "./DrumPad";
import { iRockDataType } from "../Context";

export default function DrumsUnit({
  sectionData,
  sectionNumber,
}: {
  sectionData: iRockDataType;
  sectionNumber: number;
}) {
  return (
    <div className="flex bg-cyan-100 rounded-br-lg">
      <DrumPad sectionData={sectionData} sectionNumber={sectionNumber} />
      <DrumsNumberSelector />
      <DrumsToolSelector />
    </div>
  );
}
