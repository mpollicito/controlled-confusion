import React from "react";

function Nav() {
  return (

    <nav>

      <div className="nav-wrapper">
        <a href="#" className="brand-logo">Game Set Match</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="sass.html">Home</a></li>
          <li><a href="badges.html">Scores</a></li>
          <li><a href="collapsible.html">About</a></li>

        </ul>
      </div>
    </nav>
  );
}

export default Nav;
