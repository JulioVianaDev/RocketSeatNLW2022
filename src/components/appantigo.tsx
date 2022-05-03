import { useState } from 'react'
interface ButtonProps{
  text?:string,
}
function Button(props: ButtonProps){
  console.log(props)
  return (
  
  <button className='bg-violet-500 px-4 h-10 rounded text-violet-100 hover:bg-violet-700 transition-colors'>{props.text??'default'}</button>

  )}
function App() {
  return(
  <div className='flex gap-2'>
    <Button text="Enviar"/>
    <Button text="ok"/>
  
  </div>
  )
}

export default App
