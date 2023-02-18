import React, { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

// function Pokimon(props) {
//   const [data, setData] = useState([])
//   const getData = async () => {
//     const response = await fetch(pokeApi)
//     const pokiData = await response.json();

//     data = pokiData;
//     setData(data)
//   }

//   useEffect( () => {
//     getData();
//   }, [] )
// }
function App() {
  const [data, setData] = useState('');
  // const pokiData = fetch(pokeApi);
  // data = pokiData;
  // setData(data);

  useEffect(() => {
    fetch(pokeApi)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(data)

  return (
    <div data-testid="app">
      <Navigation />
      
      <h1> Pokemon should appear here </h1>
      <PokemonCard />
    </div>
  );
}

export { App };
