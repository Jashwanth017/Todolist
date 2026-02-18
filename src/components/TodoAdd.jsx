import React, { useState } from 'react'

export default function TodoAdd(props) {
  const { handleAddTodo, todoValue, setTodoValue } = props;
  return (
    <div className='inputContainer'>
      <input type="text" value={todoValue} onChange={(e) => setTodoValue(e.target.value)} placeholder='Add a todo' required />
      <button onClick={() => handleAddTodo(todoValue)}>Add</button>
    </div>
  )
}
