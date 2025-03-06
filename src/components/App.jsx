import React from 'react';
import {useEffect,useRef, useState} from 'react';
import NowtTodo from './NowtTodo';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import '../App.css';
import useLocalStorage from '../hooks/useLocalStorage';
import { TodosContext } from '../context/TodosContext';

function App() {
const [todos, setTodos] = useLocalStorage('todos',[]);  
const [idForToDo,setIdForToDo] = useLocalStorage('idForToDo',1);
const [name,setName] = useLocalStorage('name','');
const nameInputEl = useRef(null);
const [filter, setFilter] = useState('all');


  
  function todosFiltered() {
    if (filter === 'all') {
      return todos;
    } else if (filter === 'active') {
      return todos.filter(todo => !todo.isComplete);
    } else if (filter === 'completed') {
      return todos.filter(todo => todo.isComplete);
    }
  }

  function handleNameInput(event) {
    setName(event.target.value);
  }

  useEffect(() => {
    nameInputEl.current.focus();
  },[]);

  return (
    <TodosContext.Provider value={{
                          todos,
                          setTodos,
                          idForToDo,
                          setIdForToDo,
                          todosFiltered,
                          filter,
                          setFilter
                          }}> 
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
        <TodoForm />
        </div>
    
    {todos.length > 0 ? <TodoList/> : <NowtTodo/>}
      </div>
    </div>
   </TodosContext.Provider> 
  );
}

export default App;