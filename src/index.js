import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Header from './components/Header';
import Container from './components/Container';
import Button from './components/Button';
import Pokedex from './components/Pokedex';
import Modal from './components/Modal';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Container />
    <Modal />
  </React.StrictMode>,
  document.getElementById("root")
);

ReactDOM.render(
  <React.StrictMode>
    <Pokedex />
    <Button />
  </React.StrictMode>,
  document.querySelector(".container")
);

reportWebVitals();
