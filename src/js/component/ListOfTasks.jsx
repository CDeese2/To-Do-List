import React from "react";
import Tasks from "./Tasks.jsx"
import "../../styles/index.css";

const ListOfTasks = ({ListOfTasks}) => {
    return (
        <div>
            {ListOfTasks.map (Tasks => {
                return (
                    <Tasks task={task} /> //'task' is a placeholder for the task coming from Tasks tab 
                )
            })}
        </div>
    )
}

export default ListOfTasks;

// References:
// https://www.educative.io/blog/react-hooks-tutorial-todo-list
// https://jsfiddle.net/BreatheCode/yjcwozed/
