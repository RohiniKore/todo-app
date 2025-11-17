import React, { useState } from 'react';
import './App.css'; 

import { FaClipboardList, FaTrash } from 'react-icons/fa';
import { IoMdAdd } from "react-icons/io";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a To-Do App', completed: true }
  ]);
  
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (newTodo.trim() === '') return; 
    const todo = {
      id: Date.now(), 
      text: newTodo,
      completed: false
    };
    setTodos([...todos, todo]);
    setNewTodo(''); 
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(
      todos.filter(todo => todo.id !== id)
    );
  };

  return (
 
    <div className="todo-container">
      <div className="todo-app">
        
        {}
        <div className="header">
          <FaClipboardList className="header-icon" />
          <h1>My To-Do List</h1>
        </div>
        
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo..."
          />
          {}
          <button type="submit" className="add-btn">
            <IoMdAdd />
          </button>
        </form>

        <ul className="todo-list">
          {todos.map(todo => (
       
            <li key={todo.id} className="todo-item">
              <input 
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
              />
              {}
              <span className={todo.completed ? 'completed' : ''}>
                {todo.text}
              </span>
              
              {}
              <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;