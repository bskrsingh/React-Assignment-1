import React from 'react';

import './UserInput.css'

const userInput = (props) =>{
    return (
        <div>
            <h2>User Input</h2>
            <input type="text" onChange={props.changed} value = {props.currentName}/>
        </div>
    )
}

export default userInput;