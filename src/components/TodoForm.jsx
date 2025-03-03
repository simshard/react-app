import React, { useState } from 'react'
export default
function TodoForm (props){
    const [toDoInput, setToDoInput] = useState('');

    function handleInput(event) {
        setToDoInput(event.target.value);
      }

      function handleSubmit(event) {
        event.preventDefault();
        if (toDoInput.trim().length ===0) {
          return;
      }
      props.addTodo(toDoInput);
      setToDoInput('');
    }
      


    return (
        <form action="#" onSubmit={handleSubmit}>
          <input
            type="text"
            value={toDoInput}
            onChange={handleInput}
            placeholder="do what you need to do "
          />
        </form>
    )
}

