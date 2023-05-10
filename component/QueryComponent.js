import { useEffect, useState} from "react";

export function gettingPokemon() {
    const [pokemonListQuery, setPokemonListQuery] = useState([]);
  
    useEffect(() => {getPokemonListQuery()},[]);

    const getPokemonListQuery = async () => {
      const req = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
      const res = await req.json();
      const list = res.results;
      setPokemonListQuery(list);
    } 

    return pokemonListQuery;
    }

export function showingPokemon(url) {
    const [pokemonData, setPokemonData] = useState();

    useEffect(() => {getPokemonData()}, []);
    
    const getPokemonData = async () => {
        const req = await fetch(url);
        const res = await req.json();
        const {sprites: {front_default} = "placeholder"} = await res;
        setPokemonData(front_default);
    }
    return (pokemonData);
}

