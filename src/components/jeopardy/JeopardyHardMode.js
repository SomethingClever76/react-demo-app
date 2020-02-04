import React, { Component } from 'react';
import './Jeopardy.css'
import JeopardyService from "../../jeopardyService";
import JeopardyDisplayHardMode from "../jeopardyDisplay/JeopardyDisplayHardMode";

class Jeopardy extends Component {
    // Set our initial state and set up our service as this.client on this component.
    constructor(props) {
        super(props);
        this.client = new JeopardyService();
        this.state = {
            data: {},
            score: 0,
            userAnswer: "",
            submitted: false,
            categorySelected: false
        }
    }

    // Get 3 random questions from the API and save the object data in state.
    getThreeQuestions() {
        return this.client.get3Questions().then(result => {
            this.setState({
                data: result.data
            })
            console.log(this.state.data)
            // console.log("Q1 category: " + this.state.data[0].category.title)
            console.log("Q1 answer: " + this.state.data[0].answer)
            // console.log("Q2 category: " + this.state.data[1].category.title)
            console.log("Q2 answer: " + this.state.data[1].answer)
            // console.log("Q3 category: " + this.state.data[2].category.title)
            console.log("Q3 answer: " + this.state.data[2].answer)
        })
    }

    // When the component mounts, get 3 random questions.
    componentDidMount() {
        this.getThreeQuestions();
    }

    // What we want to happen when user selects a category.
    //NEED TO FIGURE OUT HOW TO UPDATE STATE SO THAT ONLY THE DATA FOR 
    //THE SELECTED CATEGORY REMAINS (Removing the other two questions, so 
    //that the answer checking functions will work as expected)
    categorySelect = (event) => {
        this.setState({
            categorySelected: true
        })
    }

    // What we want to happen when user inputs text in answerBox.
    handleChange = (event) => {
        let userAnswer = this.state.userAnswer;
        userAnswer = event.target.value;
        this.setState({ userAnswer });
    }

    // What we want to happen when user submits answer.
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            submitted: true
        })

        if (this.state.data.answer === this.state.userAnswer) {
            this.setState((state) => ({
                score: state.score + this.state.data.value
            }))
            this.getThreeQuestions();
            this.resetForm();
        } else {
            alert("Sorry, the correct answer was \"" + this.state.data.answer + "\"")
            this.setState({
                score: this.state.score - this.state.data.value
            })
            this.getThreeQuestions();
            this.resetForm();
        }
    }

    // Method for clearing answerBox (called in the handleSubmit method)
    resetForm = (event) => {
        this.setState(({
            submitted: false,
            userAnswer: ""
        }))
    }

    render() {
        // Conditional rendering/ensures that category info is available before rendering
        if (this.state.data.length === undefined) {
            return (
                <div> </div>
            )
        }

        return (
            <>
                <JeopardyDisplayHardMode
                    // left column declares a name for the thing in the right column 
                    // which is being passed to JeopardyDisplay.js as props.
                    // The value is determined by THIS file, which is controlling state.
                    //"The PARENT is always RIGHT" (on the right)
                    category={this.state.data[0].category}
                    question={this.state.data[0].question}
                    value={this.state.data[0].value}
                    score={this.state.score}
                    submit={this.handleSubmit}
                    change={this.handleChange}
                    answer={this.state.userAnswer}
                    catSel={this.state.categorySelected}
                    pickCat={this.categorySelect}
                />
                <br />
                <JeopardyDisplayHardMode
                    category={this.state.data[1].category}
                    question={this.state.data[1].question}
                    value={this.state.data[1].value}
                    score={this.state.score}
                    submit={this.handleSubmit}
                    change={this.handleChange}
                    answer={this.state.userAnswer}
                    catSel={this.state.categorySelected}
                    pickCat={this.categorySelect}
                />
                <br />
                <JeopardyDisplayHardMode
                    category={this.state.data[2].category}
                    question={this.state.data[2].question}
                    value={this.state.data[2].value}
                    score={this.state.score}
                    submit={this.handleSubmit}
                    change={this.handleChange}
                    answer={this.state.userAnswer}
                    catSel={this.state.categorySelected}
                    pickCat={this.categorySelect}
                />
            </>
        );
    }
}

export default Jeopardy;