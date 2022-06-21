import React from 'react';
import Score from "./Score";

function TeamScores() {
    return (
        <div id="scores" className="container flex-1">
            <div className="row">
                <Score teamName="Team 1" score={10200}/>
            </div>
            <div className="row">
                <Score teamName="Team 2" score={0}/>
            </div>
        </div>
    );
}

export default TeamScores;