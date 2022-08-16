import darkmobilemg  from '../assets/images/bg-mobile-dark.jpg'
import lightmobileimg  from '../assets/images/bg-mobile-light.jpg'
import { createGlobalStyle } from 'styled-components'
export const lightTheme = {
   color:'black',
   background:'white',
   mobgimage:lightmobileimg,
   todocontentbg:'white'
}
export const darkTheme = {
   color:'#fff',
   background:' hsl(235, 21%, 11%)',
   mobgimage:darkmobilemg,
   todocontentbg:'hsl(235, 19%, 35%)'

}
export const GlobalStyle = createGlobalStyle`

.todo-bottom{
   color:${props=>props.theme.color};
   background-color:${props=>props.theme.background}; 

}
.input-content,.inputodo,.todo-content,.todopart{
   color:${props=>props.theme.color};
   background-color:${props=>props.theme.todocontentbg}; 

}
`
