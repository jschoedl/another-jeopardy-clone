import React, {useState} from 'react';
import CountUp from "react-countup";

function Score({teamName, score, active}) {
    const [lastScore, setLastScore] = useState(0)

    return (
        <>
            <h3 className={active ? "" : " inactive"}>{teamName}</h3>
            <p className={"score" + (active ? "" : " inactive")}>
                <CountUp start={lastScore} end={score} duration={1} onEnd={() => setLastScore(score)}/>
            </p>
        </>
    );
}

export default Score;
