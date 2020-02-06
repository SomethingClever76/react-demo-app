import React from "react";

function JeopardyDisplay(props) {
    // console.log(props)
    // console.log(props.data[0])
    // console.log(props.data[1])
    // console.log(props.data[2])
    //Displays only the category and value of the question
    //while props.catSel === false. After clicking a category,
    //it should return the full question plus the answerBox.
    if (props.catSel === false) {
        // for(let i=0; i < props.length; i++) {
            
        return (
            <div className="parentDiv">
                <div className="jeopardyClue" onClick={props.pickCat} index = "[0]">
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

                <div className="jeopardyClue" onClick={props.pickCat} name="data" value={props.data[1]}>
                    <h2>
                        Category: {props.data[1].category.title}
                    </h2>
                    <br />
                    <br />
                    <h2>
                        Value: {props.data[1].value}  <br />
                    </h2>
                    <br />
                    <br />
                </div>

                <div className="jeopardyClue" onClick={props.pickCat} name="data" value={props.data[2]}>
                    <h2>
                        Category: {props.data[2].category.title}
                    </h2>
                    <br />
                    <br />
                    <h2>
                        Value: {props.data[2].value}  <br />
                    </h2>
                    <br />
                    <br />
                </div>

            </div>
        );
        }
    

    return (
        // <div>Bite Me</div>

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

export default JeopardyDisplay;