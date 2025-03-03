import React from 'react';
import PropTypes from 'prop-types';

completeAllTodos.propTypes = {
  completeAllTodos: PropTypes.func.isRequired,
};


function completeAllTodos(props){
    return (
          <div>
            <div onClick={props.completeAllTodos} className="button">Check All</div>
          </div>
    )
}

export default completeAllTodos;