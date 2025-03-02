import React from 'react';
import PropTypes from 'prop-types';

TodoList.PropTypes = {
    todos: PropTypes.array.isRequired,
    completeToDo: PropTypes.func.isRequired,
    markAsEditing: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    cancelEdit: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
};

function TodoList(props){
    return (
        <>
        <ul className="todo-list">
          {props.todos.map(todo => (
            <li className="todo-item-container" key={todo.id}>
              <div className="todo-item">
                <input type="checkbox" onChange={()=>props.completeToDo(todo.id)}
                 checked={todo.isComplete? true : false} />
                
                {!todo.isEditing ? (
                <span
                 onDoubleClick={()=>props.markAsEditing(todo.id)} 
                className={`todo-item-label ${todo.isComplete ? 'line-through' : ''}`}>
                  {todo.title}
                </span>
                ):(
                <input
                    type="text"
                    className="todo-item-input bg-green-100/20"
                    defaultValue={todo.title}
                    onBlur={event => props.updateTodo(event,todo.id)}
                    // Handle keydown events: update todo on 'Enter', cancel edit on 'Escape'
                    onKeyDown={event =>
                      event.key === 'Enter' ? (props.updateTodo(event, todo.id))
                    : event.key === 'Escape' ? props.cancelEdit(event, todo.id) : null
                    }
                    autoFocus                          
                     />
                  )}

              </div>
              <button type='button' className="x-button" onClick={() => props.deleteToDo(todo.id)}>
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
    );
}

export default TodoList