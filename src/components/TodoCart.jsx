import React from 'react'

export default function TodoCart(props) {
    const { handleDeleteTodo, index, handleEditTodo } = props;
    return (
        <li className='todoItem'>
            {props.children}
            <div className='actionsContainer'>
                <i className="fa-solid fa-pen-to-square" onClick={() => handleEditTodo(index)}></i>
                <i className="fa-solid fa-trash-can" onClick={() => handleDeleteTodo(index)}></i>
            </div>
        </li>
    )
}
