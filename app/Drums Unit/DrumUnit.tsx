import DrumsNumberSelector from "./DrumsNumberSelector";
import DrumsToolSelector from "./DrumsToolSelector";
import DrumPad from "./DrumPad";

export default function DrumsUnit() {
  return (
    <div className="flex">
      <DrumPad />
      <DrumsNumberSelector />
      <DrumsToolSelector />
    </div>
  );
}
