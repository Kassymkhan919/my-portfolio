import React, {Component, useState, useReducer} from 'react'

const formReducer = (state, event) => {
    return{
        ...state,
        [event.name]: event.value
    }
}

function Kasym(){
    const [message, setMessage] = useState("Zhanya Kaltoska")
    const [formData, setFormData] = useReducer(formReducer, [])


    const handlePress = event => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
    }
    
    const handleSubmit = event => {
        event.preventDefault()
        // handlePress(event)
    }

    return(
        <div>
            <h1>My name is {message}</h1>
            <div>
                {Object.entries(formData).map(([name, value]) => (
                    <li key={name}>{name}:{value.toString()}</li>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Name</p>
                    <input name="name" onChange={handlePress}/>
                </label>
                <button type="submit" >Update the message</button>
            </form>
            
        </div>
    );
}

export default Kasym;