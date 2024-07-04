import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react"
import Home from "../pages/Home"

export type Pokemon = {
    name: string,
    weight?: number,
    sprites?: {
        front_default?: string,
        back_default?: string
    }
}

// Tipo per la funzione setPokemonList,
// che è una funzione che accetta un array di Pokemon
// e non ritorna nulla
// (SetStateAction è un tipo generico di React)
// https://reactjs.org/docs/hooks-reference.html#usestate

type SetPokemonList = Dispatch<SetStateAction<Pokemon[]>>

interface FetchPokemonInterface {
    name: string,
    setPokemonList: SetPokemonList,
}

interface UpdatePokemonListInterface {
    pokemonPrev: Pokemon[],
    pokemonCurrent: Pokemon
}

function updatePokemonList({ pokemonPrev, pokemonCurrent }: UpdatePokemonListInterface): Pokemon[] {
    // Aggiunge un pokemon alla lista solo se non è già presente
    if(!pokemonPrev) return [pokemonCurrent]
    if(pokemonPrev.every( ({name}: Pokemon) => name !== pokemonCurrent.name)) {
        return [...pokemonPrev, pokemonCurrent] 
    }
    return pokemonPrev
}

async function fetchPokemon({ name, setPokemonList }: FetchPokemonInterface) {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const pokemonCurrent = await data.json()
    setPokemonList( pokemonPrev => updatePokemonList({ pokemonPrev, pokemonCurrent }) )
}

export const PokemonContext = createContext<Pokemon[] | undefined>(undefined)

function HomeContext() {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([])

    useEffect(() => {
        ['pikachu', 'ditto', 'bulbasaur', 'charizard', 'cubone'].forEach( name => 
            fetchPokemon({ name, setPokemonList })
        )
    }, [])

    return <PokemonContext.Provider value={pokemonList} > <Home /></PokemonContext.Provider>
}

export default HomeContext