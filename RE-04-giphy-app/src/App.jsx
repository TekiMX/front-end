/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import ImageCards from './components/ImageCards'
import './App.css'

function App () {
  const [gifs, setGifs] = useState([])
  const KEY = import.meta.env.VITE_GIPHY_APP_KEY

  // All API calls are used mostly inside useEffect hook
  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${KEY}&limit=25&offset=0&rating=g&bundle=messaging_non_clips`)
      .then(res => res.json())
      .then(results => {
        const { data } = results
        setGifs(data)
      }).catch(err => console.log(err))
  }, [])

  return (
    <>
      <div>
        <h1 className='title'>Re Giphy app</h1>
        <div className='grid-cards'>
          {
            gifs.map(gif => (
              <ImageCards
                url={gif.images.fixed_height.url}
                title={gif.title}
                key={gif.id}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
