import React from 'react';

const Tasks = (props) => {
    return (
      <li className="d-flex flex-row justify-spacing-between">
        {props.task}
        <span type="button" onClick={() => {
          props.onDelete(props.id);
        }}
          className="delete-button">
            <i class="fas fa-trash"></i>
            </span>
      </li>
      );
     };
    
export default Tasks;

// References:
// https://www.educative.io/blog/react-hooks-tutorial-todo-list
// https://jsfiddle.net/BreatheCode/yjcwozed/

// ---

//components
