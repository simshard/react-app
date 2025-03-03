import { useState } from 'react';

import '../App.css';
import NowtTodo from './NowtTodo';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


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
  
  function remaining() {
    return todos.filter(todo => !todo.isComplete).length;
  }

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






  return (
    <div className="todo-app-container">
      <div className="todo-app">
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
            />
             : <NowtTodo/>}
      </div>
    </div>
  );
}

export default App;