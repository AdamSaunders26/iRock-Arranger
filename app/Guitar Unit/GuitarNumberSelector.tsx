import GuitarNumberButton from "./GuitarNumberButton";

export default function GuitarNumberSelector({
  currentNum,
  setCurrentNum,
}: {
  currentNum: number;
  setCurrentNum: React.Dispatch<React.SetStateAction<number>>;
}) {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div className="flex flex-1 items-center mr-2 max-w-[35%]">
      {numbers.map((number, i) => {
        return (
          <GuitarNumberButton
            key={i}
            num={number}
            currentNum={currentNum}
            setCurrentNum={setCurrentNum}
          />
        );
      })}
    </div>
  );
}
