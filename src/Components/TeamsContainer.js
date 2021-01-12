import React from "react";
import Team from "./Team";

function TeamsContainer(props) {
  return (
    <div className="teams-display">
      {props.teams.map((team) => {
        return <Team key={team.key} team={team} />;
      })}
    </div>
  );
}

export default TeamsContainer;
