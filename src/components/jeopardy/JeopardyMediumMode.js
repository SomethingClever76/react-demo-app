import React, { Component } from 'react';
import './Jeopardy.css'
//import our service
import JeopardyService from "../../jeopardyService";
import JeopardyDisplay from "../jeopardyDisplay/JeopardyDisplay";

class Jeopardy extends Component {
    //set our initial state and set up our service as this.client on this component
    constructor(props) {
        super(props);
        this.client = new JeopardyService();
        this.state = {
            data: {},
            score: 0,
            userAnswer: "",
            submitted: false
        }
    }

    //get a new random question from the API and add it to the data object in state
    getNewQuestion() {
        return this.client.getQuestion().then(result => {
            this.setState({
                data: result.data[0]
            })
            console.log(this.state.data.answer)
        })
    }

    //when the component mounts, get the first question
    componentDidMount() {
        this.getNewQuestion();
    }

    // what we want to happen when user inputs text in answerBox
    handleChange = (event) => {
        let userAnswer = this.state.userAnswer;
        userAnswer = event.target.value;
        this.setState({ userAnswer });
    }

    // what we want to happen when user submits answer
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            submitted: true
        })
        if (this.state.data.answer === this.state.userAnswer) {
            this.setState((state, props) => ({
                score: this.state.score + this.state.data.value
            }))
            this.getNewQuestion();
            this.resetForm();
        } else {
            alert("Sorry, the correct answer was \"" + this.state.data.answer + "\"")
            this.setState({
                score: this.state.score - this.state.data.value
            })
            this.getNewQuestion();
            this.resetForm();
        }
    }

    // method for clearing answerBox (called in the handleSubmit method)
    resetForm = (event) => {
        this.setState((state, props) => ({
            submitted: false,
            userAnswer: ""
        }))
    }

    render() {

        // conditional rendering/ensures that category info is available before rendering
        if (this.state.data.category === undefined) {
            return (
                <div> </div>
            )
        }

        return (
            <JeopardyDisplay
                category={this.props.category}
                question={this.props.question}
                value={this.props.value}
                score={this.props.score}
                submit={() => this.handleSubmit()}
                change={() => this.handleChange()}
            />
        );
    }
}
export default Jeopardy;