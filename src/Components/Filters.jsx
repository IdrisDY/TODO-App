import React from 'react'
import { ACTION } from './createTodo'
const Filters = ({dispatch,style}) => {
   function seeCompleted (){
      dispatch({type:ACTION.COMPLETE})
    }

  return (
   <div className='todopart' style={style}>
   <button onClick={()=>dispatch({type:ACTION.ALL})}> All</button>
   <button onClick={()=>dispatch({type:ACTION.ACTIVE})}> Active</button>
   <button onClick={seeCompleted}> Completed</button>

 </div>

   )
}

export default Filters