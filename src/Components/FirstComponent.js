import React from "react";
import QuestionDisplay from "./QuestionDisplay";
const { jService } = require("../utils/jService");

class FirstComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { question: [] };
    this.getQuestion = this.getQuestion.bind(this);
  }
  getQuestion() {
    jService().then((question) => {
      this.setState({ question: question });
    });
  }
  render() {
    return (
      <div className="Intro">
        <h1>Zoom Quiz Generator</h1>
        <p>Generate a quick and simple Zoom Quiz here!</p>
        <button onClick={this.getQuestion}>Generate New Question</button>
        <QuestionDisplay question={this.state.question} />
      </div>
    );
  }
}
export default FirstComponent;
