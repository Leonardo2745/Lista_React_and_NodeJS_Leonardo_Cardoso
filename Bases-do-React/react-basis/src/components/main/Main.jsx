/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import CoreConcepts, { conceitosChaves } from '../coreconcept/CoreConcept.jsx';
import './Main.css';
import MeuObjetivoComReact from './meuObjetivoReact/MeuObjetivoComReact';

// Atividade:
// 1- Passe o componente 'CoreConcept' para um novo arquivo e pasta tendo como base o que foi ensinado sobre estruturação de componentes e arquivos no React.
// 2- Determine uma estilização específica para que o conteúdo em 'CoreConcept' não ultrapasse a largura de 32rem e que, epecificamente, o texto seja alinhado à esquerda e com até 28rem de largura;
// 3- Passe as props 'id', 'titulo', 'conceitos' para 'CoreConcept'
// 4- Renderize CoreConcept tendo como base o array conceitosChaves passando cada valor necessário para suas props.
// 5- Tire print de sua solução e envie o commit como entrega da atividade

const Main = () => {
    return (
      <main>
        <MeuObjetivoComReact />
        <section id='core-concepts'>
          conceitosChaves.map((conceitosChave,key) => {
            return <CoreConcepts key={key} titulo={conceitoChave.titulo}  conceitos={conceitosChaves[0].conceitos}/>
          })
        
        </section>
      </main>
    );
  };

  export default Main;