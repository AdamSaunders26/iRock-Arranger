import ChordInput from "./ChordInput";
import KeysNumberSelector from "./KeysNumberSelector";
import KeysPad from "./KeysPad";

export default function KeysUnit() {
  return (
    <div className="flex flex-col border-2 border-orange-500 w-full  overflow-x-scroll">
      <KeysPad />
      <div className="flex justify-evenly">
        <KeysNumberSelector />
        <ChordInput />
      </div>
    </div>
  );
}
