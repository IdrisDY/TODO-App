import React from 'react'
import { Draggable,Droppable,DragDropContext } from 'react-beautiful-dnd'
const CreateDroppable = () => {

   const ListArray = [
      { id:'1',name:'boredApe',color:'blue' },
      { id:'2',name:'boredPunk',color:'orange' },
      { id:'3',name:'boredDawg',color:'gray' }
   ]
  return (
   <DragDropContext>
    <Droppable droppableId='list'>
    {provided=>(
      <div {...provided.droppableProps} ref={provided.innerRef}>
{ListArray.map((list,index )=>{
return (
   <Draggable draggableId ={list.id} key={list.id} index={index}>
   {provided=>(
      <div ref={provided.innerRef}{...provided.draggableProps}  {...provided.dragHandleProps} key={list.id} style={{color:list.color}}><span> {list.id}</span> {list.name} </div>
)}
 </Draggable>

)
})}
      </div>
   )}

      </Droppable>
    </DragDropContext>
  )
}

export default CreateDroppable