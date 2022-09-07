import "./Nav.css";
import { useState } from "react";
const Nav = ({ setPortfolio }) => {
  return (
    <div className="navBox flexCent">
      <nav>
        <ul className="flexCent">
          <li
            onClick={() => {
              setPortfolio(true);
            }}
          >
            PORTFOLIO
          </li>
          <li>RESUME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
