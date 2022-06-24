import QuestionButtons from "./QuestionButtons";
import TeamScores from "./TeamScores";
import {useEffect, useState} from "react";
import Question from "./Question";
import {useKeyPress} from "./lib/helpers";

function App() {
    const [displayedQuestion, setDisplayedQuestion] = useState({})
    const [answerVisible, setAnswerVisible] = useState(false)
    const spacePressed = useKeyPress(" ")

    useEffect(() => {
        if (spacePressed) {
            if (!answerVisible)
                setAnswerVisible(true)
            else {
                setDisplayedQuestion({})
                setAnswerVisible(false)
            }
        }
    }, [spacePressed])

    return (
        <>
            <Question displayedQuestion={displayedQuestion} answerVisible={answerVisible}/>
            <QuestionButtons setDisplayedQuestion={setDisplayedQuestion}/>
            <TeamScores/>
        </>
    )
}

export default App;
