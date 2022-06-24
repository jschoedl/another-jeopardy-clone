import React, {useState} from 'react';

function Button({value, question, setDisplayedQuestion}) {
    const [disabled, setDisabled] = useState(false)
    const handleClick = () => {
        setDisplayedQuestion(question)
        setDisabled(true)
    }

    return (
        <button className={"question-button" + (disabled ? " disabled" : "")} onClick={!disabled && handleClick}>{value} €</button>
    );
}

export default Button;