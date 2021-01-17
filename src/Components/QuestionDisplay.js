import React from "react";
import Question from "./Question";
import "./components.css";

function QuestionDisplay(props) {
  return (
    <div className="question-display">
      {props.question.map((question) => {
        return <Question key={question.question} question={question} />;
      })}
    </div>
  );
}

export default QuestionDisplay;

// class QuestionDisplay extends React.Component {
//   render() {
//     return (
//       <div className="Question">
//         {this.props.question.map((question) => {
//           return <Question key={question.id} question={question} />;
//         })}
//       </div>
//     );
//   }
// }
