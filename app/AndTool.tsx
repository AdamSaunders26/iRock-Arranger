"use client";

export default function AndTool({
  and,
  setAnd,
  setQuaver,
  setReset,
  setCurrentNum,
}: {
  and: boolean;
  setAnd: React.Dispatch<React.SetStateAction<boolean>>;
  setQuaver: React.Dispatch<React.SetStateAction<boolean>>;
  setReset: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentNum: React.Dispatch<React.SetStateAction<number>>;
}) {
  const buttonClass =
    "border-2 border-red-500 h-full p-2 flex  justify-center ";
  const clickedButtonClass =
    "border-2 border-red-500 h-full bg-red-500 text-white p-2 flex  justify-center";
  return (
    <button
      className={and ? clickedButtonClass : buttonClass}
      onClick={() => {
        setAnd((curr) => !curr);
        setReset(false);
        setQuaver(false);
        setCurrentNum(0);
      }}
    >
      +
    </button>
  );
}
