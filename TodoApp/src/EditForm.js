import React from 'react'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { useInputChange } from './hooks/useInputChange'

export default function EditForm({
  editTodo,
  toggle,
  id,
  task
}) {
  const [input, handleInputChange, resetInputChange] = useInputChange()

  return (
    <Paper style={{ margin: '1rem 0', padding: '0 1rem', width: '100%' }} fullWidth>
      <form onSubmit={e => {
        e.preventDefault();
        editTodo(id, input['edit'] || task);
        toggle()
        resetInputChange('edit');
      }}>
        <TextField name='edit'
          onChange={handleInputChange}
          value={input['edit'] || task}
          margin='normal'
          label='Edit Todo'
          fullWidth
          autoFocus
        />
      </form>
    </Paper>
  )
}
