import {useAppSelector} from "../../store/hooks"
import {List} from "@mui/material";
import TaskItem from "./TaskItem";

const TaskList = () => {

    const tasksStore = useAppSelector((store) => store.tasks)


    const taskList = tasksStore.tasks.map((task: { id: number; title: string; }) => <TaskItem key={task.id} id={task.id}
                                                                                              name={task.title}/>)

    return (
        <List className="bg-neutral-100 mt-4 rounded">
            {taskList}
        </List>
    )
}

export default TaskList;
