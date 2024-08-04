export default function SongNameInput({
  songName,
  setSongName,
}: {
  songName: string;
  setSongName: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <label htmlFor="section">Section: </label>
        <input
          className={songName === "Name?" ? "text-neutral-500" : "text-black"}
          id="section"
          value={songName}
          onFocus={() => {
            if (songName === "Name?") {
              // setSectionName("");
            }
          }}
          onChange={(e) => {
            setSongName(e.target.value);
            // console.log(tempSectionName);
          }}
        />
      </div>
    </div>
  );
}
