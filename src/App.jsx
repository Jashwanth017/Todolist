import { useState, useEffect } from 'react'
import './App.css'
import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'
import TodoCart from './components/TodoCart'

function getLocalTodos() {
  const storedTodos = localStorage.getItem("todos");
  if (storedTodos) {
    return JSON.parse(storedTodos);
  }
  return [];
}
function App() {
  const [todos, setTodos] = useState(getLocalTodos());
  const [todoValue, setTodoValue] = useState("");
  const [isEditing, setIsEditing] = useState(null);

  function handleAddTodo(newTodo) {
    if (!newTodo.trim()) {
      alert("Please enter a todo");
      return;
    }
    if (isEditing !== null) {
      const updatedTodos = [...todos];
      updatedTodos[isEditing] = newTodo;
      setTodos(updatedTodos);
      setIsEditing(null);
    } else {
      const newTodoList = [...todos, newTodo]
      setTodos(newTodoList)
    }
  }
  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    setTodos(newTodoList)
  }
  function handleEditTodo(index) {
    const todoedit = todos[index];
    setTodoValue(todoedit);
    setIsEditing(index);

  }
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  return (
    <main>
      <header>
        <h1>Todo App</h1>
      </header>
      <TodoAdd handleAddTodo={handleAddTodo} todoValue={todoValue} setTodoValue={setTodoValue} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} />
    </main>
  )
}

export default App
