import AndTool from "./AndTool";
import QuaverTool from "./QuaverTool";
import ResetTool from "./ResetTool";
import ToolButton from "./ToolButton";

export default function ToolSelector({
  reset,
  setReset,
  quaver,
  setQuaver,
  and,
  setAnd,
  setCurrentNum,
}: {
  reset: boolean;
  setReset: React.Dispatch<React.SetStateAction<boolean>>;
  quaver: boolean;
  setQuaver: React.Dispatch<React.SetStateAction<boolean>>;
  and: boolean;
  setAnd: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentNum: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="flex flex-col justify-center">
      <ResetTool
        reset={reset}
        setReset={setReset}
        setQuaver={setQuaver}
        setAnd={setAnd}
        setCurrentNum={setCurrentNum}
      />
      <QuaverTool
        quaver={quaver}
        setQuaver={setQuaver}
        setReset={setReset}
        setAnd={setAnd}
        setCurrentNum={setCurrentNum}
      />
      <AndTool
        and={and}
        setAnd={setAnd}
        setQuaver={setQuaver}
        setReset={setReset}
        setCurrentNum={setCurrentNum}
      />
    </div>
  );
}
