import { gettingPokemon } from "./QueryComponent";
import PokemonList from "./PokemonList";
import styles from "../src/styles/pokemon.module.css";

const PokemonListQuery = () => {
    const pokemon = gettingPokemon();

    const pokemonList = pokemon.map(
        (pokemon, index) => 
        <PokemonList pokemon={pokemon} key={index}/>
        );

    return(
            <div className={styles.pokemonGrid}>
                {pokemonList}
            </div>
    );
};

export default PokemonListQuery;
