import { useState } from 'react'
import Nomen from './Nomen'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //const name = 'Simon'
  return (
    <>
     <h1> <Nomen name="Simon"/> </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count +1)}>
          count is {count}
        </button>
      </div>
      
    </>
  )
}

export default App
