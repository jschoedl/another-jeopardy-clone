import QuestionButtons from "./QuestionButtons";
import TeamScores from "./TeamScores";
import {useState} from "react";
import Question from "./Question";

function App() {
    const [displayedQuestion, setDisplayedQuestion] = useState({})
    const [score0, setScore0] = useState(0)
    const [score1, setScore1] = useState(0)
    const [currentTeam, setCurrentTeam] = useState(0)

    const increaseScore = value => [setScore0, setScore1][currentTeam]([score0, score1][currentTeam] + value)
    const switchTeams = () => setCurrentTeam(1 - currentTeam)

    return (
        <>
            {Object.keys(displayedQuestion).length
                ? <Question displayedQuestion={displayedQuestion} setDisplayedQuestion={setDisplayedQuestion}
                            increaseScore={increaseScore} switchTeams={switchTeams}
                />
                : <></>}
            <QuestionButtons setDisplayedQuestion={setDisplayedQuestion}/>
            <TeamScores score0={score0} score1={score1}/>
        </>
    )
}

export default App;
