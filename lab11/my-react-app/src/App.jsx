import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const Changetimes = () => {
    setCount(count + 1)
  }

  const renderMessage = `HelloCGU!! ${"被點了".repeat(count)}`;

  return (
    <>
      <h1 onClick={Changetimes} style={{fontSize: '100px', color: 'red'}}>
        {renderMessage}
      </h1>
    </>
  )
}

export default App