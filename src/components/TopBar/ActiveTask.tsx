import {Box, Button} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {changeMode} from '../../store/tasksSlice';
import {useEffect, useState} from "react";
import {TaskI} from "../../types/tasks"

const ActiveTask = () => {

    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.tasks)
    const [activeTask, setActiveTask] = useState<TaskI>();

    useEffect(() => {
        setActiveTask(() => state.tasks.filter(task => task.active)[0])
    }, [state]);

    return (
        <Box>
            {activeTask ? <p className="mb-2">You are currently working on: {activeTask.title} </p> : null}

            <Button className="capitalize ml-auto block" variant="contained" disabled={state.tasks.length === 0}
                    onClick={() => dispatch(changeMode())}> {activeTask ? 'Change task' : 'Choose task to work on'} </Button>
        </Box>
    )
}

export default ActiveTask;