export default function BackButton({
  setCurrentSong,
}: {
  setCurrentSong: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  return (
    <button
      className="bg-blue-400 mx-auto rounded-lg m-1 p-1"
      onClick={() => {
        setCurrentSong(null);
      }}
    >
      Back to song list
    </button>
  );
}
