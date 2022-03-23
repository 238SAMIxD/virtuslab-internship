import '../css/Header.css';
import moon from '../img/moon.png';
import sun from '../img/sun.png';

function themeChange( e ) {
  const root = document.querySelector("#root");

  e.target.style.backgroundImage = root.classList.contains("light") ? `url("${sun}")` : `url("${moon}")`;
  root.classList.contains("light") ? root.classList.remove("light") : root.classList.add("light");
}

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Pokedex App</h1>
      <h2 className="header-subtitle"><a className="header-subtitle__link" href="https://pokeapi.co/" target="blank">Pokémon</a> API communication</h2>
      <span className="header-colorMode" onClick={themeChange}></span>
    </header>
  );
}

export default Header;
