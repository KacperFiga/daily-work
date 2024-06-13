import {List} from "@mui/material";
import TaskItem from "./TaskItem";

const TaskList = () => {


    const tasks = [
        {
            title: "zadanie 0",
            id: 0
        },
        {
            title: "zadanie 1 ",
            id: 1
        }
        , {
            title: "zadanie 2",
            id: 2
        }
    ]


    const taskList = tasks.map(task => <TaskItem key={task.id} id={task.id} name={task.title}/>)

    return (
        <List className="bg-neutral-100 mt-4 rounded">
            {taskList}
        </List>
    )
}

export default TaskList;
