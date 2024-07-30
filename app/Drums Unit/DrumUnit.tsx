import DrumsNumberSelector from "./DrumsNumberSelector";
import DrumsToolSelector from "./DrumsToolSelector";
import DrumPad from "./DrumPad";

export default function DrumsUnit({}: // currentNum,
// reset,
// quaver,
// and,
// setCurrentNum,
// setReset,
// setQuaver,
// setAnd,
{
  currentNum: number;
  reset: boolean;
  quaver: boolean;
  and: boolean;
  setCurrentNum: React.Dispatch<React.SetStateAction<number>>;
  setReset: React.Dispatch<React.SetStateAction<boolean>>;
  setQuaver: React.Dispatch<React.SetStateAction<boolean>>;
  setAnd: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex">
      <DrumPad />
      <DrumsNumberSelector />
      <DrumsToolSelector />
    </div>
  );
}
