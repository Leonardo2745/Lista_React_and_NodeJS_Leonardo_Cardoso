
import evento_e_state from './assets/atividade/event-usestate.webp';
import props from './assets/atividade/props-react.webp';
import component from './assets/atividade/react-component.webp'

export const conceitosChaves = [
    {
      id: 1,
      titulo: "Componentes",
      imgSrc: component, 
      conceitos: [
        "Componentes são pequenos blocos de código que podem ser reutilizados em vários lugares da interface.",
        "Os componentes são imutáveis, ou seja, não podem ser alterados diretamente.",
        "Os componentes podem ser passados props para outros componentes.",
        "Os componentes podem ser estilizados usando CSS ou CSS-in-JS.",
      ],
    },
    {
      id: 2,
      titulo: "Estados e eventos",
      imgSrc: evento_e_state,
      conceitos: [
        "Os estados são dados que são mantidos pelo componente.",
        "Os estados são imutáveis, ou seja, não podem ser alterados diretamente.",
        "Os estados são usados para controlar o estado do componente.",
        "Os estados são usados para gerenciar o estado do componente, além de lidar com eventos.",
      ],
    },
    {
      id: 3,
      titulo: "Props",
      imgSrc: props,
      conceitos: [
        "Props são dados que são passados de um componente pai para um componente filho.",
        "Os props são imutáveis, ou seja, não podem ser alterados diretamente.",
        "Os props são usados para passar dados entre componentes.",
        "Os props são usados para passar dados entre componentes, além de lidar com eventos.",
      ],
    },
  ];

  