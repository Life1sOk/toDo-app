import React from "react";
import { useDispatch, useSelector } from "react-redux";

import './header.style.scss'
import { addToDO } from "../../store-redux/todoSlice";

const Header = () => {
    const dispatch = useDispatch();

    const array = useSelector(state => state.todo.todos)

    const increment = (todos) => {
        return {id:todos.length, text: "sometext", complited: false} 
      }
  
      const addHandler = () => {
          return dispatch(addToDO(increment(array)))
      }

    return(
        <div className="header-container">
            <h2>Header to add todos</h2>
            <button onClick={addHandler}>add</button>
        </div>
    );
}

export default Header;