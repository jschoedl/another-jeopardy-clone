import React, {useEffect, useState} from 'react';
import {useKeyPress} from "./lib/helpers";

function Question({displayedQuestion, setDisplayedQuestion}) {
    const {category, value, question} = displayedQuestion;
    const [questionText, answerText] = question || ["", ""]

    const [backgroundColor, setBackgroundColor] = useState("")
    const [answerVisible, setAnswerVisible] = useState(false)
    const [scoreChange, setScoreChange] = useState(0)

    const spacePressed = useKeyPress(" ")
    const arrowUpPressed = useKeyPress("ArrowUp")
    const arrowDownPressed = useKeyPress("ArrowDown")

    useEffect(() => {
        if (spacePressed) {
            console.log(answerVisible)
            if (!answerVisible && !backgroundColor)
                setAnswerVisible(true)
            else if (backgroundColor) {
                setAnswerVisible(false)
                setDisplayedQuestion({})
                setBackgroundColor("")
            }
        }
    }, [backgroundColor, setDisplayedQuestion, spacePressed])

    useEffect(() => {
        if (arrowUpPressed) {
            setBackgroundColor("#cefdbc")
            setScoreChange(value)
        }
    }, [arrowUpPressed, value])

    useEffect(() => {
        if (arrowDownPressed) {
            setBackgroundColor("#fdbcbc")
            setScoreChange(-value)
        }
    }, [arrowDownPressed, value])


    return (
        Object.keys(displayedQuestion).length
            ? <div id="question" style={{backgroundColor: backgroundColor}}>
                <h1>{category} · {value}€</h1>
                <p>{questionText}</p>
                {answerVisible ? <p>{answerText}</p> : <></>}
            </div>
            : <></>
    )
}

export default Question;