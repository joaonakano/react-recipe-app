import React from 'react';
import './Styles/RecipeDetails.css';
import { useLocation } from 'react-router-dom';

export default function RecipeDetails() {
    const location = useLocation();
    const { recipe } = location.state;
    const ingredientsArray = recipe.ingredientes;
    
    const createAnUniqueKey = (array, item) => {   // Tive que usar (+ 10000) porque o metodo .map() requer chaves unicas para cada elemento
        let initialIndex = array.indexOf(item);
        return initialIndex + 10000;
    }

    return(
        <div>
            <h1>{recipe.titulo}</h1>
            <h2>Ingredientes</h2>
            <ol className="recipe-ingredients-list">
                {ingredientsArray.map(ingredient => (
                    <li className="ingredient-item" key={() => {createAnUniqueKey(ingredientsArray, ingredient)}} >{ingredient}</li>   
                ))}
            </ol>
            <h2>Modo de Preparo</h2>
            <p>{recipe.modoPreparo}</p>
        </div>
    );
}

/*
    Anotações que achei relevantes
    1. O componente <Link /> possui um state que armazena a receita selecionada pelo usuario
    2. () => () ao invés de () => {}, poupa-nos de utilizar o return novamente
*/