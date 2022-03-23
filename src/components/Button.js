import '../css/Button.css';

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

const url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=";

function more() {
    const offset = document.querySelectorAll(".container-pokemon").length;
    const pokemons = document.querySelector(".pokemons");
    const loading = document.createElement("div");
    const loader = document.createElement("div");

    loading.className = "container-loading";
    loader.className = "container-loading__loader";

    loading.appendChild( loader );

    document.querySelector(".container").insertBefore( loading, document.querySelector(".container-button") );
    
    fetch( url + offset )
        .then(res => res.json())
        .then(
            (result) => {
            result.results.forEach( element => {
                fetch( element.url )
                    .then(res => res.json())
                    .then(
                        (result) => {
                            const pokemon = document.createElement("div");
                            const backgound = document.createElement("div");
                            const sprite = document.createElement("div");
                            const data = document.createElement("div");
                            const name = document.createElement("span");

                            pokemon.className = "container-pokemon";
                            backgound.className = "container-pokemon__background";
                            sprite.className = "container-pokemon__sprite";
                            sprite.style.backgroundImage = `url(${result.sprites.front_default})`;
                            sprite.addEventListener( "click", show );
                            sprite.dataset.url = element.url;
                            data.className = "container-pokemon__data";
                            name.className = "container-pokemon__data-name";
                            name.innerText = result.name;

                            data.appendChild( name );

                            result.types.forEach( type => {
                                const span = document.createElement("span");

                                span.className = "container-pokemon__data-type";
                                span.style.backgroundImage = `url("https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/${type.type.name}.svg")`;
                                span.dataset.type = type.type.name;

                                data.appendChild( span );
                            });

                            pokemon.append( backgound, sprite, data );
                            pokemons.appendChild( pokemon );

                            if( document.querySelector(".container-loading") ) document.querySelector(".container-loading").remove();
                        },
                        (error) => {
                            alert(error)
                        }
                    )
            });
        },
        (error) => {
            alert(error)
        }
    )
}

function Button() {
    return <div className="container-button" onClick={more}>Load More</div>;
}

export default Button;