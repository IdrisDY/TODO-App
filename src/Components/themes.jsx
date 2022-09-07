import darkmobilemg  from '../assets/images/bg-mobile-dark.jpg'
import lightmobileimg  from '../assets/images/bg-mobile-light.jpg'
import darkmobiledesk from '../assets/images/bg-desktop-dark.jpg'
import lightmobiledesk from '../assets/images/bg-desktop-light.jpg'

import { createGlobalStyle } from 'styled-components'
export const lightTheme = {
   color:'black',
   background:' hsl(0, 0%, 98%)',
   mobgimage:lightmobileimg,
   todocontentbg:'white',
   deskimg:lightmobiledesk,
}
export const darkTheme = {
   color:'#fff',
   background:' hsl(235, 21%, 11%)',
   mobgimage:darkmobilemg,
   todocontentbg:'hsl(235, 19%, 35%)',
   deskimg:darkmobiledesk,
}
export const GlobalStyle = createGlobalStyle`

body{
   color:${props=>props.theme.color};
   background-color:${props=>props.theme.background}; 

}
.input-content,.inputodo,.todo-content,.todopart{
   color:${props=>props.theme.color};
   background-color:${props=>props.theme.todocontentbg}; 

}


`
