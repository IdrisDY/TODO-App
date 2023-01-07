import '@testing-library/jest-dom'
import render from '@testing-library/react'
describe(counter, () =>{

   it( 'counter displays light theme', ()=>{
      const { getByTestId } = render( <MainTodo/>)
      const count  = getByTestId('count').textContent
      expect(count).toEqual('TODO')
   });

})