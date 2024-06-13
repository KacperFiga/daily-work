import Counter from "../components/pomodoro/Counter";
import {Container} from "@mui/material";
import TaskList from "../components/TaskList/TaskList";
import TopBar from "../components/TopBar/TopBar";

const Home = () => {
    return (
        <Container>
            <TopBar/>
            <Counter/>
            <TaskList/>
        </Container>
    )
}

export default Home;