import {Box, Button, Container} from "@mui/material";
import ActiveTask from "./ActiveTask";

const TopBar = () => {
    return (
        <Container className="mt-6">
            <ActiveTask/>
        </Container>
    )
}

export default TopBar;