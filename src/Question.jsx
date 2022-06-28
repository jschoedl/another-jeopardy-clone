import React, {useEffect, useState} from 'react';
import {useKeyPress} from "./lib/helpers";

function Question({displayedQuestion, setDisplayedQuestion, switchTeams, increaseScore}) {
    const {category, value, question} = displayedQuestion;
    const [questionText, answerText] = question || ["", ""]

    const [backgroundColor, setBackgroundColor] = useState("")
    const [answerVisible, setAnswerVisible] = useState(false)
    const [scoreChange, setScoreChange] = useState(0)

    const spacePressed = useKeyPress(" ")
    const arrowUpPressed = useKeyPress("ArrowUp")
    const arrowDownPressed = useKeyPress("ArrowDown")

    const applyAnswer = () => {
        setAnswerVisible(false)
        setDisplayedQuestion({})
        setBackgroundColor("")

        increaseScore(Number(scoreChange))
        setScoreChange(0)
        switchTeams()
    }

    useEffect(() => {
        if (spacePressed)
            if (!answerVisible && !backgroundColor)
                setAnswerVisible(true)
            else if (backgroundColor)
                applyAnswer()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [backgroundColor, setDisplayedQuestion, spacePressed])

    useEffect(() => {
        if (answerVisible && arrowUpPressed) {
            setBackgroundColor("#cefdbc")
            setScoreChange(value)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [arrowUpPressed, value])

    useEffect(() => {
        if (answerVisible && arrowDownPressed) {
            setBackgroundColor("#fdbcbc")
            setScoreChange(-value)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [arrowDownPressed, value])


    return (
        <div id="question" style={{backgroundColor: backgroundColor}}>
            <h1>{category} · {value}€</h1>
            <p>{questionText}</p>
            {answerVisible ? <p>{answerText}</p> : <></>}
        </div>
    )
}

export default Question;