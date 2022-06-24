import React from 'react';

function Button({value, handleClick}) {
    return (
        <button className="question-button" onClick={handleClick}>{value} €</button>
    );
}

export default Button;