import React from 'react';
import Score from "./Score";

function TeamScores({score0, score1, currentTeam}) {
    return (
        <div id="scores" className="container flex-1">
            <div className="row">
                <Score teamName="Team 1" score={score0} active={currentTeam === 0}/>
            </div>
            <div className="row">
                <Score teamName="Team 2" score={score1} active={currentTeam === 1}/>
            </div>
        </div>
    );
}

export default TeamScores;