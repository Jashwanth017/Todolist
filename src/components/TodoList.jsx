import React, { useState } from 'react'
import TodoCart from './TodoCart';

export default function TodoList(props) {
    const { todos, handleDeleteTodo, handleEditTodo } = props;

    return (
        <ul className='main-list'>
            {todos.map((todo, todoIndex) => (
                <TodoCart handleDeleteTodo={handleDeleteTodo} index={todoIndex} key={todoIndex} handleEditTodo={handleEditTodo} >
                    <p>{todo}</p>
                </TodoCart>
            ))}
        </ul>
    )
}

