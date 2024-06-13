import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import generateId from "../utils/generateId";
import {TaskI} from "../types/tasks"

const initialState: { tasks: TaskI[], mode: string } = {
    tasks: [],
    mode: "none"
}
export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        changeMode: (state) => {
            state.mode = "changeActiveTask"
        },
        chooseActiveTask: (state, action: PayloadAction<{ id: string }>) => {
            state.tasks.forEach((task) => {
                task.active = false
            })
            const elementIndex = state.tasks.findIndex(task => task.id === action.payload.id);
            state.tasks[elementIndex].active = true
            state.mode = "none"
        },

        addNewTask: (state, action: PayloadAction<{ title: string }>) => {
            const newTask = {
                title: action.payload.title,
                id: generateId(),
                active: false,
            }
            state.tasks = [...state.tasks, newTask]
        }
    }
});


export const {changeMode, chooseActiveTask, addNewTask} = taskSlice.actions;
export default taskSlice.reducer

