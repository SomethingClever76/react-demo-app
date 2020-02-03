import React, { Component } from 'react';
import './Jeopardy.css'
//import our service
import JeopardyService from "../../jeopardyService";
import JeopardyDisplayHardMode from "../jeopardyDisplay/JeopardyDisplayHardMode";

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

//get 2 questions from the API
getTwoQuestions(){
    return this.client.get2Questions().then(result => {
        this.setState({
            data: result.data
        })
        console.log(this.state.data)
        console.log("Q1 category: " + this.state.data[0].category.title)
        console.log("Q1 answer: " + this.state.data[0].answer)
        console.log("Q2 category: " + this.state.data[1].category.title)
        console.log("Q2 answer: " + this.state.data[1].answer)
    })
}

    //get a new random question from the API and add it to the data object in state
    // getNewQuestion() {
    //     return this.client.getQuestion().then(result => {
    //         this.setState({
    //             data: result.data[0]
    //         })
    //         console.log(this.state.data.answer)
    //     })
    // }

    //when the component mounts, get the first question
    componentDidMount() {
        // this.getNewQuestion();
        this.getTwoQuestions();
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

        //need to figure out how to compare userAnswer with the answer for 
        //this.state.data[INDEX OF QUESTION BEING ANSWERED].answer and updates
        //score with this.state.data[INDEX OF QUESTION BEING ANSWERED].value
        if (this.state.data.answer === this.state.userAnswer) {
            this.setState((state) => ({
                score: state.score + this.state.data.value
            }))
            this.getTwoQuestions();
            this.resetForm();
        } else {
            alert("Sorry, the correct answer was \"" + this.state.data.answer + "\"")
            this.setState({
                score: this.state.score - this.state.data.value
            })
            this.getTwoQuestions();
            this.resetForm();
        }
    }

    // method for clearing answerBox (called in the handleSubmit method)
    resetForm = (event) => {
        this.setState(({
            submitted: false,
            userAnswer: ""
        }))
    }

    render() {

        //I THINK THE FOLLOWING CODE IS WHAT IS PREVENTING THE QUESTIONS FROM BEING DISPLAYED
        // conditional rendering/ensures that category info is available before rendering
        if (this.state.data.category === undefined) {
            return (
                <div> </div>
            )
        }

        return (
            <>
                <JeopardyDisplayHardMode
                    // left column declares a name for the thing in the right 
                    // column being passed to JeopardyDisplay.js as props.
                    // The value is determined by THIS file, which is controlling state.
                    //"The PARENT is always RIGHT" (on the right)
                    category={this.state.data[0].category}
                    question={this.state.data[0].question}
                    value={this.state.data[0].value}
                    score={this.state.score}
                    submit={this.handleSubmit}
                    change={this.handleChange}
                    answer={this.state.userAnswer}
                />
                <br />
                {/* <JeopardyDisplayHardMode
                    category={this.state.data[1].category}
                    question={this.state.data[1].question}
                    value={this.state.data[1].value}
                    score={this.state.score}
                    submit={this.handleSubmit}
                    change={this.handleChange}
                    answer={this.state.userAnswer} */}
                />
            </>
        );
    }
}

export default Jeopardy;