import React from 'react';

function Score({teamName, score, active}) {
    return (
        <>
            <h3 className={active ? "" : " inactive"}>{teamName}</h3>
            <p className={"score" + (active ? "" : " inactive")}>{score}</p>
        </>
    );
}

export default Score;