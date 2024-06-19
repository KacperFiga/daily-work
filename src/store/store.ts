import {configureStore} from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice"
import counterReducer from "./counterSlice"

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        counter: counterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch