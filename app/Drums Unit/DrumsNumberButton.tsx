export default function DrumsNumberButton({
  num,
  currentNum,
  setCurrentNum,
  setReset,
  setQuaver,
  setAnd,
}: {
  num: number;
  currentNum: number;
  setCurrentNum: React.Dispatch<React.SetStateAction<number>>;
  setReset: React.Dispatch<React.SetStateAction<boolean>>;
  setQuaver: React.Dispatch<React.SetStateAction<boolean>>;
  setAnd: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const buttonClass = "p-2 ";
  const clickedButtonClass = " p-2 rounded-full bg-cyan-500 text-white";

  return (
    <button
      className={currentNum === num ? clickedButtonClass : buttonClass}
      onClick={() => {
        setCurrentNum(num);
        setReset(false);
        setQuaver(false);
        setAnd(false);
      }}
    >
      {num}
    </button>
  );
}
