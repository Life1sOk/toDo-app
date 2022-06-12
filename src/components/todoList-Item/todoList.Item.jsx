import React from "react";
import { useDispatch, useSelector } from "react-redux";

import './todoList-item.style.scss';
import { deleteToDO, toggleToDO } from '../../store-redux/todoSlice';

const TodoItem = ({todo}) => {
    const { id, text, completed } = todo;
    const dispatch = useDispatch();
    const doneToggle = useSelector(state => state.todo.todos)

    const toggleHandler = () => dispatch(toggleToDO(id))
    const deleteHandler = ()=> dispatch(deleteToDO(id))

    console.log(completed, 'complited')

    return(
        <div className="todoitem-container">
            <input type='checkbox' onClick={toggleHandler}/>
            <span className={completed ? 'done' : 'text'}>{text}</span>
            <button onClick={deleteHandler}>Done</button>
        </div>
    );
}

export default TodoItem;