import React from 'react'
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Todo from './Todo'
import Divider from '@material-ui/core/Divider';

export default function TodoList(props) {
  const {
    todos,
    changeCompleted,
    deleteTodo,
    editTodo
  } = props
  return (
    todos.length ?
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <>
              <Todo
                id={todo.id}
                key={todo.id}
                task={todo.task}
                completed={todo.completed}
                changeCompleted={() => changeCompleted(todo)}
                deleteTodo={() => deleteTodo(todo)}
                editTodo={editTodo}
              />
              {i !== todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper> : null
  )
}
