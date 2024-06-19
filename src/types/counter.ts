export interface counterObjectI {
    config: {
        base: {
            workTime: number;
            shortBreakTime: number;
            longBreakTime: number;
        }
    },
    timer: number;
    isWorkMode: boolean;
    isCounterRunning: boolean;
    counterIndex: NodeJS.Timer | 0;
    counterIterations: number;
}