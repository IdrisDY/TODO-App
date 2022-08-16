import React from 'react'
import { useTheme } from 'styled-components'
export const Todo = ({todo,dispatchButton,todoLength}) => {
  const themes = useTheme()
console.log(themes);
  return (
    <>
    <div className = 'todo-main'>
    <div className='checktodo'>
    <input type='radio' />
<p> {todo.name}</p>
    </div>
<button className='btnclose' onClick={()=> dispatchButton({type:'DELETETODO',payload:{id:todo.id}})}>
 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill={themes.color} fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg> </button>
    </div>
    <div>
      <span>  {todoLength} items left</span>
    </div>
    </>
  )
}
