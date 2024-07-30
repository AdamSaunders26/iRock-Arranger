import { useContext } from "react";
import DrumsNumberButton from "./DrumsNumberButton";
import { iRockContext, iRockContextType } from "../Context";

export default function DrumsNumberSelector() {
  const numbers = [1, 2, 3, 4];

  const { tools } = useContext<iRockContextType>(iRockContext);
  const { drumsCurrentNum, quaver, and, reset } = tools.drums;
  return (
    <div className="flex flex-col w-10 text-center h-full">
      {numbers.map((number, i) => {
        return (
          <DrumsNumberButton
            key={i}
            num={number}
            currentNum={drumsCurrentNum[0]}
            setCurrentNum={drumsCurrentNum[1]}
            setReset={reset[1]}
            setQuaver={quaver[1]}
            setAnd={and[1]}
          />
        );
      })}
    </div>
  );
}
