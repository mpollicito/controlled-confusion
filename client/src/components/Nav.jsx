import React from "react";

function Nav() {
  return (

    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">React Memory Game</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="sass.html">Home</a></li>
          <li><a href="badges.html">Score</a></li>
          <li><a href="collapsible.html">About</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
