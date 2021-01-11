import React from "react";
import Question from "./Question";

class QuestionDisplay extends React.Component {
  render() {
    return (
      <div className="Question">
        {this.props.question.map((question) => {
          return <Question key={question.id} question={question} />;
        })}
      </div>
    );
  }
}

export default QuestionDisplay;
