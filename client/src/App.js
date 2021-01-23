import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import About from "./pages/About";
import Scores from "./pages/Scores";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/scores" component={Scores} />
          <Route exact path="/about" component={About} /> 
        </Wrapper>
      </div>
    </Router>

  );
}

export default App;