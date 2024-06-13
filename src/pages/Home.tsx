import Counter from "../components/pomodoro/Counter";
import {Container} from "@mui/material";
import TaskList from "../components/TaskList/TaskList";
import TopBar from "../components/TopBar/TopBar";
import TaskForm from "../components/TaskList/TaskForm";

const Home = () => {
    return (
        <Container>
            <TopBar/>
            <Counter/>
            <TaskForm/>
            <TaskList/>
        </Container>
    )
}

export default Home;