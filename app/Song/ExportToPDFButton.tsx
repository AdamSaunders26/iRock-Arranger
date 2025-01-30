import { format } from "path";
import { Options } from "react-to-pdf";

export default function ExportToPDFButton({
  toPDF,
}: {
  toPDF: (options?: Options) => void;
}) {
  return (
    <button
      className="shadow-lg bg-white   rounded-lg m-1 p-1"
      onClick={() => {
        toPDF();
      }}
    >
      Export to PDF
    </button>
  );
}
