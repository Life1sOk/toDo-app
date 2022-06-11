import React from "react";
import { useSelector } from "react-redux";

import './todo-list.style.scss';
import TodoItem from "../todoList-Item/todoList.Item";

const TodoList = () => {
    const array = useSelector(state => state.todo.todos)
  
    console.log(array)
    return(
        <div className="todolist-container">
            { array.map(todo => {
                return <TodoItem key={todo.id} todo={todo}/>
            })}
        </div>
    )
}

export default TodoList;