import GuitarNumberSelector from "./GuitarNumberSelector";
import GuitarStudents from "./GuitarStudents";

export default function GuitarTools({
  currentNum,
  setCurrentNum,
}: {
  currentNum: number;
  setCurrentNum: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="flex justify-evenly pb-2 px-2">
      <GuitarNumberSelector
        currentNum={currentNum}
        setCurrentNum={setCurrentNum}
      />
      <GuitarStudents />
    </div>
  );
}
