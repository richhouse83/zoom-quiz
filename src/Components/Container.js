import React, { useState } from "react";
import QuestionDisplay from "./QuestionDisplay";
import "./components.css";
import TeamsContainer from "./TeamsContainer";
import openT from "../utils/open-t";

function Container(props) {
  const [difficulty, setDifficulty] = useState("easy");
  const [question, setQuestion] = useState([]);
  const [teams, setTeams] = useState([]);
  const [teamName, setTeamName] = useState(`Team 1`);
  return (
    <div className="container">
      <div className="question-container">
        <h2>Generate a quick and simple Zoom Quiz here!</h2>
        <label for="difficulty">Difficulty: </label>
        <select
          name="difficulty"
          id="difficulty"
          onChange={(event) => {
            setDifficulty(event.target.value);
          }}
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <br />
        <br />
        <button
          onClick={() =>
            openT(difficulty.toLowerCase()).then((question) => {
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
            setTeamName(() => `Team ${teams.length + 2}`);
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
