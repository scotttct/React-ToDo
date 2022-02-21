import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <>
            <div className="container text-center">
                <form onSubmit={handleSubmit}>
                    <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </>
    );
};

export default ToDoForm;