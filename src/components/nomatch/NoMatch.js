import React from 'react';
import './NoMatch.css'

function NoMatch() {
    return (
        <div className="noMatch">
            404 Error - the URL you have requested does not exist on this server.
            <br />
            Please don't be too upset!
            <br />
            Click one of the navigation links above to return to one of our other pages.
            <br />
            <img src="https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif" />
        </div>
    )
}

export default NoMatch;