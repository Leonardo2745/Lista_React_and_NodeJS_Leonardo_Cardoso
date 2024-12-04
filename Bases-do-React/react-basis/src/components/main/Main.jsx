/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import CoreConcept from "../coreconcept/CoreConcept.jsx";
import "./Main.css";
import MeuObjetivoComReact from "./meuObjetivoReact/MeuObjetivoComReact.jsx";

import {conceitosChaves} from "../../data.js"

const Main = () => {
  return (
    <main>
      <MeuObjetivoComReact />
      <section id="core-concepts">
        {conceitosChaves.map((conceitoChave, key) => {
          return <CoreConcept key={key} {...conceitoChave} />;
        })}
      </section>
    </main>
  );
};

export default Main;