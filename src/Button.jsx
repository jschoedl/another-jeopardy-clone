import React from 'react';

function Button({value}) {
    return (
        <button className="question-button">{value} €</button>
    );
}

export default Button;