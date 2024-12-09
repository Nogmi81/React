import Image from "next/image";
import estilos from './CardDepoimento.module.css';

export default function CardDepoimento(props) {
  return(
    <div className={estilos.card_depoimento}>
      <Image className={estilos.img_aparelho}
        src={props.imagem}
        alt={props.nome}
        title={props.nome}
      />
      <h3>{props.nome}</h3>
      <p>{props.descricao}</p>
    </div>
  )
}