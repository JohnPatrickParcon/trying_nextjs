import { Suspense, useEffect, useState } from "react";

const PokemonList = ({pokemon: {name, url}}) => {
    
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {getPokemonData()}, []);

    const getPokemonData = async () => {
        const req = await fetch(url);
        const res = await req.json();
        setPokemonData(res);
    }

    const {sprites: {front_default} = "placeholder"} = pokemonData;
    return(
        <>
        <Suspense>
            <div style={{border: "1px dotted red"}}>    
                <img src={front_default}></img>
                <p>{name}</p>
            </div>
        </Suspense>
        </>
    );
};

export default PokemonList;