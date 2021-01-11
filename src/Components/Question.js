import React from "react";
import Answer from "./Answer";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHidden: true };
    this.revealAnswer = this.revealAnswer.bind(this);
  }
  revealAnswer() {
    this.setState({
      isHidden: false,
    });
  }
  render() {
    return (
      <div className="questionContainer">
        <h4 className="category">
          Category: {this.props.question.category.title}
        </h4>
        <h2 className="question">Question: {this.props.question.question}</h2>
        <button onClick={this.revealAnswer}>Click To Reveal Answer</button>
        {!this.state.isHidden && <Answer answer={this.props.question.answer} />}
      </div>
    );
  }
}

export default Question;