import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Importando os Componentes
import Header from './Components/Header';
import RecipeDetails from './Pages/RecipeDetails';
import Recipes from './Pages/Recipes';
import Home from './Pages/Home';

// Importando o SourceFile
import srcFile from './Assets/Recipes.json';

// Importando as mensagens de erro
import Error from './Components/Error';
import Success from './Components/Success';

export default function RoutesApp() {
    // Primeiro Hook - useState (armazenar em um objeto os dados do formulario apos o envio)
    const [CustomRecipe, setCustomRecipe] = useState({
        id: '',
        titulo: '',
        ingredientes: '',
        modoPreparo: ''
    });

    // Segundo Hook - useState (armazenar o status de sucesso ou erro apos enviar o formulario)
    const [message, setMessage] = useState({type: '', text: ''});


    // Terceiro Hook - useState (armazenar em um array os dados do LocalStorage)
    const [Data, setData] = useState([]);

    // Quarto Hook - useEffect (pegar dados do LocalStorage na primeira inicialização da página)
    useEffect(() => {
        const recipesStorage = JSON.parse(localStorage.getItem("recipes"));

        if (recipesStorage != null) {
            setData(recipesStorage);
        } else {
            setData(srcFile);
        }
    }, []);

    // Quinto Hook - useEffect (atualizar o LocalStorage toda vez que o array de dados é alterado)
    useEffect(() => {
        if (Data.length > 0) {
            localStorage.setItem("recipes", JSON.stringify(Data));
        }
    }, [Data]);
    
    // Sexto Hook - useEffect (atualizar o array de dados > localstorage toda vez que o array de receitas customizadas é alterado)
    useEffect(() => {
        if (CustomRecipe.id !== '') {
            setData([...Data, CustomRecipe]); 
        }
    }, [CustomRecipe]);

    // Função para inserir itens no array de dados > localStorage
    const inserirItemNaLista = () => {
        const recipe_name = document.getElementById("name-input").value;
        const ingredient_raw = document.getElementById("ingredient-input").value.replaceAll(", ", ",").split(",");  // ReplaceAll altera todas as ocorrencias que tem ", " para "," e depois o Split desagrega os elementos por virgula e cria um array a partir deles
        const how_to = document.getElementById("how-to-input").value;
        
        const ingredient = ingredient_raw.filter(item => item.length !== 0); // Filter, função muito útil para formatar um array
        
        if (!doesDataHaveRecipe(recipe_name)) {
            setCustomRecipe({ // Tentativa de adivinhar o proximo id do array de dados e passa-lo para a chave id da receita customizada
                id: (Data.length + 1),
                titulo: recipe_name,
                ingredientes: ingredient,
                modoPreparo: how_to
            });
            setMessage({type: 'success', text: 'sucesso'});
            setTimeout(() => {
                setMessage({type: '', text: ''});
            }, 5000);
        } else {
            setMessage({type: 'error', text: 'erro'});
            setTimeout(() => {
                setMessage({type: '', text: ''});
            }, 5000);
        }

        document.getElementById("recipe-form").reset(); // Limpando o formulario
    }

    // Função para retornar um booleano para a condição Nome da Receita existe no LocalStorage
    function doesDataHaveRecipe(recipe_name) {
        return Data.some(item => item.titulo === recipe_name);
    }

    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home handleSend={inserirItemNaLista} />} />
                <Route path='/receitas' element={<Recipes data={Data} />} />
                <Route path='/receita/:id' element={<RecipeDetails />} />
            </Routes>
            {message.text && (
                message.type === 'success'?
                <Success /> :
                <Error />
            )}
        </BrowserRouter>
    );
}