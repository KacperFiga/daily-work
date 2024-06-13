import {useState} from 'react'
import {Checkbox, ListItem, Button, Menu, MenuItem} from "@mui/material";
import {Delete} from "@mui/icons-material";
import {MoreVert} from '@mui/icons-material';
import {Edit} from '@mui/icons-material';
import {styled} from '@mui/material/styles';

interface TaskItemProps {
    name: string;
    id: number;
}

const StyledListItem = styled(ListItem)(({theme}) => ({
    ...theme.typography.body2,
    borderBottom: '1px solid #939393',
    justifyContent: 'space-between',
}));

const TaskItem = ({name, id}: TaskItemProps) => {

    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        setIsPopoverOpen(true)
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
        setIsPopoverOpen(false)
    };


    return (
        <StyledListItem className="relative">
            <p>
                {name}
            </p>

            <div>
                <Checkbox className="p-0"/>

                <Button className="m-0" aria-describedby={String(id)} onClick={handleOpenMenu}>
                    <MoreVert/>
                </Button>
            </div>

            <Menu open={isPopoverOpen} id={String(id)}
                  anchorEl={anchorEl}
                  onClose={handleCloseMenu}
            >
                <MenuItem>
                    <Button className="w-min">
                        <span className="capitalize mr-2"> Remove </span>
                        <Delete className="text-red-300 hover:text-red-500"/>
                    </Button>
                </MenuItem>
                <MenuItem>
                    <Button className="w-min">
                        <Edit className="text-yellow-300 hover:text-yellow-500"/>
                    </Button>
                </MenuItem>
            </Menu>
        </StyledListItem>
    )
}
export default TaskItem