import React from 'react';
import Button from "./Button";
import questions from "./assets/questions.json"

function QuestionButtons({setDisplayedQuestion}) {
    const questionsPerCategory = Math.max(
        ...Object.values(questions).map(categoryQuestions => Object.keys(categoryQuestions).length)
    )

    let categoryHeaders = [Object.keys(questions).map(categoryName => <h2 key={categoryName}>{categoryName}</h2>)]

    let questionRows = []
    for (let questionIndex = 0; questionIndex < questionsPerCategory; questionIndex++) {
        let questionButtons = []
        for (let [categoryName, categoryQuestions] of Object.entries(questions)) {
            const [questionValue, questionText] = Object.entries(categoryQuestions)[questionIndex]
            const associatedQuestion = {
                "category": categoryName,
                "value": questionValue,
                "question": questionText
            }
            questionButtons.push(<Button key={categoryName} value={questionValue} question={associatedQuestion}
                                         setDisplayedQuestion={setDisplayedQuestion}
            />)
        }
        questionRows.push(<div className="container" key={questionIndex}>{questionButtons}</div>)
    }

    return (
        <div className="container flex-3" id="question-buttons">
            <div className="container">{categoryHeaders}</div>
            {questionRows}
        </div>
    );
}

export default QuestionButtons;