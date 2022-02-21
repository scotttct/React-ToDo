import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <div className="container text-center mb-3">
                <button className="btn btn-danger " onClick={handleFilter}>Clear Completed</button>
            </div>
        </div>
    );
};

export default ToDoList;