import NumberButton from "./NumberButton";

export default function NumberSelector({
  currentNum,
  setCurrentNum,
}: {
  currentNum: number;
  setCurrentNum: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="flex flex-col w-10 text-center h-full">
      <NumberButton
        num={1}
        currentNum={currentNum}
        setCurrentNum={setCurrentNum}
      />
      <NumberButton
        num={2}
        currentNum={currentNum}
        setCurrentNum={setCurrentNum}
      />
      <NumberButton
        num={3}
        currentNum={currentNum}
        setCurrentNum={setCurrentNum}
      />
      <NumberButton
        num={4}
        currentNum={currentNum}
        setCurrentNum={setCurrentNum}
      />
    </div>
  );
}
