import React from 'react';
// import {useKeyPress} from "./lib/helpers";

function Question({displayedQuestion, setDisplayedQuestion}) {
    const {category, value, text} = displayedQuestion;
    // const enterPressed = useKeyPress("Enter")
    // if (enterPressed)
    //     setDisplayedQuestion({})
    return (
        <div id="question">
            <h1>{category} · {value}€</h1>
            <p>{text}</p>
        </div>
    );
}

export default Question;