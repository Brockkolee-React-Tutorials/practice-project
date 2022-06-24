import React from 'react'
import Card from "./UI/Card"
import "./UserInput.css"
import Warning from './Warning'

function UserInput(props) {

    const [input, setInput] = React.useState(
        {
            username: "",
            age: "",
        }
    )

    const [clickStatus, setClickStatus] = React.useState(false)

    const [error, setError] = React.useState(false)
    const [errorMessage, setErrorMessage] = React.useState("")

    function Inputhandler(event) {
        const { name, value } = event.target
        setInput((prev) => (
            {
                ...prev,
                [name]: value
            }
        )
        )
    }

    function submitHandler(event) {
        event.preventDefault()
        if (input.username === ""|| input.age === "") {
            setError(true)
            setErrorMessage("Please enter a valid name and age (non-empty values).")
            
        } else if (+input.age < 0) {
            setError(true)
            setErrorMessage("Please enter a valid age (>0)")
        } 
        
        else {
            props.sendData(input)
            setInput({
                username: "",
                age: "",
            })
        }

    }

    function clickHandler() {
        setError(false)
    }

    return <>
    {error && <Warning
        message={errorMessage}
        onEnter={clickHandler}
    ></Warning>}
    <form  onSubmit={submitHandler}
    ><Card className="user-input">
            <label>Username</label>
            <input value={input.username} name="username" onChange={Inputhandler}></input>
            <label>Age (Years)</label>
            <input type="number" value={input.age} name="age" onChange={Inputhandler}></input>
            <button className='button'>Add User</button>
        </Card></form></>



}

export default UserInput