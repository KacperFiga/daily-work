import {Box, Button} from "@mui/material";
import {PlayArrow, RestartAlt} from '@mui/icons-material';

const Buttons = () => {
    return (
        <Box className="mt-4 flex justify-between w-full">
            <Button variant="contained" color='success' className="w-full max-w-[125px]" startIcon={<PlayArrow/>}>
                Start
            </Button>
            <Button variant="contained" className="w-full max-w-[125px]" startIcon={<RestartAlt/>}>
                Reset
            </Button>
        </Box>
    )
}

export default Buttons