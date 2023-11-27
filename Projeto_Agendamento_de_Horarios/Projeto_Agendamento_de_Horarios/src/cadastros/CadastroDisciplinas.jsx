import React, { useState } from 'react';

const CadastroDisciplinas = () => {
  const [disciplina, setDisciplina] = useState({
    nome: '',
    cargaHoraria: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDisciplina({ ...disciplina, [name]: value });
  };

  const handleCadastro = () => {
    // Aqui você pode adicionar a lógica de validação dos dados antes de realizar o cadastro
    if (disciplina.nome && disciplina.cargaHoraria > 0) {
      // Aqui seria o lugar para chamar uma função de cadastro ou API para salvar a disciplina
      console.log('Disciplina cadastrada:', disciplina);
      // Limpar o formulário após o cadastro (opcional)
      setDisciplina({ nome: '', cargaHoraria: 0 });
    } else {
      console.log('Preencha os campos corretamente.');
    }
  };

  return (
    <div>
      <h2>Cadastro de Disciplinas</h2>
      <form>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={disciplina.nome}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Carga Horária:
          <input
            type="number"
            name="cargaHoraria"
            value={disciplina.cargaHoraria}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleCadastro}>
          Cadastrar Disciplina
        </button>
      </form>
    </div>
  );
};

export default CadastroDisciplinas;
