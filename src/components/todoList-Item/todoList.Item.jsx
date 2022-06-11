import React from "react";
import { useDispatch } from "react-redux";

import './todoList-item.scss';
import { deleteToDO } from '../../store-redux/todoSlice';

const TodoItem = ({todo}) => {
    const { id, text } = todo;
    const dispatch = useDispatch();

    return(
        <div className="todoitem-container">
            <span>{id}</span>
            <span>{text}</span>
            <button onClick={()=>dispatch(deleteToDO(id))}>Done</button>
        </div>
    );
}

export default TodoItem;