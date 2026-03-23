import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Board from './Components/Board.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='container'>    
    <Board />
  </div>
  )
}

export default App
