import { v4 as uuidv4 } from 'uuid';
import React, { useState, useEffect } from 'react'


export default function useTodoState() {
  const initialTodos = [
    { id: uuidv4(), task: 'eat', completed: false },
    { id: uuidv4(), task: 'sleep', completed: true },
    { id: uuidv4(), task: 'code', completed: false }
  ]

  const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem('todos')) || initialTodos)

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return {
    todos,
    addTodo: newTodoText => {
      const newTodos = [...todos, { id: uuidv4(), task: newTodoText, completed: false }]
      setTodos(newTodos)
      // window.localStorage.setItem('todos', JSON.stringify(newTodos))
    },
    changeCompleted: (todo) => {
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
    },
    editTodo: (id, task) => {
      const updatedTodos = todos.map((todo) => todo.id === id ? { ...todo, task } : todo)
      setTodos(updatedTodos)
      // window.localStorage.setItem('todos', JSON.stringify(updatedTodos))

    },

    deleteTodo: (todo) => {
      const deletedTodos = todos.filter((todoItem => todo.id !== todoItem.id))
      setTodos(deletedTodos)
      // window.localStorage.setItem('todos', JSON.stringify(deletedTodos))
    }
  }
}