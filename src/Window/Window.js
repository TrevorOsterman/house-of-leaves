import React from "react";
import { Route, Router } from "react-router-dom";
import TextSection from "../TextSection/TextSection";
import Graphic from "../Graphic/Graphic";
import TitleScreen from "../TitleScreen/TitleScreen";

export default function Window() {
  const text = `The example above shows a React component, IntervalExample, scheduling a new interval once it mounts to the DOM.

The interval increments the seconds state value by one, every second.

Finally, we display the number of seconds in the return function to show how many seconds have elapsed since the component mounts.`;
  return (
    <div className="Window">
      <div className="App">
        <TextSection text={text} />
        <Graphic />
      </div>
    </div>
  );
}
