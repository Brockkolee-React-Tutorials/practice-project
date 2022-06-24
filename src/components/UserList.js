import React from "react";
import "./UserList.css"
import UserCard from "./UserCard";
import Card from "./UI/Card"


function UserList(props) {

    const userList = props.inputlist

    return <Card className="user-list">
        {userList.map((user, index) => (
            <UserCard
                key={index}
                username={user.username}
                age={user.age}
            ></UserCard>
        ))}
    </Card>

}

export default UserList