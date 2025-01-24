export default function FretNumbers({ number }: { number: string }) {
  let keyClass = " rounded-full w-full text-center text-xs";

  switch (number) {
    case "1":
      keyClass += " bg-blue-400 ";
      break;
    case "2":
      keyClass += " bg-red-400 ";
      break;
    case "3":
      keyClass += " bg-green-400 ";
      break;
    case "4":
      keyClass += " bg-yellow-400 ";
      break;
    default:
      break;
  }
  return <p className={keyClass}>{number}</p>;
}
