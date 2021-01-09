import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Memory Game
      </a>
    </nav>
  );
}

export default Nav;

<div class="ui large menu">
  <a class="active item">
    Home
  </a>
  <a class="item">
    Messages
  </a>
  <div class="right menu">
    <div class="ui dropdown item">
      Language <i class="dropdown icon"></i>
      <div class="menu">
        <a class="item">English</a>
        <a class="item">Russian</a>
        <a class="item">Spanish</a>
      </div>
    </div>
    <div class="item">
        <div class="ui primary button">Sign Up</div>
    </div>
  </div>
</div>