import React from 'react';

import Form from '../Components/Form';

import './Styles/AddRecipes.css';

export default function Home({ handleSend }) {
  return (
    <div className="add-recipe-container">
      <h1 className="title">Adicionar Receita</h1>
      <Form />
      <button className="send-button" onClick={handleSend}>Enviar Receita</button>
    </div>
  );
}

// REGRAS DE MANIPULAÇÃO DOS DADOS
// 1. Quando o usuario resetar a pagina apagando cache (ctrl + shift + r), retornar as receitas principais pre-definidas (FEITO)
// 2. Quando o usuario adicionar uma receita customizada, atualizar o LocalStorage (FEITO)
// 3. Quando o usuario remover uma receita customizada, atualizar o LocalStorage (FEITO)
// 4. O usuario podera remover as receitas pre-definidas, podendo esvaziar o LocalStorage de receitas durante a sessao com cache. Porem, se ele resetar com a remocao do cache, retornar ao item 1 (FEITO)