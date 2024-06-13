import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    tasks: [
        {
            title: "zadanie 0",
            id: 0,
            active: false,
        },
        {
            title: "zadanie 1 ",
            id: 1,
            active: false,
        }
        , {
            title: "zadanie 2",
            id: 2,
            active: false,
        }
    ],
    mode: "none"
}
export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        changeMode: (state) => {
            state.mode = "changeActiveTask"
        },
        chooseActiveTask: (state, action: PayloadAction<{ id: number }>) => {
            state.tasks.forEach((task) => {
                task.active = false
            })
            state.tasks[action.payload.id].active = true
            state.mode = "none"
        }
    }
});


export const {changeMode, chooseActiveTask} = taskSlice.actions;
export default taskSlice.reducer

