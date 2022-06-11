import React from "react";

import './todoList-item.scss';

const TodoItem = ({todo}) => {
    const { text, complited, id } = todo;

    return(
        <div className="todoitem-container">
            <span>{id}</span>
            <span>{text}</span>
            <button>Done</button>
        </div>
    );
}

export default TodoItem;