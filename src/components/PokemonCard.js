import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

function PokemonCard({ url, name }) {
  const [pokemon, setPokemon] = useState([null]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
        console.log(data);
      });
  }, [url]);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pokemon?.sprites.front_default} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}

export { PokemonCard };
