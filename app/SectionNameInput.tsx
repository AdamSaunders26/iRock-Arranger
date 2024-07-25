"use client";
import { useState } from "react";

export default function SectionNameInput() {
  const [name, setName] = useState("Name?");
  return (
    <div>
      <label htmlFor="section">Section: </label>
      <input
        className={name === "Name?" ? "text-neutral-500" : "text-black"}
        id="section"
        value={name}
        onFocus={() => {
          if (name === "Name?") {
            setName("");
          }
        }}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
}
