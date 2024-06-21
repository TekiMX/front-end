import { useState, useEffect } from 'react'

const Home = () => {
  const [pokemons, setPokemons] = useState([]) // Pokemons list

  // API call
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
      .then(res => res.json())
      .then(data => setPokemons(data.results))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <h1>Home</h1>
      <div className='container'>
        <div className='row'>
          {
            pokemons.map(pokemon => (

              <div className='col-sm-4 mb-3 mb-sm-0' key={pokemon.name}>
                <div className='card'>
                  <div className='card-body'>
                    <h5 className='card-title'>{pokemon.name}</h5>
                    <img
                      className='card-img-top'
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split('/')[6]}.png`}
                      alt={pokemon.name}
                    />
                    {/*
                   pokemon.types.map(type => (

                     <li className='card-text' key={type.slot}> {type.name}</li>
                   ))
                  */}
                  </div>
                </div>
              </div>
            ))
        }
        </div>
      </div>
    </>
  )
}

export default Home
