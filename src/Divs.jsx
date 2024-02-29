import React, { useState } from "react";

const Divs = ({ entry, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        className="box"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h1>{entry.title}</h1>
        <p>{entry.text}</p>
        {isHovered && (
          <span className="delete-icon" onClick={onDelete}>
            &#10006;
          </span>
        )}
      </div>
    </>
  );
};

export default Divs;
