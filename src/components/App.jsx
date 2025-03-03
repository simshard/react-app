import { useState } from 'react';

import '../App.css';
import NowtTodo from './NowtTodo';
import TodoForm from './TodoForm';


function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'React, Vue, Svelte, Alpine',
      isComplete: false,
      isEditing:false,
    },
    {
      id: 2,
      title: 'Perseverance furthers...',
      isComplete: false,
      isEditing:false,
    },
    {
      id: 3,
      title: 'Hello world is a starting point',
      isComplete: false,
      isEditing:false,
    },
  ]);


  const [idForToDo, setIdForToDo] = useState(4);



  function addTodo(todo) {
    
    setTodos([...todos,
    {
      id: idForToDo,
      title: todo,
      isComplete: false,
    },
  ]);
    setIdForToDo(prevIdForToDo => prevIdForToDo +1 );
  }

  function completeToDo(id) {
    const updatedTodos = todos.map(todo => ({
      ...todo,
      isComplete: todo.id === id ? !todo.isComplete : todo.isComplete,
    }));
    setTodos(updatedTodos);
  }


  function updateTodo(event, todoId) {
    const updatedTodos = todos.map(todo =>
      // Check if the current todo's ID matches the provided ID
      todoId === todo.id
        ? {
            // Create a new todo object with all properties of the current todo
            ...todo,
            // Update the title to the trimmed value from the input event (if it's not empty)
            title: event.target.value.trim() === '' ? todo.title : event.target.value.trim(),
            // Set isEditing to false to indicate that editing is complete
            isEditing: false
          }
        : // If the IDs do not match, return the todo as is
          todo
    );
    // Update the state with the new array of todos
    setTodos(updatedTodos);
  }
 

  function deleteToDo(id) {
      setTodos([...todos].filter(todo => todo.id !== id));
  }

  function markAsEditing(id) {
    const updatedTodos = todos.map(todo => ({
      ...todo,
      isEditing: todo.id === id ? !todo.isEditing : todo.isEditing,
    }));
    setTodos(updatedTodos);
  }

  function cancelEdit(event, id) {
    const updatedTodos = todos.map(todo => ({
      ...todo,
      isEditing: todo.id !== id ? todo.isEditing : false,
    }));
    setTodos(updatedTodos);
  }

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <div className='border-b border-gray-400'>
        <TodoForm addTodo={addTodo}/>
        </div>
    
    {todos.length > 0 ? (
      <>
        <ul className="todo-list">
          {todos.map(todo => (
            <li className="todo-item-container" key={todo.id}>
              <div className="todo-item">
                <input type="checkbox" onChange={()=>completeToDo(todo.id)}
                checked={todo.isComplete? true : false} />
                
                {!todo.isEditing ? (
                <span
                 onDoubleClick={()=>markAsEditing(todo.id)} 
                className={`todo-item-label ${todo.isComplete ? 'line-through' : ''}`}>
                  {todo.title}
                </span>
                ):(
                <input
                    type="text"
                    className="todo-item-input bg-green-100/20"
                    defaultValue={todo.title}
                    onBlur={event => updateTodo(event,todo.id)}
                    // Handle keydown events: update todo on 'Enter', cancel edit on 'Escape'
                    onKeyDown={event =>
                      event.key === 'Enter' ? (updateTodo(event, todo.id))
                    : event.key === 'Escape' ? cancelEdit(event, todo.id) : null
                    }
                    autoFocus                          
                     />
                  )}

              </div>
              <button type='button' className="x-button" onClick={() => deleteToDo(todo.id)}>
              <svg
                className="x-button-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>

        <div className="check-all-container mt-6 p-4">
          <div>
            <div className="button">Check All</div>
          </div>

          <span>3 items remaining</span>
        </div>

        <div className="other-buttons-container bg-gray-400 mt-8 p-4">
          <div>
            <button className="button filter-button filter-button-active">
              All
            </button>
            <button className="button filter-button text-xs font-light">Active</button>
            <button className="button filter-button">Completed</button>
          </div>
          <div>
            <button className="button">Clear completed</button>
          </div>
        </div>
        </>
        ) : (
       <NowtTodo/>
        )}
      </div>
    </div>
  );
}

export default App;