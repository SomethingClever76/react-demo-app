import React from 'react';
import './Contact.css'

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            submitted: false, 
            formData: {
                firstName: "",
                lastName: "",
                email: ""
            }
        }
    }
    handleChange = (event) => {
        let formData = this.state.formData;
        formData[event.target.name] = event.target.value;
        this.setState({formData});
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            submitted: true
        })
    }
    resetForm = (event) => {
        this.setState({
            submitted: false,
            formData: {
                firstName: "",
                lastName: "",
                email: ""
            }
        })
    }
    render() {
        //show the thank you message if the form has been submitted
        if(this.state.submitted){
            return (
                <div>
                    Thank you, {this.state.formData.firstName}, for submitting the form <br/>
                    <button onClick={this.resetForm}>Reset Form</button>
                </div>
            )
        }
        return (
            <div className="formBox">
                <form onSubmit={this.handleSubmit}>
                    <div id="firstName">
                        <label>First Name: </label>
                        <input onChange={this.handleChange} type="text" name="firstName" value={this.state.formData.firstName} />
                    </div>
                    <div id="lastName">
                        <label>Last Name: </label>
                        <input onChange={this.handleChange} type="text" name="lastName" value={this.state.formData.lastName} />
                    </div>
                    <div id="eMail">
                        <label>E-mail: </label>
                        <input onChange={this.handleChange} type="email" name="email" value={this.state.formData.email} />
                    </div>
                    <button>Submit Form</button> <br/>
                    {/*To make sure we are updating state while adding input to the form */}
                    {/* {this.state.formData.firstName}
                    <br/>
                    {this.state.formData.lastName}
                    <br/>
                    {this.state.formData.email} */}
                </form>
            </div>
        );
    }
}

export default Contact;