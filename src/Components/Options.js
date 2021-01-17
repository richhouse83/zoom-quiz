import React from "react";
import Option from "./Option";

function Options(props) {
  return (
    <div className="Options">
      {props.options.map((option, index) => {
        return (
          <Option
            key={index}
            option={option}
            revealAnswer={props.revealAnswer}
          />
        );
      })}
    </div>
  );
}

export default Options;
