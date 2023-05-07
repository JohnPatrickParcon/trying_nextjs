import { gettingPokemon } from "./QueryComponent";
import PokemonList from "./PokemonList";

const PokemonListQuery = () => {
    const pokemon = gettingPokemon();

    const pokemonList = pokemon.map(
        (pokemon, index) => 
        <PokemonList pokemon={pokemon} key={index}/>
        );

    return(
        <div className="pokemonGrid">
            {pokemonList}
        </div>
    );
};

export default PokemonListQuery;
