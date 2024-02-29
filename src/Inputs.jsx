import React, { useState } from "react";
import Divs from "./Divs";

const Inputs = () => {
  const [title, setTitle] = useState(""); // for title
  const [text, setText] = useState(""); // for text change
  const [entries, setEntries] = useState([]); //for displaying both the input entries.
  const [show, setShow] = useState(false); // for visible title input
  const [btnVisible, setBtnVisible] = useState(false); //for visible btn

  //to get title input
  const handleTitleChange = (e) => {
    setTitle(e.target.value.toUpperCase()); // to convert  all letters into uppercase
  };

  //to get text input
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  //for  adding both input by btn
  const handleSave = () => {
    if (title.trim() !== "" && text.trim() !== "") {
      const newEntry = { title, text };
      setEntries([...entries, newEntry]);
      setTitle("");
      setText("");
    } else {
      alert("Please enter both a title and text.");
    }
  };

  //to show title input and add btn after cick text input
  const handleTitleClick = () => {
    setShow(true);
    setBtnVisible(true);
  };

  //for delete divs
  const handleDelete = (index) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    setEntries(updatedEntries);
  };

  return (
    <>
      <div className="container-input">
        {show && (
          <div className="input-div">
            <input
              type="text"
              placeholder="Title"
              onChange={handleTitleChange}
              value={title}
            />
          </div>
        )}
        <div className="input-div">
          <input
            type="text"
            placeholder="Take a note..."
            onChange={handleTextChange}
            value={text}
            onClick={handleTitleClick}
          />
          {btnVisible && (
            <i class="fa fa-plus" aria-hidden="true" onClick={handleSave} />
          )}
        </div>
      </div>

      <div className="container">
        {entries.map((entry, index) => {
          return (
            <Divs
              key={index}
              entry={entry}
              onDelete={() => handleDelete(index)}
            />
          );
        })}
      </div>
    </>
  );
};

export default Inputs;
