import React from 'react';
import "./Welcome.css"

function Welcome(props) {
    if (props.match.params.name !== undefined) {
        return (
            <div className="welcomeBox">
                <h1>Hello, {props.match.params.name}!</h1>
            </div>
        )
    } else {
        return (
            <div className="welcomeBox">
                <h1>Hello, {props.name}!</h1>
            </div>
        );
    }
}

export default Welcome;