import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';


export default function Todo({
  task,
  completed,
  changeCompleted,
  deleteTodo
}) {
  return (
    <ListItem>
      <Checkbox
        checked={completed}
        onChange={changeCompleted}
      />
      <ListItemText style={{ textDecoration: completed ? 'line-through' : '' }}>
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton
          area-label='Delete'
          onClick={deleteTodo}>
          <DeleteIcon />
        </IconButton>
        <IconButton area-label='Edit'>
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
