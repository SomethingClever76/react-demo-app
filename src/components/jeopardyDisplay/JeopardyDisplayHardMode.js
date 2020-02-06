import React from "react";

function JeopardyDisplay(props) {
    //Displays only the category and value of the question
    //while props.catSel === false. After clicking a category,
    //it should return the full question plus the answerBox.
    if (props.catSel === false) {
        return (
            <div className="parentDiv">
                <h1>Please select a category</h1>
                <div className="jeopardyClue" onClick={props.pickCat} data-id={0} >
                    <h2>
                        Category: {props.data[0].category.title}
                    </h2>
                    <br />
                    <br />
                    <h2>
                        Value: {props.data[0].value}  <br />
                    </h2>
                    <br />
                    <br />
                </div>

                <div className="jeopardyClue" onClick={props.pickCat} data-id={1}>
                    <h2>
                        {/* Category: {props.data[1].category.title} */}
                    </h2>
                    <br />
                    <br />
                    <h2>
                        {/* Value: {props.data[1].value}  <br /> */}
                    </h2>
                    <br />
                    <br />
                </div>

                <div className="jeopardyClue" onClick={props.pickCat} data-id={2}>
                    <h2>
                        {/* Category: {props.data[2].category.title} */}
                    </h2>
                    <br />
                    <br />
                    <h2>
                        {/* Value: {props.data[2].value}  <br /> */}
                    </h2>
                    <br />
                    <br />
                </div>
            </div>
        );
    }

    return (
        <div className="parentDiv">
            <div className="jeopardyClue">
                {/* The values of the props being passed are defined in
                JeopardyHardMode, lines 86-92. We are using props."whatever the name
                is in the left column" from the parent component. */}
                {/* Note that category uses the data passed in as a prop to FURTHER access
                information from the data (i.e., "title")! */}
                <h2>
                    Category: {props.data[0].category.title}
                </h2>
                <br />
                <br />
                <h2>
                    Question: {props.data[0].question} <br />
                </h2>
                <br />
                <br />
                <h2>
                    Value: {props.data[0].value}  <br />
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

export default JeopardyDisplay;