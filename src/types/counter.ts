export interface counterObjectI {
    config: {
        base: {
            workTime: number;
            shortBreakTime: number;
            longBreakTime: number;
        },
        breaks: {
            shortBreaksAfterLongBreak: number;
        },
    },
    stats: {
        pomodoroSessions: number;
        shortBreakSessions: number;
        longBreakSessions: number;
    },
    timer: number;
    isWorkMode: boolean;
    isCounterRunning: boolean;
    counterIndex: NodeJS.Timer | 0;
    counterIterations: number;
}