import '../css/Pokedex.css';
import React, { useState, useEffect } from 'react';

const url = "https://pokeapi.co/api/v2/pokemon";

function show( e ) {
    const modal = document.querySelector(".modal");
    const sprite = document.querySelector(".modal .container-pokemon__sprite");
    const data = document.querySelector(".modal .container-pokemon__data");
    const name = document.querySelector(".modal .container-pokemon__data-name");
    const weight = document.querySelector(".modal .container-pokemon__details-weight");
    const height = document.querySelector(".modal .container-pokemon__details-height");

    fetch( e.target.dataset.url )
        .then( res => res.json() )
        .then( pokemon => {
            name.innerText = pokemon.name;
            sprite.style.backgroundImage = `url("${pokemon.sprites.front_default}")`;

            pokemon.types.forEach( type => {
                const span = document.createElement("span");

                span.className = "container-pokemon__data-type";
                span.dataset.type = type.type.name;
                span.style.backgroundImage = `url("https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/${type.type.name}.svg")`;

                data.appendChild( span );
            })

            weight.innerText = `Weight: ${pokemon.weight/10} kg`;
            height.innerText = `Height: ${pokemon.height/10} m`;

            document.body.style.overflowY = "hidden";
            modal.style.display = "flex";
            modal.style.top = `${window.scrollY}px`;
            modal.style.bottom = `-${window.scrollY}px`;
        });
}

function Pokedex() {
    const [ error, setError ] = useState(null);
    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ items, setItems ] = useState([]);

    useEffect(() => {
        fetch( url )
            .then(res => res.json())
            .then(
                 (result) => {
                    let pokemons = [];
                    result.results.forEach( ( element, index, array ) => {
                        fetch( element.url )
                            .then(res => res.json())
                            .then(
                                (result) => {
                                    result.url = element.url;
                                    pokemons.push(result);
                                    if( index === array.length - 1 ) {
                                        setItems(pokemons);
                                        setIsLoaded(true);
                                    }
                                },
                                (error) => {
                                    setIsLoaded(true);
                                    setError(error);
                                }
                            )
                    });
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    if( !isLoaded ) return (
        <div className="container-loading">
            <div className="container-loading__loader"></div>
        </div>
    );

    if( error ) return <div className="container-error">{error}</div>;

    return (
        <div className="pokemons">{items.map( item => (
            <div className="container-pokemon" key={item.id}>
                <div className="container-pokemon__background"></div>
                <div className="container-pokemon__sprite" style={{backgroundImage: `url(${item.sprites.front_default})`}} onClick={show} data-url={item.url}></div>
                <div className="container-pokemon__data">
                    <span className="container-pokemon__data-name">{item.name}</span>{item.types.map( type => <span className="container-pokemon__data-type" style={{backgroundImage: `url("https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/${type.type.name}.svg")`}} data-type={type.type.name} key={type.type.name}></span> )}
                </div>
            </div>
        ))}
        </div>
    );
}

export default Pokedex;