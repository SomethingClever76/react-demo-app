import React from "react";

function JeopardyDisplayHardMode(props) {
    return (
        <div className="parentDiv">
            <div className="jeopardyClue">
                {/* The values of the props being passed are defined in
                JeopardyMediumMode, lines 86-92. We are using props."whatever the name
                is in the left column" from the parent component. */}
                {/* Note that category uses the data passed in as a prop to FURTHER access
                information from the data! */}
                <h2>
                    Category: {props.category.title}
                </h2>
                <br />
                <br />
                <h2>
                    Question: {props.question} <br />
                </h2>
                <br />
                <br />
                <h2>
                    Value: {props.value}  <br />
                </h2>
                <br />
                <br />
            </div>
            <div id="answerBox">
                <h3>SCORE: {props.score} </h3>
                <br />
                <form onSubmit={props.submit}>
                    <input onChange={props.change}
                        type="text"
                        placeholder="Type your answer here"
                        name="answerBox"
                        value={props.answer} />
                    <br />
                    <button>Submit Answer</button>
                    <br />
                </form>
            </div>
        </div>
    );
}

export default JeopardyDisplayHardMode;