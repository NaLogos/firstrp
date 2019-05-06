import React from "react";
import { render } from "react-dom";
import Results from "./Results";
import { Router } from "@reach/router";
import Details from "./details";
import { Link } from "@reach/router";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Embrace Me!</Link>
        </header>
        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
