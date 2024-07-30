"use client";

import { createContext, ReactNode, useState } from "react";
import { blankDataStruct } from "./modelData";

export interface iRockContextType {
  tools: {
    drums: {
      drumsCurrentNum: [number, React.Dispatch<React.SetStateAction<number>>];
      reset: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
      quaver: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
      and: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
    };
    keysCurrentNum: [number, React.Dispatch<React.SetStateAction<number>>];
  };
  section: {
    sectionName: [string, React.Dispatch<React.SetStateAction<string>>];
    chords: [string, React.Dispatch<React.SetStateAction<string>>];
    rhythm: {
      keys: Record<
        string,
        [string, React.Dispatch<React.SetStateAction<string>>]
      >;
      guitar: Record<
        string,
        [string, React.Dispatch<React.SetStateAction<string>>]
      >;
    };
    keys: Record<
      string,
      [string, React.Dispatch<React.SetStateAction<string>>]
    >;
    drums: Record<
      string,
      [string, React.Dispatch<React.SetStateAction<string>>]
    >;
  };
}
export const iRockContext = createContext<iRockContextType>(blankDataStruct);

export function IRockContextProvider({ children }: { children: ReactNode }) {
  const [sectionName, setSectionName] = useState("Set section name");
  const [chords, setChords] = useState("Set chords");

  const [keySymbol1, setKeySymbol1] = useState("blank");
  const [keySymbol2, setKeySymbol2] = useState("blank");
  const [keySymbol3, setKeySymbol3] = useState("blank");
  const [keySymbol4, setKeySymbol4] = useState("blank");
  const [keySymbol5, setKeySymbol5] = useState("blank");
  const [keySymbol6, setKeySymbol6] = useState("blank");
  const [keySymbol7, setKeySymbol7] = useState("blank");
  const [keySymbol8, setKeySymbol8] = useState("blank");
  const [keySymbol9, setKeySymbol9] = useState("blank");
  const [keySymbol10, setKeySymbol10] = useState("blank");
  const [keySymbol11, setKeySymbol11] = useState("blank");
  const [keySymbol12, setKeySymbol12] = useState("blank");
  const [keySymbol13, setKeySymbol13] = useState("blank");
  const [keySymbol14, setKeySymbol14] = useState("blank");
  const [keySymbol15, setKeySymbol15] = useState("blank");
  const [keySymbol16, setKeySymbol16] = useState("blank");

  const [guitarSymbol1, setGuitarSymbol1] = useState("blank");
  const [guitarSymbol2, setGuitarSymbol2] = useState("blank");
  const [guitarSymbol3, setGuitarSymbol3] = useState("blank");
  const [guitarSymbol4, setGuitarSymbol4] = useState("blank");
  const [guitarSymbol5, setGuitarSymbol5] = useState("blank");
  const [guitarSymbol6, setGuitarSymbol6] = useState("blank");
  const [guitarSymbol7, setGuitarSymbol7] = useState("blank");
  const [guitarSymbol8, setGuitarSymbol8] = useState("blank");
  const [guitarSymbol9, setGuitarSymbol9] = useState("blank");
  const [guitarSymbol10, setGuitarSymbol10] = useState("blank");
  const [guitarSymbol11, setGuitarSymbol11] = useState("blank");
  const [guitarSymbol12, setGuitarSymbol12] = useState("blank");
  const [guitarSymbol13, setGuitarSymbol13] = useState("blank");
  const [guitarSymbol14, setGuitarSymbol14] = useState("blank");
  const [guitarSymbol15, setGuitarSymbol15] = useState("blank");
  const [guitarSymbol16, setGuitarSymbol16] = useState("blank");

  const [key1, setKey1] = useState("");
  const [key2, setKey2] = useState("");
  const [key3, setKey3] = useState("");
  const [key4, setKey4] = useState("");
  const [key5, setKey5] = useState("");
  const [key6, setKey6] = useState("");
  const [key7, setKey7] = useState("");
  const [key8, setKey8] = useState("");
  const [key9, setKey9] = useState("");
  const [key10, setKey10] = useState("");
  const [key11, setKey11] = useState("");
  const [key12, setKey12] = useState("");
  const [key13, setKey13] = useState("");
  const [key14, setKey14] = useState("");
  const [key15, setKey15] = useState("");
  const [key16, setKey16] = useState("");
  const [key17, setKey17] = useState("");
  const [key18, setKey18] = useState("");
  const [key19, setKey19] = useState("");
  const [key20, setKey20] = useState("");
  const [key21, setKey21] = useState("");
  const [key22, setKey22] = useState("");
  const [key23, setKey23] = useState("");
  const [key24, setKey24] = useState("");

  const [drum1, setDrum1] = useState("");
  const [drum2, setDrum2] = useState("");
  const [drum3, setDrum3] = useState("");
  const [drum4, setDrum4] = useState("");
  const [drum5, setDrum5] = useState("");
  const [drum6, setDrum6] = useState("");
  const [drum7, setDrum7] = useState("");
  const [drum8, setDrum8] = useState("");
  const [drum9, setDrum9] = useState("");

  const [drumsCurrentNum, setDrumsCurrentNum] = useState(1);
  const [keysCurrentNum, setKeysCurrentNum] = useState(1);
  const [reset, setReset] = useState(false);
  const [quaver, setQuaver] = useState(false);
  const [and, setAnd] = useState(false);
  return (
    <iRockContext.Provider
      value={{
        tools: {
          drums: {
            drumsCurrentNum: [drumsCurrentNum, setDrumsCurrentNum],
            reset: [reset, setReset],
            quaver: [quaver, setQuaver],
            and: [and, setAnd],
          },
          keysCurrentNum: [keysCurrentNum, setKeysCurrentNum],
        },
        section: {
          sectionName: [sectionName, setSectionName],
          chords: [chords, setChords],
          rhythm: {
            keys: {
              keySymbol1: [keySymbol1, setKeySymbol1],
              keySymbol2: [keySymbol2, setKeySymbol2],
              keySymbol3: [keySymbol3, setKeySymbol3],
              keySymbol4: [keySymbol4, setKeySymbol4],
              keySymbol5: [keySymbol5, setKeySymbol5],
              keySymbol6: [keySymbol6, setKeySymbol6],
              keySymbol7: [keySymbol7, setKeySymbol7],
              keySymbol8: [keySymbol8, setKeySymbol8],
              keySymbol9: [keySymbol9, setKeySymbol9],
              keySymbol10: [keySymbol10, setKeySymbol10],
              keySymbol11: [keySymbol11, setKeySymbol11],
              keySymbol12: [keySymbol12, setKeySymbol12],
              keySymbol13: [keySymbol13, setKeySymbol13],
              keySymbol14: [keySymbol14, setKeySymbol14],
              keySymbol15: [keySymbol15, setKeySymbol15],
              keySymbol16: [keySymbol16, setKeySymbol16],
            },
            guitar: {
              guitarSymbol1: [guitarSymbol1, setGuitarSymbol1],
              guitarSymbol2: [guitarSymbol2, setGuitarSymbol2],
              guitarSymbol3: [guitarSymbol3, setGuitarSymbol3],
              guitarSymbol4: [guitarSymbol4, setGuitarSymbol4],
              guitarSymbol5: [guitarSymbol5, setGuitarSymbol5],
              guitarSymbol6: [guitarSymbol6, setGuitarSymbol6],
              guitarSymbol7: [guitarSymbol7, setGuitarSymbol7],
              guitarSymbol8: [guitarSymbol8, setGuitarSymbol8],
              guitarSymbol9: [guitarSymbol9, setGuitarSymbol9],
              guitarSymbol10: [guitarSymbol10, setGuitarSymbol10],
              guitarSymbol11: [guitarSymbol11, setGuitarSymbol11],
              guitarSymbol12: [guitarSymbol12, setGuitarSymbol12],
              guitarSymbol13: [guitarSymbol13, setGuitarSymbol13],
              guitarSymbol14: [guitarSymbol14, setGuitarSymbol14],
              guitarSymbol15: [guitarSymbol15, setGuitarSymbol15],
              guitarSymbol16: [guitarSymbol16, setGuitarSymbol16],
            },
          },
          keys: {
            key1: [key1, setKey1],
            key2: [key2, setKey2],
            key3: [key3, setKey3],
            key4: [key4, setKey4],
            key5: [key5, setKey5],
            key6: [key6, setKey6],
            key7: [key7, setKey7],
            key8: [key8, setKey8],
            key9: [key9, setKey9],
            key10: [key10, setKey10],
            key11: [key11, setKey11],
            key12: [key12, setKey12],
            key13: [key13, setKey13],
            key14: [key14, setKey14],
            key15: [key15, setKey15],
            key16: [key16, setKey16],
            key17: [key17, setKey17],
            key18: [key18, setKey18],
            key19: [key19, setKey19],
            key20: [key20, setKey20],
            key21: [key21, setKey21],
            key22: [key22, setKey22],
            key23: [key23, setKey23],
            key24: [key24, setKey24],
          },
          drums: {
            drum1: [drum1, setDrum1],
            drum2: [drum2, setDrum2],
            drum3: [drum3, setDrum3],
            drum4: [drum4, setDrum4],
            drum5: [drum5, setDrum5],
            drum6: [drum6, setDrum6],
            drum7: [drum7, setDrum7],
            drum8: [drum8, setDrum8],
            drum9: [drum9, setDrum9],
          },
        },
      }}
    >
      {children}
    </iRockContext.Provider>
  );
}
