import React, { useEffect } from 'react'
import { useState } from 'react'
import { useReducer } from 'react'
import { Todo } from './Todo'
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd'
export const ACTION = {
  ADDTODO:'addtodo',
  TOGGLETODO:'toggletodo',
  DELETETODO:'deletetodo',
  CLEAR:'clearall',
  COMPLETE:'completed',
  ALL:'seeall',
ACTIVE:'active'
   }
const Todos = () => {
  const [nom, setNom]= useState('')


  const [todos, dispatch] = useReducer(reducer, []) 

       function reducer(todos, action){
        // here action is an object here  with a type prop
        
        switch(action.type){
         case ACTION.ADDTODO:
   return [...todos, newTodo(action.payload.name)];
   case ACTION.TOGGLETODO: 
   return todos.map(todo=>{
    if(todo.id === action.payload.id){
      console.log(todo);
      return{...todo, complete:!todo.complete}
    }
    return todo
   })
case ACTION.DELETETODO:
  return todos.filter(todo=>todo.id !== action.payload.id);
  case ACTION.CLEAR:
    return todos.filter(todo=>!todo.complete)
    case ACTION.ALL:
      return todos.map(todo=>{
        return{...todo,filterClicked:'all'}
    }
      )
    case ACTION.COMPLETE: 
    return todos.map(todo=>{
        return{...todo,filterClicked:'complete'}
    }
      )
    case ACTION.ACTIVE:
      return todos.map(todo=>{
        return{...todo,filterClicked:'active'}      
    }
      )
  default:
    return todos
}     
        }
      function newTodo(name){
         return{
            id: String (Date.now()),
            name:name,
            complete:false,
            filterClicked:'all'

         }
      }
      console.log(todos)
     const handleSubmit=(e)=>{
      e.preventDefault()
      console.log(e)
dispatch({type:ACTION.ADDTODO , payload:{name:nom}})
setNom('')
      }
      function clearAll(){
        dispatch({type:ACTION.CLEAR})
      }
      function seeCompleted (){
        dispatch({type:ACTION.COMPLETE})

      }
      function onEnd(result){
        console.log(result);
      }
      function reOrder(todos,startIndex,endIndex){
const rest = Array.from(todos)
const [removed] = rest.splice(startIndex,1);
rest.splice(endIndex,0,removed)
return rest
      }
     
  return (
   <div className='todo-inp-container'>
    <div className= 'input-content'>
    
   
    <form onSubmit={handleSubmit} className='form-todo'>
      <input className='inputodo' type='text' value={nom} onChange={e=> setNom(e.target.value)} placeholder='Create a new Todo'/>
    </form>
</div>
<DragDropContext onDragEnd={onEnd}>
<div className='todo-content' >

<Droppable droppableId='chars'>
   {(provided,snapshot)=>(
    <div {...provided.droppableProps} ref={provided.innerRef}>
    { todos.map((todo,index)=>{
    return   (    
       <Todo key={todo.id}   todo = {todo} todoIndex={index} dispatchButton={dispatch} todoLength= {todos.length}/>
    )
    }
    )
    }
    {provided.placeholder}
    </div>
    )}

</Droppable>


    { todos.length>0 && 
    <div className='items-left'>
      <span> {todos.length} {todos.length===1?'item left':'items left'}</span>
     <button  onClick={clearAll}> Clear Completed</button>
    </div>}
</div>

</DragDropContext>
    <div className='todopart'>
      <button onClick={()=>dispatch({type:ACTION.ALL})}> All</button>
      <button onClick={()=>dispatch({type:ACTION.ACTIVE})}> Active</button>
      <button onClick={seeCompleted}> Completed</button>

    </div>
    </div>
  )
}

export default Todos