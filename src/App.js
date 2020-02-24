import React from "react";
import { Route, Router } from "react-router-dom";
import "./App.css";
import Window from "./Window/Window";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  render() {
    return (
      <div className="App">
        <Window />
      </div>
    );
  }
}

export default App;
