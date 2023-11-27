import React, { useState } from 'react';

const CadastroTurmas = () => {
  const [turma, setTurma] = useState({
    nome: '',
    professor: '',
    disciplina: '',
    duracaoDias: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTurma({ ...turma, [name]: value });
  };

  const handleCadastro = () => {
    // Aqui você pode adicionar a lógica de validação dos dados antes de realizar o cadastro
    if (turma.nome && turma.professor && turma.disciplina && turma.duracaoDias > 0) {
      // Aqui seria o lugar para chamar uma função de cadastro ou API para salvar a turma
      console.log('Turma cadastrada:', turma);
      // Limpar o formulário após o cadastro (opcional)
      setTurma({
        nome: '',
        professor: '',
        disciplina: '',
        duracaoDias: 0,
      });
    } else {
      console.log('Preencha os campos corretamente.');
    }
  };

  return (
    <div>
      <h2>Cadastro de Turmas</h2>
      <form>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={turma.nome}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Professor:
          <input
            type="text"
            name="professor"
            value={turma.professor}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Disciplina:
          <input
            type="text"
            name="disciplina"
            value={turma.disciplina}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Duração em Dias:
          <input
            type="number"
            name="duracaoDias"
            value={turma.duracaoDias}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleCadastro}>
          Cadastrar Turma
        </button>
      </form>
    </div>
  );
};

export default CadastroTurmas;
