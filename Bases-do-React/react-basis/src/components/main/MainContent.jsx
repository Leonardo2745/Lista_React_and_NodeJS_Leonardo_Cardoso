/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import ObjetivoComReact from "../main/objetivocomreact/ObjetivoComReact.jsx";
import { conceitosChaves } from "../../data.js"
import CoreSessionConcept from "../core-session-contents/CoreSessionContent.jsx";
import CoreConcept from "../coreconcept/CoreConcept.jsx"; 

const MainContent = () => {


  return (
  <>
  <main>
    <ObjetivoComReact />
    {conceitosChaves && conceitosChaves.map((linha, key) => {
      return <CoreSessionConcept key={key}  dados={linha} />
    })} 
  </main>
</>
  )}
    
export default MainContent;