import React, { useState } from 'react'
import PropTypes from 'prop-types';

TodoForm.PropTypes = {
    addTodo: PropTypes.func.isRequired,
}

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



export default TodoForm;
