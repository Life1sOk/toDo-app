import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        { id: 0, text: 'Learn React', completed: false },
        { id: 1, text: 'Learn Redux', completed: false},
        { id: 2, text: 'Build something fun!', completed: false}
    ],
}

function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
  }

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addToDO(state, action) {
            state.todos.push({
                id: nextTodoId(state.todos),
                text: action.payload,
                complited: false,
            })
        },
        deleteToDO(state, action) {
           state.todos = state.todos.filter(stay => stay.id !== action.payload)
        }
    }
})

export const { addToDO, deleteToDO } = todoSlice.actions;
export default todoSlice.reducer;