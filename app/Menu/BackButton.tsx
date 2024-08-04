import { IoMdArrowRoundBack } from "react-icons/io";
export default function BackButton({
  setCurrentSong,
}: {
  setCurrentSong: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  return (
    <button
      className="  text-2xl m-1 p-1 flex items-center bg-white rounded-lg shadow-lg "
      onClick={() => {
        setCurrentSong(null);
      }}
    >
      <IoMdArrowRoundBack />
      <p className="text-lg">Songs</p>
    </button>
  );
}
