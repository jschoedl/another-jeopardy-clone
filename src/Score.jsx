import React from 'react';

function Score({teamName, score}) {
    return (
        <>
        <h3>{teamName}</h3>
        <p className="score">{score}</p>
        </>
    );
}

export default Score;