import estilos from './Rodape.module.css';
import Image from 'next/image';
import Logo from '../../../public/logo.png';
import Link from "next/link";
import iconeLinkedin from '../../../public/linkedin.png';

export default function Rodape(props) {

  return(
    <footer className={props.temaEscuro ? estilos.rodape_modo_escuro : estilos.rodape_modo_claro}>
      <div className={estilos.container_informacoes}>
        <div>
          <Image src={Logo} alt="logomarca"/>
          <p className={estilos.paragrafo}>
            Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
            ferramentas e tecnologias personalizadas.
          </p>
        </div>
        <div>
          <Link href="https://www.linkedin.com/in/andretnmiranda/" target="_blank"><Image src={iconeLinkedin} alt="linkedin"/></Link>
          </div>
      </div>
      <div className={estilos.copyright}>
        <p>Copyright 2024 &copy; <Link href="https://www.linkedin.com/in/andretnmiranda/" target="_blank">André Tavares</Link></p>
      </div>
    </footer>
  )
}