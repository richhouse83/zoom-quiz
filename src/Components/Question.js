import React, { useState } from "react";
import Answer from "./Answer";
import Options from "./Options";

function Question(props) {
  const [correctAnswerHidden, setcorrectAnswerHidden] = useState(false);
  const [optionsVisible, setOptionsVisible] = useState(true);
  const [revealAnswer, setRevealAnswer] = useState(false);
  return (
    <div className="questionContainer">
      <h4 className="category">
        Category: {decodeURIComponent(props.question.category)}
      </h4>
      <h2 className="question">
        {decodeURIComponent(props.question.question)}
      </h2>
      {optionsVisible && (
        <Options options={props.question.options} revealAnswer={revealAnswer} />
      )}
      {correctAnswerHidden && (
        <Answer answer={decodeURIComponent(props.question.correct_answer)} />
      )}
      <button
        onClick={() => {
          setRevealAnswer(true);
          // setcorrectAnswerHidden(() => true);
          // setOptionsVisible(() => false);
        }}
      >
        Click To Reveal Answer
      </button>
    </div>
  );
}

// class Question extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isHidden: true };
//     this.revealAnswer = this.revealAnswer.bind(this);
//   }
//   revealAnswer() {
//     this.setState({
//       isHidden: false,
//     });
//   }
//   render() {
//     return (
//       <div className="questionContainer">
//         <h4 className="category">
//           Category: {this.props.question.category.title}
//         </h4>
//         <h2 className="question">Question: {this.props.question.question}</h2>
//         <button onClick={this.revealAnswer}>Click To Reveal Answer</button>
//         {!this.state.isHidden && <Answer answer={this.props.question.answer} />}
//       </div>
//     );
//   }
// }

export default Question;
