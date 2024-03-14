import PropTypes from 'prop-types';
import { ListItem, ListItemButton, ListItemIcon, Checkbox, ListItemText, IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


export default function TodoItem({todo, remove, toggle})
{
    const labelId = `checkbox-list-label-${todo.id}`;
    const removeTodo = () => {
        remove(todo.id);
    };
    return (
        <ListItem
            key={todo.id}
            secondaryAction={
                <IconButton edge="end" aria-label="comments" onClick={removeTodo}>
                    <DeleteIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={todo.completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                        onChange={toggle}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={todo.text} />
            </ListItemButton>
        </ListItem>
    )
}



TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired,
    remove: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired
};