import React, { useState, useEffect } from 'react'
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';


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
    { id: uuidv4(), task: 'eat', completed: false },
    { id: uuidv4(), task: 'sleep', completed: true },
    { id: uuidv4(), task: 'code', completed: false }
  ]
  const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem('todos')) || initialTodos)
  const addTodo = newTodoText => {
    const newTodos = [...todos, { id: uuidv4(), task: newTodoText, completed: false }]
    setTodos(newTodos)
    // window.localStorage.setItem('todos', JSON.stringify(newTodos))
  }
  const changeCompleted = (todo) => {
    const changedTodos = todos.map(todoItem => {
      if (todo.id === todoItem.id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todoItem;
    })
    setTodos(changedTodos)
    // window.localStorage.setItem('todos', JSON.stringify(changedTodos))
  }

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const editTodo = (id, task) => {
    const updatedTodos = todos.map((todo) => todo.id === id ? { ...todo, task } : todo)
    setTodos(updatedTodos)
    // window.localStorage.setItem('todos', JSON.stringify(updatedTodos))

  }

  const deleteTodo = (todo) => {
    const deletedTodos = todos.filter((todoItem => todo.id !== todoItem.id))
    setTodos(deletedTodos)
    // window.localStorage.setItem('todos', JSON.stringify(deletedTodos))
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
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}
