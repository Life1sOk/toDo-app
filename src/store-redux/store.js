import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './incdeSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})
console.log(store.getState())