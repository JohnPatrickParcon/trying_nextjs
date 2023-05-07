import { Suspense } from "react";
import { showingPokemon } from "./QueryComponent";

const PokemonList = ({pokemon: {name, url}}) => {
    const pokemonSprite = showingPokemon(url);
    return(
        <>
        <Suspense>
            <div className={"pokemon-" + name}>    
                <img src={pokemonSprite}></img>
                <p>{name}</p>
            </div>
        </Suspense>
        </>
    );
};

export default PokemonList;