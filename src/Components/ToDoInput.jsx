import React, { useState } from "react";

export function ToDoInput(props) {
  const [inputText, setInputText] = useState("");
  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      if (inputText.length > 0) {
        props.addList(inputText);
        setInputText("");
      }
    }
  };
  return (
    <div className="mainContent">
      <input
        type="text"
        className="inputToDo"
        onKeyDown={handleKeypress}
        value={inputText}
        placeholder="Enter your pending tasks..."
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (inputText.length > 0) {
            props.addList(inputText);
            setInputText("");
          }
        }}
        className="addButton"
      >
        +
      </button>
    </div>
  );
}
