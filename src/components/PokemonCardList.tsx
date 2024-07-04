import { useContext } from "react";
import styled from "@emotion/styled";
import PokemonCard from "./PokemonCard";
import { Pokemon } from "../App";
import { PokemonContext } from "../contexts/HomeContext";

const PokemonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function PokemonCardList() {
  const pokemonList = useContext<Pokemon[] | undefined>(PokemonContext);

  return (
    <PokemonContainer>
      {pokemonList?.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </PokemonContainer>
  );
}

export default PokemonCardList;
