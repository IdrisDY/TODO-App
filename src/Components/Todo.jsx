import React from 'react'

export const Todo = ({todo,theme}) => {
  return (
    <div className = 'todo-main' style={{background:theme}}>
      <input type='radio' />
<p> {todo.name}</p>
    </div>
  )
}
