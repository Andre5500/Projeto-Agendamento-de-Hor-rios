// App.js

import React, { useState } from 'react';
import CadastroProfessores from './CadastroProfessores';
import CadastroTurmas from './CadastroTurmas';
import CadastroDisciplinas from './CadastroDisciplinas';

function App() {
  return (
    <div>
      <CadastroProfessores />
      <CadastroTurmas />
      <CadastroDisciplinas />
    </div>
  );
}

export default App;