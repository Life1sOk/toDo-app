import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        { id: 0, text: 'Learn React', completed: false },
        { id: 1, text: 'Learn Redux', completed: false},
        { id: 2, text: 'Build something fun!', completed: false}
    ],
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addToDO(state, action) {
            state.todos.push(action.payload)
        }
    }
})

export const { addToDO } = todoSlice.actions;
export default todoSlice.reducer;