import React from "react";
import "./Warning.css"

function Warning(props) {

    function passClick() {
        props.onEnter()
    }



    return <div className="error-background" onClick={passClick}>
        <div className="error">
            <div className="error-header">
                Invalid Input
            </div>
            <div className="error-message">
                {props.message}
            </div>
            <button onClick={passClick} className="button warning-button">Okay</button>
        </div>
    </div>
}

export default Warning