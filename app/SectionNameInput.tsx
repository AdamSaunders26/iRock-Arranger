"use client";
import { useContext, useState } from "react";
import { iRockContext, iRockContextType } from "./Context";

export default function SectionNameInput() {
  const { section } = useContext<iRockContextType>(iRockContext);
  const [sectionName, setSectionName] = section.sectionName;

  return (
    <div>
      <label htmlFor="section">Section: </label>
      <input
        className={sectionName === "Name?" ? "text-neutral-500" : "text-black"}
        id="section"
        value={sectionName}
        onFocus={() => {
          if (sectionName === "Name?") {
            setSectionName("");
          }
        }}
        onChange={(e) => {
          setSectionName(e.target.value);
        }}
      />
    </div>
  );
}
