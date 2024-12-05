
/* eslint-disable no-unused-vars */

import "./Header.css";
import messiCareca from "../../assets/atividade/373d89e6f68b4a4c6b8bf9df2e2b783c.png";
const randomWords = () => {
  const words = ["conceitos", "fundamentos", "definições"];
  const indice = Math.floor(Math.random() * words.length);
  return words[indice];
};

const Header = () => {
  const imgSrc = messiCareca;

  return (
    <header>
      {/* {imgSrc ? (<img src={imgSrc} alt="" />): (<p>Imagem não encontrada</p>)} */}
      {imgSrc && <img src={imgSrc}/>}
      <h1>Fundamentos do React</h1>
      <p>Iremos aplicar aqui {randomWords()} práticos e resumidos do React.</p>
    </header>
  );
};

export default Header;
