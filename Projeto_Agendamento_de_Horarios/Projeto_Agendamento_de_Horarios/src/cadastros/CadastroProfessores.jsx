// CadastroProfessores.js
import React, { useState } from 'react';

const CadastroProfessores = () => {
  const [professor, setProfessor] = useState({
    nome: '',
    inicioAulas: '',
    fimAulas: '',
    diasAulas: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfessor({ ...professor, [name]: value });
  };

  const handleCadastro = () => {
    // Aqui você pode adicionar a lógica de validação dos dados antes de realizar o cadastro
    if (professor.nome && professor.inicioAulas && professor.fimAulas && professor.diasAulas > 0) {
      // Aqui seria o lugar para chamar uma função de cadastro ou API para salvar o professor
      console.log('Professor cadastrado:', professor);
      // Limpar o formulário após o cadastro (opcional)
      setProfessor({
        nome: '',
        inicioAulas: '',
        fimAulas: '',
        diasAulas: 0,
      });
    } else {
      console.log('Preencha os campos corretamente.');
    }
  };

  return (
    <div>
      <h2>Cadastro de Professores</h2>
      <form>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={professor.nome}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Início das Aulas:
          <input
            type="text"
            name="inicioAulas"
            value={professor.inicioAulas}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Fim das Aulas:
          <input
            type="text"
            name="fimAulas"
            value={professor.fimAulas}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Dias de Aulas:
          <input
            type="number"
            name="diasAulas"
            value={professor.diasAulas}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleCadastro}>
          Cadastrar Professor
        </button>
      </form>
    </div>
  );
};

export default CadastroProfessores;
