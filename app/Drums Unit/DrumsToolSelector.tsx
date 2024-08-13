import DrumsTool from "./DrumsTool";

export default function DrumsToolSelector({
  setCurrentNum,
  reset,
  and,
  quaver,
  setReset,
  setAnd,
  setQuaver,
}: {
  setCurrentNum: React.Dispatch<React.SetStateAction<number>>;
  reset: boolean;
  and: boolean;
  quaver: boolean;
  setReset: React.Dispatch<React.SetStateAction<boolean>>;
  setAnd: React.Dispatch<React.SetStateAction<boolean>>;
  setQuaver: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex flex-col justify-center gap-2 m-2 items-center ">
      <DrumsTool
        toolType="reset"
        state={reset}
        setMainState={setReset}
        setState1={setQuaver}
        setState2={setAnd}
        setCurrentNum={setCurrentNum}
      />
      <DrumsTool
        toolType="quaver"
        state={quaver}
        setMainState={setQuaver}
        setState1={setReset}
        setState2={setAnd}
        setCurrentNum={setCurrentNum}
      />
      <DrumsTool
        toolType="and"
        state={and}
        setMainState={setAnd}
        setState1={setReset}
        setState2={setQuaver}
        setCurrentNum={setCurrentNum}
      />
    </div>
  );
}
