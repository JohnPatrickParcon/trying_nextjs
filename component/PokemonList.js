import { Suspense } from "react";
import { showingPokemon } from "./QueryComponent";
import styles from "../src/styles/pokemon.module.css"
import { Card } from "react-bootstrap";

const PokemonList = ({pokemon: {name, url}}) => {
    const pokemonSprite = showingPokemon(url);
    return(
        <>
        <Suspense fallback={<p>Please wait...</p>}>
            <div className={styles.pokemonCard}>    
            <Card>
                <Card.Body>
                    <Card.Img variant="top" src={pokemonSprite}></Card.Img>
                    <Card.Text>
                        {name}
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </Suspense>
        </>
    );
};

export default PokemonList;