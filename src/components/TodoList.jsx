import React, { useState,useContext } from 'react';
import TodoItemsRemaining from './TodoItemsRemaining';
import TodoClearCompleted from './TodoClearCompleted';
import CompleteAllTodos from './CompleteAllTodos';
import TodoFilters from './TodoFilters';
import useToggle from '../hooks/useToggle';
import { TodosContext } from '../context/TodosContext';




function TodoList(){
  const { todos, setTodos,  todosFiltered } = useContext(TodosContext);
  const [isOneVisible, setOneVisible] = useToggle(true);
 const [twoVisible, setTwoVisible] = useState(true);

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
              isEditing: false
            }
          : 
            todo
      );
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
        <>
        <ul className="todo-list">
          {todosFiltered().map(todo => (
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

      <div className="togglescontainer flex space-x-2 mt-8 p-4">
        <button className="button" onClick= {setOneVisible}>Features One toggle</button>
        <button className="button" onClick={()=>setTwoVisible(prevTwoVisible=>!prevTwoVisible)}>Features Two toggle</button>
      </div>
    
    {isOneVisible && (
      <div className="check-all-container mt-6 p-4">
        <CompleteAllTodos/>
        <TodoItemsRemaining />
      </div>
    )}
    {twoVisible && (
      <div className="other-buttons-container bg-gray-300 mt-8 p-4">
        <div className='flex space-x-1'>
        <TodoFilters/>
        </div>
        <div>
          <TodoClearCompleted/>
        </div>
      </div>
      )}
      </>  
    );
}

export default TodoList