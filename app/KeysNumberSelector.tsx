import KeysNumberButton from "./KeysNumberButton";

export default function KeysNumberSelector({
  currentNum,
  setCurrentNum,
}: {
  currentNum: number;
  setCurrentNum: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="flex  flex-1 items-center ">
      <KeysNumberButton
        num={1}
        currentNum={currentNum}
        setCurrentNum={setCurrentNum}
      />
      <KeysNumberButton
        num={2}
        currentNum={currentNum}
        setCurrentNum={setCurrentNum}
      />
      <KeysNumberButton
        num={3}
        currentNum={currentNum}
        setCurrentNum={setCurrentNum}
      />
      <KeysNumberButton
        num={4}
        currentNum={currentNum}
        setCurrentNum={setCurrentNum}
      />
      <KeysNumberButton
        num={5}
        currentNum={currentNum}
        setCurrentNum={setCurrentNum}
      />
    </div>
  );
}
