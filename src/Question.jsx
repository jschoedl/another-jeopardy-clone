import React, {useEffect, useState} from 'react';
import {useKeyPress} from "./lib/helpers";

function Question({displayedQuestion, setDisplayedQuestion}) {
    const {category, value, question} = displayedQuestion;
    const [questionText, answerText] = question

    const [answerVisible, setAnswerVisible] = useState(false)
    const enterPressed = useKeyPress("Enter")

    useEffect(() => {
        if (enterPressed)
            setAnswerVisible(true)
    }, [enterPressed])


    return (
        <div id="question">
            <h1>{category} · {value}€</h1>
            <p>{questionText}</p>
            {answerVisible ? <p>{answerText}</p> : <></>}
        </div>
    );
}

export default Question;