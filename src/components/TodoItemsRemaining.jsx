import React, { useMemo } from 'react';
import { TodosContext } from '../context/TodosContext';

function TodoItemsRemaining(){
const { todos } = React.useContext(TodosContext);
   function remainingCalculation() {
     return todos.filter(todo => !todo.isComplete).length;
   }
        const remaining = useMemo(remainingCalculation, [todos]);
     return (<span>{remaining} items remaining</span>);
}

export default TodoItemsRemaining;