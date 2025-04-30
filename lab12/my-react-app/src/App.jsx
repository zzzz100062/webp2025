import { useState } from 'react'
import './App.css'
import HelloCgu from './HelloCgu'
import CguButton from './CguButton'

function App() {
  
  const changeText = (e) => {
    e.target.innerText = event.target.innerText + "被點了"

  }
  const Button = (num) => {
    var output =[]
    for(let i = 0; i < num; i++){
      output.push(<button key={i} onClick={changeText}>第{i+1}個按鈕</button>)
    }
    return output
  }
  return (
    <>
      <h1>        
        <HelloCgu/>
        <CguButton/>
      </h1>
    </>
  )
}

export default App
