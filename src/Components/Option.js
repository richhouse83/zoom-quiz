import React from "react";

function Option(props) {
  return (
    <h2>
      {props.revealAnswer && <span>{props.option.correct}</span>}
      {decodeURIComponent(props.option.answer)}
    </h2>
  );
}

export default Option;
