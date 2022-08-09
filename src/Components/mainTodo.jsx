import React, { useState } from 'react'
import styled,{ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './themes'
import moon from '../assets/images/icon-moon.svg'
import sun from '../assets/images/icon-sun.svg'
import Todos from './createTodo'
import { Todo } from './Todo'
export const MainTodo = () => {
   const [theme, setTheme] = useState('light')
   const [changeImg , setChangeImg]  = useState(false)
   const Styleddiv = styled.div`
      color:${props=>props.theme.color};
   background-color:${props=>props.theme.background};
   `;
   const Topdiv = styled.div`
   background-image: url(${props=>props.theme.mobgimage}) ;
   `;
   function handleTheme(){
     theme==='light'?setTheme('dark'):setTheme('light')
   }
   console.log(Topdiv);
  return (
   <ThemeProvider theme={theme==='light'?lightTheme:darkTheme}>
    

    <div className='container' >

    <Topdiv className='todo-top'>  
    <div className='todo-top-toggle'> 
    <p> TODO</p>
<button onClick ={handleTheme} > <img src= {theme==='light'?moon:sun} alt='toggle dark/light theme' />
</button>
    </div>
 <Todos  />
    </Topdiv>
   

<Styleddiv className='todo-bottom'> 
h
</Styleddiv>

    </div>
    </ThemeProvider>
  )
}
