import KeysNumberButton from "./KeysNumberButton";

export default function KeysNumberSelector() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div className="flex flex-1 items-center mr-2 ">
      {numbers.map((number, i) => {
        return <KeysNumberButton key={i} num={number} />;
      })}
    </div>
  );
}
