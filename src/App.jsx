import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { MainTodo } from './Components/mainTodo'
import CreateDroppable from './Components/createDroppable'

function App() {

  return (
    <div className="App">
    <MainTodo/>
    </div>
  )
}

export default App
