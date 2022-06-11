import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import './header.style.scss'
import { addToDO } from "../../store-redux/todoSlice";


const Header = () => {
    const dispatch = useDispatch();

    const [text, setText] = useState('')

    const changehandler = (e) => setText(e.target.value);
        
    const addHandler = () => {
        if(text.length && text.trim()) {
            dispatch(addToDO(text));
            setText('')
        }
    }

    const handleKeyDown = (e) => {
        const trimmedText = e.target.value.trim()
        // If the user pressed the Enter key:
        if (e.key === 'Enter' && trimmedText) {
          // Dispatch the "todo added" action with this text
          dispatch(addToDO(text));
          // And clear out the text input
          setText('')
        }
    }
    
    return(
        <div className="header-container">
            <h2>Header to add todos</h2>
            <input value={text} onChange={changehandler} onKeyDown={handleKeyDown}/>
            <button onClick={addHandler}>add</button>
        </div>
    );
}

export default Header;