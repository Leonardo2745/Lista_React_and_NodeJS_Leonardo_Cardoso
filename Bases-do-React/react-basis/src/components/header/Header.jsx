/* eslint-disable no-unused-vars */

import "./Header.css";
import bolsoGrilo from "../../assets/atividade/393eebc0-8515-4a6b-b21b-8c096eee5259.webp";
const randomWords = () => {
  const words = ["conceitos", "fundamentos", "definições"];
  const indice = Math.floor(Math.random() * words.length);
  return words[indice];
};

const Header = () => {
  const imgSrc = bolsoGrilo;

  return (
    <header>
      {imgSrc && <img src={imgSrc}/>}
      <h1>Fundamentos do React</h1>
      <p>Iremos aplicar aqui {randomWords()} práticos e resumidos do React.</p>
    </header>
  );
};

export default Header;