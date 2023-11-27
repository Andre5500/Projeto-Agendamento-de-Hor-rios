import './styles.css';
import React from 'react';
import CadastroProfessores from './cadastros/CadastroProfessores';
import CadastroTurmas from './cadastros/CadastroTurmas';
import CadastroDisciplinas from './cadastros/CadastroDisciplinas';

function App() {
  return (
    <div class="campos">
      <h1>Tela Principal</h1>
      <CadastroProfessores />
      <CadastroTurmas />
      <CadastroDisciplinas />
    </div>
  );
}

export default App;
