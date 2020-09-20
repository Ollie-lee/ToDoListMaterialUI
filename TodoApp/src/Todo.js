import React, { useState } from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import useToggleState from './hooks/useToggleState'
import EditForm from './EditForm'

export default function Todo({
  task,
  completed,
  changeCompleted,
  deleteTodo,
  editTodo,
  id
}) {
  const [isEditing, toggle] = useToggleState(false);

  return (
    <ListItem>
      {isEditing ? <EditForm
        editTodo={editTodo}
        toggle={toggle}
        id={id}
        task={task}
      /> : (<>
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
          <IconButton
            area-label='Edit'
            onClick={toggle}
          >
            <EditIcon />
          </IconButton>
        </ListItemSecondaryAction></>)}
    </ListItem>
  )
}
