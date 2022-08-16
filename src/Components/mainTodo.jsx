import React, { useState } from 'react'
import styled,{ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyle } from './themes'
import moon from '../assets/images/icon-moon.svg'
import sun from '../assets/images/icon-sun.svg'
import Todos from './createTodo'
import { Todo } from './Todo'
export const MainTodo = () => {
   const [theme, setTheme] = useState('light')
   window.localStorage.setItem('theme', theme)
   console.log(window.localStorage.getItem('theme'));
 
   const Styleddiv = styled.div`
      ${'' /* color:${props=>props.theme.color};
   background-color:${props=>props.theme.background}; */}
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
    
<GlobalStyle/>
    <div className='container' >

    <Topdiv className='todo-top'>  
    <div className='todo-top-toggle'> 
    <p> TODO</p>
<button onClick ={handleTheme} > <img src= {theme==='light'?moon:sun} alt='toggle dark/light theme' />
</button>
    </div>

    </Topdiv>
   

<div className='todo-bottom'> 
<Todos  />
<div>
      <span> items left</span>
    </div>

</div>


    </div>
    </ThemeProvider>
  )
}
