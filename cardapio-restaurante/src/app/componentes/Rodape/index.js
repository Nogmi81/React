import estilos from './Rodape.module.css';
import Link from "next/link";

export default function Rodape(props) {

  return (
    <footer className={estilos.rodape}>
      <div className={estilos.copyright}>
        <p>Copyright 2024 &copy; Desenvolvido por <Link href="https://www.linkedin.com/in/andretnmiranda/" target="_blank">André Tavares</Link></p>
      </div>
    </footer>
  )
}
