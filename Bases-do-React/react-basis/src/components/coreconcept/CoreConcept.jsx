/* eslint-disable react/prop-types */
import "./CoreConcept.css";
//import messiCareca from "../../assets/ab67706c0000da84302872ea0b7d69e6b7c7c40d.jfif";
const CoreConcept = ({ id, titulo, conceitos, imgSrc, action }) => {
  //const imgSrc = messiCareca;
  return (

    

    <div id={`concept-${id}`} className="concepts">
      <h2>{titulo}</h2>
      {imgSrc && <img src={imgSrc} className="imgConcept"/>}
      <ul id="core-concept-list" onClick={action}>
        {conceitos.map((item, key) => {
          return <li key={key} >{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default CoreConcept;