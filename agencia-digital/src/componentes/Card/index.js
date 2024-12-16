import estilos from './Card.module.css';

export default function Card(props) {
  return(
    <div className={props.temaEscuro ? estilos.card_modo_escuro : estilos.card_modo_claro}>
      <div className={estilos.container}>
        <span>{props.data}</span>
        <h3>{props.titulo}</h3>
        <small>{props.empresa}</small>
      </div>
      <p>{props.paragrafo}</p>
    </div>
  )
}