/* eslint-disable no-unused-vars */
import "./MeuObjetivoComReact.css";
const MeuObjetivoComReact = () => {
  const objetivos = [
    "Aprimorar meus conhecimentos",
    "Melhorar meus projetos",
    "Desenvolver novas ferramentas",
  ];

  return (
    <>
      <h2>Meus Objetivos com React</h2>
      <div className="goal-card">
        <ul>
          {objetivos.map((objetivo, index) => (
            <li key={index}>{objetivo}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MeuObjetivoComReact;