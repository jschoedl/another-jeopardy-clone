import React from 'react';
import Button from "./Button";

function QuestionButtons() {
    return (
        <div className="container flex-2" id="question-buttons">
            <div className="container">
                <h2>Test</h2>
                <h2>Test</h2>
                <h2>Test</h2>
                <h2>Test</h2>
                <h2>Test</h2>
            </div>
            <div className="container">
                <Button value={200}/>
                <Button value={200}/>
                <Button value={200}/>
                <Button value={200}/>
                <Button value={200}/>
            </div>
            <div className="container">
                <Button value={200}/>
                <Button value={200}/>
                <Button value={200}/>
                <Button value={200}/>
                <Button value={200}/>
            </div>
            <div className="container">
                <Button value={200}/>
                <Button value={200}/>
                <Button value={200}/>
                <Button value={200}/>
                <Button value={200}/>
            </div>
            <div className="container">
                <Button value={200}/>
                <Button value={200}/>
                <Button value={200}/>
                <Button value={200}/>
                <Button value={200}/>
            </div>
            <div className="container">
                <Button value={200}/>
                <Button value={200}/>
                <Button value={200}/>
                <Button value={200}/>
                <Button value={200}/>
            </div>
        </div>
    );
}

export default QuestionButtons;