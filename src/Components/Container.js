import React, { useState } from "react";
import QuestionDisplay from "./QuestionDisplay";
import "./components.css";
import TeamsContainer from "./TeamsContainer";
import jService from "../utils/jService";

function Container(props) {
  const [question, setQuestion] = useState([]);
  const [teamName, setTeamName] = useState("");
  const [teams, setTeams] = useState([]);
  return (
    <div className="container">
      <div className="question-container">
        <h2>Generate a quick and simple Zoom Quiz here!</h2>
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
      <div className="teams-container">
        <input
          type="text"
          name="teamname"
          value={teamName}
          onChange={(event) => setTeamName(event.target.value)}
        ></input>
        <button
          onClick={() => {
            setTeams((prevState) => [
              ...prevState,
              { key: teams.length + 1, name: teamName },
            ]);
            setTeamName(() => "");
          }}
        >
          Add Team
        </button>
        <TeamsContainer teams={teams} />
      </div>
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
