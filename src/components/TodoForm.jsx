import React, { useContext, useState } from 'react'
import { TodosContext } from '../context/TodosContext';

function TodoForm (){

  const {todos, setTodos, idForToDo, setIdForToDo} = useContext(TodosContext);
  const [toDoInput, setToDoInput] = useState('');

    function handleInput(event) {
        setToDoInput(event.target.value);
      }

      function addTodo(event) {
        event.preventDefault();
        if (toDoInput.trim().length ===0) {
          return;
      }
      setTodos([...todos,
        {
          id: idForToDo,
          title: toDoInput,
          isComplete: false,
        },
      ]);
        setIdForToDo(prevIdForToDo => prevIdForToDo +1 );

      
      setToDoInput('');
    }
      


    return (
        <form action="#" onSubmit={addTodo}>
          <input
            type="text"
            value={toDoInput}
            onChange={handleInput}
            placeholder="do what you need to do "
            className="todo-input"
          />
        </form>
    )
}



export default TodoForm;
