import React from 'react';

const userOutput = (props) =>{

    const style = {
        color:'blue',
        fontsize: '12px',
    }

    return (
        <div>
            <h2>User OutPut</h2>
            <p style={style}>UserName : {props.userName}</p>
            <p>Some More Random Text</p>
        </div>
    )
}

export default userOutput