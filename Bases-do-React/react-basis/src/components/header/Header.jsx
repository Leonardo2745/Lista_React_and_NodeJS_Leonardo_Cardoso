import Image from '../../assets/ab67706c0000da84302872ea0b7d69e6b7c7c40d.jfif' 
import './Header.css'

const randomWords = () =>{
  const words = ['conceitos','fundamentos', 'definições']
  const indice = Math.floor(Math.random() * words.length)
  return words[indice]
}



const Header = () => {
    return (
      <header>
        <img src={Image} alt='' />
        <h1>Fundamentos do React</h1>
        <p>Iremos aplicar aqui {randomWords()} práticos e resumidos do React.</p>
      </header>
    );
  };
  
export default Header;