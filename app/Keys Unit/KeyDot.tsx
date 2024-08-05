export default function KeyDot({ number }: { number: string }) {
  let keyClass = "";

  switch (number) {
    case "1":
      keyClass = "bg-blue-400 rounded-full  ";
      break;
    case "2":
      keyClass = "bg-red-400 rounded-full  ";
      break;
    case "3":
      keyClass = "bg-green-400 rounded-full  ";
      break;
    case "4":
      keyClass = "bg-yellow-400 rounded-full  ";
      break;
    default:
      break;
  }
  return <p className={keyClass}>{number}</p>;
}
