import ChordInput from "./ChordInput";
import KeysNumberSelector from "./KeysNumberSelector";
import KeysPad from "./KeysPad";

export default function KeysUnit({
  keysCurrentNum,
  setKeysCurrentNum,
}: {
  keysCurrentNum: number;
  setKeysCurrentNum: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="flex flex-col border-2 border-orange-500 w-full  overflow-x-scroll">
      <KeysPad currentNum={keysCurrentNum} />
      <div className="flex justify-evenly">
        <KeysNumberSelector
          currentNum={keysCurrentNum}
          setCurrentNum={setKeysCurrentNum}
        />
        <ChordInput />
      </div>
    </div>
  );
}
