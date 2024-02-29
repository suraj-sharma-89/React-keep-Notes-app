import React from "react";
import "./index.css";
import image from "./img.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img src={image} alt="Logo" />
        </div>
        <h1 className="header-h1">keep reminder</h1>
        <input type="text" className="search-bar" placeholder="Search..." />
      </header>
    </>
  );
};

export default Header;
