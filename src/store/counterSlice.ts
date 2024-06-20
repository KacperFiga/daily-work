import {counterObjectI} from "../types/counter";
import {createSlice} from "@reduxjs/toolkit";

const initialState: counterObjectI = {
    config: {
        base: {
            workTime: 1500,
            shortBreakTime: 300,
            longBreakTime: 900,
        },
        breaks: {
            shortBreaksAfterLongBreak: 4,
        }
    },
    stats: {
        pomodoroSessions: 0,
        shortBreakSessions: 0,
        longBreakSessions: 0,
    },
    timer: 5,
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

            if (state.stats.pomodoroSessions - (state.stats.shortBreakSessions + state.stats.longBreakSessions) === 0 && state.isWorkMode) {
                state.stats.pomodoroSessions += 1;
            } else if (state.stats.pomodoroSessions - (state.stats.shortBreakSessions + state.stats.longBreakSessions) === 1 && !state.isWorkMode) {

                if (state.stats.shortBreakSessions % state.config.breaks.shortBreaksAfterLongBreak === 0 && state.stats.shortBreakSessions !== 0) {
                    state.stats.longBreakSessions += 1;
                } else {
                    state.stats.shortBreakSessions += 1;
                }
            }

            if (state.timer > 0) {
                state.timer = state.timer - 1;
            } else {
                state.isCounterRunning = false;
                state.isWorkMode = !state.isWorkMode;
                if (state.isWorkMode) state.timer = state.config.base.workTime;
                else if (state.stats.shortBreakSessions % state.config.breaks.shortBreaksAfterLongBreak === 0 && state.stats.shortBreakSessions !== 0) {
                    state.timer = state.config.base.longBreakTime;
                } else {
                    state.timer = state.config.base.shortBreakTime;
                }
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