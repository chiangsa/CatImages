import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CatImage from './components/CatImage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="center">
      <h1>View Random Cats!</h1>
      <CatImage />
    </div>
  )
}

export default App
