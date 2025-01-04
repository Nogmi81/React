import Image from 'next/image';
import estilos from "./CampoDeBusca.module.css";
import Lupa from '/public/lupa.png';

export default function CampoDeBusca({ textoBuscaDigitado, handleBusca }) {
  // console.log("Componente campo busca: " + textoBuscaDigitado + handleBusca);
  return (
    <div className={estilos.container}>
      <Image className={estilos.icone} src={Lupa} alt="icone" />
      <div className={estilos.campoBusca}>
        <input
          type="text"
          value={textoBuscaDigitado}
          onChange={(event) => handleBusca(event.target.value)}
          placeholder="Pesquise um prato do cardápio"
          size="50"
        />
      </div>
    </div>
  );
}
