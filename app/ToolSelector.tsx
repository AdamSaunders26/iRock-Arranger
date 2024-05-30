import QuaverTool from "./QuaverTool";
import ResetTool from "./ResetTool";
import ToolButton from "./ToolButton";

export default function ToolSelector({
  reset,
  setReset,
  quaver,
  setQuaver,
}: {
  reset: boolean;
  setReset: React.Dispatch<React.SetStateAction<boolean>>;
  quaver: boolean;
  setQuaver: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex flex-col justify-center">
      <ResetTool reset={reset} setReset={setReset} setQuaver={setQuaver} />
      <QuaverTool quaver={quaver} setQuaver={setQuaver} setReset={setReset} />
      <ToolButton />
    </div>
  );
}
