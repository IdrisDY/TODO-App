import React from 'react'
import { useState } from 'react'
import { useReducer } from 'react'
import { Todo } from './Todo'
export const ACTION = {
  ADDTODO:'addtodo',
  TOGGLETODO:'toggletodo',
  DELETETODO:'DELETETODO'
   }

const Todos = () => {
  const [nom, setNom]= useState('')

  const [todos, dispatch] = useReducer(reducer, []) 

       function reducer(state, action){
        // here action is an object here  with a type prop
        console.log(action)
        switch(action.type){
         case ACTION.ADDTODO:
   return [...state, newTodo(action.payload.name)];
   case ACTION.TOGGLETODO : 
   return state.map(todo=>{
    if(todo.id === action.payload.id){
      return{...todo, complete:!todo.complete}
    }
   })
case ACTION.DELETETODO:
  return state.filter(todo=>todo.id !== action.payload.id)
  default:
    return state
}     
        }
      function newTodo(name){
         return{
            id:Date.now(),
            name:name,
            complete:false
         }
      }
     const handleSubmit=(e)=>{
      e.preventDefault()
      console.log(e)
dispatch({type:ACTION.ADDTODO , payload:{name:nom}})
setNom('')
      }
     
  return (
   <div className='todo-inp-container'>
    <div className= 'input-content'>
    
   
    <form onSubmit={handleSubmit} className='form-todo'>
      <input className='inputodo' type='text' value={nom} onChange={e=> setNom(e.target.value)} placeholder='Create a new Todo'/>
    </form>
</div>
   <div className='todo-content'>
    { todos.map(todo=>
      < Todo key={todo.id} todo = {todo} dispatchButton={dispatch} todoLength= {todos.length}/>)
    }
    { todos.length>0 && 
    <div className='items-left'>
      <span> {todos.length} {todos.length===1?'item left':'items left'}</span>
     <button> Clear Completed</button>
    </div>}

</div>
    <div className='todopart'>
      <button> All</button>
      <button> Active</button>
      <button> Completed</button>

    </div>
    </div>
  )
}

export default Todos