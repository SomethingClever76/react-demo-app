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

    // Get 3 random questions from the API and save the array of object data in state.
    getThreeQuestions() {
        return this.client.get3Questions().then(result => {
            this.setState({
                data: result.data
            })
            // console.log(this.state.data)
        })
    }

    // When the component mounts, get 3 random questions.
    componentDidMount() {
        this.getThreeQuestions();
    }

    // What we want to happen when user selects a category.
    // Updates state so that only the data for the selected category remains.
    // (Removing the other two questions, so that the answer checking functions
    //  will work as expected).
    // Updates categorySelected to true, so that conditional rendering will display
    // the question selected.
    categorySelect = (event) => {
        // console.log(event.currentTarget.dataset.id)
        this.setState({
            data: [this.state.data[event.currentTarget.dataset.id]],
            categorySelected: true
        }, () => {console.log("answer: " + this.state.data[0].answer)})
           
       
        // console.log(this.state.data)
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
            submitted: true,
        })

        if (this.state.data[0].answer === this.state.userAnswer) {
            this.setState((state) => ({
                score: state.score + this.state.data[0].value
            }))
            this.getThreeQuestions();
            this.resetForm();
        } else {
            alert("Sorry, the correct answer was \"" + this.state.data[0].answer + "\"")
            this.setState({
                score: this.state.score - this.state.data[0].value
            })
            this.getThreeQuestions();
            this.resetForm();
        }
    }

    // Method for clearing answerBox (called in the handleSubmit method)
    resetForm = (event) => {
        this.setState(({
            submitted: false,
            userAnswer: "",
            categorySelected: false
        }))
        // console.log(this.state)
    }

    render() {
        // Conditional rendering/ensures that category info is available before rendering
        if (this.state.data.length === undefined) {
            return (
                <div> </div>
            )
        } else {

            return (
                <>
                    <JeopardyDisplayHardMode
                        data={this.state.data}
                        catSel={this.state.categorySelected}
                        pickCat={this.categorySelect}
                        score={this.state.score}
                        submit={this.handleSubmit}
                        change={this.handleChange}
                        answer={this.state.userAnswer}
                    />
                </>
            );
        }
    }
}

export default Jeopardy;