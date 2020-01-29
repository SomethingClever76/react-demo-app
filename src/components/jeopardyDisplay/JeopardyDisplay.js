import React from "react";

function JeopardyDisplay(props) {
    return (
        <div className="parentDiv">
            <div className="jeopardyClue">
                <h2>
                    Category: {props.data.category.title}
                </h2>
                <br />
                <br />
                <h2>
                    Question: {props.data.question} <br />
                </h2>
                <br />
                <br />
                <h2>
                    Value: {props.data.value}  <br />
                </h2>
                <br />
                <br />
            </div>
            <div id="answerBox">
                <h3>SCORE: {props.score} </h3>
                <br />
                <form onSubmit={props.handleSubmit}>
                    <input onChange={props.handleChange}
                        type="text"
                        placeholder="Type your answer here"
                        name="answerBox"
                        value={props.userAnswer} />
                    <br />
                    <button>Submit Answer</button>
                    <br />
                </form>
            </div>
        </div>
    );
}

export default JeopardyDisplay;