import NumberButton from "./NumberButton";

export default function NumberSelector({
  currentNum,
  setCurrentNum,
  setReset,
  setQuaver,
  setAnd,
}: {
  currentNum: number;
  setCurrentNum: React.Dispatch<React.SetStateAction<number>>;
  setReset: React.Dispatch<React.SetStateAction<boolean>>;
  setQuaver: React.Dispatch<React.SetStateAction<boolean>>;
  setAnd: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex flex-col w-10 text-center h-full">
      <NumberButton
        num={1}
        currentNum={currentNum}
        setCurrentNum={setCurrentNum}
        setReset={setReset}
        setQuaver={setQuaver}
        setAnd={setAnd}
      />
      <NumberButton
        num={2}
        currentNum={currentNum}
        setCurrentNum={setCurrentNum}
        setReset={setReset}
        setQuaver={setQuaver}
        setAnd={setAnd}
      />
      <NumberButton
        num={3}
        currentNum={currentNum}
        setCurrentNum={setCurrentNum}
        setReset={setReset}
        setQuaver={setQuaver}
        setAnd={setAnd}
      />
      <NumberButton
        num={4}
        currentNum={currentNum}
        setCurrentNum={setCurrentNum}
        setReset={setReset}
        setQuaver={setQuaver}
        setAnd={setAnd}
      />
    </div>
  );
}
