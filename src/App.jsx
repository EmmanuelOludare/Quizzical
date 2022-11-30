import { useState } from 'react'
import QuizPage from './components/QuizPage'
import reactLogo from './Images/blobTwo.svg'
import './App.css'

function App() {

  console.log("Component rendered")
    
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then(res => res.json())
        .then(data => console.log(data.results))

  return (
    <div className="App">
      <QuizPage />
    </div>
  )
}

export default App
