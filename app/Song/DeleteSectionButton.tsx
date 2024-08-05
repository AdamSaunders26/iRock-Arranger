import { useContext, useState } from "react";
import { iRockContext, iRockContextType, iRockDataType } from "../Context";
import { objectCopier } from "../utils";
import Modal from "react-modal";

export default function DeleteSectionButton({
  sectionData,
  sectionNumber,
}: {
  sectionData: iRockDataType;
  sectionNumber: number;
}) {
  const { tools } = useContext<iRockContextType>(iRockContext);
  const [songList, setSongList] = tools.songList;
  const [currentSong, setCurrentSong] = tools.currentSong;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <div>
      <button
        className="bg-red-600 text-white shadow-lg rounded-md m-1 p-1 px-2"
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        Delete Section
      </button>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        style={customStyles}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
      >
        <div className="flex flex-col">
          <p className="text-xl p-6">
            Are you sure you want to delete {sectionData.sectionName}?
          </p>
          <div className="flex justify-between">
            <button
              className="bg-red-600 p-1 rounded-lg"
              onClick={() => {
                setModalIsOpen(false);
                const songListCopy = objectCopier(songList);
                if (currentSong) {
                  delete songListCopy.songList[currentSong][sectionNumber];
                  setSongList(songListCopy);
                  localStorage.setItem(
                    "songList",
                    JSON.stringify(songListCopy)
                  );
                  //   setCurrentSong(null);
                }
              }}
            >
              Delete {sectionData.sectionName}
            </button>
            <button
              className="bg-white border-2 border-black p-1 rounded-lg"
              onClick={() => {
                setModalIsOpen(false);
              }}
            >
              No, keep it
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
