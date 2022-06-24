import QuestionButtons from "./QuestionButtons";
import TeamScores from "./TeamScores";
import {useState} from "react";
import Question from "./Question";

function App() {
    const [displayedQuestion, setDisplayedQuestion] = useState({
    })

    return (
        <>
            {Object.keys(displayedQuestion).length
                ? <Question displayedQuestion={displayedQuestion} setDisplayedQuestion={setDisplayedQuestion}/>
                : <></>}
            <QuestionButtons setDisplayedQuestion={setDisplayedQuestion}/>
            <TeamScores/>
        </>
    )
}

export default App;
