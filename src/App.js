import React, { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {
  const [pokeCards, setPokeCards] = useState([]);

  useEffect(() => {
  fetch(pokeApi)
  .then((res) => res.json())
  .then((data) => {
    setPokeCards(data.results);
    console.log(data.results);
});
}, []);
  return (
    <div data-testid="app">
      <Navigation />
    
      <h1> Pokemon should appear here </h1>
      {pokeCards.length > 0 && 
        pokeCards.map((card) => {
          <PokemonCard name={card.name} url={card.url} />;
      })}
    </div>
  );
}

export { App };
