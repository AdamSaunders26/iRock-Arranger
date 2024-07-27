import AndTool from "../AndTool";
import QuaverTool from "../QuaverTool";
import ResetTool from "../ResetTool";
import ToolButton from "../ToolButton";
import DrumsTool from "./DrumsTool";

export default function DrumsToolSelector({
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
