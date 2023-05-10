import { showingPokemon } from "./QueryComponent";
import styles from "../src/styles/pokemon.module.css"
import { Card } from "react-bootstrap";

const PokemonList = ({pokemon: {name, url}}) => {
    const pokemonSprite = showingPokemon(url);
    return(
        <>
        <div className={styles.pokemonCard}>    
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src={pokemonSprite}></Card.Img>
                <Card.Text>
                    {name}
                </Card.Text>
            </Card>
        </div>
        </>
    );
};

export default PokemonList;