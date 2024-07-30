import { useContext } from "react";
import DrumsTool from "./DrumsTool";
import { iRockContext, iRockContextType } from "../Context";

export default function DrumsToolSelector() {
  const { tools } = useContext<iRockContextType>(iRockContext);
  const { drumsCurrentNum, quaver, and, reset } = tools.drums;
  return (
    <div className="flex flex-col justify-center items-center ">
      <DrumsTool
        toolType="reset"
        state={reset[0]}
        setMainState={reset[1]}
        setState1={quaver[1]}
        setState2={and[1]}
        setCurrentNum={drumsCurrentNum[1]}
      />
      <DrumsTool
        toolType="quaver"
        state={quaver[0]}
        setMainState={quaver[1]}
        setState1={reset[1]}
        setState2={and[1]}
        setCurrentNum={drumsCurrentNum[1]}
      />
      <DrumsTool
        toolType="and"
        state={and[0]}
        setMainState={and[1]}
        setState1={reset[1]}
        setState2={quaver[1]}
        setCurrentNum={drumsCurrentNum[1]}
      />
    </div>
  );
}
