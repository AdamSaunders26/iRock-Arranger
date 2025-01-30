import { useContext } from "react";
import { iRockContext, iRockContextType, iRockSongType } from "../Context";
import BackButton from "../Menu/BackButton";
import NewSectionButton from "./NewSectionButton";
import { DeleteSongButton } from "./DeleteSongButton";
import ExportToPDFButton from "./ExportToPDFButton";
import { Options } from "react-to-pdf";

export default function SongHeader({
  currentSongData,
  toPDF,
}: {
  currentSongData: iRockSongType;
  toPDF?: (options?: Options) => void;
}) {
  const { tools } = useContext<iRockContextType>(iRockContext);
  const [currentSong, setCurrentSong] = tools.currentSong;

  return (
    <h1 className="flex flex-col items-center justify-between  w-full">
      <p className="p-2 text-3xl ">{currentSong}</p>

      <div className="flex justify-between gap-2 w-full">
        <BackButton setCurrentSong={setCurrentSong} />
        <div className="flex justify-between gap-2">
          <NewSectionButton currentSongData={currentSongData} />
          <DeleteSongButton />
        </div>
        {/* <ExportToPDFButton toPDF={toPDF} /> */}
      </div>
    </h1>
  );
}
