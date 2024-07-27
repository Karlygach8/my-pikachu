import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [pokemonData, setPokemonData] = useState(null);


  useEffect(() => {
    const pokemonNames = ['bulbasaur', 'ivysaur', 'venusaur', 'metapod', 'butterfree', 'weedle'];
  
    const fetchPokemon = async (name) => {
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
      const result = await fetch(url);
      return await result.json();
    };
  
    const fetchData = async () => {
      const data = await Promise.all(pokemonNames.map(fetchPokemon));
      setPokemonData(data);
    };
  
    fetchData();
  }, []);

  return (
    <div className='Karl'>
    {pokemonData ? (
          <div className="card">
            {pokemonData.map((pokemon, index) => (
              <div key={index} className="cardii">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <h3 id="name">{pokemon.name}</h3>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
    </div>
  );
}

export default App;
