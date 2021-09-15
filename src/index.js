import React, { Component } from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag.js";

import "./styles.css";

// previously <NameTag /> was in the App component as:  <NameTag name="Erin" /> and this passed the name to props in NameTag. Now we've created a data.js file to hold an array of names and ids. This callback function now takes in the data from the array and will pass it to the NameTag component through props.
const renderNameTag = (name) => <NameTag name={name} key={name} />


class App extends Component {
  state = { names: ["Lisa", "Joey", "Cristy", "Sharon", "Ann", "Kelli"]};
  // mapping to receive the names from the callback function to get the tag JSX for each name
  render() {
  const NameTagElements = this.state.names.map(renderNameTag);
  return (
    <div className="App">
      <h1>Name Tag Generator</h1>
      {/* result of mapping over the callback function */}
      {NameTagElements}
    </div>
  );
};
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
