import React, { useState, useEffect } from "react";
import "./TextSection.css";

export default function TextSection(props) {
  const [output, setOutput] = useState("");

  useEffect(() => {
    const text = props.text;
    console.log(text.charAt(3));
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setOutput(output => output + text.charAt(i++));
      }
    }, 25);
    return () => clearInterval(interval, [text]);
  }, []);

  return (
    <div className="text-section">
      <p className="paragraph">
        {output}
        <>_</>
      </p>
    </div>
  );
}

TextSection.defaultProps = {
  text: ""
};
