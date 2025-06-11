import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Add from './components/Add'
import NavBar from './components/NavBar'
import View from './components/view'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <NavBar/> 
      <Routes>
      <Route path='/add' element={<Add/>}/>
      <Route path='/view' element={<View/>}/>
    </Routes>
    </>
  )
}

export default App
