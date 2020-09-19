import React, { useState } from 'react'
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TodoList from './TodoList'
import TodoForm from './TodoForm'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    margin: 0,
    height: '100vh',
    backgroundColor: '#fafafa'
  },
}));

export default function ToDoApp() {
  const classes = useStyles();
  const initialTodos = [
    { id: 1, task: 'eat', completed: false },
    { id: 2, task: 'sleep', completed: true },
    { id: 3, task: 'code', completed: false }
  ]
  const [todos, setTodos] = useState(initialTodos)
  const addTodo = newTodoText => {
    setTodos([...todos, { id: 4, task: newTodoText, completed: false }])
  }
  const changeCompleted = (todo) => {
    setTodos(todos.map(todoItem => {
      if (todo.id === todoItem.id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todoItem;
    }))
  }

  const deleteTodo = (todo) => {
    setTodos(todos.filter((todoItem => todo.id !== todoItem.id)))
  }

  return (
    <Paper
      className={classes.root}
      elevation={0}
    >
      <AppBar color='primary' position='static' style={{ height: '64px' }}>
        <Toolbar>
          <Typography color='inherit'>
            Todo with hooks
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify={"center"} style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm
            addTodo={addTodo}
          />
          <TodoList todos={todos}
            changeCompleted={changeCompleted}
            deleteTodo={deleteTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}
