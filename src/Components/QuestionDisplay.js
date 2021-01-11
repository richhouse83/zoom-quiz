import React from "react";
import Question from "./Question";

function QuestionDisplay(props) {
  return (
    <div className="Question">
      {props.question.map((question) => {
        return <Question key={question.id} question={question} />;
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
