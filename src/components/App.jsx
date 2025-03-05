import React from 'react';
import { useMemo,useEffect,useRef} from 'react';

import NowtTodo from './NowtTodo';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import '../App.css';
import useLocalStorage from '../hooks/useLocalStorage';

function App() {
const [todos, setTodos] = useLocalStorage('todos',[]);  
const [idForToDo,setIdForToDo] = useLocalStorage('idForToDo',1);
const [name,setName] = useLocalStorage('name','');
const nameInputEl = useRef(null);

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
  
  function remainingCalculation() {
    // console.log('calculating remaining todos. This is slow.');
    // for (let index = 0; index < 2000000000; index++) {}
    return todos.filter(todo => !todo.isComplete).length;
  }

  const remaining = useMemo(remainingCalculation, [todos]);



  function clearCompleted() {
    setTodos([...todos].filter(todo => !todo.isComplete));
  }

  function completeAllTodos() {
    const updatedTodos = todos.map(todo => {
       todo.isComplete =true;
      return todo;
    });
    setTodos(updatedTodos);
  }

  /**
   * Filter the todos based on the given filter string.
   * If the filter string is 'all', return all todos.
   * If the filter string is 'active', return only the todos that are not completed.
   * If the filter string is 'completed', return only the todos that are completed.
   * @param {string} filter
   */
  function todosFiltered(filter) {
    if (filter === 'all') {
      // Return all todos
      return todos;
    } else if (filter === 'active') {
      // Return only the todos that are not completed
      return todos.filter(todo => !todo.isComplete);
    } else if (filter === 'completed') {
      // Return only the todos that are completed
      return todos.filter(todo => todo.isComplete);
    }
  }

  function handleNameInput(event) {
    setName(event.target.value);
   // localStorage.setItem('name',JSON.stringify(event.target.value));
  }

  useEffect(() => {
    nameInputEl.current.focus();
    //setName(JSON.parse(localStorage.getItem('name')) ?? '');
  },[]);

  return (
    <div className="todo-app-container mb-12 ">
      <div className="todo-app">

      <div className="name-container">
        <h2>What is your Name?</h2>
        <form action="#" >
          <input type="text"
                 ref={nameInputEl}
                 className='todo-input'
                 placeholder='Enter your name'
                 value={name}
                 onChange={handleNameInput}
                />
          <button onClick= {() => nameInputEl.current.focus()}>ref</button>
        </form>
        {name &&<p className="name-label mt-4 text-red-500">hello {name}</p>}
      </div>


        <h2>Todo App</h2>
        <div className='border-b border-gray-400'>
        <TodoForm addTodo={addTodo}/>
        </div>
    
    {todos.length > 0 ? <TodoList 
            todos = {todos}
            completeToDo={completeToDo}
            updateTodo={updateTodo}
            deleteToDo={deleteToDo}
            markAsEditing={markAsEditing}
            cancelEdit={cancelEdit}
            remaining={remaining}
            clearCompleted={clearCompleted}
            completeAllTodos={completeAllTodos}
            todosFiltered={todosFiltered}
            />
             : <NowtTodo/>}
      </div>
    </div>
  );
}

export default App;