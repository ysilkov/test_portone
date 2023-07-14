import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("None");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const findUniqueCharacter = () => {
    const words = text.split(" ");
    const uniqueChars = [];

    for (const word of words) {
      const charCount = {};

      for (const char of word) {
        if (charCount[char]) {
          charCount[char]++;
        } else {
          charCount[char] = 1;
        }
      }

      for (const char of word) {
        if (charCount[char] === 1) {
          if (!uniqueChars.includes(char)) {
            uniqueChars.push(char);
          } else {
            const charIndex = uniqueChars.indexOf(char);
            uniqueChars.splice(charIndex, 1);
          }
        }
      }
    }

    setResult(uniqueChars[0] || "No unique character found");
  };

  return (
    <div className="main">
      <div className="main_text">
        <textarea value={text} onChange={handleTextChange} />
        <section>
          <button onClick={findUniqueCharacter}>Find Unique Character</button>
        </section>
      </div>
      <div className="result">Result: {result}</div>
    </div>
  );
}

export default App;
