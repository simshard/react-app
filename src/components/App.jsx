import { useState } from 'react';
// import '../reset.css';
import '../App.css';

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Learn more React',
      isComplete: false,
    },
    {
      id: 2,
      title: 'Argue with Trump',
      isComplete: true,
    },
    {
      id: 3,
      title: 'Take over world',
      isComplete: false,
    },
  ]);

  const [toDoInput, setToDoInput] = useState('');
  const [idForToDo, setIdForToDo] = useState('4');

  function handleInput(event) {
    setToDoInput(event.target.value);
  }

  function addTodo(event) {
    event.preventDefault();
    if (toDoInput.trim().length === 0) {
      return;
    }
    const newTodo = {
      id: idForToDo,
      title: toDoInput,
      isComplete: false,
    };
    setTodos([...todos, newTodo]);
    setToDoInput('');
    setIdForToDo(prevIdForToDo => prevIdForToDo + 1)
  }

  function deleteToDo(id) {
      setTodos([...todos].filter(todo => todo.id !== id));
  }

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <div className='border-b border-gray-400'>
        <form action="#" onSubmit={addTodo}>
          <input
            type="text"
            value={toDoInput}
            onChange={handleInput}
            placeholder="What do you need to do?"
          />
        </form>
        </div>
    
        <ul className="todo-list">
          {todos.map((todo, id) => (
            <li className="todo-item-container" key={todo.id}>
              <div className="todo-item">
                <input type="checkbox" />
                <span className="todo-item-label">{todo.title}</span>
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
      </div>
    </div>
  );
}

export default App;