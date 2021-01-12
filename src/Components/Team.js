import React, { useState } from "react";

function Team(props) {
  const [score, setScore] = useState(0);
  return (
    <div className="team">
      <h2>{props.team.name}</h2>
      <h3>Score: {score}</h3>
      <button onClick={() => setScore((prev) => prev + 1)}>Add point</button>
      {score > 0 && (
        <button onClick={() => setScore((prev) => prev - 1)}>
          Remove Point
        </button>
      )}
    </div>
  );
}

export default Team;
