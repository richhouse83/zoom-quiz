import React, { useState } from "react";
import QuestionDisplay from "./QuestionDisplay";
const { jService } = require("../utils/jService");

function Container(props) {
  const [question, setQuestion] = useState([]);
  return (
    <div className="Intro">
      <h1>Zoom Quiz Generator</h1>
      <p>Generate a quick and simple Zoom Quiz here!</p>
      <button
        onClick={() =>
          jService().then((question) => {
            setQuestion(() => question);
          })
        }
      >
        Generate New Question
      </button>
      <QuestionDisplay question={question} />
    </div>
  );
}

export default Container;

// class Container extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { question: [] };
//     this.getQuestion = this.getQuestion.bind(this);
//   }
//   getQuestion() {
//     jService().then((question) => {
//       this.setState({ question: question });
//     });
//   }
//   render() {
//     return (
//       <div className="Intro">
//         <h1>Zoom Quiz Generator</h1>
//         <p>Generate a quick and simple Zoom Quiz here!</p>
//         <button onClick={this.getQuestion}>Generate New Question</button>
//         <QuestionDisplay question={this.state.question} />
//       </div>
//     );
//   }
// }
