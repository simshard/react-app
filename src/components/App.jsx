import { useState } from 'react';
// import '../reset.css';
import '../App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish React Series',
      isComplete: false,
    },
    {
      id: 2,
      title: 'Go Grocery',
      isComplete: true,
    },
    {
      id: 3,
      title: 'Take over world',
      isComplete: false,
    },
  ]);

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        
        <form action="#">
          <input
            type="text"
            className="todo-input"
            placeholder="What do you need to do?"
          />
        </form>
    <p>&nbsp;</p>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li className="todo-item-container">
              <div className="todo-item">
                <input type="checkbox" />
                <span className="todo-item-label">{todo.title}</span>
                {/* <input type="text" className="todo-item-input" value="Finish React Series" /> */}
              </div>
              <button className="x-button">
                {<svg
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
                </svg> /* */}
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