import {counterObjectI} from "../types/counter";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: counterObjectI = {
    config: {
        base: {
            workTime: 1500,
            shortBreakTime: 300,
            longBreakTime: 900,
        },
    },
    timer: 1500,
    isWorkMode: true,
    isCounterRunning: false,
    counterIndex: 0,
    counterIterations: 0
}
export const counterSlice = createSlice({
    name: "counterSlice",
    initialState,
    reducers: {
        handleCounter: (state, action) => {
            if (state.counterIndex == 0) state.counterIndex = action.payload.id
            if (state.timer > 0) {
                state.timer = state.timer - 1;
            } else {
                state.isWorkMode = false;
                clearInterval(state.counterIndex);
            }
        },
        setIsCounterRunning: (state) => {
            state.isCounterRunning = !state.isCounterRunning;
        },
        restartCounter: (state) => {
            state.isCounterRunning = false;
            if (state.isWorkMode) {
                state.timer = state.config.base.workTime;
            } else {
                state.timer = state.config.base.shortBreakTime;
            }
        }
    }
})

export const {handleCounter, setIsCounterRunning, restartCounter} = counterSlice.actions;
export default counterSlice.reducer