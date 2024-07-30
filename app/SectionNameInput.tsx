"use client";
import { useContext, useState } from "react";
import { iRockContext, iRockContextType } from "./Context";

export default function SectionNameInput() {
  const { section, storageFunction } =
    useContext<iRockContextType>(iRockContext);
  const [sectionName, setSectionName] = section.sectionName;

  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <label htmlFor="section">Section: </label>
        <input
          className={
            sectionName === "Name?" ? "text-neutral-500" : "text-black"
          }
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
      <button
        className="border-2 border-neutral-500 rounded-lg m-1 p-1 active:bg-red-300"
        onClick={() => {
          const stored = localStorage.getItem("section");
          console.log(stored);
        }}
      >
        Check
      </button>
      <button
        className="border-2 border-neutral-500 rounded-lg m-1 p-1 active:bg-red-300"
        onClick={() => {
          console.log("saved");
          storageFunction();
        }}
      >
        Save
      </button>
    </div>
  );
}
