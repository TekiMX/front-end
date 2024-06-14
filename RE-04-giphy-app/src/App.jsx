import { useState, useEffect } from "react";
import './App.css'

function App () {

const [gifs, setGifs = useState ([])]

// API calls happens when using useEffect normally
useEffect(() => {
  fetch('')
  .then(res => res.json())
  .then(results => {
    const { data } = results
    setGifs
  })
},[])

  return (
    <>
      <div>
        <h1 className='title'>Re Giphy app</h1>
      </div>

    </>
  )
}

export default App
