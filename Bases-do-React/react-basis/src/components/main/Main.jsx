import './Main.css';
import MeuObjetivoComReact from './meuObjetivoReact/MeuObjetivoComReact';

const CoreConcepts = () =>{
    return (
        <>
        <h2>Conceitos chaves</h2>
        <ul>
            <li>React é uma biblioteca JavaScript para construir interfaces de usuário.</li>
        </ul>
        </>
    )
}

const Main = () => {
    return (
      <main>
        <MeuObjetivoComReact />
        <section></section>
      </main>
    );
  };

  export default Main;