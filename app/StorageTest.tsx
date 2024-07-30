import { useState } from "react";

export default function StorageTest() {
  const [text, setText] = useState("empty");
  const [stored, setStored] = useState("Nothing");
  console.log(text);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    // setStored(text);
    localStorage.setItem("test", text);
  };

  console.log(stored);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="storageTest">Storage Test: </label>
        <input
          className="bg-blue-500"
          id="storageTest"
          value={text}
          onChange={(e) => {
            console.log(e.target.value);
            setText(e.target.value);
          }}
        />
        <button onClick={() => {}} type="submit" className="bg-purple-300">
          Press
        </button>
        <p>{stored}</p>
      </form>
      <button
        className="bg-orange-300"
        onClick={() => {
          let value = localStorage.getItem("test") || "nope";
          console.log(value);
          setStored(value);
        }}
      >
        Check
      </button>
    </div>
  );
}
