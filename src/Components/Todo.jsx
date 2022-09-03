import React, { useState ,useEffect} from 'react'
import { useTheme } from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'
export const Todo = ({todo,dispatchButton,innerRef,todoIndex}) => {
  const themes = useTheme()
  const [checkClick, setCheckClick]= useState(false)
function handleClick(){
  checkClick?setCheckClick(false):setCheckClick(true)
  dispatchButton({type:'toggletodo', payload:{id:todo.id}})
}

console.log(todo)
  return (
    <Draggable draggableId={todo.id} key={todo.id} index={todoIndex} >
    {(provided,snapshot)=>(
    <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps} className = 'todo-main' style={todo.filterClicked ==='complete'&& !todo.complete || todo.filterClicked ==='active'&& todo.complete?{display:'none'}:{display:'flex'}} draggable='true'>
    <div className='checktodo'>
   { !checkClick?<input type='radio' onClick={handleClick} />
  : <div className='check-cover' onClick={handleClick}>
  <svg className='checkicon'  xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill={themes.color}stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>
  </div>
   }
 { !checkClick?<p> {todo.name}</p>:<strike> {todo.name}</strike>}
    </div>
<button className='btnclose' onClick={()=> dispatchButton({type:'deletetodo',payload:{id:todo.id}})}>
 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill={themes.color} fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg> </button>
    </div>
    )}
</Draggable>

  )
}
