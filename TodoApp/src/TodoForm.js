import React from 'react'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { useInputChange } from './hooks/useInputChange'

export default function TodoForm({
  addTodo
}) {
  const [input, handleInputChange, resetInputChange] = useInputChange()

  return (
    <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
      <form onSubmit={e => {
        e.preventDefault();
        addTodo(input['todoName']);
        resetInputChange('todoName');
      }}>
        <TextField name='todoName'
          onChange={handleInputChange}
          value={input['todoName']}
          margin='normal'
          label='Add New Todo'
          fullWidth
        />
      </form>
    </Paper>
  )
}
