import React from 'react';

function Question({displayedQuestion, answerVisible}) {
    const {category, value, question} = displayedQuestion;
    const [questionText, answerText] = question || ["", ""]


    return (
        Object.keys(displayedQuestion).length
            ? <div id="question">
                <h1>{category} · {value}€</h1>
                <p>{questionText}</p>
                {answerVisible ? <p>{answerText}</p> : <></>}
            </div>
            : <></>
    )
}

export default Question;