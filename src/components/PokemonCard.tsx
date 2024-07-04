import { useEffect, useState } from "react";
import { Pokemon } from "../App";

import "./PokemonCard.scss";

interface Props {
  pokemon: Pokemon;
}

interface SwitchSpriteInterface {
  pokemon: Pokemon;
  prevImage: string;
}

function switchSprite({ pokemon, prevImage }: SwitchSpriteInterface) {
  if (prevImage === pokemon.sprites?.front_default) {
    return pokemon.sprites?.back_default ?? "";
  } else {
    return pokemon.sprites?.front_default ?? "";
  }
}

function PokemonCard({ pokemon }: Props) {
  const [image, setImage] = useState<string>(
    pokemon.sprites?.front_default ?? "",
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setImage((prevImage) => switchSprite({ pokemon, prevImage }));
    }, 400);

    return () => clearTimeout(timeout); // funzione di cleanup
  }, [image, pokemon]);

  return (
    <div className="card">
      {pokemon && (
        <>
          <div>
            <h2>{pokemon.name}</h2>
            <h4>Weight: {pokemon.weight} </h4>
          </div>
          <img src={image} alt={pokemon.name} />
        </>
      )}
    </div>
  );
}

export default PokemonCard;
