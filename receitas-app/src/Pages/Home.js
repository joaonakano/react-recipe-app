import React, { useState, useEffect } from 'react';

import Form from '../Components/Form';
import srcFile from '../Assets/Recipes.json';

export default function Home() {
  const [CustomRecipe, setCustomRecipe] = useState({
    id: 'tijolo',
    titulo: 'nokia',
    ingredientes: 'lmao',
    modoPreparo: 'teste'
  });

  const [Data, setData] = useState([]);

  useEffect(() => {
    const recipesStorage = JSON.parse(localStorage.getItem("recipes"));

    if (recipesStorage != null) {
      setData(recipesStorage);
    } else {
      setData(srcFile);
    }
  }, []);

  useEffect(() => {
    if (Data.length > 0) {
      localStorage.setItem("recipes", JSON.stringify(Data));
    }
  }, [Data]);

  const inserirItemNaLista = () => {
    setData([...Data, CustomRecipe]);
  }

  return(
    <div>
      <Form />
      <button onClick={inserirItemNaLista}>Enviar Receita</button>
    </div>
  );
}

// REGRAS DE MANIPULAÇÃO DOS DADOS
// 1. Quando o usuario resetar a pagina apagando cache (ctrl + shift + r), retornar as receitas principais pre-definidas
// 2. Quando o usuario adicionar uma receita customizada, atualizar o LocalStorage
// 3. Quando o usuario remover uma receita customizada, atualizar o LocalStorage
// 4. O usuario podera remover as receitas pre-definidas, podendo esvaziar o LocalStorage de receitas durante a sessao com cache. Porem, se ele resetar com a remocao do cache, retornar ao item 1