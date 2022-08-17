import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import check from '../assets/images/icon-check.svg'
export const Todo = ({todo,dispatchButton,todoLength}) => {
  const themes = useTheme()
  const [checkClick, setCheckClick]= useState(false)
console.log(themes);
function handleClick(){
  checkClick?setCheckClick(false):setCheckClick(true)
}
  return (
    <>
    <div className = 'todo-main'>
    <div className='checktodo'>
   { !checkClick?<input type='radio' onClick={handleClick} />
  : <div className='check-cover' onClick={handleClick}>
  <svg className='checkicon'  xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill={themes.color}stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>
  </div>
   }
 { !checkClick?<p> {todo.name}</p>:<strike> {todo.name}</strike>}
    </div>
<button className='btnclose' onClick={()=> dispatchButton({type:'DELETETODO',payload:{id:todo.id}})}>
 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill={themes.color} fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg> </button>
    </div>
    </>
  )
}
