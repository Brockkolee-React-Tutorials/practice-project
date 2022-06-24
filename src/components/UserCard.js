import React from "react";

function UserCard(props) {
    return (
        <div>
        <p>{props.username} ({props.age} years old)</p>
        </div>
    )
}

export default UserCard