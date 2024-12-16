'use client';
import { useState } from 'react';
import Topo from '@/componentes/Topo';
import SecaoBanner from '@/componentes/SecaoBanner';
import SecaoExperienciaTrabalho from '@/componentes/SecaoExperienciaTrabalho';
import Rodape from '@/componentes/Rodape';
import estilos from './page.module.css';

export default function Home() {

  const [temaEscuro, setTemaEscuro] = useState(false)

  function alterarTema() {
    setTemaEscuro(!temaEscuro)
  }

  return (
    <div className={estilos.container}>
      <Topo alterarTema={alterarTema} temaEscuro={temaEscuro}/>
      <main>
        <SecaoBanner temaEscuro={temaEscuro}/>
        <SecaoExperienciaTrabalho temaEscuro={temaEscuro}/>
      </main>
      <Rodape temaEscuro={temaEscuro}/>
    </div>
  );
}