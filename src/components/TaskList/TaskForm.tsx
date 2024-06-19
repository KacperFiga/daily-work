import React, {useState} from 'react'
import {Button, Modal, Box, TextField, Card} from "@mui/material";
import {useAppDispatch} from "../../store/hooks";
import {addNewTask} from "../../store/tasksSlice";

const TaskForm = () => {
    const [isModalOpen, changeIsModalOpen] = useState<boolean>(false)
    const [inputTaskTitle, changeInputTaskTitle] = useState<string>("");

    const dispatch = useAppDispatch();
    const handleAddNewTask = (e: { preventDefault: () => void; }, title: string) => {
        e.preventDefault();
        if (title.length > 0) {
            dispatch(addNewTask({title: title}))
            changeInputTaskTitle("");
            changeIsModalOpen(false);
        }

    }

    const boxStyles = {
        backgroundColor: "white",
        width: "326px",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
    }

    const modalStyles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    const buttonContainerStyle = {
        marginTop: "20px",
        display: "flex",
        justifyContent: "space-between",
    }

    return (
        <>
            <Modal open={isModalOpen} onClose={() => changeIsModalOpen(false)}
                   sx={modalStyles}>
                <Card sx={boxStyles}>
                    <form className="bg-white flex flex-col" onSubmit={(e) => handleAddNewTask(e, inputTaskTitle)}>
                        <TextField
                            label="Task title"
                            variant="filled"
                            onChange={(e) => changeInputTaskTitle(e.target.value)}
                            value={inputTaskTitle}
                        />
                        <Box sx={buttonContainerStyle}>
                            <Button type="submit" variant="contained"> Save </Button>
                            <Button variant="contained" onClick={() => changeIsModalOpen(false)}> Cancel </Button>
                        </Box>

                    </form>
                </Card>
            </Modal>

            <Button variant="outlined" className="mt-4 bg-gray-50 w-[300px] mx-auto block"
                    onClick={() => changeIsModalOpen(true)}>
                Add a new task
            </Button>
        </>

    )
}

export default TaskForm;