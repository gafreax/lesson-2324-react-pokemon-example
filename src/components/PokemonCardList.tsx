import { useContext } from "react";

import PokemonCard from "./PokemonCard";
import { Pokemon } from "../App";
import { PokemonContext } from "../contexts/HomeContext";

function PokemonCardList() {
    const pokemonList = useContext<Pokemon[] | undefined>(PokemonContext)

    return pokemonList?.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon} />)
}

export default PokemonCardList