import { useEffect, useState, Suspense } from "react";
import PokemonList from "./PokemonList";

const PokemonListQuery = () => {
    const [pokemonListQuery, setPokemonListQuery] = useState([]);
  
    useEffect(() => {getPokemonListQuery()},[]);

    const getPokemonListQuery = async () => {
      const req = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
      const res = await req.json();
      const list = res.results;
      setPokemonListQuery(list);
    } 

    const pokemon = pokemonListQuery.map(
      (pokemon, index) => 
      <PokemonList pokemon={pokemon} key={index}/>
      );
    
    return(
        <div style={{display: "grid", placeItems: "center", gridTemplateColumns: "auto auto auto auto", gap: "1rem"}}>
            {pokemon}
        </div>
    );
};

export default PokemonListQuery;