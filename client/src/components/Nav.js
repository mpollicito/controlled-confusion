import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link className="brand-logo" to="/">
          Game Set Match
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/scores"
              className={
                window.location.pathname === "/portfolio"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Scores
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={
                window.location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
