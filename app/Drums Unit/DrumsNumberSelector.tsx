import DrumsNumberButton from "./DrumsNumberButton";

export default function DrumsNumberSelector({
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
  const numbers = [1, 2, 3, 4];
  return (
    <div className="flex flex-col w-10 text-center h-full">
      {numbers.map((number, i) => {
        return (
          <DrumsNumberButton
            key={i}
            num={number}
            currentNum={currentNum}
            setCurrentNum={setCurrentNum}
            setReset={setReset}
            setQuaver={setQuaver}
            setAnd={setAnd}
          />
        );
      })}
    </div>
  );
}
