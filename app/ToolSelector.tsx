import ResetTool from "./ResetTool";
import ToolButton from "./ToolButton";

export default function ToolSelector({
  reset,
  setReset,
}: {
  reset: boolean;
  setReset: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex flex-col">
      <ResetTool reset={reset} setReset={setReset} />
      <ToolButton />
      <ToolButton />
    </div>
  );
}
