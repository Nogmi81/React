import estilos from './SecaoBanner.module.css';

export default function SecaoBanner(props) {
  return (
    <section className={estilos.secao_banner}>
      <div className={props.temaEscuro ? estilos.imagemDeFundo_modo_escuro : estilos.imagemDeFundo_modo_claro}></div>
      <div className={estilos.texto_secaoBanner}>
        <p>BRANDING / UI / UX / TECNOLOGIA</p>
        <h2>Agência de Branding</h2>
        <span>e design digital</span>
      </div>
    </section>
  )
}