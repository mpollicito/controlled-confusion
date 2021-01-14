import React from "react";

function Nav() {
  return (

    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">GameSetMatch</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="/">Home</a></li>
          <li><a href="/">Scores</a></li>
          <li><a href="/">About</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
